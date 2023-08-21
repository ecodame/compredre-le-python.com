function show(){
    document.querySelector('.sou-menue').classList.toggle('active-sous-menue')
    document.queryselector('.navigation').classList.toggle('open')
}



function show2(){
    document.querySelector('.navigation').classList.toggle('open')
    document.querySelector('.oliver').classList.toggle('bres')
}

function show3(){
    document.querySelector('.chiox').classList.toggle('open2')
    document.querySelector('body').classList.toggle('bodyy')
    document.querySelector('.navigation').classList.toggle('bodyy')
}

function shownew(){
    document.querySelector('.action').classList.toggle('actionof')
}
function shownew1(){
    document.querySelector('.action1').classList.toggle('actionof')
}

function shownew2(){
    document.querySelector('.action2').classList.toggle('actionof')
}

function shownew3(){
    document.querySelector('.action3').classList.toggle('actionof')
}


function shownew4(){
    document.querySelector('.action4').classList.toggle('actionof')
}


function shownew5(){
    document.querySelector('.action5').classList.toggle('actionof')
}



//.................................

// let btnback = document.querySelector('.back');

// btnback.addEventListener('click', ()=>{
//     window.history.back();
// })

var cookiesmessage = document.getElementById('cookie')
var acceptation = document.getElementById('acceptation')
var change =document.getElementById('explication')
var refu =document.getElementById('cookie')
function hidecookiemessage(){
    cookiesmessage.style.display='none';
    alert('@learn python a bien pris en compte votre acceptation  merci !!')
}

function refuok(){
    refu.style.display='none';
    alert('@learn python a bien pris en compte votre refus  merci !!')
}


function chabf(){
    change.style.filter='blur(0px)';
    change.style.opacity='1';
}

acceptation.addEventListener('click',hidecookiemessage)
acceptation.addEventListener('click',chabf)
refuser.addEventListener('click',refuok)
refuser.addEventListener('click',chabf)