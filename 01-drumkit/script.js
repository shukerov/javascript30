window.addEventListener('keydown', function(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

   // if key pressed is not an audio element don't run
   if (!audio) return;
   
   key.classList.add('playing');
   audio.currentTime = 0;
   audio.play(); 

});

function removeTransition(e) {
   if (e.propertyName !== 'transform') return; // skip if not a transform

   this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
