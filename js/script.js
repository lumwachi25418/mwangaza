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
'images/mc1.jpeg',
'images/mc2.jpeg',
'images/mc3.jpeg',
'images/mc4.jpeg',
'images/mc5.jpeg',
'images/mc6.jpeg',
'images/mc7.jpeg',
'images/mc8.jpeg',
'images/mc9.jpeg',
'images/mc10.jpeg',
'images/mc11.jpeg',
'images/mc12.jpeg',
'images/mc13.jpeg',
'images/mc14.jpeg',
'images/mc15.jpeg',
'images/mc16.jpeg',
'images/mc17.jpeg',
'images/mc18.jpeg',
'images/mc19.jpeg',






]
const randomImage=document.getElementById('random')
const imageMap=images.map((img)=>{
    return `<img src=${img} alt="random image" max-width="100vw" max-height="100vh">`
})
function changeImage(){
    const randomIndex=Math.floor(Math.random()*images.length)
    randomImage.src=(images[randomIndex])
}
changeImage()
setInterval(changeImage,2000)


    function showAlert() {
    const button = document.querySelector('.button');
    button.addEventListener('click', function() {
window.location.href='Form.html'    });
}
showAlert();

