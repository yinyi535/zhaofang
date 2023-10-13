var list = document.querySelector('.list').children;
var list_yc = document.documentElement.getElementsByClassName('list_yc')
var body_ = document.querySelector('body');
body_.onclick = function () {
    for (i = 0; i < list_yc.length; i++) {
        list_yc[i].style.display = 'none'
        list[i].className = ''
        list[i].firstElementChild.className = ''
    }
}
for (i = 0; i < list_yc.length; i++) {
    list_yc[i].onclick = function (e) {
        e = e || window.event;
        window.e ? window.e.cancelbubble = true : e.stopPropagation();
    }
}
for (i = 0; i < list.length; i++) {
    list[i].setAttribute('index', i);
    list[i].onclick = function (e) {
        e = e || window.event;
        window.e ? window.e.cancelbubble = true : e.stopPropagation();
        var ind = this.getAttribute('index')
        for (k = 0; k < list.length; k++) {
            list_yc[k].style.display = 'none';
            list[k].className = '';
            list[k].firstElementChild.className = ''
        }
        list[ind].className = 'li_active'
        list[ind].firstElementChild.className = "span_active"
        list_yc[ind].style.display = 'flex';

    }

}