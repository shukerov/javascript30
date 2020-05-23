const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// add evenet listener
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

let lastChecked;

function handleCheck(e) {
   let inBetween = false;
   if(e.shiftKey && this.checked) {
      //blalblab
      // loop over every single checkbox
      checkboxes.forEach(c => {
         console.log(c);
         if(c === this || c === lastChecked) {
            inBetween = !inBetween;
            console.info("start-end");
         }

         if (inBetween) {
            c.checked = true;
         }
      });
      
   }

   lastChecked = this;
}
