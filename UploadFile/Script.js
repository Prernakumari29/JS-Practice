let inputType = document.querySelector("#inputt")
let btn = document.querySelector("#btn")

btn.addEventListener("click" , function(){

    inputType.click();
})

inputType.addEventListener("change" , function(dets){
   let files = dets.target.files[0]
   if(files ){
    btn.textContent = files.name
    
   }

}) 