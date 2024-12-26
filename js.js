let card=document.querySelector(".card")
let picdiv=document.querySelector(".pic")
let follow= document.querySelector("#click")
let showMore=document.querySelector(".showme")
let followers=document.querySelector("#follower")
let about=document.querySelector(".about")
let status= document.querySelector("#status")
let flag=false
follow.addEventListener("click",()=>{
    console.log('hey')
 if(false==flag){
    let time=setInterval(()=>{
        follow.textContent="requested"
        follow.style.backgroundColor="gray"
    })
    setTimeout(()=>{
    
        clearInterval(time)
        follow.textContent="following"
        follow.style.backgroundColor="#14532d"
        picdiv.style.padding="5px"
        picdiv.style.height="105px"
        picdiv.style.width="105px"
        followers.textContent="1001"
        status.innerHTML="Friend"
        status.style.color="green"
      },2000)
      flag=true
 }
 else{
    follow.textContent="follow"
        follow.style.backgroundColor="blue"
        picdiv.style.padding="0px"
        picdiv.style.height="100px"
        picdiv.style.width="100px"
        followers.textContent="1000"
        status.innerHTML="stranger"
        status.style.color="gray"
  


    flag=false

 }

})

showMore.addEventListener("click",()=>{
    about.innerHTML="i like to play badminton and cricket, i can cook all type of meal but my speciality is italian cusine"

})