

function documentReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}
documentReady(function onInit() {
    var afterBio = document.getElementById('afterBio');
    var iframe = document.createElement('iframe');
    iframe.src = "https://free.timeanddate.com/countdown/i9jis779/n68/cf100/cm0/cu4/ct0/cs0/ca0/co1/cr0/ss0/cac000/cpc000/pcfff/tcfff/fs100/szw320/szh135/tat%D7%A7%D7%99%D7%A7%D7%90%D7%95%D7%A3%202026/tac000/tpt%D7%96%D7%9E%D7%9F%20%D7%9E%D7%90%D7%96%20%D7%A7%D7%99%D7%A7%D7%90%D7%95%D7%A3/tpc000/iso2026-01-10T12:00:00/bo2";
    iframe.allowtransparency = "true";
    iframe.frameborder = "0";
    iframe.width = "322";
    iframe.height = "137";

    afterBio.appendChild(iframe);
});