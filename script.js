const inputBox = document.getElementById("input-box");
/*create a variable named "input box" --> The variable is constant aka unchanging. 
    In the (HTML) document find the element by ID thus  "getElementById"
*/

const listContainer = document.getElementById("list-container");

//addTask is the name of a function
function addTask() {
    if (inputBox.value === '') {
        alert("Error! You must write something!");
    }                       //if inputBox is empty then pop-up "You must write something" 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    /* 

    let li = document.createElement("li"); 
        "let" is how we declare a variable in JS 
        "li" here is therefore a variable 
        document.createElement("li") means I am creating a new list item (a list is an element) 
            It is creating one HTML element with the tag name "li"
            It is storing this element in this "li" variable 

    li.innerHTML = inputBox.addEventListener; 
        The text that we added into the input field is inputBox.value
        We are storing that into li.innerHTML 

    listContainer.appendChild(li);
        listContainer is referencing the id found in the HTML document 
        appendChild adds the newly created <li> as a child to the listContainer element 
            We want it to be displayed under the section with the id "list-container" 
    */
    inputBox.value = ""; /* Allows search box to be empty */

}



