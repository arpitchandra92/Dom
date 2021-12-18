var array = [];
var arr = [];
var newarr =[];
var currpage =0;
var pageresult =6;
var totalpage =0;
function previous()
{
    if(currpage>=1)
    {
        clearhtml()
        currpage--;
        newarr = arr.slice(currpage*pageresult, currpage*pageresult+pageresult);
        displaypage(newarr)
    }

}
function next()
{
    if(currpage<totalpage-1)
    {
        clearhtml()
        currpage++;
        newarr = arr.slice(currpage*pageresult, currpage*pageresult+pageresult);
        displaypage(newarr)

    }
   
}

function displaypage(resultarray)
{

    clearhtml();
    for(let i in resultarray)
    {
        addelements(resultarray[i]);

    }

}
function clearhtml()
{
    let x = document.getElementById("items");
    x.innerHTML = '';
}
function betterFunction(e)
{
    clearhtml();
    console.log(e.value);
    arr = array.filter(function(index){
        if(index.includes(e.value))
        {
            return index;
        }
    });
    totalpage = Math.floor(arr.length/pageresult);
    if(arr.length%pageresult!=0)
    {
        totalpage++;
    }
    let pagenumber = document.getElementById("pageno");
    pagenumber.innerHTML = totalpage;
    arr.sort();
    newarr = arr.slice(currpage*pageresult, currpage*pageresult+pageresult);
    displaypage(newarr);
}

function addelements(input)
{
    var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(input);         // Create a text node
        node.appendChild(textnode);  
        var items = document.getElementsByClassName("list-group-item");
        node.classList.add("list-group-item");
        document.getElementById('items').appendChild(node);
}
function callapplybind()
{
   
        fetch('https://random-word-api.herokuapp.com/word?number=300').then(function(response) {
    return response.json();
    }).then(function(data) {
        array = data;
    console.log(data);
    }).catch(function() {
    console.log("Booo");
    });

}

