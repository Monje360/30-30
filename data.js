// ============================================================
// CONTENIDO DE TRABAJO — Treinta Más Treinta
// Trimestre operativo: junio · julio · agosto 2026
// Foco geográfico: Madrid. Foco temático: arte y cultura amplios.
// ============================================================

window.TMT = {};

// -------------------------------------------------------------
// COMPETENCIA — scraping y posicionamiento
// -------------------------------------------------------------
window.TMT.competencia = [
  {
    n: "01",
    handle: "@timeoutmadrid",
    tipo: "Agenda mainstream",
    fortaleza: "Volumen masivo y SEO de eventos. Aparecen primero en Google para casi cualquier búsqueda de \"qué hacer en Madrid\".",
    debilidad: "Cero criterio editorial. Lista todo, recomienda nada. El usuario sigue teniendo que filtrar.",
    aprendizaje: "Nosotros sí filtramos. Nuestra ventaja es que decimos qué vale la pena, no qué existe."
  },
  {
    n: "02",
    handle: "@secretomadrid · @madridmemola",
    tipo: "Tips de lugares ocultos",
    fortaleza: "Funcionan bien con saves. Han educado al público en \"el Madrid escondido\".",
    debilidad: "Sin tono adulto. Hablan a todo el mundo y por tanto a nadie. Reels-clickbait sin profundidad.",
    aprendizaje: "Mismo género (lugares ocultos) pero con voz +30. No \"alucinarás con esto\", sino \"esto es lo que merece la pena saber\"."
  },
  {
    n: "03",
    handle: "@museodelprado · @museoreinasofia",
    tipo: "Instituciones culturales",
    fortaleza: "Acceso a obra y archivo. Autoridad incuestionable. Producción audiovisual cuidada.",
    debilidad: "Voz institucional, distante. Barrera para el neófito que se siente fuera de lugar.",
    aprendizaje: "Misma profundidad de contenido, voz de amigo informado. La autoridad sin la distancia."
  },
  {
    n: "04",
    handle: "@somossecretos",
    tipo: "Club de membresía similar",
    fortaleza: "Han ocupado el espacio \"club privado\". Comunidad real y vinculada.",
    debilidad: "Contenido público escaso. La marca solo se entiende si ya estás dentro. Filtro económico alto.",
    aprendizaje: "Diferenciación clara: contenido público fuerte como puerta de entrada. Cualquiera puede aprender de nosotros antes de pagar un euro."
  },
  {
    n: "05",
    handle: "@infomadridplus · agendas locales",
    tipo: "Agendas sin marca",
    fortaleza: "Son útiles. Cumplen su función práctica.",
    debilidad: "Cero personalidad. Indistinguibles entre sí.",
    aprendizaje: "La utilidad sin la marca es commodity. Construir marca = cobrar peaje editorial sobre la utilidad."
  },
  {
    n: "06",
    handle: "Influencers culturales / lifestyle",
    tipo: "Personalidades individuales",
    fortaleza: "Cercanía. Engagement personal alto.",
    debilidad: "Vinculados a una persona, no escalables. Postureo de fondo. Mezclan cultura con marca personal.",
    aprendizaje: "Marca como persona colectiva — varias voces editoriales bajo un mismo punto de vista. Más sólido que apostar por un único rostro."
  }
];

window.TMT.guias = [
  {
    n: "01",
    titulo: "Madrid 100% en todo lo que publicamos.",
    desarrollo: "Si una pieza puede funcionar en Madrid o Barcelona indistintamente, está mal hecha. Nuestra ventaja es la mirada local profunda — barrios, esquinas, personas, oficios concretos."
  },
  {
    n: "02",
    titulo: "Arte y cultura entendidos en sentido amplio.",
    desarrollo: "Museos sí, pero también conciertos, ópera, jazz, flamenco, librerías de barrio, restaurantes con historia, mercadillos, festivales urbanos, gastronomía con relato. La cultura no es solo lo que está colgado en una pared."
  },
  {
    n: "03",
    titulo: "Voz de amigo informado, no de institución.",
    desarrollo: "Tu mejor amigo culto que vive en Madrid, no un museo. \"Esto es lo que yo haría este sábado\", no \"se recomienda visitar\". Cercanía con criterio, no postureo con datos."
  },
  {
    n: "04",
    titulo: "Saves > likes. Siempre.",
    desarrollo: "El like es aprobación pasiva. El save es \"esto me sirve y volveré a ello\". Cada pieza se diseña para que merezca guardarse. Si no es guardable, no se publica."
  },
  {
    n: "05",
    titulo: "Nunca turismo, nunca clickbait.",
    desarrollo: "Cero \"alucinarás\", \"increíble\", \"top secret\". Cero contenido que un visitante de fin de semana podría replicar. Hablamos a madrileños o a gente que vive Madrid como si fuera suya."
  },
  {
    n: "06",
    titulo: "Cada pieza apunta a algo.",
    desarrollo: "Engagement, lead magnet activo o WhatsApp. Ninguna pieza orgánica se publica por publicar. Si no tiene función en el embudo, no entra en el calendario."
  }
];

// -------------------------------------------------------------
// PILARES EDITORIALES — marco interno
// -------------------------------------------------------------
window.TMT.pilares = [
  {
    n: "I",
    nombre: "Mirada experta",
    resumen: "Descubrir lo que nadie te cuenta.",
    desarrollo: "Detalles que llevas pasando por alto, lecturas de obras que cambian la próxima visita, historias detrás de edificios, barrios y oficios. Entrena el ojo. Construye autoridad cultural.",
    formatos: "Reels R1 · R4 · Carruseles C1 · Lead magnets de descodificación cultural."
  },
  {
    n: "II",
    nombre: "Patrimonio vivo",
    resumen: "Personas que mantienen viva la cultura.",
    desarrollo: "Libreros de Moyano, programadores del Doré, anticuarios del Rastro, comisarios, restauradores, dueños de tablaos. Los oficios y voces que sostienen el Madrid cultural desde dentro.",
    formatos: "Reels R2 · Carruseles C3 · Lead magnets de figuras y lugares."
  },
  {
    n: "III",
    nombre: "Comunidad +30",
    resumen: "Vida cultural real, sin postureo.",
    desarrollo: "Cómo es realmente un sábado culto adulto en Madrid. Vivencias de miembros, planes reales contados por dentro, conversaciones sin pose. Pertenencia sin filtro.",
    formatos: "Reels R3 · R5 · Stories sostenidas · WhatsApp."
  },
  {
    n: "IV",
    nombre: "Ritual cultural",
    resumen: "Micro-hábitos para la vida adulta.",
    desarrollo: "Cómo iniciarse en ópera, planear una tarde de jazz, descubrir un barrio nuevo, leer un cuadro en 20 minutos. Plantillas y rituales pequeños que hacen que la cultura quepa en una agenda ocupada.",
    formatos: "Carruseles C2 · C4 · Lead magnets prácticos · Newsletter."
  }
];

// -------------------------------------------------------------
// REELS — 12 piezas DESARROLLADAS al 100% · Madrid · jun-ago
// Formatos en rotación: R1 (mirada) · R2 (oficios) · R3 (plan) · R4 (hot take) · R5 (detrás)
// -------------------------------------------------------------
window.TMT.reels12 = [
  {
    id: "W01", sem: 1, mes: "Jun", formato: "R1",
    nombreFormato: "El detalle que nadie ve",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "El Fénix antes del Ángel — Edificio Metrópolis",
    duracion: "30s",
    hookEjemplo: "Plano contrapicado del Edificio Metrópolis en Gran Vía. \"Pasas por aquí cada semana. Y no estás mirando lo que tienes que mirar.\"",
    estructura: [
      "0-2s · Hook: plano del edificio + frase de disonancia.",
      "2-8s · \"Este edificio tiene encima a una diosa. Pero no es la primera diosa que tuvo.\"",
      "8-20s · Foto de archivo: el Fénix original (1911). Cambio en 1975 a Victoria Alada (\"el Ángel\").",
      "20-26s · Idea grande: \"Madrid está llena de cosas que cambiaron de identidad. Aprender a verlas es lo que diferencia mirar de visitar.\"",
      "26-30s · CTA: \"Comenta MADRID y te paso la guía de 10 planes culturales por menos de 20€.\""
    ],
    copyDesarrollado: `Antes del Ángel hubo un Fénix.

La estatua que corona el Metrópolis se cambió en 1975, y la mayoría de madrileños no lo sabe. La actual se llama Victoria Alada, no Ángel, aunque todo el mundo la llame así.

No te decimos esto para que te sepas un dato. Te lo decimos porque mirar bien una ciudad es un músculo. Y como todos los músculos, se entrena.

Guarda este reel si quieres entrenar el tuyo.

📌 Comenta MADRID y te enviamos por DM nuestra guía: 10 planes culturales en Madrid por menos de 20€.`,
    produccion: [
      "Plano contrapicado del edificio al amanecer (luz blanda, sin gente).",
      "Foto de archivo histórico del Fénix (1911 — dominio público, Biblioteca Nacional).",
      "Música ambient mínimo, sin pico.",
      "Texto en pantalla: Geist Medium, animación typing letra a letra.",
      "Voiceover, tono conversacional bajo."
    ],
    kpi: ">8% save rate · >3% share rate · >120 comentarios con palabra clave"
  },
  {
    id: "W02", sem: 2, mes: "Jun", formato: "R2",
    nombreFormato: "3 minutos con…",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "3 minutos con la programadora del Cine Doré",
    duracion: "55s",
    hookEjemplo: "Plano en sala vacía del cine Doré. Voz en off: \"5€ la sesión. La sala con mejor programación de Europa. Y la mayoría de madrileños no entra nunca.\"",
    estructura: [
      "0-3s · Carta de presentación: nombre, cargo, lugar (sala del Doré).",
      "3-15s · \"¿Qué es lo más raro que has programado este año?\"",
      "15-40s · Respuesta sin cortes: anécdota de una sesión que cambió a alguien.",
      "40-50s · \"¿Qué pondrías esta semana?\" → recomendación concreta de la cartelera.",
      "50-55s · Cierre con la frase para citar + datos prácticos (horarios, precio, dirección)."
    ],
    copyDesarrollado: `"Pongo películas para gente que todavía cree que el cine es un acontecimiento."

5 euros la sesión. La Filmoteca proyecta en 35mm las películas que cambiaron el siglo. El Cine Doré es lo más cerca que tenemos en Madrid de viajar en el tiempo a salas que ya no existen.

Si llevas años diciendo "tengo que pasarme alguna vez", esta es la señal.

📌 Programación oficial: filmotecaespanola.es
📌 Comenta CINE y te enviamos nuestro listado: 10 librerías de barrio que merecen un sábado entero.`,
    produccion: [
      "Entrevista en sala vacía iluminada solo por el haz del proyector (visual fuerte).",
      "Plano de detalle: butaca, marquesina, proyector funcionando.",
      "Sin música — sonido sala real (zumbido del proyector).",
      "Subtítulos en Geist para accesibilidad.",
      "Confirmar autorización de imagen + acreditar Filmoteca Española en descripción."
    ],
    kpi: ">5% save rate · alta retención hasta el final · 70+ comentarios cualitativos"
  },
  {
    id: "W03", sem: 3, mes: "Jun", formato: "R3",
    nombreFormato: "Plan en 60 segundos",
    pilar: "Comunidad +30", pilarN: "III",
    titulo: "Sábado culto en Madrid por menos de 20€",
    duracion: "55s",
    hookEjemplo: "Plano frente al espejo, persona poniéndose chaqueta. \"Te explico el sábado culto que hago yo en Madrid. Total: 18€. Te lo cronometro.\"",
    estructura: [
      "0-3s · Hook con horario y presupuesto reales en pantalla.",
      "3-18s · 11:00 — La Casa Encendida (gratuita). Subir a la azotea. Razón.",
      "18-33s · 14:00 — Casa Mingo, cidra + pollo asado por 12€. Razón cultural (Goya cenaba aquí).",
      "33-45s · 17:00 — Museo Cerralbo entrada libre los sábados después de las 14:00. La sala olvidada.",
      "45-55s · 19:30 — Concierto gratis de la Banda Sinfónica en el Templo de Debod (verano). Cierre: \"Total: 18€. Esto se puede vivir.\""
    ],
    copyDesarrollado: `El sábado culto en Madrid no necesita 200 euros.

Necesita criterio.

11:00 → Casa Encendida + azotea (gratis).
14:00 → Casa Mingo: cidra + pollo, 12€. Goya cenaba aquí.
17:00 → Museo Cerralbo, entrada libre desde las 14h.
19:30 → Banda Sinfónica en Debod (verano, gratis).

Total: 18€. Total cultural: alto.

📌 Guarda este reel si quieres robarlo entero este sábado.
📌 Comenta MADRID y te paso nuestra guía completa: 10 planes culturales por menos de 20€.`,
    produccion: [
      "Vlog estilo POV: cada parada un plano corto con texto sobreimpresionado de la hora.",
      "Música única bajo todo (lo-fi ambient, no pico).",
      "Mostrar tickets / cuenta / vista real (no stock).",
      "Cierre con plano abierto al atardecer en Debod."
    ],
    kpi: ">10% save rate · >5% share · alto comportamiento de comentario"
  },
  {
    id: "W04", sem: 4, mes: "Jun", formato: "R4",
    nombreFormato: "Hot take cultural",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Hot take: el Reina Sofía está mal contado",
    duracion: "40s",
    hookEjemplo: "A cámara, sin filtros, con plano del Guernica detrás. \"Voy a decir algo polémico. El Reina Sofía está mal contado.\"",
    estructura: [
      "0-3s · Tesis afilada a cámara.",
      "3-20s · 2 argumentos cortos: \"La narrativa empieza en el Guernica como si la historia del arte español del XX comenzara ahí. No es así\" + \"Los pasillos largos te matan antes de llegar a Tàpies o Barceló.\"",
      "20-32s · Matización honesta: \"Lo que sí funciona: las nuevas salas de la colección permanente. Y la programación de cine experimental.\"",
      "32-40s · Cierre: \"Si entras, hazlo por el ala de Sabatini, no por la Nouvel. Y empieza por arriba. Comenta REINA si quieres el orden completo.\""
    ],
    copyDesarrollado: `Hot take: el Reina Sofía está mal contado.

No es que esté mal — es que la narrativa que te ofrece no es la única que ofrece. La mayoría sale habiendo visto el Guernica y poco más, porque el museo te lleva por un orden que castiga al visitante.

Esto se puede arreglar entrando por Sabatini, no por la Nouvel, y empezando por arriba.

Tú sigue, que esta semana en stories voy a contar el orden completo de la visita inteligente al Reina Sofía. No te lo enseñan, pero te lo merece.

📌 Comenta REINA y te lo paso por DM.`,
    produccion: [
      "A cámara con plano fijo (estética periodística), iluminación natural.",
      "1 plano de relleno: Guernica oficial (descarga de archivo público o pase prensa).",
      "Texto sobreimpresionado: \"HOT TAKE\" como pestaña Geist.",
      "Sin música — solo voz y aire.",
      "Confirmar tono: incómodo pero argumentado, no destructivo."
    ],
    kpi: ">6% share rate · >50 comentarios cualitativos · debate real en hilo"
  },
  {
    id: "W05", sem: 5, mes: "Jul", formato: "R5",
    nombreFormato: "Detrás de la experiencia",
    pilar: "Comunidad +30", pilarN: "III",
    titulo: "Detrás: noche de jazz en Café Central",
    duracion: "75s",
    hookEjemplo: "Plano detalle del rótulo del Café Central. Voz en off: \"50 años programando jazz cada noche. Aquí han tocado Tete Montoliu y Brad Mehldau. Esta es una noche cualquiera dentro.\"",
    estructura: [
      "0-5s · Cabecera: rótulo + plano interior + dato de los 50 años.",
      "5-25s · Llegada de los socios. Pedir mesa. Carta. Detalle del cartel del día.",
      "25-55s · 2-3 momentos clave del concierto. Plano del público. Plano del trío.",
      "55-70s · 1 frase de un miembro a cámara: \"Llevo 20 años yendo. Siempre vuelvo.\"",
      "70-75s · Cierre editorial: \"Esto es lo que pasa cuando juntas a 40 personas en este sitio un jueves cualquiera.\""
    ],
    copyDesarrollado: `Hay sitios donde la cultura pasa de verdad y no necesitan rótulo de "cultural".

El Café Central lleva 50 años programando jazz cada noche en la Plaza del Ángel. 18€ la entrada. Trío de piano. Mesa que reservas con dos días de antelación.

Esto es lo que pasa cuando un jueves cualquiera juntas a 40 adultos en este sitio.

📌 Próximos conciertos: cafecentralmadrid.com
📌 Si quieres venir con nosotros a uno, escríbenos por DM y te decimos cuándo es el próximo encuentro de socios.`,
    produccion: [
      "Multi-cámara: 1 ambient general, 1 plano cerrado del trío, 1 cámara de mesa.",
      "Audio crucial: micrófono de ambiente + permiso de los músicos para el corte usado.",
      "Mostrar carta, precio, ticket — quitar fricción del \"yo no sé cómo se va\".",
      "Color cálido (tungsteno), grano sutil.",
      "Acreditar al trío en descripción + tag del Café Central."
    ],
    kpi: "Conversión a interés en club (DMs entrantes) · >7% save · trigger emocional fuerte"
  },
  {
    id: "W06", sem: 6, mes: "Jul", formato: "R1",
    nombreFormato: "El detalle que nadie ve",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Los azulejos del Metro de Madrid",
    duracion: "32s",
    hookEjemplo: "Plano cenital del azulejo de una estación. \"Hay un detalle en cada estación de Metro y llevas años pisándolo sin verlo.\"",
    estructura: [
      "0-3s · Hook: detalle del suelo / pared en una estación clásica (Sol, Bilbao, Gran Vía).",
      "3-15s · Quién diseñó los azulejos originales (Antonio Palacios, 1919). Por qué importan.",
      "15-25s · Comparación: una estación restaurada vs. una intervenida sin criterio.",
      "25-30s · Idea grande: \"El Metro es el museo más visitado de Madrid y no tiene cartelas.\"",
      "30-32s · CTA: \"Comenta METRO y te paso el plano de las 8 estaciones que merecen una parada.\""
    ],
    copyDesarrollado: `El Metro de Madrid es el museo más visitado de la ciudad. Y no tiene cartelas.

Los azulejos originales son de 1919, diseñados por Antonio Palacios — el mismo arquitecto del Palacio de Cibeles. Estaciones como Sol, Bilbao o Cuatro Caminos conservan parte de su diseño original. Otras han sido intervenidas sin criterio.

Aprender a mirar el Metro es entender Madrid sin pagar entrada.

📌 Comenta METRO y te enviamos el plano de las 8 estaciones que merecen una parada.`,
    produccion: [
      "Planos detalle de azulería (cenitales y a ras de suelo).",
      "Foto de archivo de Antonio Palacios.",
      "Música ambient bajo + ruido de metro mezclado al 20%.",
      "Sin gente — grabar en hora valle (06:30 o 22:30 dom)."
    ],
    kpi: ">8% save · alta tasa de compartido en grupos de chat (es \"información práctica\")"
  },
  {
    id: "W07", sem: 7, mes: "Jul", formato: "R2",
    nombreFormato: "3 minutos con…",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "3 minutos con un librero de la Cuesta de Moyano",
    duracion: "60s",
    hookEjemplo: "Plano caseta de libros, manos cogiendo un libro viejo. \"Tiene 96 años. Lleva 60 vendiendo libros en la Cuesta. Le preguntamos qué ha cambiado.\"",
    estructura: [
      "0-3s · Carta de presentación: nombre, caseta nº, dato impactante.",
      "3-15s · \"¿Quién compra libros antiguos en 2026?\"",
      "15-40s · Respuesta sin cortes: anécdota concreta de la última semana.",
      "40-52s · \"¿Qué libro recomienda a alguien que no lee?\" → frase memorable.",
      "52-60s · Cierre: \"Está aquí cualquier sábado. Caseta XX. Domingos cerrado.\""
    ],
    copyDesarrollado: `60 años vendiendo libros en la Cuesta de Moyano.

Lo conoce mejor que muchos historiadores: quién compra, qué se vende, cómo se ha transformado la cultura del libro en Madrid. Le hicimos una pregunta sencilla: "¿Quién compra libros antiguos en 2026?".

Su respuesta nos dejó callados.

La Cuesta de Moyano está ahí todos los sábados. 30 casetas, todas con voz propia. Te pierdes un trozo de Madrid si no has bajado.

📌 Caseta del entrevistado: número [X] · Sábados 10h-14h · Cierre dominical.
📌 Comenta LIBROS y te enviamos: 10 librerías de barrio que merecen un sábado entero.`,
    produccion: [
      "Entrevista en la caseta misma, luz natural.",
      "Plano detalle de manos sobre libros, lomos antiguos.",
      "Sonido ambiente Retiro (pájaros, conversación).",
      "Subtítulos imprescindibles (la voz puede ser de difícil entendimiento).",
      "Comprobar permiso de imagen + libreros vecinos."
    ],
    kpi: ">6% save · alta retención · viralidad por enternecimiento real"
  },
  {
    id: "W08", sem: 8, mes: "Jul", formato: "R3",
    nombreFormato: "Plan en 60 segundos",
    pilar: "Comunidad +30", pilarN: "III",
    titulo: "Domingo de mercadillos: libros + vinilos",
    duracion: "55s",
    hookEjemplo: "Plano POV bajando escaleras del Rastro. \"Domingo. 22€ en el bolsillo. Te explico cómo se hace un domingo cultural en Madrid bien hecho.\"",
    estructura: [
      "0-3s · Hook con presupuesto y POV.",
      "3-18s · 10:30 — El Rastro: cómo y dónde buscar discos (Plaza Cascorro, calle Mira el Río).",
      "18-33s · 12:30 — Mercadillo de Las Letras: librerías de viejo (Calle Cervantes).",
      "33-45s · 14:30 — Comer en Casa Amadeo Los Caracoles (Plaza Cascorro), 12€ menú.",
      "45-55s · 16:00 — Plaza de la Paja, café + libro recién comprado. Cierre: \"Total: 10€ vinilo + 12€ comida = 22€ y una mañana hecha.\""
    ],
    copyDesarrollado: `Cómo se hace un domingo cultural en Madrid bien hecho.

10:30 → Rastro. Plaza Cascorro y Mira el Río para vinilos. Aprende a regatear sin ofender.
12:30 → Mercadillo de Las Letras (Calle Cervantes). Librerías de viejo.
14:30 → Casa Amadeo, 12€ menú, caracoles si te atreves.
16:00 → Café en Plaza de la Paja con lo que compraste.

Total: 22€. Total cultural: domingo bien gastado.

📌 Guarda este reel para tu próximo domingo.
📌 Comenta DOMINGO y te paso nuestra guía: 10 planes culturales en Madrid por menos de 20€.`,
    produccion: [
      "POV con cámara de mano (no estabilizada, intencional).",
      "Cada parada: 3 cortes + texto con hora.",
      "Mostrar tickets, precios, la realidad.",
      "Música bajo y constante (vinilo sample) — sutil."
    ],
    kpi: ">12% save (los planes prácticos arrasan en save) · alto share entre amigos"
  },
  {
    id: "W09", sem: 9, mes: "Jul-Ago", formato: "R4",
    nombreFormato: "Hot take cultural",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Hot take: Veranos de la Villa > cualquier festival",
    duracion: "38s",
    hookEjemplo: "A cámara, plano frente al Patio del Conde Duque al atardecer. \"Hot take incómodo: los Veranos de la Villa son mejor que casi todos los festivales urbanos que pagas.\"",
    estructura: [
      "0-3s · Tesis afilada a cámara.",
      "3-22s · 3 argumentos: \"Programación con criterio, no agenda forzada\" + \"Espacios reales del patrimonio madrileño\" + \"Acceso económico\".",
      "22-32s · Matización: \"Sí, hay piezas flojas. Pero el listón medio supera al de la mayoría de festivales pagados.\"",
      "32-38s · Cierre: \"En 7 días sale la guía con los 8 conciertos que no te puedes perder este verano. Comenta VERANO si quieres aviso.\""
    ],
    copyDesarrollado: `Hot take para la cultura urbana de Madrid:

Los Veranos de la Villa son mejor programación que casi cualquier festival privado al que vayas pagando 80 euros la entrada. Te lo digo gratis.

Razones:
— Programación con criterio, no agenda forzada.
— Espacios reales del patrimonio (Conde Duque, Galileo, Teatros del Canal).
— Acceso económico real.

¿Hay piezas flojas? Sí. ¿El listón medio? Mejor que cualquier macrofestival corporativo de la ciudad.

📌 Si quieres aviso cuando publiquemos los 8 conciertos imprescindibles, comenta VERANO.`,
    produccion: [
      "A cámara, atardecer real en algún escenario habitual de los Veranos.",
      "1-2 planos de archivo de Veranos pasados (si tenemos derechos).",
      "Texto: \"HOT TAKE\" sticker en Geist.",
      "Sin música — solo voz y ambiente."
    ],
    kpi: ">5% share · >40 comentarios · disputa razonada en hilos"
  },
  {
    id: "W10", sem: 10, mes: "Ago", formato: "R5",
    nombreFormato: "Detrás de la experiencia",
    pilar: "Comunidad +30", pilarN: "III",
    titulo: "Detrás: visita a un estudio de artista en Malasaña",
    duracion: "85s",
    hookEjemplo: "Plano fachada despintada de Malasaña, puerta verde. Voz: \"Detrás de esta puerta hay un estudio de 80m². Y una decisión que llevamos un mes negociando.\"",
    estructura: [
      "0-5s · Hook + plano puerta + reveal del estudio.",
      "5-30s · Llegada de los socios. Saludo al artista. Recorrido por la obra en proceso.",
      "30-60s · 1 momento clave: el artista explicando una pieza. 1 socio reaccionando. Pausa real.",
      "60-78s · Compra real / encargo real (mostrar precio si hay acuerdo).",
      "78-85s · Cierre: \"Esto es lo que pasa cuando 8 socios entran en un estudio cerrado al público un sábado por la tarde.\""
    ],
    copyDesarrollado: `Madrid tiene una escena de artistas jóvenes brutal. Y la mayoría de sus estudios están cerrados.

Esta visita fue exclusiva para 8 socios. Recorrido + conversación + compra opcional. La obra del autor cuesta entre 400 y 2.500€, y comprarle a un artista joven con criterio sigue siendo la mejor inversión cultural que puedes hacer.

Si te interesa entrar en este tipo de encuentros, escríbenos por DM.

📌 La obra del artista: [@instagramartista]
📌 Próximos encuentros solo para socios: 2 al mes.`,
    produccion: [
      "Tres cámaras: 1 fija recorrido, 1 móvil reacciones, 1 macro de obra.",
      "Audio limpio del artista (lavalier).",
      "Negociar autorización de imagen con todos los socios presentes.",
      "Mantener un grado de intimidad — no exponer caras si no procede.",
      "Pieza para Reels e IGTV en versión corta + larga."
    ],
    kpi: "Trigger directo a club · DMs entrantes preguntando por próximas visitas · >8% save"
  },
  {
    id: "W11", sem: 11, mes: "Ago", formato: "R1",
    nombreFormato: "El detalle que nadie ve",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Lo que nadie te cuenta del Templo de Debod",
    duracion: "30s",
    hookEjemplo: "Plano del Templo al atardecer. \"Vas a Debod a ver la puesta de sol. Pero dentro del templo hay algo que ignora el 95% de la gente.\"",
    estructura: [
      "0-3s · Hook: plano postal + frase de disonancia.",
      "3-12s · El Templo es entrada libre y se puede entrar dentro. Mucha gente no lo sabe.",
      "12-22s · Dentro hay relieves originales del siglo II a.C. — cómo leerlos.",
      "22-27s · Idea grande: \"Madrid tiene un templo egipcio gratis y lo usamos solo de fondo de foto.\"",
      "27-30s · CTA: \"Comenta DEBOD y te paso 5 sitios gratis en Madrid que parecen de pago.\""
    ],
    copyDesarrollado: `Vas al Templo de Debod a ver la puesta de sol. Y haces bien.

Pero dentro del templo hay relieves originales del siglo II a.C., y la entrada es libre. El 95% de los madrileños nunca ha entrado dentro.

Esto va de aprender a usar Madrid mejor. Vas a estar por ahí esta semana — entra antes de la foto.

Horarios: martes a domingo 10-19h (julio y agosto). Cerrado lunes.

📌 Comenta DEBOD y te paso 5 sitios gratis en Madrid que parecen de pago.`,
    produccion: [
      "Planos exteriores hora dorada + planos interiores (autorización del Ayuntamiento).",
      "Detalles de los jeroglíficos / relieves originales.",
      "Música minimal, ambient deep.",
      "Texto en pantalla con tipografía Geist."
    ],
    kpi: ">9% save · viralidad alta por sorpresa real"
  },
  {
    id: "W12", sem: 12, mes: "Ago", formato: "R2",
    nombreFormato: "3 minutos con…",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "3 minutos con un anticuario del Rastro",
    duracion: "60s",
    hookEjemplo: "Plano interior tienda anticuario llena de objetos. \"Tiene 30 años de cosas en esta tienda. Te enseña a comprar bien en el Rastro sin que te claven.\"",
    estructura: [
      "0-3s · Carta de presentación: anticuario, tienda, calle.",
      "3-18s · \"¿Qué se compra mal en el Rastro?\"",
      "18-40s · 2 reglas concretas de regateo + 1 truco de detección.",
      "40-52s · \"¿Qué objeto se llevará usted antes de cerrar?\" → momento humano.",
      "52-60s · Cierre + dirección de la tienda + horario."
    ],
    copyDesarrollado: `30 años con la tienda abierta en la calle más anticuaria del Rastro.

Le pedimos las dos reglas de oro para comprar bien sin que te claven. Nos las dio:

1. Si está en escaparate, no es lo bueno.
2. Pregunta sin tocar. Tocar es decir que te interesa, y eso sube el precio.

El Rastro no es un mercadillo, es un museo abierto donde se puede negociar. Y tiene gente como él que lleva tres décadas siendo memoria de Madrid.

📌 La tienda: [calle + número] · Domingos 10-14h
📌 Comenta RASTRO y te paso la guía: 10 planes culturales en Madrid por menos de 20€.`,
    produccion: [
      "Entrevista en la tienda, todo el caos visible (intencional).",
      "Plano detalle de manos del anticuario sobre objetos.",
      "Subtítulos siempre.",
      "Voz ambiente del Rastro a domingo (mercado real)."
    ],
    kpi: ">6% save · trigger a club (siente que está descubriendo gente real)"
  }
];

window.TMT.reelsFormatos = [
  { id: "R1", nombre: "El detalle que nadie ve", pilar: "Mirada experta", pilarN: "I", hookTipo: "\"Llevas pasando por delante de esto y no lo has visto.\"", duracion: "25-35s", estructura: ["Hook de disonancia", "Contexto breve", "Revelación visual o histórica", "Idea grande de fondo", "CTA hacia lead magnet"], kpi: ">8% save · >3% share" },
  { id: "R2", nombre: "3 minutos con…", pilar: "Patrimonio vivo", pilarN: "II", hookTipo: "Entrevista cortísima a un oficio cultural madrileño.", duracion: "45-60s", estructura: ["Carta de presentación", "Pregunta concreta", "Respuesta sin cortes", "Frase para citar", "Dirección y horario"], kpi: ">5% save · alta retención" },
  { id: "R3", nombre: "Plan en 60 segundos", pilar: "Comunidad +30", pilarN: "III", hookTipo: "\"Te explico cómo se hace un sábado culto en Madrid por menos de 20€.\"", duracion: "45-60s", estructura: ["Hook con presupuesto", "Parada 1", "Parada 2", "Parada 3", "Cierre con total"], kpi: ">10% save · alto share entre amigos" },
  { id: "R4", nombre: "Hot take cultural", pilar: "Mirada experta", pilarN: "I", hookTipo: "Opinión razonada e incómoda sobre algo de la cultura madrileña.", duracion: "30-45s", estructura: ["Tesis afilada", "Argumentos cortos", "Matización honesta", "Cierre que invita al debate", "CTA contextual"], kpi: ">6% share · >50 comentarios" },
  { id: "R5", nombre: "Detrás de la experiencia", pilar: "Comunidad +30", pilarN: "III", hookTipo: "Vlog de una experiencia real con socios.", duracion: "60-90s", estructura: ["Cabecera de contexto", "Llegada", "Momento clave", "Frase de un socio", "Cierre editorial"], kpi: "Conversión a interés en club · >7% save" }
];

// -------------------------------------------------------------
// CARRUSELES — 12 piezas DESARROLLADAS al 100% · Madrid
// -------------------------------------------------------------
window.TMT.carruseles12 = [
  {
    id: "C-W01", sem: 1, mes: "Jun", formato: "C1", nombreFormato: "Glosario del adulto culto",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Glosario del Madrid culto",
    slides: [
      { n: 1, titulo: "Glosario del Madrid culto.", sub: "8 palabras que solo los madrileños usan bien.", nota: "Portada · Fondo crema · Tipografía Fraunces grande." },
      { n: 2, titulo: "Tertulia", sub: "No es una charla cualquiera. Es la conversación adulta y regular en un café fijo. Madrid las inventó en el siglo XIX." },
      { n: 3, titulo: "Sereno", sub: "El vigilante nocturno con bastón y llave maestra. Se extinguió en los 70. Sigue siendo un personaje en la memoria del barrio." },
      { n: 4, titulo: "Chotis", sub: "Madrid se apropió de un baile europeo y lo hizo suyo. Se baila en 1 baldosa por una razón. Y esa razón es Madrid." },
      { n: 5, titulo: "Manolo / Manola", sub: "El madrileño castizo de los barrios populares del XIX. No es lo mismo que un chulapo. Goya los pintó." },
      { n: 6, titulo: "Cuesta", sub: "No es solo una pendiente. Es un microbarrio comercial (Cuesta de Moyano, Cuesta de San Vicente). Cada cuesta tiene oficio." },
      { n: 7, titulo: "Patio", sub: "El patio madrileño no es decorativo. Es un sistema arquitectónico de luz para edificios densos. Mira hacia arriba en cualquier portal del centro." },
      { n: 8, titulo: "Tasca", sub: "La taberna popular previa al gastrobar. Tasca real ya quedan pocas. Saber distinguir una tasca de un homenaje a tasca es de adultos cultos." },
      { n: 9, titulo: "Guárdalo", sub: "8 palabras = 8 detalles que cambian cómo escuchas Madrid.", nota: "Cierre · CTA: \"Comenta GLOSARIO y te pasamos la guía completa.\"" }
    ],
    copyPie: `8 palabras que solo los madrileños usan bien.\n\nNo es jerga, es memoria de la ciudad codificada en lengua. Saber qué significa una tertulia, distinguir una tasca de un homenaje a tasca o entender por qué el chotis se baila en una baldosa — es entender Madrid mejor.\n\nGuarda el carrusel. Y si te quedan dudas, te las resolvemos en stories esta semana.\n\n📌 Comenta GLOSARIO y te enviamos las 20 palabras del glosario completo.`,
    kpi: ">8% save (los glosarios se vuelven a consultar)"
  },
  {
    id: "C-W02", sem: 2, mes: "Jun", formato: "C2", nombreFormato: "Mapa secreto de…",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "Mapa secreto de Lavapiés",
    slides: [
      { n: 1, titulo: "Lavapiés que no te enseñan.", sub: "5 paradas para mirar el barrio con otros ojos.", nota: "Portada · Mapa minimalista 5 puntos numerados." },
      { n: 2, titulo: "Introducción", sub: "Lavapiés se ha contado mil veces. Casi siempre mal: como barrio de moda, conflictivo o bohemio. Este no es ese mapa." },
      { n: 3, titulo: "Parada 1 — La Corrala", sub: "Último testigo en pie de la vivienda obrera del XIX. Mira las galerías. Cada barandilla es una vida que pasó allí." },
      { n: 4, titulo: "Parada 2 — Tabacalera", sub: "Fábrica de tabaco → centro autogestionado. Edificio del XVIII con arte contemporáneo gratis. Pregunta por el patio." },
      { n: 5, titulo: "Parada 3 — La Casa Encendida", sub: "No vayas solo a la expo. Sube a la azotea. Es uno de los miradores menos usados del centro de Madrid." },
      { n: 6, titulo: "Parada 4 — Cine Doré (Plaza Lavapiés)", sub: "5€ la sesión. Filmoteca Española. Una de las salas con mejor programación de Europa." },
      { n: 7, titulo: "Parada 5 — Mesón de Paredes 13", sub: "Posada del Dragón, posada del XVII. No entres como turista. Entra como vecino. Pide un vino." },
      { n: 8, titulo: "Cierre", sub: "Un barrio no se conoce yendo. Se conoce mirando.", nota: "Cierre · CTA: \"Comenta MAPA y te paso la guía completa.\"" }
    ],
    copyPie: `Lavapiés se ha contado mil veces. Casi siempre mal.\n\nEste es nuestro mapa: 5 paradas para mirarlo sin los filtros de la guía de fin de semana.\n\nGuarda el carrusel para tu próximo paseo. Y si conoces a alguien que dice que ya conoce Lavapiés, etiquétalo. Le va a venir bien.\n\n📌 Comenta MAPA y te enviamos: 10 planes culturales en Madrid por menos de 20€.`,
    kpi: ">12% save · >5% share (los mapas se guardan y comparten)"
  },
  {
    id: "C-W03", sem: 3, mes: "Jun", formato: "C3", nombreFormato: "Historia en 9 imágenes",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "Café Gijón en 9 imágenes — la tertulia que cambió la cultura española",
    slides: [
      { n: 1, titulo: "El Café Gijón en 9 imágenes.", sub: "La tertulia que sostuvo la cultura española durante un siglo." },
      { n: 2, titulo: "1888", sub: "Se abre en el Paseo de Recoletos. Café de inspiración austríaca. Espejos. Mármol. Camareros de uniforme negro." },
      { n: 3, titulo: "Años 20", sub: "Tertulia literaria diaria. Asisten Ramón Gómez de la Serna, Valle-Inclán, García Lorca. Madrid es centro literario europeo." },
      { n: 4, titulo: "Guerra Civil (1936-39)", sub: "El Gijón sigue abierto bajo bombardeos. Los camareros son recordados por sus parroquianos." },
      { n: 5, titulo: "Posguerra", sub: "Camilo José Cela escribe parte de \"La Colmena\" en la mesa de fondo a la izquierda. Buero Vallejo gana el Lope de Vega ahí." },
      { n: 6, titulo: "Años 60-70", sub: "Tertulia del Tránsito: Carmen Martín Gaite, Francisco Umbral, Ignacio Aldecoa. Generaciones literarias se forman en sus mesas." },
      { n: 7, titulo: "Años 90", sub: "Premio Café Gijón se consolida como uno de los reconocimientos literarios más prestigiosos de España." },
      { n: 8, titulo: "Hoy", sub: "Sigue abierto. Sigue siendo café. Sigue habiendo tertulias. Si te sientas un martes por la tarde, las verás." },
      { n: 9, titulo: "Por qué importa", sub: "Madrid tiene cafés. Pero solo uno ha sido escritorio de medio siglo de literatura española. Vete antes de tener un motivo. Ese es el motivo." }
    ],
    copyPie: `El Café Gijón abrió en 1888 y ha sido escritorio de Cela, Lorca, Umbral, Martín Gaite. La literatura española del siglo XX se escribió, en parte, en sus mesas.\n\nSigue abierto. Sigue siendo café. Sigue habiendo tertulia.\n\nNo necesitas un motivo para entrar. Esto es Madrid contado.\n\n📌 Paseo de Recoletos 21 · Abierto cada día.\n📌 Comenta CAFÉS y te enviamos: 5 restaurantes con más historia cultural en Madrid.`,
    kpi: ">7% save · alto tiempo de visualización · trigger a contenido relacionado"
  },
  {
    id: "C-W04", sem: 4, mes: "Jun", formato: "C4", nombreFormato: "Manual cultural +30",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "Cómo planear tu primera ópera",
    slides: [
      { n: 1, titulo: "Cómo planear tu primera ópera.", sub: "Sin que parezca que es la primera vez. Manual +30." },
      { n: 2, titulo: "Paso 1 — Elige bien la primera", sub: "No empieces por Wagner. Empieza por algo accesible: \"La Traviata\", \"Bohème\", \"Carmen\". Duran 2-3h con argumento clarísimo." },
      { n: 3, titulo: "Paso 2 — Dónde", sub: "Teatro Real → la entrada de butaca alta cuesta 25-50€. Veterana suficiente para la primera vez. Teatros del Canal es opción ligera." },
      { n: 4, titulo: "Paso 3 — Cuándo comprar", sub: "Abono \"Última hora\" del Teatro Real: butacas sobrantes a 25€. Sale 1 semana antes. Suscríbete a su newsletter." },
      { n: 5, titulo: "Paso 4 — Qué ponerse", sub: "Olvida el smoking. Camisa o blusa básica, pantalón o falda, zapato cerrado. Lo único realmente fuera de lugar son los pantalones cortos." },
      { n: 6, titulo: "Paso 5 — Antes de entrar", sub: "Lee el argumento en wikipedia 30 minutos antes. Te ahorra perderte. Llega 15 minutos antes para entender bien la sala." },
      { n: 7, titulo: "Paso 6 — Durante", sub: "Hay 1-2 entreactos de 20 minutos. Bar real, no esperes que sea barato. Ir al baño en entreactos, no después de empezar." },
      { n: 8, titulo: "Paso 7 — Después", sub: "Comenta. No quedes en frío. La ópera funciona si la digieres con alguien. Cualquier socio te acompaña por DM." }
    ],
    copyPie: `Cómo se va a la ópera por primera vez sin que parezca la primera vez.\n\n7 pasos. 50 euros bien gastados. Y un secreto que casi nadie usa: el abono "Última hora" del Teatro Real, butacas a 25€ una semana antes.\n\nGuárdalo. Y si quieres ir con nosotros, escríbenos. Tenemos plan de ópera el [fecha].\n\n📌 Comenta OPERA y te enviamos: 10 planes culturales en Madrid por menos de 20€.`,
    kpi: ">10% save · alto share entre 30-45 años · DMs preguntando cuándo es el siguiente plan"
  },
  {
    id: "C-W05", sem: 5, mes: "Jul", formato: "C1", nombreFormato: "Glosario del adulto culto",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Glosario del flamenco para no perderse",
    slides: [
      { n: 1, titulo: "Glosario del flamenco.", sub: "Para entender lo que está pasando en un tablao sin morir de vergüenza." },
      { n: 2, titulo: "Cante", sub: "La voz. La parte vocal. El cantaor o cantaora dirige el cuadro. Si el cante calla, todo se detiene." },
      { n: 3, titulo: "Toque", sub: "La guitarra. El guitarrista marca el compás y dialoga con el cante. Sabicas, Tomatito, Paco de Lucía: maestros del toque." },
      { n: 4, titulo: "Baile", sub: "Cuerpo + zapateado. Las palmas marcan. Cuidado con confundir baile flamenco con baile sevillanas: son cosas distintas." },
      { n: 5, titulo: "Palo", sub: "Cada estilo flamenco. Soleá (lento, profundo), bulerías (rápido, fiestero), seguiriya (muy duro). Saber identificarlos cambia la noche." },
      { n: 6, titulo: "Cuadro flamenco", sub: "La formación: cantaor + guitarra + bailaores + palmeros. El equilibrio entre los cuatro hace la noche." },
      { n: 7, titulo: "Olé", sub: "No es aplauso. Es señal a los artistas de que estás siguiendo bien. Se dice en momentos concretos (final de letra, remates). Mejor callar que decirlo mal." },
      { n: 8, titulo: "Dónde verlo en Madrid", sub: "Cardamomo, Corral de la Morería, Las Tablas. Reserva con días de antelación. Mesa de primera fila no siempre es la mejor — pregunta antes." },
      { n: 9, titulo: "Para llevarte", sub: "Saber estas 7 palabras te da derecho a estar en un tablao sin esconderte. Y a disfrutarlo." }
    ],
    copyPie: `7 palabras para entender lo que está pasando en un tablao sin morir de vergüenza.\n\nEl flamenco asusta porque tiene código. Pero el código es aprendible en 5 minutos.\n\nGuárdalo. La próxima vez que vayas a un tablao de Madrid, vas con red.\n\n📌 Comenta FLAMENCO y te enviamos: 10 planes culturales en Madrid por menos de 20€.`,
    kpi: ">8% save · alto share a contactos que \"siempre han querido ir\""
  },
  {
    id: "C-W06", sem: 6, mes: "Jul", formato: "C2", nombreFormato: "Mapa secreto de…",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "Mapa secreto del Madrid de los Austrias",
    slides: [
      { n: 1, titulo: "Madrid de los Austrias que no te enseñan.", sub: "5 paradas que casi nadie hace bien." },
      { n: 2, titulo: "Introducción", sub: "El Madrid de los Austrias se vende como Plaza Mayor y poco más. Está bien, pero el barrio tiene capas más profundas." },
      { n: 3, titulo: "Parada 1 — Plaza de la Villa", sub: "La plaza original de Madrid antes de la Mayor. Tres siglos en tres edificios: Casa de los Lujanes (XV), Torre de los Cisneros (XVI), Casa de la Villa (XVII)." },
      { n: 4, titulo: "Parada 2 — San Andrés y la Capilla del Obispo", sub: "Joya del gótico tardío en Madrid. Suele estar cerrada — pide cita por la web del Arzobispado. Vale el trámite." },
      { n: 5, titulo: "Parada 3 — Calle del Almendro", sub: "Calle pequeña con tres tabernas centenarias seguidas: La Concha, La Bola (cerca), Casa Lucio (cocido legendario). No bebas en todas. Elige una." },
      { n: 6, titulo: "Parada 4 — Plaza del Cordón", sub: "Plaza diminuta, fachadas del XVII intactas. Sirvió de exteriores en varias películas. Espacio cero turistas, cero ruido." },
      { n: 7, titulo: "Parada 5 — Convento de las Carboneras", sub: "Convento de clausura. Venden dulces a través de un torno giratorio. Una experiencia que no tiene equivalente turístico." },
      { n: 8, titulo: "Cierre", sub: "El Madrid de los Austrias no es un escenario. Es un manuscrito en piedra. Léelo despacio." }
    ],
    copyPie: `El Madrid de los Austrias no es la Plaza Mayor llena de gente y poco más.\n\n5 paradas para leer el barrio como un manuscrito en piedra. Empieza en la Plaza de la Villa, acaba comprando dulces de clausura en un torno giratorio.\n\nGuarda y sal.\n\n📌 Comenta AUSTRIAS y te enviamos: 5 restaurantes con más historia cultural en Madrid.`,
    kpi: ">11% save · alta retención · viralidad por descubrimiento real"
  },
  {
    id: "C-W07", sem: 7, mes: "Jul", formato: "C3", nombreFormato: "Historia en 9 imágenes",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "Café Central en 9 imágenes — 50 años de jazz en Madrid",
    slides: [
      { n: 1, titulo: "El Café Central en 9 imágenes.", sub: "Cómo un café de la Plaza del Ángel se convirtió en sala de jazz de referencia europea." },
      { n: 2, titulo: "1982", sub: "Abre como Café Central. Un piano vertical en el fondo. La primera noche tocan dos músicos amigos por la cara." },
      { n: 3, titulo: "Años 80", sub: "Tete Montoliu toca aquí. Pedro Iturralde. La sala se va llenando solo de adultos que quieren música real, no fondo de bar." },
      { n: 4, titulo: "Años 90", sub: "Pasan Wynton Marsalis, Brad Mehldau, Chick Corea. Madrid entra en el circuito europeo de jazz casi sin querer." },
      { n: 5, titulo: "2000", sub: "Programa cada noche del año, sin parar. Una de las muy pocas salas del mundo con jazz diario." },
      { n: 6, titulo: "2010", sub: "Premio Nacional de la Música. Lo merece. El Café Central no es un café que tiene música. Es una sala de música que se llama café." },
      { n: 7, titulo: "2020", sub: "Sobrevive a la pandemia con conciertos en streaming y socios fieles. La comunidad de Madrid se moviliza." },
      { n: 8, titulo: "Hoy", sub: "Sigue abierto cada noche. Entrada 18-22€. Trío de jazz o cuarteto. Cena opcional con menú correcto. Reserva con dos días." },
      { n: 9, titulo: "Por qué importa", sub: "Cualquier ciudad europea quiere lo que Madrid tiene. 44 años de jazz nocturno en la misma sala. No lo perdamos por dar por hecho que está ahí." }
    ],
    copyPie: `1982. Plaza del Ángel. Un café abre con un piano vertical en el fondo.\n\n44 años después, el Café Central es una de las pocas salas del mundo con jazz cada noche. Wynton Marsalis, Brad Mehldau, Chick Corea han tocado en esa pequeña tarima.\n\nReserva con dos días. 22€ la entrada. No se da por hecho.\n\n📌 cafecentralmadrid.com\n📌 Comenta JAZZ y te enviamos: el mapa de los conciertos gratis de Madrid.`,
    kpi: ">8% save · viralidad por orgullo local · DMs preguntando por planes de jazz"
  },
  {
    id: "C-W08", sem: 8, mes: "Jul", formato: "C4", nombreFormato: "Manual cultural +30",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "Cómo descubrir un barrio nuevo en Madrid en una tarde",
    slides: [
      { n: 1, titulo: "Cómo descubrir un barrio nuevo en una tarde.", sub: "Manual +30 para hacerlo bien en 4 horas." },
      { n: 2, titulo: "Paso 1 — Elige bien", sub: "Empieza por barrios contables: Chamberí, Salamanca, Conde Duque, Carabanchel Alto, La Latina. Evita los grandes (Centro entero — demasiado)." },
      { n: 3, titulo: "Paso 2 — Llega caminando o en metro, nunca en coche", sub: "Coche te aísla del barrio. Caminar 10 minutos por las calles colindantes ya te dice cómo es el lugar." },
      { n: 4, titulo: "Paso 3 — La regla de los tres", sub: "Identifica 1 plaza, 1 calle comercial principal, 1 sitio donde toma la gente local. Esas son las anclas del barrio." },
      { n: 5, titulo: "Paso 4 — Las librerías y mercerías son los oráculos", sub: "Las librerías de barrio tienen los carteles más cuidados de la zona. Las mercerías son las decanas: están desde antes que tú." },
      { n: 6, titulo: "Paso 5 — Para 30 minutos en una terraza no turística", sub: "No para hacer foto. Para mirar quién pasa, quién saluda a quién. Eso es leer el barrio." },
      { n: 7, titulo: "Paso 6 — Apunta lo que querrás volver a ver", sub: "Notas del móvil: 2-3 sitios. Si vuelves en 2 semanas a uno, ya lo has hecho tuyo. Si no vuelves, ya sabes." },
      { n: 8, titulo: "Para llevarte", sub: "Un barrio no se conoce yendo. Se conoce volviendo. Empieza eligiendo a cuál vas a volver." }
    ],
    copyPie: `Cómo se descubre un barrio nuevo en Madrid en una tarde. Manual +30.\n\nNo es turismo. No es paseo. Es leer una zona como se lee una ciudad: anclas, oráculos, repetir.\n\n📌 Comenta BARRIO y te enviamos: 10 planes culturales en Madrid por menos de 20€.`,
    kpi: ">10% save · share alto a gente que se ha mudado a Madrid"
  },
  {
    id: "C-W09", sem: 9, mes: "Jul-Ago", formato: "C1", nombreFormato: "Glosario del adulto culto",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Glosario de los Veranos de la Villa",
    slides: [
      { n: 1, titulo: "Glosario de los Veranos de la Villa.", sub: "5 conceptos para entender el festival más importante del verano madrileño." },
      { n: 2, titulo: "1. Programación expandida", sub: "No es \"un festival\". Son 200+ eventos en 30+ espacios durante 6 semanas. Música, teatro, circo, danza, cine, talleres." },
      { n: 3, titulo: "2. Conde Duque", sub: "Centro neurálgico. Patio enorme, programación de 22h. La mayoría de noches hay algo. Entrada barata o gratis." },
      { n: 4, titulo: "3. Galileo + Teatros del Canal", sub: "Salas de hermano mayor. Programación más teatral / danza. Precios subvencionados (10-15€)." },
      { n: 5, titulo: "4. Pieza ancla vs. pieza descubrimiento", sub: "Los Veranos tienen titulares (DJ internacional, ballet conocido) y descubrimientos (compañía local sin nombre). Lo bueno suele estar en lo segundo." },
      { n: 6, titulo: "5. Cómo elegir", sub: "Mira el programa entero a principios de junio. Bloquea 4-5 noches en tu agenda antes de que se llene. Reserva con tiempo." },
      { n: 7, titulo: "Truco", sub: "Las propuestas con menos comunicación en Instagram suelen ser las que tienen mejor crítica. Lo que viraliza no siempre es lo mejor." },
      { n: 8, titulo: "Para llevarte", sub: "Veranos de la Villa no se \"va a\". Se planifica. Es la diferencia entre verlo desde fuera o vivirlo desde dentro." }
    ],
    copyPie: `Veranos de la Villa es el festival más infravalorado de Madrid.\n\n200+ eventos. 30+ espacios. 6 semanas. Precios subvencionados o gratis. Y lo mejor casi siempre está en las propuestas sin marketing.\n\nGuárdalo antes de junio. Bloquea 4-5 noches.\n\n📌 Comenta VERANO y te enviamos: la agenda esencial Veranos de la Villa 2026.`,
    kpi: ">9% save (los glosarios estacionales se guardan) · alta intención de asistencia"
  },
  {
    id: "C-W10", sem: 10, mes: "Ago", formato: "C2", nombreFormato: "Mapa secreto de…",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "Mapa secreto de Malasaña — la otra",
    slides: [
      { n: 1, titulo: "La Malasaña que no es la de las guías.", sub: "5 paradas para mirarlo como vecino." },
      { n: 2, titulo: "Introducción", sub: "Malasaña se ha banalizado. Pero debajo del Madrid de moda sigue habiendo otro: el de los gremios, las plazas y los rincones que pasan inadvertidos." },
      { n: 3, titulo: "Parada 1 — Plaza del Dos de Mayo", sub: "Mira el arco. Es lo que queda del Cuartel de Monteleón. 1808 — el levantamiento empezó aquí. Sigue siendo el centro emocional del barrio." },
      { n: 4, titulo: "Parada 2 — Calle del Pez", sub: "Recorre las tiendas de oficio: encuadernador, sastre, ebanista. Casi todas con 50+ años en la misma puerta." },
      { n: 5, titulo: "Parada 3 — Convento de las Comendadoras", sub: "Plaza tranquila a 2 minutos del Dos de Mayo. Iglesia abierta solo en horarios concretos. El sabor del barrio antes de ser barrio." },
      { n: 6, titulo: "Parada 4 — Pez Tortilla / La Castela / un sitio normal", sub: "Para a tomar algo en un sitio sin reseña. Los sitios con 1.000 reviews ya no son del barrio." },
      { n: 7, titulo: "Parada 5 — Plaza de las Salesas", sub: "Justo al norte. La calle Argensola es una de las más quietas del centro. Iglesia barroca. Casas de embajada." },
      { n: 8, titulo: "Cierre", sub: "Malasaña tiene dos cuerpos. Uno es el que sale en TikTok. El otro sigue ahí — caminando." }
    ],
    copyPie: `Malasaña tiene dos cuerpos: el que sale en TikTok y el que sigue siendo del barrio.\n\nEste es nuestro mapa del segundo. 5 paradas para caminarla como vecino, no como turista.\n\nGuarda y sal un sábado por la mañana, no por la noche.\n\n📌 Comenta MALASAÑA y te enviamos: 10 librerías de barrio que merecen un sábado entero.`,
    kpi: ">11% save · share alto entre madrileños recientes"
  },
  {
    id: "C-W11", sem: 11, mes: "Ago", formato: "C3", nombreFormato: "Historia en 9 imágenes",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "Teatro Real en 9 imágenes — la ópera que dos veces estuvo a punto de cerrar",
    slides: [
      { n: 1, titulo: "El Teatro Real en 9 imágenes.", sub: "Cómo Madrid pasó de tener un teatro de ópera ruinoso a una de las mejores casas líricas de Europa." },
      { n: 2, titulo: "1850", sub: "Isabel II inaugura el Teatro Real. Madrid quiere su gran teatro de ópera al nivel de París y Viena." },
      { n: 3, titulo: "Años 20-30", sub: "Decadencia. Problemas estructurales. El teatro se cierra por seguridad." },
      { n: 4, titulo: "Franquismo", sub: "Reabre como sala de conciertos sin ópera regular durante décadas. La ópera en Madrid es residual." },
      { n: 5, titulo: "1988", sub: "Se decide la rehabilitación completa. Cierre total. Madrid pierde su único teatro de ópera durante una década." },
      { n: 6, titulo: "1997", sub: "Reapertura tras 10 años y 18.000 millones de pesetas de obra. Madrid recupera ópera de primer nivel." },
      { n: 7, titulo: "2000s", sub: "Programación internacional. Domingo, Plácido. Encuentros con cantantes de primera línea. El Real entra en el circuito mundial." },
      { n: 8, titulo: "Hoy", sub: "12 producciones por temporada. Abono \"Última hora\": butacas de 25€ una semana antes. Entradas hasta 250€. Todo el espectro." },
      { n: 9, titulo: "Por qué importa", sub: "Cuando un edificio cultural está a punto de cerrar dos veces y aguanta, deja de ser arquitectura. Es decisión colectiva. Hay que ir." }
    ],
    copyPie: `El Teatro Real estuvo a punto de cerrar dos veces. Hoy es una de las mejores casas líricas de Europa.\n\nButacas "Última hora" a 25€. Una semana antes. Inscripción gratuita en su newsletter.\n\nVes y comprendes por qué importa que sigamos manteniendo esta cosa abierta.\n\n📌 teatroreal.es\n📌 Comenta REAL y te enviamos: la agenda esencial Veranos de la Villa 2026.`,
    kpi: ">8% save · alto share entre suscriptores potenciales"
  },
  {
    id: "C-W12", sem: 12, mes: "Ago", formato: "C4", nombreFormato: "Manual cultural +30",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "Cómo empezar a coleccionar arte joven en Madrid sin gastar mucho",
    slides: [
      { n: 1, titulo: "Cómo empezar a coleccionar arte joven en Madrid.", sub: "Sin gastar mucho. Y sin meter la pata. Manual +30." },
      { n: 2, titulo: "Paso 1 — Qué presupuesto necesitas", sub: "300-600€ por pieza es realista para empezar. Por debajo de 300, suele ser print numerado, no obra. Por encima de 1.000, ya entras en otra liga." },
      { n: 3, titulo: "Paso 2 — Dónde mirar", sub: "Galerías jóvenes (F2, Sabrina Amrani, House of Chappaz), ferias gratuitas (Apertura, en septiembre cada año), Estampa, JustMad." },
      { n: 4, titulo: "Paso 3 — Sigue artistas, no galerías", sub: "Instagram de los propios artistas. Tendencia: comprar directo al artista joven está bien visto, pero pregunta si tiene galería primero." },
      { n: 5, titulo: "Paso 4 — Cómo no pagar de más", sub: "Compara precios entre piezas similares del mismo artista. Si una galería te lo pone más caro que su propio Instagram, pregunta." },
      { n: 6, titulo: "Paso 5 — Pide ficha técnica antes de comprar", sub: "Material, tamaño, año, edición (si la hay). Sin eso, no es obra: es decoración." },
      { n: 7, titulo: "Paso 6 — Tu primera obra no es \"inversión\"", sub: "Compra lo que te gusta y vas a poder mirar todos los días. La revalorización es bonus, no objetivo." },
      { n: 8, titulo: "Para llevarte", sub: "Comprar arte joven en Madrid es accesible. Lo difícil es perder el miedo a entrar en una galería sin proyecto de compra. Empieza por ahí." }
    ],
    copyPie: `Coleccionar arte joven en Madrid es más accesible de lo que crees.\n\n300-600€ por pieza realista para empezar. Galerías como F2, Sabrina Amrani o House of Chappaz están abiertas a colecciones emergentes.\n\nLo difícil no es el dinero. Es perder el miedo a entrar.\n\nGuarda este carrusel para tu próxima galería.\n\n📌 Comenta GALERIA y te enviamos: el calendario de aperturas y ferias jun-ago.`,
    kpi: ">9% save · share interno alto · DMs sobre próximas visitas"
  }
];

window.TMT.carruselesFormatos = [
  { id: "C1", nombre: "Glosario del Madrid culto", pilar: "Mirada experta", pilarN: "I", slides: "7-9", estructura: "Definición + ejemplo visual + por qué importa.", kpi: ">7% save" },
  { id: "C2", nombre: "Mapa secreto de…", pilar: "Ritual cultural", pilarN: "IV", slides: "7-9", estructura: "Barrio madrileño con 5 paradas no obvias.", kpi: ">11% save" },
  { id: "C3", nombre: "Historia en 9 imágenes", pilar: "Patrimonio vivo", pilarN: "II", slides: "9", estructura: "Relato visual de un café, edificio o institución de Madrid.", kpi: ">7% save · alto tiempo" },
  { id: "C4", nombre: "Manual cultural +30", pilar: "Ritual cultural", pilarN: "IV", slides: "7-8", estructura: "Cómo iniciarse en algo cultural concreto (ópera, jazz, arte).", kpi: ">9% save" }
];

// -------------------------------------------------------------
// LEAD MAGNETS — 6 piezas prácticas y deseables · Madrid
// -------------------------------------------------------------
window.TMT.leadMagnets = [
  {
    id: "LM1", numero: "01", mes: "Junio", quincena: "Q1",
    titulo: "10 planes culturales en Madrid por menos de 20€",
    subtitulo: "El plan-por-plan de los sábados que no necesitan presupuesto alto.",
    formato: "PDF visual · 18 páginas · A5 vertical",
    pilar: "Ritual cultural", pilarN: "IV",
    audiencia: "Madrileños que quieren tener su agenda cultural sin gastar 80€ por fin de semana.",
    hook: "El sábado culto en Madrid no necesita 200€. Necesita criterio. Esta guía te da los 10 planes que sostienen la mayoría de fines de semana de nuestros socios.",
    desarrollado: true,
    indice: [
      { p: 1, contenido: "Carta de bienvenida — cómo usar esta guía." },
      { p: 2, contenido: "Plan 1: Cine Doré + cena en taberna castiza · ~14€" },
      { p: 3, contenido: "Plan 2: Museo Cerralbo (sábado tarde gratis) + Cuesta de Moyano · ~5€" },
      { p: 4, contenido: "Plan 3: Templo de Debod por dentro + atardecer · gratis" },
      { p: 5, contenido: "Plan 4: Café Central (jazz en directo) · 18-22€" },
      { p: 6, contenido: "Plan 5: La Casa Encendida + azotea + Tabacalera · gratis" },
      { p: 7, contenido: "Plan 6: Rastro + comer caracoles en Casa Amadeo · ~15€" },
      { p: 8, contenido: "Plan 7: Cinco galerías de arte joven en Justicia · gratis" },
      { p: 9, contenido: "Plan 8: Veranos de la Villa (función + caña previa) · 10-15€" },
      { p: 10, contenido: "Plan 9: Conventos de clausura — dulces de torno + paseo Austrias · ~10€" },
      { p: 11, contenido: "Plan 10: Banda Sinfónica gratuita en Debod (verano) + cena en Casa Mingo · 12€" },
      { p: 12, contenido: "Para llevarte: cómo planificar tu propio sábado culto (plantilla)." },
      { p: 13, contenido: "La newsletter Culturioso + invitación a la comunidad WhatsApp." }
    ],
    secuencia: [
      { dia: 0, asunto: "Tu guía está aquí — y un favor", cuerpo: "Entrega + pregunta abierta de feedback." },
      { dia: 2, asunto: "El plan que más sorprende", cuerpo: "Spotlight sobre el plan #4 (Café Central) con un audio breve de un socio." },
      { dia: 4, asunto: "Te invitamos al WhatsApp", cuerpo: "Invitación a la comunidad. Explicación de cómo funciona el grupo." },
      { dia: 8, asunto: "Cómo los socios usan la guía", cuerpo: "Tres testimonios reales de uso. Trigger emocional." },
      { dia: 12, asunto: "El siguiente lead magnet llega el viernes", cuerpo: "Anuncio LM2 (5 restaurantes históricos) + invitación contextual al club." }
    ],
    diseño: "Cubierta tipo libro editorial · Fraunces XL · ilustración minimalista de mapa de Madrid. Cuerpo en Geist. Una foto por plan. Numeración tipo revista. Mapa desplegable al final.",
    conexion: "La guía instala el hábito de \"sábado con planes\". El siguiente LM (5 restaurantes) profundiza en gastronomía cultural. Quien siga abriendo entra en segmento Engaged y recibe invitación al club con experiencia gratuita de bienvenida.",
    kpiObjetivo: "450 descargas en 15 días · tasa apertura primer envío >55% · 35% acepta invitación WhatsApp",
    palabraClave: "MADRID"
  },
  {
    id: "LM2", numero: "02", mes: "Junio", quincena: "Q2",
    titulo: "5 restaurantes con más historia cultural en Madrid",
    subtitulo: "Mesas en las que se cocinó el siglo XX español.",
    formato: "PDF visual · 16 páginas · A5 vertical",
    pilar: "Patrimonio vivo", pilarN: "II",
    audiencia: "Adultos que disfrutan comiendo bien y sienten que les falta el relato detrás del plato.",
    hook: "Madrid tiene cinco mesas en las que se escribió literatura, se hizo política y se firmaron historias. Esta guía te lleva por dentro de cada una.",
    palabraClave: "MESA",
    kpiObjetivo: "380 descargas · alto share en stories",
    indice: [
      { p: 1, contenido: "Carta de bienvenida." },
      { p: 2, contenido: "Restaurante 1: Casa Botín (1725) — restaurante en activo más antiguo del mundo. Goya trabajó aquí de friegaplatos." },
      { p: 3, contenido: "Restaurante 2: Lhardy (1839) — el cocido de los reyes y los políticos del XIX." },
      { p: 4, contenido: "Restaurante 3: Casa Lucio — el cocido y el Madrid de los Austrias." },
      { p: 5, contenido: "Restaurante 4: Casa Mingo (1888) — la sidrería donde cenaba Goya en el otro extremo de su vida." },
      { p: 6, contenido: "Restaurante 5: La Bola (1870) — el cocido en olla individual. Tradición que casi se pierde." },
      { p: 7, contenido: "Para llevarte: cómo reservar bien, qué pedir, cuándo evitar." }
    ]
  },
  {
    id: "LM3", numero: "03", mes: "Julio", quincena: "Q1",
    titulo: "Madrid los lunes: qué hacer cuando los museos cierran",
    subtitulo: "12 planes culturales para el día más complicado de la semana.",
    formato: "PDF guía · 14 páginas · A5 vertical",
    pilar: "Ritual cultural", pilarN: "IV",
    audiencia: "Madrileños que tienen lunes libres, autónomos, gente que viaja a Madrid en semana corta.",
    hook: "Los lunes Madrid parece cerrada. No lo está. Solo hay que saber dónde mirar.",
    palabraClave: "LUNES",
    kpiObjetivo: "320 descargas · alto comportamiento de save"
  },
  {
    id: "LM4", numero: "04", mes: "Julio", quincena: "Q2",
    titulo: "El mapa de los conciertos gratis de Madrid",
    subtitulo: "Festivales urbanos, bandas municipales, ciclos abiertos. Junio-agosto.",
    formato: "PDF estacional · 20 páginas + mapa desplegable",
    pilar: "Ritual cultural", pilarN: "IV",
    audiencia: "Quien quiere tener música en directo en su verano sin pagar 80€ por entrada.",
    hook: "Madrid tiene más conciertos gratis que cualquier otra capital europea de su tamaño. La pregunta es saber dónde mirar.",
    palabraClave: "VERANO",
    kpiObjetivo: "500 descargas (pico de campaña veraniego) · share alto en grupos"
  },
  {
    id: "LM5", numero: "05", mes: "Agosto", quincena: "Q1",
    titulo: "10 librerías de barrio que merecen un sábado entero",
    subtitulo: "Las que sobreviven. Las que vale la pena defender comprando.",
    formato: "PDF guía · 16 páginas con mapa",
    pilar: "Patrimonio vivo", pilarN: "II",
    audiencia: "Lectores adultos que entienden que la librería independiente es patrimonio.",
    hook: "Cada vez quedan menos. Las que aguantan no son tiendas — son criterios. Estas son las 10 que sostienen lo mejor del Madrid lector.",
    palabraClave: "LIBROS",
    kpiObjetivo: "340 descargas · alto share entre afines"
  },
  {
    id: "LM6", numero: "06", mes: "Agosto", quincena: "Q2",
    titulo: "Veranos de la Villa: la agenda esencial 2026",
    subtitulo: "Las 12 piezas que merecen reserva. Filtradas con criterio.",
    formato: "PDF guía estacional · 18 páginas",
    pilar: "Ritual cultural", pilarN: "IV",
    audiencia: "Madrileños que llevan años diciendo \"tengo que ir más a los Veranos\".",
    hook: "200+ eventos. 30+ espacios. Esta guía te filtra las 12 piezas que valen la pena bloquear en agenda.",
    palabraClave: "VERANOS",
    kpiObjetivo: "420 descargas · alto comportamiento de save · DMs preguntando por plan con socios"
  }
];

// -------------------------------------------------------------
// EMBUDO — Instagram → ManyChat → Email → WhatsApp → Multicanal
// -------------------------------------------------------------
window.TMT.embudo = [
  {
    n: "01",
    nombre: "Captación orgánica en Instagram",
    titulo: "Reels + carruseles con keyword de descarga",
    objetivo: "Convertir scroll en intención. Cada pieza orgánica termina con una palabra clave concreta.",
    tacticas: [
      "Cada pieza acaba con CTA explícito: \"Comenta MADRID / RASTRO / MESA / etc.\".",
      "Stories diarias re-activan palabras clave de piezas anteriores.",
      "1 lead magnet activo cada quincena (con palabra clave dedicada)."
    ],
    kpi: "Comentarios con palabra clave / pieza > 80 (orgánico)",
    herramientas: "Notion editorial · CapCut Pro · Calendario interno · Meta Business Suite",
    detalleOperativo: "Las palabras clave se acuerdan al inicio de cada quincena. Se usan tanto en pie como sobreimpresionadas en pantalla en el último segundo de cada pieza."
  },
  {
    n: "02",
    nombre: "Automatización con ManyChat",
    titulo: "Comentario clave → DM automático → email",
    objetivo: "Convertir comentario en email cualificado sin fricción humana.",
    tacticas: [
      "Trigger: keyword en comentario público (configurado en ManyChat).",
      "Bot envía DM inicial: \"¡Hola! Te dejo aquí la guía. Para enviártela completa, dime tu email.\"",
      "Usuario responde con email → bot valida formato y envía link de descarga.",
      "Email entra automáticamente en lista de Beehiiv en segmento \"Engaged · LM[X]\".",
      "Para usuarios que no contestan en 24h: bot envía recordatorio único."
    ],
    kpi: "Conversión comentario → email cualificado >65%",
    herramientas: "ManyChat (plan Pro) · Beehiiv (email) · webhook entre ambos",
    detalleOperativo: "Flujo único maestro por palabra clave. Cada flujo se documenta en Notion. Auditoría semanal de tasa de finalización del flujo."
  },
  {
    n: "03",
    nombre: "Email + invitación a WhatsApp",
    titulo: "Entrega del lead magnet + apertura de comunidad",
    objetivo: "Construir la comunidad WhatsApp como espacio de relación y alta frecuencia.",
    tacticas: [
      "Email 0 (D+0): entrega del LM con link de descarga + pregunta abierta.",
      "Email 1 (D+2): historia complementaria sobre uno de los puntos del LM. Refuerza autoridad editorial.",
      "Email 2 (D+4): invitación a la comunidad WhatsApp. Link de invitación. Explicación clara del valor (pre-alertas, descuentos, conversación).",
      "Email 3 (D+8): testimonios reales de uso del LM y de la comunidad.",
      "Email 4 (D+12): anuncio del siguiente LM + invitación contextual al club si procede."
    ],
    kpi: "% acepta WhatsApp / sobre entregas LM > 30% · apertura email serie > 50% mediana",
    herramientas: "Beehiiv · automations de bienvenida · WhatsApp Business + link de grupo / comunidad",
    detalleOperativo: "Plantillas de los 5 emails revisadas al inicio del trimestre. Tono editorial igual al newsletter — no comercial."
  },
  {
    n: "04",
    nombre: "Comunicación multicanal",
    titulo: "Email quincenal + WhatsApp diario",
    objetivo: "Mantener relación continua con segmentación clara. No repetir entre canales.",
    tacticas: [
      "Email quincenal Culturioso: pieza editorial larga, sin contenido perecedero.",
      "WhatsApp Comunidad: alta frecuencia, mensajes cortos, contenido perecedero (\"hoy a las 19h en Debod gratis…\").",
      "WhatsApp Canales (no grupos) por interés: \"Música en directo\", \"Arte joven\", \"Plan de domingo\".",
      "Cada 3 quincenas, mensaje dirigido a Engaged: invitación a evento del club con experiencia gratuita."
    ],
    kpi: "Tasa de respuesta WhatsApp >18% · conversión club desde Engaged 8-12%",
    herramientas: "Beehiiv · WhatsApp Business · CRM ligero (Notion / Airtable / Attio)",
    detalleOperativo: "Calendario maestro de envíos cruzados. Reglas de no-repetición. Reportes mensuales de canal por canal."
  }
];

// -------------------------------------------------------------
// PLAN — Roadmap 12 semanas + calendario quincena tipo
// -------------------------------------------------------------
window.TMT.plan = {
  roadmap: [
    {
      n: "01", nombre: "Setup operativo", duracion: "Semana 0", fechas: "25 mayo — 31 mayo",
      hitos: [
        "Cierre tono editorial + paleta + plantillas de Reels y Carruseles.",
        "Configuración de ManyChat (5 flujos maestros).",
        "Creación de la comunidad WhatsApp + canales temáticos.",
        "Producción y diseño LM1 + LM2 (Junio Q1 y Q2).",
        "Aprobación del plan editorial del primer mes."
      ]
    },
    {
      n: "02", nombre: "Junio · Lanzamiento", duracion: "4 semanas", fechas: "1 junio — 28 junio",
      hitos: [
        "Publicación de los 4 reels y 4 carruseles desarrollados.",
        "Lanzamiento LM1 (10 planes <20€) y LM2 (5 restaurantes históricos).",
        "2 envíos de newsletter Culturioso.",
        "Apertura WhatsApp con primeros 100 invitados desde lista existente.",
        "Lectura de datos quincena 1 + ajuste fino quincena 2."
      ]
    },
    {
      n: "03", nombre: "Julio · Crucero", duracion: "5 semanas", fechas: "29 junio — 2 agosto",
      hitos: [
        "Ejecución sostenida (4 reels + 4 carruseles + stories).",
        "Lanzamiento LM3 (Madrid los lunes) y LM4 (mapa de conciertos gratis).",
        "2 envíos newsletter Culturioso.",
        "Primer paid layer ligero sobre el reel con mejor performance orgánica.",
        "Primer evento real solo-socios documentado para R5."
      ]
    },
    {
      n: "04", nombre: "Agosto · Consolidación", duracion: "4 semanas", fechas: "3 agosto — 30 agosto",
      hitos: [
        "Ejecución sostenida (4 reels + 4 carruseles + stories).",
        "Lanzamiento LM5 (librerías de barrio) y LM6 (Veranos de la Villa).",
        "2 envíos newsletter + envío de cierre con reporte editorial trimestral.",
        "Reporte de trimestre: datos, aprendizajes, propuesta de Q4."
      ]
    }
  ],
  roles: [
    { rol: "Dirección estratégica", entrega: "Sesión mensual + reporte de cierre trimestral." },
    { rol: "Dirección creativa", entrega: "Concept editorial de cada quincena + revisión de cada LM antes de publicación." },
    { rol: "Copy + guion", entrega: "12 reels + 12 carruseles + stories + 6 newsletters + 6 LMs." },
    { rol: "Producción audiovisual", entrega: "Grabación, edición y color de los 12 reels + recursos para stories diarias." },
    { rol: "Diseño gráfico", entrega: "12 carruseles + 6 lead magnets + plantillas reutilizables Stories." },
    { rol: "Automatizaciones", entrega: "5 flujos ManyChat · integraciones Beehiiv · canales WhatsApp configurados." },
    { rol: "Community management", entrega: "Respuesta L-V · escucha activa · DMs cualificados · moderación WhatsApp." },
    { rol: "Analítica", entrega: "Dashboard mensual + revisión quincenal · KPIs por canal." }
  ]
};

window.TMT.calendario = {
  q1: [
    { dia: "L", fecha: "1", pieza: "Story serie · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "2", pieza: "Reel W01 · El Fénix antes del Ángel", formato: "Reel", pilar: "I", apunta: "LM1 · keyword MADRID" },
    { dia: "Mi", fecha: "3", pieza: "Carrusel C-W01 · Glosario del Madrid culto", formato: "Carrusel", pilar: "I", apunta: "LM1 · keyword GLOSARIO" },
    { dia: "J", fecha: "4", pieza: "Story serie · Pregunta del jueves", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "V", fecha: "5", pieza: "Newsletter Culturioso · Envío 01", formato: "Email", pilar: "—", apunta: "Relación" },
    { dia: "S", fecha: "6", pieza: "Story experiencia real con socios", formato: "Stories", pilar: "III", apunta: "Trigger club" },
    { dia: "D", fecha: "7", pieza: "Recovery editorial + cita Madrid", formato: "Stories", pilar: "II", apunta: "Engagement" },
    { dia: "L", fecha: "8", pieza: "Story serie · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "9", pieza: "Reel W02 · 3 min con programadora Doré", formato: "Reel", pilar: "II", apunta: "LM1 · keyword CINE" },
    { dia: "Mi", fecha: "10", pieza: "Carrusel C-W02 · Mapa secreto de Lavapiés", formato: "Carrusel", pilar: "IV", apunta: "LM1 · keyword MAPA" },
    { dia: "J", fecha: "11", pieza: "Story serie · Pregunta del jueves", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "V", fecha: "12", pieza: "Stories cierre LM1 + teaser LM2", formato: "Stories", pilar: "—", apunta: "Captación" },
    { dia: "S", fecha: "13", pieza: "Story behind the scenes producción", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "D", fecha: "14", pieza: "Lanzamiento LM2 · 5 restaurantes históricos", formato: "Lead magnet", pilar: "II", apunta: "Captación · keyword MESA" }
  ],
  q2: [
    { dia: "L", fecha: "15", pieza: "Story serie · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "16", pieza: "Reel W03 · Sábado culto por menos de 20€", formato: "Reel", pilar: "III", apunta: "LM2 · keyword MADRID" },
    { dia: "Mi", fecha: "17", pieza: "Carrusel C-W03 · Café Gijón en 9 imágenes", formato: "Carrusel", pilar: "II", apunta: "LM2 · keyword CAFÉS" },
    { dia: "J", fecha: "18", pieza: "Story serie · Pregunta del jueves", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "V", fecha: "19", pieza: "Newsletter Culturioso · Envío 02", formato: "Email", pilar: "—", apunta: "Relación" },
    { dia: "S", fecha: "20", pieza: "Story experiencia real con socios", formato: "Stories", pilar: "III", apunta: "Trigger club · WhatsApp" },
    { dia: "D", fecha: "21", pieza: "Recovery editorial + cita", formato: "Stories", pilar: "II", apunta: "Engagement" },
    { dia: "L", fecha: "22", pieza: "Story serie · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "23", pieza: "Reel W04 · Hot take Reina Sofía", formato: "Reel", pilar: "I", apunta: "LM2 · keyword REINA" },
    { dia: "Mi", fecha: "24", pieza: "Carrusel C-W04 · Manual ópera", formato: "Carrusel", pilar: "IV", apunta: "LM2 · keyword OPERA" },
    { dia: "J", fecha: "25", pieza: "Story serie · Pregunta del jueves", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "V", fecha: "26", pieza: "Stories cierre LM2 + teaser LM3", formato: "Stories", pilar: "—", apunta: "Captación" },
    { dia: "S", fecha: "27", pieza: "Story behind the scenes producción", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "D", fecha: "28", pieza: "Lectura de quincena + datos públicos", formato: "Carrusel", pilar: "—", apunta: "Comunidad" }
  ]
};

// -------------------------------------------------------------
// OBJETIVOS DEL TRIMESTRE
// -------------------------------------------------------------
window.TMT.kpis = {
  comunidad: {
    titulo: "Comunidad", n: "01",
    items: [
      { metrica: "Seguidores +30 cualificados Instagram", benchmark: "Base actual", objetivo: "+3.500 a M3", nota: "Solo segmento +30 en target geográfico Madrid." },
      { metrica: "Save rate por publicación", benchmark: "—", objetivo: ">6% mediana", nota: "Indicador #1 de relevancia editorial." },
      { metrica: "Share rate por publicación", benchmark: "—", objetivo: ">3% mediana", nota: "Indicador #1 de crecimiento orgánico." },
      { metrica: "Comentarios cualitativos por pieza", benchmark: "—", objetivo: ">15 por ancla", nota: "Conversación real, no emojis ni keywords." }
    ]
  },
  leads: {
    titulo: "Captación de leads", n: "02",
    items: [
      { metrica: "Emails captados acumulado", benchmark: "Base actual", objetivo: "1.500 a M3", nota: "Suma de los 6 lead magnets." },
      { metrica: "Conversión comentario → email cualificado", benchmark: "—", objetivo: ">65%", nota: "Auditoría flujo ManyChat semanal." },
      { metrica: "Tasa de apertura newsletter Culturioso", benchmark: "30% sector", objetivo: ">45%", nota: "Calidad de la base." },
      { metrica: "Tasa de click newsletter", benchmark: "5% sector", objetivo: ">8%", nota: "Intención real." }
    ]
  },
  whatsapp: {
    titulo: "Comunidad WhatsApp", n: "03",
    items: [
      { metrica: "Miembros activos en comunidad WhatsApp", benchmark: "0", objetivo: "500 a M3", nota: "Activo = al menos una interacción en 30d." },
      { metrica: "% emails que aceptan invitación WhatsApp", benchmark: "—", objetivo: ">30%", nota: "Sobre quien descarga LM." },
      { metrica: "Tasa de respuesta a mensajes WhatsApp", benchmark: "—", objetivo: ">18%", nota: "Indicador de relación real, no broadcast." },
      { metrica: "Canales temáticos activos", benchmark: "0", objetivo: "3 canales", nota: "Música · Arte joven · Plan de domingo." }
    ]
  },
  marca: {
    titulo: "Marca y autoridad", n: "04",
    items: [
      { metrica: "Búsquedas \"treinta más treinta\"", benchmark: "Volumen actual", objetivo: "×4 a M3", nota: "Google Trends + Search Console." },
      { metrica: "Tráfico directo a la web", benchmark: "—", objetivo: "+150%", nota: "Señal de marca instalada." },
      { metrica: "Menciones espontáneas en prensa cultural", benchmark: "—", objetivo: ">5 piezas/trimestre", nota: "Prensa cultural y comunidades afines." },
      { metrica: "Conversión Engaged → suscriptor club", benchmark: "—", objetivo: "8-12%", nota: "Métrica secundaria — el club no es el objetivo de la campaña." }
    ]
  }
};
