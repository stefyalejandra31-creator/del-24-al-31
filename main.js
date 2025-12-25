// ===============================
// ELEMENTOS
// ===============================
const days = document.querySelectorAll(".day");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// ===============================
// CONFIG
// ===============================
const DEV_MODE = false; // 👉 cambia a false al final
const today = new Date();
const currentDay = today.getDate();

// ===============================
// CONTENIDO POR DÍA
// ===============================
const dayContent = {
  24: {
    title: "24 de diciembre",
    text: `Hoy comienza este pequeño regalo, hecho con todo mi amor.

Princesita mía, hoy es 24 de diciembre y empiezan los días más bonitos, llenos de amor y magia. Quiero empezar agradeciendo todo el amor que me has brindado y el apoyo incondicional que siempre siento de ti.

Eres una mujer espectacular y estoy profundamente agradecida de tenerte en mi vida; eres el regalo más hermoso que podría pedir.

Aunque estemos lejos, quise hacerte un detallito para que sepas que estás en mis pensamientos y en mi corazón. Espero que disfrutes de este pequeño gesto, preparado con mucho amor.

Antes de cerrar esta tarjeta, quiero decirte que te amo profundamente. Gracias a ti, he entendido que la verdadera esencia de la Navidad no está en los regalos bajo el árbol, sino en las personas que nos acompañan.

Gracias por ser una mujer excepcional y por hacer que esta sea una de muchas Navidades juntas.

Te amo mucho, Gioia mía ❤️`,
    img: "IMG/foto24.jpeg"
  },
  25: { title: "25 de diciembre", text: "Feliz Navidad 🎄 Que esta noche sea tranquila y bonita.", img: "IMG/dia25.png" },
  26: { title: "26 de diciembre", text: "Hay recuerdos simples que se quedan para siempre.", img: "IMG/dia26.png" },
  27: { title: "27 de diciembre", text: "Admiro más cosas de ti de las que digo.", img: "IMG/dia27.png" },
  28: { title: "28 de diciembre", text: "Ojalá hoy sonrías sin darte cuenta.", img: "IMG/dia28.png" },
  29: { title: "29 de diciembre", text: "Gracias por existir, así, tal cual eres.", img: "IMG/dia29.png" },
  30: { title: "30 de diciembre", text: "Mañana termina este año… y sigo agradeciendo.", img: "IMG/dia30.png" },
  31: { title: "31 de diciembre", text: "Este no es un final. Es solo una pausa para abrazar lo que viene 💫", img: "IMG/dia31.png" }
};

// ===============================
// TARJETAS
// ===============================
days.forEach(day => {
  const d = parseInt(day.dataset.day);

// 🔒 Bloqueo por fecha (se desbloquea a las 12:00 am)
if (!DEV_MODE && d > currentDay) {
  day.classList.add("locked");
  return;
}


  day.addEventListener("click", () => {
    const content = dayContent[d];
    if (!content) return;

    // ✨ Animación tarjeta
    gsap.fromTo(day, { scale: 1 }, { scale: 0.92, duration: 0.2, yoyo: true, repeat: 1 });

    // 🧠 Título
    modalTitle.textContent = content.title;

    // 🧹 Limpiar texto
    modalText.innerHTML = "";

    // ✍️ Crear líneas
    const lines = content.text.split("\n");

    lines.forEach(line => {
      const p = document.createElement("p");
      p.className = "modal-line";
      p.textContent = line;
      modalText.appendChild(p);
    });

    // 🖼 Imagen
    modalImg.src = content.img;
    modalImg.alt = content.title;
    modalImg.style.display = "block";

    // 📦 Mostrar modal
    modal.style.display = "flex";

    // 🎬 Animación modal
    gsap.from(".modal-content", {
      y: 40,
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "power3.out"
    });

    // 🖼 Imagen suave
    gsap.fromTo("#modal-img",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    // ✨ Texto línea por línea
    gsap.fromTo(".modal-line",
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.4,
        ease: "expo.out"
      }
    );

    // 🌟 Efecto especial día 31
    if (d === 31) {
      gsap.fromTo(".modal-content",
        { boxShadow: "0 0 0 rgba(255,255,255,0)" },
        {
          boxShadow: "0 0 30px rgba(255,255,255,0.35)",
          duration: 2,
          repeat: -1,
          yoyo: true
        }
      );
    }
  });
});

// ===============================
// CERRAR MODAL
// ===============================
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
