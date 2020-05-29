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

var nav = false;
var cur = false;
const navfab = Id('navfab')
const navbar = Id('navbar')
const curtog = Id('cursor-toggle')
const curicon = Id('cursor-icon')

if (window.innerWidth < 1080){
    sessionStorage.setItem('nav', 0)
}

navfab.onclick = () => {

    if (sessionStorage.getItem('nav') == '1'){
        sessionStorage.setItem('nav', 0)
    }else{
        sessionStorage.setItem('nav', 1)
    }
}

curtog.onclick = () => {

    if (sessionStorage.getItem('cur') == '1'){
        sessionStorage.setItem('cur', 0)
    }else{
        sessionStorage.setItem('cur', 1)
    }
}

const loop = () =>{

    nav = sessionStorage.getItem('nav') == '1'? true: false;
    cur = sessionStorage.getItem('cur') == '1'? true: false;

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

    if (cur){
        pointer.classList.add('hidden')
        pointer.style.opacity = 0;
        document.body.style.cursor = 'default';
        document.documentElement.style.cursor = 'default';
        for (let i=0;i<Tag('a').length;i++){
            Tag('a')[i].style.cursor = 'pointer';
        }
        curicon.setAttribute('d', `M457.15,333,257.6,327.44A15.17,15.17,0,0,0,246.34,332L106.76,474.71c-10.08,10.31-27.5,2-25.89-12.28L126.65,
        55.35a15.15,15.15,0,0,1,24.7-10L467.21,306.19C478.33,315.37,471.55,333.42,457.15,333Z`)
    }else{
        pointer.classList.remove('hidden')
        document.body.style.cursor = 'none';
        document.documentElement.style.cursor = 'none';
        pointer.style.opacity = 1;
        for (let i=0;i<Tag('a').length;i++){
            Tag('a')[i].style.cursor = 'none';
        }
        curicon.setAttribute('d', `M396.79,287.65l-93.96,8.46c-2.51,0.23-4.07,2.84-3.09,5.16l37.97,89.2c0.8,1.89-0.08,4.07-1.96,4.87
        l-69.86,29.74c-1.89,0.8-4.07-0.08-4.87-1.96l-38.41-90.23c-0.99-2.32-3.95-3-5.86-1.35l-73.97,64.24c-2.5,2.17-6.37,0.24-6.14-3.06
        l21.21-305.52c0.21-3.03,3.76-4.54,6.09-2.59l234.9,196.51C401.38,283.22,400.09,287.35,396.79,287.65z`)
    }


    if (window.innerWidth<1080){
        for (let i=0;i<elems.length;i++){
            elems[i].classList.add('elem-active')
        }
        pointer.classList.add('hidden')

        navbar.onclick = () => {
            sessionStorage.setItem('nav', 0)
        }
        sessionStorage.setItem('cur', 1)

        curtog.classList.add('hidden')
    }else{
        curtog.classList.remove('hidden')
    }

}


setInterval(loop, 1000/60)

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
var path = Id('path')
var textCursor = false;

window.addEventListener('mousemove', e => {

    if (!textCursor){
      pointer.style.cssText = "top:" + (e.clientY-8) + "px; " +  "left:" + (e.clientX-12) + "px";
    }else{
      pointer.style.cssText = "top:" + (e.clientY-20) + "px; " +  "left:" + (e.clientX-20) + "px";
    }

})

// White Cursor

var dark = [Id('navbar'), ...Class('black'), ...Class('card'), ...Class('link')]

for (let i=0;i<dark.length;i++){
    dark[i].addEventListener('mouseenter', e => {
        pointer.classList.add('white')
    })
    dark[i].addEventListener('mouseleave', e => {
        pointer.classList.remove('white')
    })
}

// No White Cursor

var nodark = []

for (let i=0;i<nodark.length;i++){
    nodark[i].addEventListener('mouseenter', e => {
        pointer.classList.remove('white')
    })
    nodark[i].addEventListener('mouseleave', e => {
        pointer.classList.add('white')
    })
}

// Text Cursor

var text = [ ...Tag('p'), ...Class('text'), ...Class('title')]

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

// Link Cursor

var links = [...Tag('a')]

path.style.transform = 'scale(0.6)';

document.body.addEventListener('mouseleave', e => {
    pointer.style.opacity = 0;
})
document.body.addEventListener('mouseenter', e => {
    pointer.style.opacity = 1;
})


