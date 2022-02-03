// console log clicked items

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");

const array = [item1, item2 ]

item1.addEventListener("click", myFunction1);
item2.addEventListener("click", myFunction2);
item3.addEventListener("click", myFunction3);
item4.addEventListener("click", myFunction4);

function myFunction1() {
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "lightgreen";
    listDiv.append(this);

}

function myFunction2(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "purple";
    listDiv.append(this);
}

function myFunction3(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "pink";
    listDiv.append(this);
}

function myFunction4(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "yellow";
    listDiv.append(this);
}