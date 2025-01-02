const circle = document.querySelector('.box');

circle.addEventListener('mousemove', (e) => {
    const rect = circle.getBoundingClientRect(); 
    const x = e.clientX - rect.left - rect.width / 2; 
    const y = e.clientY - rect.top - rect.height / 2; 

    const rotateX = -y / 15; 
    const rotateY = x / 15; 

    circle.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

circle.addEventListener('mouseleave', () => {
    circle.style.transform = 'rotateX(0) rotateY(0)'; 
});

var typed = new Typed('.element', {
  strings: ["Welcome", "Hello i'm"],
  typeSpeed: 300,
  backSpeed: 300,
  loop: true
});

document.addEventListener("scroll", () => {
  const box = document.querySelector(".box");
  const aboutSection = document.querySelector("#about");
  const aboutSectionTop = aboutSection.offsetTop;
  const currentScroll = window.scrollY;

  if (currentScroll >= aboutSectionTop - 550) { // Ketika hampir sampai di "about"
    gsap.to(box, {
      duration: 4, // Durasi animasi
      position: "absolute",
      top: aboutSectionTop + "px", // Pindahkan ke posisi "about"
      ease: "power2.out",
    });
  } else { // Ketika di atas section "about"
    gsap.to(box, {
      duration: 4,
      position: "absolute",
      top: "150px", // Kembali ke posisi awal di "home"
      ease: "power2.out",
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = document.querySelector(".logo");
    const logos = document.querySelectorAll(".logo img");
    const logoWidth = logos[0].offsetWidth; // Lebar satu logo
    const gap = 80; // Jarak antar logo
    const speed = 1.5; // Kecepatan perpindahan (px per frame)

    let offset = 0; // Posisi awal

    function animate() {
        offset -= speed;
        if (offset <= -(logoWidth + gap)) {
            // Pindahkan logo pertama ke akhir
            logoContainer.appendChild(logoContainer.firstElementChild);
            offset += logoWidth + gap;
        }
        logoContainer.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});
