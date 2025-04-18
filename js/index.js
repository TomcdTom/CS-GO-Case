const wheel = document.querySelector('.wheel');
const spinbtn = document.querySelector('#spin-btn');
const prizeresult = document.querySelector('#prize-result');
const prizeitem = document.querySelector('#prize-item');
const prizename = document.querySelector('#prize-name');

let arr = [
    {
        name:'knife',
        src:'./assets/item-1.png',
    },
    {
        name:'gold-knife',
        src:'./assets/item-2.png',
    },
    {
        name:'Secret-knife',
        src:'./assets/item-3.png',
    },
    {
        name:'AUG',
        src:'./assets/item-4.png',
    },
    {
        name:'awp-classic',
        src:'./assets/item-5.png',
    },
    {
        name:'kerambit',
        src:'./assets/item-6.png',
    },
    {
        name:'AWP-BOLT',
        src:'./assets/item-7.png',
    },
    {
        name:'P90',
        src:'./assets/item-8.png',
    }

]

arr.reverse();




function spin() {

    let isSpinning = false;
    if(isSpinning){
        return;
    }else{
         isSpinning = true;
        let randomprize = Math.floor(Math.random() * 7) ;
    let audio = new Audio('.7/sound/spin.mp3');
    audio.play();
    wheel.style.transition = 'all 8s ease';
    wheel.style.transform = `perspective(1000px) rotateY(${1080 + randomprize * 45}deg)`;

    let timeout = setTimeout(() => {
        prizeresult.style.display = 'flex';
        prizeitem.src = arr[randomprize].src;
        prizename.innerHTML = arr[randomprize].name;
         isSpinning = false;
        wheel.style.transition = 'none';
        wheel.style.transform = `perspective(1000px)`
    },8000)
    }
       
    
    
}

spinbtn.addEventListener('click',spin);
prizeresult.addEventListener('click',()=>{
    prizeresult.style.display = 'none';
}
)

console.log(spinbtn)
