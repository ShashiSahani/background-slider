const body=document.body
const slider=document.querySelectorAll('.slider');
const lftBtn=document.getElementById('left')
const rightBtn=document.getElementById('right')
rightBtn.innerHTML = '<i class="fas fa-arrow-right"></i><span class="hover-text">Next</span>';


let activeSlide=0
rightBtn.addEventListener('click',()=>{
    activeSlide ++
    if(activeSlide>slider.length-1){
        activeSlide=0
    }
    setBgToBody()
    setActiveSlide();
})
lftBtn.addEventListener('click',()=>{
    activeSlide--
    if(activeSlide<0){
        activeSlide=slider.length-1
    }
    setBgToBody()
    setActiveSlide()
})
setBgToBody()
function setBgToBody(){
    body.style.backgroundImage=slider[activeSlide].style.
    backgroundImage
}
function setActiveSlide(){
    slider.forEach((slide)=>
        slide.classList.remove('active')
    )
    slider[activeSlide].classList.add('active')
}

rightBtn.innerHTML='<i class="fas fa-arrow-right"></i><span class="hover-text"></span>';
rightBtn.addEventListener('mouseover',()=>{
    document.querySelector('.hover-text').style.display='block';
    rightArrowIcon.style.display="none";
    
})
rightBtn.addEventListener('mouseout',()=>{
    document.querySelector('.hover-text').style.display="none";
    rightArrowIcon.style.display="block";
})