// console log clicked items

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");

const array = [item1, item2 ]

item1.addEventListener("click", myFunction1);
item2.addEventListener("click", myFunction2)
item3.addEventListener("click", myFunction3);
item4.addEventListener("click", myFunction4)

function myFunction1() {
    this.style.backgroundColor = "lightgreen";
    console.log(this);
}

function myFunction2(){
    this.style.backgroundColor = "purple";
    console.log(this);
}

function myFunction3(){
    this.style.backgroundColor = "pink";
    console.log(this);
}

function myFunction4(){
    this.style.backgroundColor = "yellow";
    console.log(this);
}