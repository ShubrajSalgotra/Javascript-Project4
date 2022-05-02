const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)       
    }

    let scale = (100-load)/100
    let blurr = (100-load)/3

    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale
    bg.style.filter = `blur(${blurr}px)`
}