hands = document.querySelectorAll(".hand");
secondHand = document.querySelector(".second-hand");
minuteHand = document.querySelector(".min-hand");
hourHand = document.querySelector(".hour-hand");
removed_transition = false;

function setDate() {
   const now = new Date();

   const seconds = now.getSeconds();
   const secondsDeg = ((seconds / 60) * 360) + 90;
   
   const mins = now.getMinutes();
   const minsDeg = ((mins / 60) * 360) + 90;

   const hours = now.getHours();
   const hoursDeg = ((hours / 12) * 360) + 90;
   
   if (removed_transition) {
      hands.forEach(hand => hand.classList.remove("hand_trans"));
      removed_transition = false;
   }

   if (seconds == 0 || mins == 0 || hours == 12) {
      hands.forEach(hand => hand.classList.add("hand_trans")); 
      removed_transition = true;
   }

   secondHand.style.transform = `rotate(${secondsDeg}deg)`;
   minuteHand.style.transform = `rotate(${minsDeg}deg)`;
   hourHand.style.transform = `rotate(${hoursDeg}deg)`;

   // for debugging purposes
   // console.log(hours + "h " + mins + "m " + seconds + "s");
}

setInterval(setDate, 1000);
