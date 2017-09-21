document.addEventListener('DOMContentLoaded',function(){
    var toCode = document.getElementById('toCode');
    var myCode = document.getElementById('myCode');
    var email = document.getElementById('email');
    var email2 = document.getElementById('email2');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    var confirm = document.getElementById('confirm');
    var check1 = document.getElementById('check1');
    var check2 = document.getElementById('check2');
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');

    var username = document.querySelector('#username');
    var tips = document.querySelector('.tips');
    username.onblur = function(){
        var _username = username.value;
        if(_username==''){
            tips.className = 'active';
            tips.innerHTML = '用户名不能为空';
            return;
        }
        if(_username.length<6){
            tips.className = 'active';
            tips.innerHTML = '用户名不能少于6位';
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.responseText == 'no'){
                    tips.className = 'active';
                    tips.innerHTML = '该用户名已被占用';
                }else if(xhr.responseText == 'yes'){
                    tips.className = 'error';
                    tips.innerHTML = '该用户名可用';
                }
            }
        }
        xhr.open('get','../api/wly.php?username='+_username,true);
        xhr.send();
    }
    function codeNum(){
        var num = parseInt(Math.random()*10000);
        if(num<10){
            num = '000'+num;
        }else if(num<100){
            num = '00' +num;
        }else if(num<1000){
            num = '0' +num;
        }
        toCode.value=num;
    }
    codeNum();
    function checkCode(){
        var _myCode = myCode.value;
        if(toCode.value!==_myCode){
            alert("验证码输入有误")
        }
        else{
            alert('注册成功');
        }
    }
    function notNull1(){
        var _myCode = myCode.value;
        var _username = username.value;
        var _email = email.value;
        var _password = password.value;
        if(_email.length==0 || _password.length==0 || _myCode.length==0 || _username.length<6){
            alert('请完整输入您的信息！');
        }
        else if(_myCode.length!==4 ){
            alert('输入验证码不为四位，请重新输入');
        }
        else{
            checkCode();
        }
    }
    function fuxuan(){
        var _check1 = check1.value;
        var _check2 = check2.value;
        if(!_check1.checked){
            alert('请完成选项');
        }else if(!_check2.checked){
            alert('请完成选项');
        }
        else{
            alert('完成注册');
        }
    }
    function notNull2(){
        var _email2 = email2.value;
        var _password2 = password2.value;
        var _confirm = confirm.value;
        var _check1 = check1.value;
        var _check2 = check2.value;
        if(_email2.length==0 || _password2.length==0 || _confirm.length==0){
            alert('请完整输入您的信息！');
        }
        else if(_password2!==_confirm){
            alert('两次密码输入不一致！');
        }
        else if(!check1.checked){
            fuxuan();
        }
        else if(!check2.checked){
            fuxuan();
        }
        else{
            alert('注册成功');
        }
    }
     btn1.onclick = notNull1;     
     btn2.onclick = notNull2;

     

})
    
    

