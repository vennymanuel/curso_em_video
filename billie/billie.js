
let btn1 = document.querySelector('#Billie-about')
let btn2 = document.querySelector('#Billie-songs')
let btn3 = document.querySelector('#billie-phottos')

let display1 = document.querySelector('#principal')


let phottos = document.querySelector('.phottos')

let relative1 = document.querySelector('.relative-songs')
let relative2 = document.querySelector('.relative-phottos')
let relative3 = document.querySelector('.relative-about')


let phottos_side1 = document.querySelector('.phottos-side')

function display(){

    display1.classList.add('imgFndo')
    display1.classList.remove('principal')
    display1.classList.remove('imgFndo1')
    phottos_side1.classList.add('display-none')
   
}
function display2(){
    display1.classList.add('imgFndo1')
    display1.classList.remove('principal')
    display1.classList.remove('imgFndo')
    phottos_side1.classList.add('display-none')
}
btn1.addEventListener('click', function(){
    relative3.classList.add('display-block')

    relative3.classList.remove('display-none')

    relative2.classList.remove('display-block')
    relative2.classList.add('display-none')
   
    relative1.classList.remove('display-block')
    relative1.classList.add('display-none')
   
   

})
btn2.addEventListener('click', function(){
    relative3.classList.remove('display-block')
    relative3.classList.add('display-none')
    relative1.classList.add('display-block')
    relative1.classList.remove('display-none')

    
    phottos_side1.classList.remove('display-block')
    phottos_side1.classList.add('phottos-side')

    relative2.classList.remove('display-block')
   
    relative2.classList.add('display-none')
})
btn3.addEventListener('click', function(){
    relative2.classList.add('display-block')
    relative2.classList.remove('display-none')

   
    phottos_side1.classList.add('display-block')
    phottos_side1.classList.remove('phottos-side')

    relative3.classList.remove('display-block')
    relative1.classList.remove('display-block')

    relative3.classList.add('display-none')

    relative1.classList.add('display-none')
})