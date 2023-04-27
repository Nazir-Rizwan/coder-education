
      const menuicon= document.querySelector('#menu');
      const menu= document.querySelector('#menu-close');
      const doy= document.querySelector('#do');
    
      menuicon.addEventListener('click',()=>{
        // menuicon.classList.add('active');
        doy.classList.toggle("active");
      })
      menu.addEventListener('click',()=>{
        // menuicon.classList.add('active');
        doy.classList.remove("active");
      })
const enddate=" Apr 02 2023 07:42:16  GMT-0700 (Pacific Daylight Time)";
document.getElementById('end-date').innerHTML=enddate;
const input=document.querySelectorAll('input');
const clock=()=>{
    const end= new Date(enddate);
    const now= new Date();
const diff= (end-now)/1000;
if(diff<0) return;
input[0].value=Math.floor(diff/3600/24) 
input[1].value=Math.floor(diff/3600)%24 
input[2].value=Math.floor(diff/60)%60 
input[3].value=Math.floor(diff)%60 


} 

setInterval(() => {
    clock()
}, 1000);
//  1 day= 24 hrs
//  1hr = 60min
//  60min= 3600second
//       function myFunction() {
//     document.getElementsByClassName("ul")[0].classList.toggle("active");
// }
//       function openNav() {
//   document.getElementById("menu").style.width = "100%";
// }

// function closeNav() {
//   document.getElementById("menu-close").style.width = "0";
// } 


    //  $('#menu').click(function(){
    //   console.log("clickck")
    //   //  $('nav .navigation ul').addClass('active');
    //  })
    
    //  $('#menu-close').click(function(){
    //   $('nav .navigation ul').removeClass('active');
    //  })
