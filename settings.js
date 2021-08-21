var allSelectedTime = [];

var select = document.querySelector(".timetable").addEventListener('click',function(e)
{
    var chosesTime = e.target.closest(".cell");
    
    if (chosesTime) {
        if (chosesTime.style.background!="rgb(51, 153, 255)") {
            chosesTime.style.background = "rgb(51, 153, 255)";
            allSelectedTime.push(chosesTime);
        }
        else {
            chosesTime.style.background = "rgb(236, 248, 250)";
        }
    }
    console.log(chosesTime);
})

let projectNameRef;
let startTimeRef;
let endTimeRef;

let numberProjectRef;
let existingProjectRef;

let projectName;
let startTime;
let endTime;

let numberProject;
let existingProject;
let newProject;

let projectArray = [];

function addProject()
{
    projectNameRef = document.getElementById("projectName");
    startTimeRef = document.getElementById("startTime");
    endTimeRef = document.getElementById("endTime");

    numberProjectRef = document.getElementById("numberProject");
    existingProjectRef = document.getElementById("existingProject");

    projectName = projectNameRef.value;
    startTime = new Date(startTimeRef.value);
    endTime = new Date(endTimeRef.value);

    numberProject = Number(numberProjectRef.innerText);
    existingProject = "";
    newProject = "";

    if (numberProject>0) {
        existingProject += existingProjectRef.innerHTML;
    }

    numberProject++;
    newProject = `<p>Project ${numberProject}: ${projectName} from ${startTime.toDateString()} ${startTime.toLocaleTimeString()} to ${endTime.toDateString()} ${endTime.toLocaleTimeString()} <button onclick="deleteProject()">Delete</button><p>`;
    existingProject += newProject;
    projectArray.push(newProject);
    console.log(projectArray.length);
   
    numberProjectRef.innerText = numberProject;
    existingProjectRef.innerHTML = existingProject;
 
    for (let i=0 ; i<allSelectedTime.length ; i++) {
        if (allSelectedTime[i].style.background=="rgb(51, 153, 255)") {
            let colorRef = document.getElementById("projectColor");
            let color = colorRef.value.toString();
            allSelectedTime[i].style.background = color;
            let labelRef = allSelectedTime[i];
            let label = `<p>${numberProject}. ${projectName}<p>`;
            labelRef.innerHTML = label;
        }
    }
}

function cancelProject() {
    for (let i=0 ; i<allSelectedTime.length ; i++) {
        if (allSelectedTime[i].style.background=="rgb(51, 153, 255)") {
            allSelectedTime[i].style.background = "rgb(236, 248, 250)";
            let labelRef = allSelectedTime[i];
            let label = "";
            labelRef.innerHTML = label;
        }
    }
}

function deleteProject() {
    let number = numberProject;
    console.log(number);

    projectArray.splice((number-1), 1);

    existingProject = "";
    for (let i=0 ; i<projectArray.length ; i++) {
        existingProject += projectArray[i];
    }

    numberProject--;

    numberProjectRef.innerText = numberProject;
    existingProjectRef.innerHTML = existingProject;
}