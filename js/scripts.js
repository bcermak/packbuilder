// console log clicked items

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");
const item7 = document.getElementById("item7");
const item8 = document.getElementById("item8");
const item9 = document.getElementById("item9");
const item10 = document.getElementById("item10");

const array = [item1, item2 ]

item1.addEventListener("click", myFunction1);
item2.addEventListener("click", myFunction2);
item3.addEventListener("click", myFunction3);
item4.addEventListener("click", myFunction4);
item5.addEventListener("click", myFunction5);
item6.addEventListener("click", myFunction6);
item7.addEventListener("click", myFunction7);
item8.addEventListener("click", myFunction8);
item9.addEventListener("click", myFunction9);
item10.addEventListener("click", myFunction10);

function myFunction1() {
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "limegreen";
    listDiv.append(this);

}

function myFunction2(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "limegreen";
    listDiv.append(this);
}

function myFunction3(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "limegreen";
    listDiv.append(this);
}

function myFunction4(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "limegreen";
    listDiv.append(this);
}

function myFunction5(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "limegreen";
    listDiv.append(this);
}

function myFunction6(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "limegreen";
    listDiv.append(this);
}

function myFunction7(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "limegreen";
    listDiv.append(this);
}

function myFunction8(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "limegreen";
    listDiv.append(this);
}

function myFunction9(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "limegreen";
    listDiv.append(this);
}

function myFunction10(){
    let listDiv = document.getElementById("listDiv");
    this.style.backgroundColor = "limegreen";
    listDiv.append(this);
}