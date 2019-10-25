
let mycode = (code) => {
    let domcode = document.querySelector("#code")
    let n = 0
    var clock = setInterval( () => {
        n += 1
        domcode.innerHTML = code.substring(0,n)
        myStyle.innerHTML = code.substring(0,n)

        if ( n > code.length) {
            window.clearInterval(clock)
        }
    },60)
}

let main = () => {
    mycode(cssCode)
}

main()