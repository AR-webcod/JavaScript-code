// Eid ul Adha Date
let eidDate = new Date("May 27, 2026 00:00:00").getTime();

let timer = setInterval(function () {

  let now = new Date().getTime();

  let distance = eidDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  let hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  let minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  let seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // END TIMER
  if (distance < 0) {

    clearInterval(timer);

    document.querySelector(".counter").innerHTML =
      "<h2 class='celebrate'> Eid ul Adha Mubarak </h2>";

    startFireworks();
  }

}, 1000);


// FIREWORKS WITH FIRECRACKER BURST
function startFireworks() {

  const canvas = document.getElementById("fireworks");

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function createFirework(x, y) {

    for (let i = 0; i < 150; i++) {

      particles.push({
        x: x,
        y: y,

        radius: Math.random() * 4 + 1,

        color: `hsl(${Math.random() * 360},100%,50%)`,

        speedX: (Math.random() - 0.5) * 15,

        speedY: (Math.random() - 0.5) * 15,

        gravity: 0.1,

        life: 1,

        decay: Math.random() * 0.02 + 0.01
      });

    }

  }

  function createFirecracker(x, y) {
    // Intense burst for firecracker effect
    for (let i = 0; i < 200; i++) {
      const angle = (Math.PI * 2 * i) / 200;
      const speed = Math.random() * 12 + 8;
      
      particles.push({
        x: x,
        y: y,
        radius: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 60 + 0},100%,50%)`, // Reds, oranges, yellows
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        gravity: 0.15,
        life: 1,
        decay: Math.random() * 0.025 + 0.015
      });
    }
  }

  function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {

      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.speedY += particle.gravity;
      particle.life -= particle.decay;
      particle.radius *= 0.96;

      ctx.beginPath();

      ctx.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.life;
      ctx.fill();
      ctx.globalAlpha = 1;

      if (particle.radius < 0.5 || particle.life <= 0) {
        particles.splice(index, 1);
      }

    });

    requestAnimationFrame(animate);
  }

  // Create firecracker bursts at different locations
  createFirecracker(canvas.width / 2, canvas.height / 2);
  
  setTimeout(() => createFirecracker(canvas.width * 0.3, canvas.height * 0.4), 300);
  setTimeout(() => createFirecracker(canvas.width * 0.7, canvas.height * 0.4), 600);
  setTimeout(() => createFirecracker(canvas.width * 0.4, canvas.height * 0.6), 900);
  setTimeout(() => createFirecracker(canvas.width * 0.6, canvas.height * 0.5), 1200);
  
  // Multiple firecracker bursts for continuous effect
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const randomX = Math.random() * canvas.width * 0.6 + canvas.width * 0.2;
      const randomY = Math.random() * canvas.height * 0.6 + canvas.height * 0.2;
      createFirecracker(randomX, randomY);
    }, 1500 + i * 400);
  }

  animate();
}