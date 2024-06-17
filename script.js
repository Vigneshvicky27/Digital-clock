function time(){
    let clock = new Date()
    let hour = clock.getHours()
    let minute = clock.getMinutes()
    let second = clock.getSeconds()
    let ampm="Am"
    let date = clock.getDate()
    let month = clock.getMonth()
    let year = clock.getFullYear()

    if (hour>12){
       hour=hour-12
       ampm="Pm"
    }
    document.getElementById("times").innerHTML= hour +":"+ minute +":"+ second +" "+ ampm
    document.getElementById("dates").innerHTML= date +":"+ month +":"+ year
    
}

setInterval(()=>{
    time()
},1000)