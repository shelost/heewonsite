// FUNCTIONS

function Id(arg){
    return document.getElementById(arg)
}

function Class(arg){
    return document.getElementsByClassName(arg)
}

function Tag(arg){
    return document.getElementsByTagName(arg)
}


// NAVBAR

var nav;
var navfab = Id('navfab')
var navbar = Id('navbar')

if (window.innerWidth < 1080){
    sessionStorage.setItem('nav', 0)
}

navfab.onclick = () => {
 
    if (sessionStorage.getItem('nav') == '1'){
        sessionStorage.setItem('nav', 0)
    }else{
        sessionStorage.setItem('nav', 1)
    }
    console.log(sessionStorage.getItem('nav'))
  
}

console.log(window.innerWidth)

const loop = () =>{

    nav = sessionStorage.getItem('nav') == '1'? true: false;

    if (nav){
        navbar.classList.add('navbar-nav')
        navfab.classList.add('navfab-nav')
        for (let i=0;i<Class('main').length;i++){
            Class('main')[i].classList.add('main-nav')
        }
        for (let i=0;i<Class('elem').length;i++){
            Class('elem')[i].classList.add('elem-nav')
        }
        for (let i=0;i<Class('header').length;i++){
            Class('header')[i].classList.add('header-nav')
        }

    }else{
    
        navbar.classList.remove('navbar-nav')
        navfab.classList.remove('navfab-nav')
        for (let i=0;i<Class('main').length;i++){
            Class('main')[i].classList.remove('main-nav')
        }
        for (let i=0;i<Class('elem').length;i++){
            Class('elem')[i].classList.remove('elem-nav')
        }
        for (let i=0;i<Class('header').length;i++){
            Class('header')[i].classList.remove('header-nav')
        }
    }

    if (window.innerWidth<1080){
        for (let i=0;i<elems.length;i++){
            elems[i].classList.add('elem-active')
        }
        pointer.classList.add('hidden')
    }

}

setInterval(loop, 1000/30)

var elems = [...Class('elem'), ...Class('card')]

for (let i=0;i<elems.length;i++){
    elems[i].addEventListener('mouseenter', e =>{
        elems[i].classList.add('elem-active')
        for (let j=0;j<elems.length;j++){
            if ( j != i){
                elems[j].classList.add('elem-not-active')
            }
        }
    })
    elems[i].addEventListener('mouseleave', e =>{
        elems[i].classList.remove('elem-active')
        for (let j=0;j<elems.length;j++){
            if ( j != i){
                elems[j].classList.remove('elem-not-active')
            }
        }
    })
}

// POINTER

var pointer = Id('pointer')
var textCursor = false;

window.addEventListener('mousemove', e => {

    if (!textCursor){
      pointer.style.cssText = "top:" + (e.clientY-8) + "px; " +  "left:" + (e.clientX-12) + "px";
    }else{
      pointer.style.cssText = "top:" + (e.clientY-20) + "px; " +  "left:" + (e.clientX-20) + "px";
    }
 
})

// White Cursor

var dark = [Id('navbar'), ...Class('black'), ...Class('card')]

for (let i=0;i<dark.length;i++){
    dark[i].addEventListener('mouseenter', e => {
        pointer.classList.add('white')
    })
    dark[i].addEventListener('mouseleave', e => {
        pointer.classList.remove('white')
    })
}

// No White Cursor

var nodark = [...Class('logo')]

for (let i=0;i<nodark.length;i++){
    nodark[i].addEventListener('mouseenter', e => {
        pointer.classList.remove('white')
    })
    nodark[i].addEventListener('mouseleave', e => {
        pointer.classList.add('white')
    })
}

// Text Cursor

var text = [ ...Tag('p'), ...Class('title')]

for (let i=0;i<text.length;i++){
    text[i].addEventListener('mouseenter', e => {
        path.setAttribute('d', 'M285.09,424.5s-.45,43.29-43.51,43.51-46.76-37.1-46.76-43.51V76.73s2.19-43.51,43.5-43.51,46.77,33.93,46.77,43.51Z')
        textCursor = true
    })
    text[i].addEventListener('mouseleave', e => {
      path.setAttribute('d', 'M457.15,333,257.6,327.44A15.17,15.17,0,0,0,246.34,332L106.76,474.71c-10.08,10.31-27.5,2-25.89-12.28L126.65,55.35a15.15,15.15,0,0,1,24.7-10L467.21,306.19C478.33,315.37,471.55,333.42,457.15,333Z')
      textCursor = false
    })
}

document.body.addEventListener('mouseleave', e => {
    pointer.classList.add('hidden')
})
document.body.addEventListener('mouseenter', e => {
    pointer.classList.remove('hidden')
})

