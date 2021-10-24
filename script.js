function update() {
  let time = new Date();
  let hrs = time.getHours();
  let suffix = hrs >= 12 ? "PM" : "AM";
  hrs = hrs % 12 || 12;
  document.getElementById("hours").innerHTML = hrs;
  let min = time.getMinutes();
  document.getElementById("minutes").innerHTML = min;
  let sec = time.getSeconds() + " " + suffix;
  document.getElementById("seconds").innerHTML = sec;
  let date = time.getUTCDate();
  let month = time.getUTCMonth();
  let year = time.getFullYear();
  document.getElementById("date").innerHTML =
    date + " " + monthName(month + 1) + ", " + year;
}

function monthName(mNumber) {
  var mName = new Array(12);
  mName[1] = "Jan";
  mName[2] = "Feb";
  mName[3] = "March;";
  mName[4] = "April";
  mName[5] = "May";
  mName[6] = "June";
  mName[7] = "July";
  mName[8] = "Aug";
  mName[9] = "Sep";
  mName[10] = "Oct";
  mName[11] = "Nov";
  mName[12] = "Dec";
  return mName[mNumber];
}

//! Change background code
// Function is attached to button and changes background_video which we have mentioned in array
let background_video = ["Pexels Videos 4703.mp4", "2.mp4", "3.mp4"];
let i = 0;
changeBackground = () => {
  i = (i + 1) % background_video.length;
  document.getElementById("myVideo").src = background_video[i];
};
setInterval(update, 500);
