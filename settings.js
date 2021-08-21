
var select = document.querySelector(".timetable").addEventListener('click',function(e)
{
    var closesTime = e.target.closest(".cell");
    if(closesTime){
        closesTime.style.background = "rgb(30, 169, 39)";
        console.log(closesTime);
    }
})


const blocking_site = document.getElementById("siteArray").value;
const save = document.getElementById("enter");
site=[];;
save.addEventListener("click", () => {
    site.push(blocking_site);
    site.join("\n")
    const blocked = blocking_site.split("\n").map(s => s.trim()).filter(Boolean);
    chrome.storage.local.set({blocked});
  });
