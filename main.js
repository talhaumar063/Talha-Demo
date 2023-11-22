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

//Make the list background color  and all list element to Bold
var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';

for(var i=0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
}

//editing New <li> item by className and ByTagName

var lis = document.getElementsByClassName('list-group-item1');
lis[0].style.backgroundColor = 'red';

var li = document.getElementsByTagName('li');
li[4].textContent = 'New List Item';