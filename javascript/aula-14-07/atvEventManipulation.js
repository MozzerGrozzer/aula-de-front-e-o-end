let blueHover = document.getElementById('blueHover')

blueHover.style.backgroundColor='gray';

blueHover.addEventListener("mouseover",function(){
    blueHover.style.backgroundColor='blue'
    blueHover.innerText ='adoro gatos'
})
blueHover.addEventListener("mouseout",function(){
    blueHover.style.backgroundColor='gray'
    blueHover.innerText ='buh'
})

let mouseDetection = document.getElementById('mouseDetection')

mouseDetection.addEventListener("mouseover",function(){
    mouseDetection.innerText='mouse detectado!!! tire imediatamente !!! >:('
})
mouseDetection.addEventListener("mouseout",function(){
    mouseDetection.innerText=':)'
})

let sizeScale = document.getElementById('sizeScale')

sizeScale.addEventListener('mouseover',function(){
    sizeScale.style.width='250px'
    sizeScale.style.height='250px'
})
sizeScale.addEventListener('mouseout',function(){
    sizeScale.style.width='200px'
    sizeScale.style.height='200px'
})