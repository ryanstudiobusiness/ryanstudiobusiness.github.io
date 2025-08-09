const display = document.getElementById('timer');

window.addEventListener('DOMContentLoaded', () => {
  let countdown = 5;
  display.textContent = countdown;

  // countdown by one every second (1000ms)
  const interval = setInterval(() => {
    countdown--;
    display.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(interval);
      // redirect when 0
      window.location.href = '../index.html';
    }
  }, 1000);
});
