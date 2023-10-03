let im1=document.getElementById('im1')
let im2=document.getElementById('im2')
let im3=document.getElementById('im3')
let im4=document.getElementById('im4')
let main=document.getElementById('main')
im1.onclick=function(){
    document.body.style.backgroundColor='#0d5574'
    main.src=this.src
    
}
im2.onclick=function(){
    document.body.style.backgroundColor='#444'
    main.src=this.src
}
im3.onclick=function(){
    main.src=this.src
    document.body.style.backgroundColor='rgb(157, 157, 1)'
}
im4.onclick=function(){
    document.body.style.backgroundColor='red'
    main.src=this.src;
}













