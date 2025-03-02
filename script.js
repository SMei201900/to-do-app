const inputBox = document.getElementById("input-box");
/*create a variable named "input box" --> The variable is constant aka unchanging. 
    In the (HTML) document find the element by ID thus  "getElementById"
*/

const listContainer = document.getElementById("list-container");

//addTask is the name of a function
function addTask() {
    if (inputBox.value === '') {
        alert("Error! You must write something!");
    }                       //if inputBox is empty then pop-up "Error" 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        /*        */
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    inputBox.value = ""; /* Allows search box to be empty */

}



