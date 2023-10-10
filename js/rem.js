function setrem() {
    var uiw = 375
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
    var html = document.querySelector('html')
    html.style.fontSize = (clientWidth / uiw) * 10 + 'px';
}
window.onload = setrem
window.onresize = setrem