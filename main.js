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
  25: {
  title: "25 de diciembre",
  text: `Hoy es Navidad 🎄

Princesita mía, quiero que este día te envuelva en calma, en luz y en sonrisas sinceras. Que cada momento tenga un poquito de paz y que sientas, incluso en lo pequeño, lo especial que eres.

La Navidad no siempre se vive en los lugares, sino en los corazones que se sienten cerca, aun cuando la distancia existe. Y hoy, mi corazón está contigo.

Quiero dedicarte una parte del libro que guardo en mi corazón:
“Me enamoré… y me enamoré tanto, que a veces miro a las personas a mi alrededor y les hago el favor de desearles que algún día puedan sentir lo que siento yo contigo.”

Gracias por ser abrigo, por ser ternura, y por llenar mis días de sentido.

Gracias por hacerme tan feliz, mi vida 🤍`,
  img: "IMG/fondo_pixar2.png"
},
  26: {
  title: "26 de diciembre",
  text: `Hoy es 26 de diciembre y quiero que esta carta sea un recordatorio de ese momento mágico en que sentí que me enamoraba profundamente de ti. Fue un domingo, después de un evento, y creo que fue en diciembre, porque en enero me estaba negando a aceptar mis sentimientos hacia ti, especialmente imaginando esas típicas escenas tan románticas que de enamorado uno se imagina.

Recuerdo que estabas en la planta baja y subiste al mezanine justo antes de que terminara el culto. Te sentaste a mi lado, nos saludamos y te quedaste conmigo. Me encantó cuando enlazaste tu mano en mi brazo y empezamos a jugar.

No recuerdo por qué estaba molestándote, pero sí recuerdo que intenté hacerte cosquillas en la rodilla y tú me detuviste, diciendo que eras sensible a eso. Me dejó un poco confundida, pero no puedo negar que me puse nerviosa.

Lo que realmente me marcó fue cuando te miré a los ojos y me quedé sin aliento. Sentí una conexión tan fuerte que no puedo explicar lo que pasó en ese momento.

Por un instante, tuve la esperanza de que podríamos ser algo más que amigas, aunque una parte de mí pensaba que no era posible. Pero esa pequeña esperanza fue suficiente para que hoy estemos juntas, celebrando nuestro segundo fin de año como pareja.

No puedo imaginar mi vida sin ti ahora. Te amo cada día más y quiero seguir explorando esta aventura juntas.
Feliz casi año nuevo, mi amor ♥️`,
  img: "IMG/foto26.jpeg",
},
  27: {
  title: "27 de diciembre",
  text: `Nunca fui buena diciendo lo que pienso. Muchas veces creo que ya lo dije, pero en realidad solo lo pensé.

Como cuando estás frente a mí, te veo hermosa y pienso lo bella que estás, pero no lo digo. No porque no me lo parezca, sino porque me quedo estúpida mirándote.

Como aquella vez que te acompañé a la peluquería, o cuando estabas en la renovación de votos de tus padres, con ese vestido precioso y un modelo increíble. Lo pensé tanto, que no sé si por eso nunca lo mencioné.

Quiero decir… no soy muy buena explicando lo que pienso, pero hoy quiero usar esta carta para decir aquello que nunca dije.

Como cuando me recosté sobre tu pecho mientras veíamos la cancha de fútbol. Nunca antes me habían parecido lindos los latidos de un corazón, pero escuché los tuyos y sentí algo tan íntimo contigo… ojalá nadie más pueda escucharlos como yo.

Hay tantas cosas. Como cuando te miro recostada, distraída en el celular, y no puedo evitar pensar en lo afortunada que soy, en lo especial que me haces sentir y en lo increíble que eres para mí.

No lo he dicho, pero hay veces que no soporto verte enfermita o triste. Si tuviera el poder de quitarte cada herida y cargarla con su peso, juro que lo haría.

Te escribo esto con la intención de que entiendas que por ti doy todo lo que haga falta.

Te amo con todo mi corazón, preciosa.`,
  img: "IMG/foto27.jpeg"
}
,
28: {title: "28 de diciembre",
  text: `Hay noches que no se compran a ninguna, sabes lo que pensé cuando miré esta imagen: un cielo lleno de luces que no se quedan quietas, una ciudad que respira tranquila. Un cielo que arde en colores, parece que todo está lleno de vida. No pude evitar pensar en ti, Van Gogh

Pensaba hace un momento: El amor no siempre es parejo, es ir más allá de los pensamientos que no necesitan palabras. Es sentir que el mundo puede contigo, pero tener en donde descansar, tú eres mi lugar seguro. Y te quiero agradecer porque a veces eres luz incluso cuando todo parece oscuro.

Puedo decir que eres ese punto de esperanza delicada que siempre me acompaña, las estrellas de esta noche no necesitan gritar para brillar. Y en el amor, tú haz sabido marcar la diferencia en mi vida. No con regalos, no con material, es tu manera de amar. Si alguna vez, en medio de cualquier situación, en algún cielo revuelto, oscuro, nublado o despejado, blanco, azul o gris, dudas de mi amor, recuerda: yo siempre te elegiría a ti como mi lugar de calma.

Antes de terminar esta carta, quiero decirte que amarte se siente así, como una noche infinita, hermosa, viva, llena de colores. Te amo, mi amor.`,
  img: "IMG/foto28.jpeg"
},
  29: { title: "29 de diciembre",
    text: `Mi amor... y pensar que me negaba a sentir algo, y terminé sintiendo de todo. Creo que me salió bien, porque amo sentir esto contigo, y quiero que sea para siempre.

Eres la persona más especial que tengo en mi vida. Gracias por brindarme de tu tiempo en cualquier situación en la que nos encontremos, tristes o felices, molestas o contentas, en persona o a través de una pantalla. Me has dedicado tanto que con el simple hecho de cerrar mis ojos y pensar en lo afortunada que soy al tenerte a mi lado, es suficiente para despertar cada día y amarte aún más que ayer.

Te quiero con todos tus cambios de humor, con tus dramas, con tus defectos... aunque pensándolo bien, eres perfecta tal como eres. Disfruto la forma en que me haces reír, la forma en que me apoyas, y la forma en que me amas.

Te amo con todos tus gustos musicales, con las afinidades de tus películas favoritas, con tu obsesión por la lectura, te quiero en todas tus versiones. Y déjame decirte que quiero ser la que te haga sonreír cuando estés triste, la que te abrace cuando necesites consuelo, y la que celebre contigo, tus momentos de triunfo.

De verdad, es precioso tener a alguien como tú, con la capacidad y la facilidad de robarme una sonrisa incluso cuando estamos a kilómetros de distancia. Y me encanta, el saber que puedo hacerte sonreír también, incluso desde la distancia. Para mí, también es un regalo poder compartir momentos contigo.

Quiero que sepas que estás en mis pensamientos y en mi corazón, incluso cuando no estoy físicamente contigo. Te mando todo mi amor y mi cariño, y espero que pronto podamos estar juntas de nuevo, celebrando un nuevo año a tu lado.

Te amo, mi amor, y quiero pasar el resto de mi vida contigo.`,
    img: "IMG/foto29.jpeg" },
  30: { title: "30 de diciembre",
    text: `Mi amor! Estamos a un día de culminar este año...
Te he agradecido por todo lo que me has brindado, pero en esta carta, quiero exponerte algunos de mis anhelos junto a ti.
Nunca me mentalicé niños, ni en ningún momento un matrimonio, reconozco que soy un poco áspera para los pequeños, y que carezco de paciencia. En mi pensar el compromiso no estaba en una firma sobre un papel, sino en la responsabilidad que tomas sobre el sentir de la otra persona.

Sin embargo, hace ya varios meses que no pienso igual, hace ya varios meses que miro el concepto de una familia desde otro punto de vista, hace ya meses que no puedo evitar verte cerca de algún pequeño y pensar "Es que siendo madre se vería hermosa".

Reconozco que desde que ingresaste a mi vida los cambios nunca faltaron, dejé hábitos que me hacían daño, y empecé a trabajar en mi, aunque en un principio lo hacía por ti, me permitiste entender que no es por los demás sino por mi mismo.

Y hoy, no puedo mirar hacia nuestro futuro, sin imaginar a dos pequeños de nuestra mano (Aunque a veces te pido tres)
Solo quiero vivir una vida a tu lado, construir un hogar, y que nuestra familia sea el centro de nuestra vida. 

Y si me preguntas, qué es lo que anhelo contigo?
Que mi pequeña princesita tenga tus ojos. Que mi pequeñito sepa amar y cuidar a su hermanita. Que mi esposa tenga una familia bonita. Que mi esposa sea feliz. Que mi hogar se mantenga siempre unido. Que el amor nunca falte en nuestra casa.

Te amo, y todo esto solamente lo he anhelado contigo, y sinceramente, no quiero idealizarlo con nadie más. Un beso Giogia mia ♥️`,
    img: "IMG/foto30.jpeg" },
  31: { title: "31 de diciembre",
    text: `Este no es un final. Es solo una pausa para abrazar lo que viene 💫
    Hey! esta carta está muy pesada... Espera un poco más!`,
    img: "IMG/foto31.jpeg" }
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
