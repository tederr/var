// script.js
let currentStep = 0;
function showNext() {
  const totalSteps = 19;
  if (currentStep <= totalSteps) {
    const current = document.getElementById(`step${currentStep}`);
    const next = document.getElementById(`step${currentStep + 1}`);
    if (current) current.classList.add('hidden');
    if (next) next.classList.remove('hidden');
    currentStep++;
    if (currentStep === 19) {
      launchConfetti();
    }
  }
}

function replay(event) {
  event.stopPropagation();
  for (let i = 1; i <= 19; i++) {
    const step = document.getElementById(`step${i}`);
    if (step) step.classList.add('hidden');
  }
  currentStep = 0;
  document.getElementById('step0').classList.remove('hidden');
}

function launchConfetti() {
  const container = document.getElementById('confetti-container');
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}

const style = document.createElement('style');
style.innerHTML = `
.confetti {
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  background-color: hsl(${Math.random() * 360}, 70%, 60%);
  opacity: 0.7;
  animation: fall 4s linear forwards;
  border-radius: 50%;
}
@keyframes fall {
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
