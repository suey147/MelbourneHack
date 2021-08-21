
var select = document.querySelector(".timetable").addEventListener('click',function(e)
{
    var closesTime = e.target.closest(".cell");
    if(closesTime){
        closesTime.style.background = "rgb(30, 169, 39)";
    }
    console.log(closesTime);
})