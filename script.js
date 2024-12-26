let button= document.querySelector("button")
let main= document.querySelector(".main")
let flag=true
let bulbon=false
let bulb
button.addEventListener("click",
    ()=>{
        if(true===flag){
         bulb= document.createElement('div')
        bulb.style.height="100px"
        bulb.style.width="100px"
        bulb.style.borderRadius="50%"
        bulb.style.backgroundColor="gray"
        main.appendChild(bulb)
        button.textContent='Turn On'
        flag=false;

    }
        else{
         if(false==bulbon){
             bulb.style.backgroundColor="yellow"
             button.textContent="turn Off"
             bulbon=true
             
            
         }
         else{
            bulb.style.backgroundColor="gray"
            button.textContent="turn On"
            bulbon=false
            
         }
        
        
    }
}
)


