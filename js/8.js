var cok = document.cookie.split(';')
var pnumcok = cok[0].split('=')
var p = document.querySelector('.p')
p.innerHTML = `欢迎你，${pnumcok[1]}`