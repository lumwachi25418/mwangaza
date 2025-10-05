const images = [
'images/chairman.jpeg',
'images/home3.jpg',
'images/home4.jpg',
'images/home5.jpg',
'images/home6.jpg',
'images/bg1.jpg',
'images/esther.jpeg',
'images/treasurer.jpeg',
'images/hero3.jpg',
'images/hero4.jpg',
'images/hero5.jpg',

]
const randomImage=document.getElementById('random')
const imageMap=images.map((img)=>{
    return `<img src=${img} alt="random image" max-width="100vh" max-height="600px">`
})
function changeImage(){
    const randomIndex=Math.floor(Math.random()*images.length)
    randomImage.src=images[randomIndex]
}
changeImage()
setInterval(changeImage,2000)

