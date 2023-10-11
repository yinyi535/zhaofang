function setrem() {
    var uiw = 375
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    clientWidth = clientWidth > 200 ? clientWidth : 200;
    var html = document.querySelector('html')
    html.style.fontSize = (clientWidth / uiw) * 10 + 'px';
}
window.onload = setrem
window.onresize = setrem