var an = document.querySelectorAll('.an')
var kz = document.querySelectorAll('.kz')
var zk = document.querySelectorAll('.zk')
var fs = document.querySelector('.fs')
console.log(an.length);
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