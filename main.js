//Sound Btns//
   const soundBtns = document.querySelectorAll(".soundBtn");

   soundBtns.forEach(soundBtn => {
      soundBtn.addEventListener('click', () => playSound(soundBtn))
   })

   function playSound(soundBtn){
      const noteAudio = document.getElementById(soundBtn.dataset.note)
      noteAudio.currentTime = 0
      noteAudio.play()
      soundBtn.addEventListener('ended', () => {
         soundBtn.classList.remove('active')
      })
   }

   