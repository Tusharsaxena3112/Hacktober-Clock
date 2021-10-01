function update(){
    let time=new Date();
    let hrs=time.getHours();
    let suffix = hrs >= 12 ? "PM":"AM";
    hrs=((hrs % 12) || 12);
    document.getElementById('hours').innerHTML=hrs;
    let min=time.getMinutes();
    document.getElementById('minutes').innerHTML=min;
    let sec=(time.getSeconds())+' '+suffix;
    document.getElementById('seconds').innerHTML=sec;
}
setInterval(update,1000);