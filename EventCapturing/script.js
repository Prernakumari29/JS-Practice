let btn = document.querySelector("button");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");


btn.addEventListener("click" , function(){
    console.log("clicked")
})

box1.addEventListener("click" , function(){
    console.log("box1 clicked")
})

box2.addEventListener("click" ,function(){
    console.log("box2 clicked")
},true)

box3.addEventListener("click" ,function(){
    console.log("box3 clicked")
})