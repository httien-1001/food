AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

setInterval(addItem, 100);

var itemsCounter = 1;
var container = document.getElementById('aos-demo');

function addItem () {
  // alert('hello');
  if (itemsCounter > 8) return;
  var item = document.getElementById('aos-demo');
  // item.classList.add('aos-item');
  // item.setAttribute('data-aos', 'fade-up');
  // item.innerHTML = '<div class="aos-item__inner"><h3>' + itemsCounter + '</h3></div>';
  // container.appendChild(item);
  itemsCounter++;
};

$(document).ready(function(){
  $('.banner_slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    // centerMode: true,
    // centerMargin: '50px',
    // variableWidth: true,
    autoplay: true,
    // fade: true,
    // autoplaySpeed: 500,
  });
});
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  
};
var app=angular.module('DemoApp', []);
app.controller('MyCtrl', function($scope,$http){
  $http.get("json/data.json").then(function(response) {
    $scope.dataset = response.data;
  });
  $scope.info = function (data){
    // alert("Hello");
    // $('#modal_id').modal('');
    $scope.detail = data;
    console.log(data);
  }
  $scope.data=[
    {"id":1,"name":"admin","pass":"123"},
  ];
  $scope.send= function(cName,cPass){
    for (let index = 0; index < $scope.data.length; index++) {
      // const element = array[index];
      if(cName==$scope.data[index].name && cPass== $scope.data[index].pass){
        $scope.info=$scope.data[index];
        console.log($scope.info);
        return true;
      } else {
        
        $scope.info = null;
        // alert('Invalid Input');
        console.log($scope.info);
        alert_error();
        return false;

      }
      
    }
  };
  function alert_error() {
    alert('Thong tin dang nhap khong hop le');
    
  };
});

