var pnum = document.querySelector('.box').children[1].children[0]
var fs = document.querySelector('.box').children[1].children[1]
var yzm = document.querySelector('.box').children[2].children[0]
var pass = document.querySelector('.box').children[3].children[0]
var btn = document.querySelector('button')
var form = document.querySelector('form')
pnum.onblur = function () {
    reg = /^1[34578][0-9]{9}$/;
    if (reg.test(pnum.value) == false) {
        return false
    } else {
        return true
    }
}
var timer
fs.onclick = function () {
    var num = 5;
    clearInterval(timer);
    timer = setInterval(function () {
        fs.innerHTML = num;
        num--;
        if (num == -1) {
            fs.innerHTML = '重新获取验证码';
            clearInterval(timer);
        }
    }, 1000);
}
yzm.onblur = function () {
    if (reg.value == '021028') {
        return true
    } else {
        return false
    }
}
pass.onblur = function () {
    reg = /^[A-Za-z0-9]+$/
    if (reg.test(pass.value) == true) {
        return true;
    } else {
        return false;
    }
}
btn.onclick = function (e) {
    if (pnum.onblur() && yzm.onblur() && pass.onblur()) {
        addCookie('pnum', pnum.value)
        addCookie('password', pass.value)
        form.submit();
    } else {
        e.returnValue = false;
        if (pnum.onblur() == false) {
            alert(" alert('手机号格式不正确')")
        } else if (yzm.onblur() == false) {
            alert('验证码不正确')
        } else if (pass.onblur() == false) {
            alert('密码格式不正确')
        }
    }
}