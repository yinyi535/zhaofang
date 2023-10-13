var an = document.querySelectorAll('.an')
var kz = document.querySelectorAll('.kz')
var zk = document.querySelectorAll('.zk')
var fs = document.querySelector('.fs')
var btn = document.querySelector('button')
var arr = ['立即登录', '验证并登录']

for (var i = 0; i < an.length; i++) {
    an[i].setAttribute("index", i)
    an[i].onclick = function () {
        var ind = this.getAttribute('index')
        for (var j = 0; j < an.length; j++) {
            an[j].style.borderBottom = '0.5rem solid rgb(193, 193, 193)'
            an[ind].style.borderBottom = '0.5rem solid rgb(255, 138, 0)'
            kz[j].style.display = 'none'
            zk[j].style.display = 'none'
            kz[ind].style.display = 'block'
            zk[ind].style.display = 'block'
            btn.innerHTML = arr[ind]
        }
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
btn.onclick = function (e) {
    var cok = document.cookie.split(';')
    var pnumcok = cok[0].split('=')
    var passcok = cok[1].split('=')
    if ((kz[0].children[0].value == pnumcok[1] && zk[0].children[0].value == passcok[1]) || (kz[1].children[0].value == pnumcok[1] && zk[1].children[0].value == '021028')) {
        form.submit();
    } else {
        e.returnValue = false;
        alert('手机号或密码不正确')
    }
}