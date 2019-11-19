(function () {
    var timer
    function zyl() {
        var html = document.documentElement;
        var width = html.clientWidth
        html.style.fontSize = width / 7.5 + 'px'
    }
    zyl()
    window.onresize=function () {      
        timer && clearTimeout(timer)
        timer = setTimeout(function () {
            zyl()
        }, 100)
    }
})()