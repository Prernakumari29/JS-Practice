let sel = document.querySelector("select");
let h3 = document.querySelector("h3")

sel.addEventListener("change" , function(dets){
    console.log(dets.target.value)
    if(dets.target.value !== null){
      h3.textContent = "you selected your device"
    }

})
