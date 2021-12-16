// console.dir(document);

console.log(document.doctype);
console.dir(document);
console.log(document.forms);
console.log(document.getElementsByClassName('container'));


function myFunction(){
    var hearder_title = document.getElementById('header-title')
    console.log(hearder_title);
    hearder_title.textContent = "Finally";

   

};

function uploade()
{
    var x = document.getElementById('input').value;
    console.log(x);
    var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode(x);         // Create a text node
node.appendChild(textnode);  
node.classList.add("list-group-item");
    document.getElementById('items').appendChild(node);
    // console.log(y.innerHTML);
    // document.getElementById("items").appendChild(x);
    // y.innerHTML
}

function click()
{
    var x = document.getElementById('myForm');
    console.log(x);
  

}


// myFunction();
// document.all[10].textContent = "YESSSSSSSSSSSS";