 
 
 document.addEventListener("DOMContentLoaded", () => {
      const heartsContainer = document.querySelector('.hearts');
      const music = document.getElementById('bg-music');
      const volumeControl = document.getElementById('volumeControl');

      // Geração dos corações 
      function createHeart() {
        const heart = document.createElement('span');
        const sizes = ['small', 'medium', 'large'];
        const emojis = ['💗', '💖', '💕', '🦇'];
        
        heart.classList.add('heart', sizes[Math.floor(Math.random() * sizes.length)]);
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 8000);
      }

      setInterval(createHeart, 600);

      // Controle de volume 
      volumeControl.addEventListener('input', () => {
        music.volume = volumeControl.value;
      });
      
    });

    function updateDatingTimer() {
  const now = new Date();
  // Ajuste para fuso de Brasília
  const nowBRT = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));

  const startDate = new Date("2020-11-11T00:00:00-03:00");

  let years = nowBRT.getFullYear() - startDate.getFullYear();
  let months = nowBRT.getMonth() - startDate.getMonth();
  let days = nowBRT.getDate() - startDate.getDate();
  let hours = nowBRT.getHours() - startDate.getHours();
  let minutes = nowBRT.getMinutes() - startDate.getMinutes();

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    // obtém número de dias no mês anterior
    const prevMonth = new Date(nowBRT.getFullYear(), nowBRT.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
}

// Atualiza a cada segundo
setInterval(updateDatingTimer, 1000);
updateDatingTimer(); // primeira chamada imediata
