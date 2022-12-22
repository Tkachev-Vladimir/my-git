

// function showHide(city) {
   
//     let obj = document.getElementById(city);
//     if (obj.style.display != "block") {
//         obj.style.display = "block";
//     }
//     else {
//         obj.style.display = "none";
//     }
    
// };


 document.querySelector(".burger").addEventListener("click", function () {
   document.querySelector(".burger_three").classList.toggle("active");
   document.querySelector(".burger_two").classList.toggle("active");
 document.querySelector('.nav_list').classList.toggle("active")
document.querySelector('#nav').classList.toggle('active')
document.querySelector('.burger').classList.toggle('active')
});





