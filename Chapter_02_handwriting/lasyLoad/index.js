window.onload = function (){
    let images, el, src
    images = [...document.querySelectorAll('img')]
    loadImg(images)
    function loadImg(images) {
        for(let i=0; i<=images.length-1; i++){
            el = images[i]
            console.log(el.datasrc)
            src = el.getAttribute('data-src')
            console.log(src)
            console.log(el.getBoundingClientRect())
            el.setAttribute('src', src)
        }
    }
}