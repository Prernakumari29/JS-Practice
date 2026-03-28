let prom = new Promise(function(res , rej){
    setTimeout(()=>{
        let val = Math.floor(Math.random()*10)
        if(val > 5 ) res("resolve chla " + val)
        else rej("reject chla " + val)    
    },2000)
})

prom
   .then(function(val){
          console.log(val)
   })

   .catch(function(val){
    console.log(val)
   })