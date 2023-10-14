var pnum = document.querySelector('.box').children[1].children[0]
var fs = document.querySelector('.box').children[1].children[1]
var yzm = document.querySelector('.box').children[2].children[0]
var pass = document.querySelector('.box').children[3].children[0]
var btn = document.querySelector('button')
var form = document.querySelector('form')
//手机号
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
    var num = 60;
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
//验证码
yzm.onclick = function () {
    alert('验证码是021028哇')
}
yzm.onblur = function () {
    if (yzm.value == '021028') {
        return true
    } else {
        return false
    }
}

//密码
pass.onblur = function () {
    reg = /^[A-Za-z0-9]+$/
    if (reg.test(pass.value) == true) {
        return true;
    } else {
        return false;
    }
}
//点击
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
            alert('验证码是021028哇')
        } else {
            alert('密码格式不正确')
        }
    }
}