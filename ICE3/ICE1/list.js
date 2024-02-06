// Jaskeerat Randhawa
// 1/26/2024
//100901805
// edit the Grocery list and count the items in the list 
var list = document.getElementById("list")

// get list

// Create new element
var newElement = document.createElement('li');

// create text node
var textNode = document.createTextNode('apple');

// append the text node to the newelement variable
newElement.appendChild(textNode);

// append the new element variable to the list
list.appendChild(newElement);
// Create new element

var startElement = document.createElement('li');
// create text node
var orangeJuice = document.createTextNode('orange juice');
// add the variable to the startelement variable
startElement.appendChild(orangeJuice);

// add it to the brining of the list
list.insertBefore(startElement, list.firstChild);




// All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS

// establish i variable to go through the listitems
var i;

// add all of the list items to the listItems array
var listItems = document.querySelectorAll('li');
// go through all of the listItems and add the class cool to them 
for (i = 0; i < listItems.length; i++) {
    listItems[i].classList.add('cool');
}


// get the header
var heading = document.querySelector('h2');
// get the count of items 
var itemCount = document.getElementsByClassName('cool').length; 
// add the number of groceries to the variable 
var content = 'Buy groceries (' + itemCount + ' items)';
// Update h2 using innerHTML 
heading.innerHTML = content;