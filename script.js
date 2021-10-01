function update(){
    let time=new Date();
    let hrs=time.getHours();
    document.getElementById('hours').innerHTML=hrs;
    let min=time.getMinutes();
    document.getElementById('minutes').innerHTML=min;
    let sec=time.getSeconds();
    document.getElementById('seconds').innerHTML=sec;
}
setInterval(update,1000);