export function getCookie(cookie_name) {
    const allCookies = document.cookie;
    let cookie_pos = allCookies.indexOf(cookie_name);
    if (cookie_pos !== -1) {
        cookie_pos = cookie_pos + cookie_name.length + 1;
        let cookie_end = allCookies.indexOf(";", cookie_pos);
        if (cookie_end === -1) {
            cookie_end = allCookies.length;
        }
        var value = unescape(allCookies.substring(cookie_pos, cookie_end));
    }
    return value;
}

export function deleteCookie(name)
{
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cookie_val = getCookie(name);
    if(cookie_val != null)
        document.cookie= name + "=" + cookie_val + ";expires=" + exp.toGMTString();
}