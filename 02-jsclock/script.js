secondHand = document.querySelector(".second-hand");
minuteHand = document.querySelector(".min-hand");
hourHand = document.querySelector(".hour-hand");

function setDate() {
   const now = new Date();
   const seconds = now.getSeconds();
   const secondsDeg = ((seconds / 60) * 360) + 90;

   secondHand.style.transform = `rotate(${secondsDeg}deg)`;

   const mins = now.getMinutes();
   const minsDeg = ((mins / 60) * 360) + 90;
   minuteHand.style.transform = `rotate(${minsDeg}deg)`;

   const hours = now.getHours();
   const hoursDeg = ((hours / 12) * 360) + 90;
   hourHand.style.transform = `rotate(${hoursDeg}deg)`;

   // for debugging purposes
   // console.log(hours + "h " + mins + "m " + seconds + "s");
}

setInterval(setDate, 1000);
