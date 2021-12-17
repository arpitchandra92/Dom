// console.dir(document);

console.log(document.doctype);
console.dir(document);
console.log(document.forms);
console.log(document.getElementsByClassName('container'));


function myFunction(){
    var hearder_title = document.getElementById('header-title')
    console.log(hearder_title);
    hearder_title.textContent = "Finally";
    var button = document.querySelector("#button1");
    button.addEventListener('click',newfun);

    function newfun(e)
    {
        console.log(e);
    }

   

};

function uploade()
{
//     var x = document.getElementById('input').value;
//     console.log(x);
//     var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode(x);         // Create a text node
// node.appendChild(textnode);  
// // node.style.color = "white";
// // node.style.borderBottom = "solid";
// // node.style.backgroundColor = "blue";
// var items = document.getElementsByClassName("list-group-item");
// var li = document.querySelectorAll("li:nth-child(odd)");
// for(var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor = "#f4f4f4";
// }
// // for(var i =0;i<items.length;i++)
// // {

// //     items[i].style.color = "white";
// //     items[i].style.backgroundColor = "blue";
// // }
// node.classList.add("list-group-item");
//     document.getElementById('items').appendChild(node);
//     // console.log(y.innerHTML);
    // document.getElementById("items").appendChild(x);
    // y.innerHTML

    var item = document.querySelector("#items");
    item.parentElement.style.background = "#f4f4f4";
    console.log(item.parentElement);
    console.log(item.childNodes);
    // console.log(e);
    
}
// Reduce to get frequency and give the one with frequency one
// function click()
// {
//     function findSingle(arr) {
//         let newarr = arr.reduce((acc, item) => {
//          // add object key to our object i.e. charmander: { type: 'water' }
//         //  acc[item] =1;
//         if(acc[item])
//         {
//             acc[item]++;
//         }
//         else{
//             acc[item]=1
//         }
//          return acc;
//        }, {}).filter((arr)=>{arr.})
//        console.log(newarr);
      
//        for (let property in newarr) {
//        if (newarr[property] === 1){
//          return parseInt(property)
//        }
//        // your code here
//      }
     
//      }


//     // function findSingle(arr) {
//     //     let object = arr.reduce((acc, curr)=> {
//     //         if(acc[curr])
//     //         {
//     //             acc[curr]++;
//     //         }
//     //         else
//     //         {
//     //             acc[curr] =1;
//     //         }
//     //     //   acc[curr] ? acc[curr] += 1 : acc[curr] = 1
//     //       return acc
//     //     }, {})
//     //     console.log(object)
//     //     for (let property in object) {
//     //     if (object[property] === 1){
//     //       return parseInt(property)
//     //     }
//     //   }
//     //   }
//      const arr = [10, 2, 2 , 1, 0, 0, 10]
// let x = findSingle(arr); 
// console.log(x);
  

// }
//Obect, how to get keys, value, max and min, filter and how to create an object
function strcount(){
    function count(str) {
        const object = {};
        for(let letter of str)
        {
          if(object[letter])
          {
              object[letter]++;
      
          }
          else{
            object[letter] =1;
          }
        } 
        console.log(object);
        let arr = Object.values(object);
        console.log(arr);
        let max = Math.max(...arr);
        console.log(max);
        let finalarr = Object.keys(object)
        console.log(finalarr);
        let result = finalarr.filter(k => object[k]==max);
        return result
          // your code here
      }
      let x =count('abbcccddd');
      console.log(x);


}




// myFunction();
// document.all[10].textContent = "YESSSSSSSSSSSS";