//Changing Name - title of the page 
var PageTitle = document.getElementById("1")
console.log(PageTitle.textContent = "Adding Items")

// Adding Black Border 
var Header = document.getElementById("main-header");
Header.style.borderBottom = 'solid 5px #000';

// change the ADD ITEMS to Bold and color is Green

var Heading = document.getElementsByClassName("title");
Heading[0].style.color = 'green'
Heading[0].innerHTML = '<b>Add Items</b>';