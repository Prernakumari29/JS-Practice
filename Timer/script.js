let sec =0 ;
let min = 0;
let hrs = 0;

let timer;
let pausedtime =null;
function start(){

    if (timer === null){
   timer = setInterval(()=>{
        sec++;

        if(sec==60){
            sec= 0;
            min++;
        }
        if(min == 60){
            min=0;
            hrs++;
        }

        let s = sec < 10 ? "0"+sec : sec;
        let m = min <10 ? "0"+min : min; 
        let h = hrs < 10 ? "0"+hrs : hrs;

        document.querySelector("#timer").textContent = `${h}:${m}:${s}`

    },50)

    document.querySelector("button").textContent = "pause"
}
    else {
    // PAUSE
    clearInterval(timer);
    timer = null;
   
    document.querySelector("button").textContent = "Start";
     pausedtime = {hrs , min , sec}
    
    

    
  }
  document.querySelector("h3").textContent = pausedtime 

}