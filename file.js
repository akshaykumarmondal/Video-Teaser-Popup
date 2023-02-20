const btnElement=document.querySelector('.btn');

const closingButton=document.querySelector('.close-icon');

const trailerContainer= document.querySelector('.trailer-container');

const mainContainer=document.querySelector('.main-container');

const videoElement=document.querySelector('video')

btnElement.addEventListener('click',()=>{

    trailerContainer.classList.remove('active');
    mainContainer.style.opacity=0.04;
})

closingButton.addEventListener('click',()=>{

    trailerContainer.classList.add('active');
    mainContainer.style.opacity=1;

    // To resume the video again after clicking the close button

    videoElement.pause();
    videoElement.currentTime = 0;
})