function update(){
    let time=new Date();
    let hrs=time.getHours();
    document.getElementById('hours').innerHTML=hrs;
    let min=time.getMinutes();
    document.getElementById('minutes').innerHTML=min;
    let sec=time.getSeconds();
    document.getElementById('seconds').innerHTML=sec;
    let date=time.getUTCDate();
    let month=time.getUTCMonth();
    let year=time.getFullYear();
    document.getElementById('date').innerHTML=date+' '+monthName(month+1)+', '+year;
}

function monthName(mNumber){
    var mName = new Array(12);
    mName[1] = 'Jan';
    mName[2] = 'Feb';
    mName[3] = 'March;';
    mName[4] = 'April';
    mName[5] = 'May';
    mName[6] = 'June';
    mName[7] = 'July';
    mName[8] = 'Aug';
    mName[9] = 'Sep';
    mName[10] = 'Oct';
    mName[11] = 'Nov';
    mName[12] = 'Dec';
    return mName[mNumber];
}

setInterval(update,500);