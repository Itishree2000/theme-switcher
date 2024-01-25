const buttons=document.querySelectorAll(".button");
console.log(buttons);
const body=document.querySelector("body");
buttons.forEach(button=>{
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==="black"){
           body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor=e.target.id;
         }
         if(e.target.id==="purple"){
            body.style.backgroundColor=e.target.id;
         }
         if(e.target.id==="magenta"){
            body.style.backgroundColor=e.target.id;
         }
         if(e.target.id==="olive"){
            body.style.backgroundColor=e.target.id;
         }
    })
});