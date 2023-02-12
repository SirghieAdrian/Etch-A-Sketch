const panel=document.getElementById('panel');
const dimension=document.getElementById('dimension');
const p=document.querySelector('p');
const rgb=document.getElementById('RGB');
const normal=document.getElementById('normal');
const clear=document.getElementById('clear');
let mode='normal';

clear.addEventListener('click',()=>{
    panel.innerHTML='';
    dimension.value=16;
    defaultPanel();
})
rgb.addEventListener('click',()=>mode='rgb');
normal.addEventListener('click',()=>mode='normal');
function createPanel(nrPixels){
    let pixels=[];
    for(let i=1;i<=nrPixels*nrPixels;i++){
        let pixel=document.createElement('div');
        pixel.className+='pixels';
        panel.appendChild(pixel);
        pixels.push(pixel);
    }
    panel.style.gridTemplateColumns=`repeat(${nrPixels},1fr)`;
    panel.style.gridTemplateRows=`repeat(${nrPixels},1fr)`;
    return pixels;
}

dimension.addEventListener('change',()=>{
    panel.innerHTML='';
    const pixels=createPanel(dimension.value);
    pixels.forEach(pixel=>pixel.addEventListener('mouseover',()=>{
        if(mode=='normal')
            pixel.style.background='white';
        else if(mode=='rgb')
            pixel.style.background=getRGBColor();
    }));
    p.textContent=`${dimension.value}x${dimension.value}`;
})

function defaultPanel(){
    const pixels=createPanel(16);
    pixels.forEach(pixel=>pixel.addEventListener('mouseover',()=>{
        if(mode=='normal')
            pixel.style.background='white';
        else if(mode=='rgb')
            pixel.style.background=getRGBColor();
    }));
    p.textContent=`${dimension.value}x${dimension.value}`;
}

function getRGBColor(){
    const c1=Math.floor(Math.random() * 255);
    const c2=Math.floor(Math.random() * 255);
    const c3=Math.floor(Math.random() * 255);
    return `rgb(${c1},${c2},${c3})`;
}


defaultPanel();




