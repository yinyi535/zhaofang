// 增加cookie
function addCookie(key, val) {
    document.cookie = `${key}=${val}`
}
// 删除cookie
function removeCookie(key) {
    var date = new Date()
    date.setDate(date.getDate() - 1)
    document.cookie = `${key} ='';expires=${date}`
}
// 清除cookie
function clearCookie() {
    cookieArry = document.cookie.split('; ')
    for (var i of cookieArry) {
        var item = i.split('=')
        removeCookie(item[0])
    }
}
// 查询cookie
function getCookie(key) {
    cookieArry = document.cookie.split('; ')
    for (var i of cookieArry) {
        var item = i.split('=')
        if (item[0] == key) {
            return item[1]
        }
    }
}