//console.log("WelcomeHome")

var btnAdd = document.getElementById("add-item"); // making my button responsive on click , here access var
var list = document.getElementById("addList");
var inputElement = document.getElementById('todoInput');


var currentInput = ""; // empty string
inputElement.value = ""; //clearing my input box

//Enter CLicked Feature
inputElement.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        //alert("Enter Button is Pressed")
        addListItem(); //function calling
    }
})
//function for current input
inputElement.addEventListener('input', function(e){
    currentInput = (e.target.value);
})

function addListItem(){
    if(currentInput !== null && currentInput !== undefined && currentInput !== ""){
        //alert("Welcome User")
            var newElementList = document.createElement('li'); // create a new list by taking tag as a 'li'
    
            newElementList.id = "item- " + (list.childElementCount + 1); //adding dynamic id to my list 
    
            //var textNode = document.createTextNode("List Item " + (list.childElementCount)); //making list value
            var textNode = document.createTextNode(currentInput);
    
            newElementList.appendChild(textNode); //adding my list item at the end 
            list.appendChild(newElementList) //adding my newELementlist in my unoderedList
        
            //list count
            //newElementList= list.childElementCount + 1;
    
            //console.log(newElementList)
            inputElement.value = ''; //clear my input box 
            currentInput = ''; //clear my input value
        }else{
            alert("Please Enter Valid TODO Item ")
        }    
}

btnAdd.addEventListener('click', addListItem);