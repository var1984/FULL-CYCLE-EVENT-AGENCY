window.addEventListener('scroll', ()=> {
   scrollRotate();
}) 
 
function scrollRotate() {
  let image = document.getElementById("reload");
  image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
}

document.addEventListener("mousemove", parallax);
const move = document.querySelector('h1')

function parallax(e) {
const moveValue = move.getAttribute('data-value')
let x =  e.clientX / moveValue;
let y = e.clientY / moveValue;

move.style.transform = `translate(${x}px, ${y}px)`
}