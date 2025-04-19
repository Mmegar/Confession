

document.addEventListener('DOMContentLoaded', () => {
    const confirmBtn = document.querySelector('.confirm-btn'); 
    const declineBtn = document.querySelector('.decline-btn'); 
    const div = document.getElementsByTagName("div");
    const image = document.querySelector('.maomaoImg')
    const maxX = window.innerWidth 
    const chill = new Audio('./asset/spoon.mp3'); 
    const hehe = new Audio('./asset/hehe.mp3')
    const Cry = new Audio('./asset/funnyCry.mp3')
    const maxY = window.innerHeight - declineBtn.offsetHeight
    

    const maomaoImages = [
        "./asset/valentineImg/maomoaPlease.webp",
        "./asset/valentineImg/maomaoSad.webp",
        "./asset/valentineImg/jinshiCry.webp"
    ]

    let scale = 16
    let declineScale = 16
    let confirmBtnSize = 150
    let declineBtnSize = 150
    let transformScale = 1.2
    let randomX = 1 
    let randomY = 1
    let currentImage = 0
    image.style.height="250px"

    declineBtn.addEventListener("click", () => {
        if (confirmBtnSize >= 450) {
            /* move the confirm button up */
            confirmBtn.style.position= `absolute`
            confirmBtn.style.top= `${window.innerHeight/2.5}`
            confirmBtn.style.left= `${window.innerWidth/3}`
            confirmBtn.style.transform = `translate(50%, 50%)`

            /* random moving button */
            if (declineScale = 10){ 
                declineScale = 10
            }else{ 
                declineScale -= 1   
            }

            transformScale += 0.1   
            randomX = Math.floor((Math.random() * maxX));
            console.log(randomX)
            randomY = Math.floor((Math.random() * maxY) +1);
            /* confirm button */
            confirmBtn.style.transform= `scale(${transformScale})`
            confirmBtn.style.lineHeight= `2.05`;
            confirmBtn.style.transition = `all 0.2s ease`
            /* decline button */
            declineBtn.style.position = `absolute`
            declineBtn.style.left = `${randomX}px`
            declineBtn.style.top = `${randomY}px`
            declineBtn.style.fontSize= `${declineScale}px`
            

        } else {
            if (currentImage<maomaoImages.length){
                image.src = maomaoImages[currentImage]
                currentImage++
            }
            chill.volume =0.2
            chill.play()
            scale += 5
            declineScale -= 1
            confirmBtnSize += 50
            declineBtnSize -= 10
            confirmBtn.style.fontSize= `${scale}px`
            document.documentElement.style.setProperty('--confirmBtnSize',`${confirmBtnSize}px`)
            confirmBtn.style.transition = `all 0.2s ease`
            
            document.documentElement.style.setProperty('--declineBtnSize',`${declineBtnSize}px`)
            declineBtn.style.transition = `all 0.2s ease`
            declineBtn.style.fontSize= `${declineScale}px`
            
            if (currentImage === maomaoImages.length){
                
                Cry.volume = 0.4
                Cry.play()
            }
            
        }
    }) 

    confirmBtn.addEventListener("click", () => {
        for (let i =0; i < div.length; i++) {
            div[i].remove()
        }
        document.getElementById(`valentine-message`).classList.remove('hidden')
        document.getElementById(`confirmedMaomao`).classList.remove('hidden')
        document.body.style.backgroundColor = "pink";
        hehe.volume = 1
        hehe.play()
        
    })
    
})
