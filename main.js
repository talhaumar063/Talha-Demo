// //Changing Name - title of the page// 
// var PageTitle = document.getElementById("1")
// console.log(PageTitle.textContent = "Adding Items")

// // Adding Black Border// 
// var Header = document.getElementById("main-header");
// Header.style.borderBottom = 'solid 5px #000';

// // change the ADD ITEMS to Bold and color is Green//

// var Heading = document.getElementsByClassName("title");
// Heading[0].style.color = 'green'
// Heading[0].innerHTML = '<b>Add Items</b>';

// //Make the list background color  and all list element to Bold//
// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';

// for(var i=0; i < items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }

//editing New <li> item by className and ByTagName//

// var lis = document.getElementsByClassName('list-group-item1');
// lis[0].style.backgroundColor = 'red';

// var li = document.getElementsByTagName('li');
// li[4].textContent = 'New List Item';


//QUERYSELECTOR//
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = "none";

// QUERYSELECTORALL//


// var ListItems = document.querySelectorAll('.list-group-item');
// ListItems[1].style.color = "red";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

//TRAVERSING THE DOM//

//var itemList = document.querySelector('#items');
//PARENTElements
//1- console.log(itemList.parentElement);
// 2- console.log(itemList.lastElementChild);
// 3- console.log(itemList.lastChild);
// 5- console.log(itemList.firstElementChild);
// 6- console.log(itemList.firstChild);
// 7- console.log(itemList.nextSibling);
// 8- console.log(itemList.nextElementSibling);
// 10- console.log(itemList.previousElementSibling);
// 9- console.log(itemList.previousSibling);


//4-11 Create Element/Child//

// var newDive = document.createElement('div');

// //Add class
// newDive.className = 'myclass';
// //Add Id
// newDive.id = 'myclassid';

// // 12-Set Attribute
// newDive.setAttribute('title', 'Hello div');

// // 13- Create TextNode  
// var newDivText = document.createTextNode('HEllo');

// // 14- Add Text to div
// newDive.appendChild(newDivText);
// console.log(newDive);
// newDive.style.fontSize = '30px';

// // 1- Add HEllo before Item Lister
// var container =  document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDive , h1);

// // 2- Add HEllo Before Item 1
// const newNode = document.createElement("div");
// const textNode = document.createTextNode("HEllo");
// newNode.appendChild(textNode);

// const list = document.getElementById("items");
// list.insertBefore(newNode, list.children[0]);