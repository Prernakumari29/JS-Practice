function startDownload(){
    let progress = document.querySelector("#progress")
let percent = document.querySelector("#percent")
let button = document.querySelector("button")

let count=0;
let timer =setInterval(function(){
  if(count <= 99){
    count++;
    progress.style.width= `${count}%`
    percent.textContent = `${count}%`
    button.textContent = "downloading"
  }
  
   else{
        clearInterval(timer);
        button.textContent = "download again"
   }
   
  
}, 10000 /100);
}

