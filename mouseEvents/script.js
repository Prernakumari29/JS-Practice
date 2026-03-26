let div = document.querySelector("#box")

div.addEventListener("mouseover",function(){
    div.style.backgroundColor = "yellow"
})

div.addEventListener("mouseout" , function(){
    div.style.backgroundColor = "blue" 
})