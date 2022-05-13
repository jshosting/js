if (! function () {
        try {
            return window.self !== window.top
        } catch (o) {
            return !0
        }
    }() && -1 != navigator.userAgent.indexOf("Firefox") != 1) {
    var o = window.open("about:blank", "_blank");
    !o || o.closed || void 0 === o.closed ? (console.log("Popup blocked"), "/" != window.location.pathname && window.location.replace(window.location.origin + "?url=" + window.location.pathname)) : ("/" != window.location.pathname ? o.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Google</title><link rel="icon" type="image/png" href="https://www.google.com/favicon.ico"><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" height="100%" src="https://aly.unblockhype.repl.co/?url=' + window.location.pathname + '" frameborder="0"></iframe></body></html>' : o.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Google</title><link rel="icon" type="image/png" href="https://www.google.com/favicon.ico"><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" height="100%" src="https://aly.unblockhype.repl.co/?url=' + window.location.origin + '" frameborder="0"></iframe></body></html>', o.document.close(), window.location.replace("https://www.google.com"))
}
