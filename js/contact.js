
  
$('#btn-contact').click(function () { 
    //alert('hello');
    var get_name=document.getElementById('name');
    var get_phone=document.getElementById('phone');
    var get_mail=document.getElementById('mail');
    var get_content=document.getElementById('content');

    var phone_demo=get_phone.value;
    
    var check_phone=/^[0][9|3|8][0-9]{8}$/;
    
    regex_phone=check_phone.test(get_phone.value);
   
    //name
    if (get_name.value==''){
        $('#name').addClass('red-border');
        $('#name_error').removeClass('hidden');
        return false;
    }
    else{
        $('#name').removeClass('red-border');
        $('#name_error').addClass('hidden');
    };
    //phone
    if (get_phone.value==''){
        $('#phone').addClass('red-border');
        $('#phone_error').removeClass('hidden');
        // alert('nhập sđt');
        return false;
    } else if (!regex_phone){
        // alert('nhập phone đúng định dạng')
        $('#phone').addClass('red-border');
        $('#phone_error_2').removeClass('hidden');
        $('#phone_error').addClass('hidden');

        return false;
    } else{
        $('#phone').removeClass('red-border');
        $('#phone_error').addClass('hidden');
    };
    //mail
    if (get_mail.value==''){
        $('#mail').addClass('red-border');
        $('#mail_error').removeClass('hidden');
        return false;
    }
    else{
        $('#mail').removeClass('red-border');
        $('#mail_error').addClass('hidden');
    };
    //content
    if (get_content.value==''){
        $('#content').addClass('red-border');
        $('#content_error').removeClass('hidden');
        return false;
    }
    else{
        $('#content').removeClass('red-border');
        $('#content_error').addClass('hidden');
        alert('Chúng tôi sẽ liên hệ với bạn theo số điện thoại ' + phone_demo);
    };
    
});

