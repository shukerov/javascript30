window.addEventListener('keydown', function(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   
   // if key pressed is not an audio element don't run
   if (!audio) return;

   audio.currentTime = 0;
   audio.play(); 
});
