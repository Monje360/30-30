// ============================================================
// CONTENIDO ESTRUCTURADO — Propuesta Treinta Más Treinta
// Campaña: junio · julio · agosto 2026
// ============================================================

window.TMT = {};

// -------------------------------------------------------------
// DIAGNÓSTICO — 3 columnas
// -------------------------------------------------------------
window.TMT.diagnostico = [
  {
    eyebrow: "01 · DONDE ESTÁIS HOY",
    titulo: "Producto sólido, voz aún por consolidar.",
    bullets: [
      "Webapp funcional con 3 planes de suscripción ya activos.",
      "Catálogo de experiencias curado, pero sin narrativa pública que lo respalde.",
      "Presencia en Instagram intermitente, sin un sistema de contenido replicable.",
      "Base de emails pequeña y poco activada — no hay newsletter editorial fija.",
      "Tracción inicial llega por boca-oreja y partners, no por adquisición digital."
    ]
  },
  {
    eyebrow: "02 · EL GAP",
    titulo: "Falta autoridad cultural pública.",
    bullets: [
      "El sector cultural +30 es vasto pero no tiene un agregador con voz propia.",
      "Las cuentas de museos comunican institución. Faltan curadores con tono editorial.",
      "El público objetivo ya consume cultura — necesita una mirada que le ayude a elegir.",
      "El club solo se entiende plenamente cuando alguien percibe el criterio detrás.",
      "Sin un cuerpo de contenido público fuerte, el club parece un servicio. Debería parecer una membresía a un punto de vista."
    ]
  },
  {
    eyebrow: "03 · DONDE PODÉIS ESTAR EN 3 MESES",
    titulo: "El referente cultural +30 emergente en España.",
    bullets: [
      "Cuenta de Instagram con sistema de contenido fijo y reconocible.",
      "+1.500 emails captados a través de 6 lead magnets editoriales de alto valor.",
      "Newsletter quincenal abierta por la mitad de la base.",
      "Primeras menciones espontáneas en prensa cultural y comunidades afines.",
      "Una identidad pública que hace que cuando alguien os descubre, entienda inmediatamente para quién es."
    ]
  }
];

// -------------------------------------------------------------
// BIG IDEA — 4 pilares
// -------------------------------------------------------------
window.TMT.pilares = [
  {
    n: "I",
    nombre: "Mirada experta",
    resumen: "Descubrir lo que nadie te cuenta.",
    desarrollo: "Contenido que entrena el ojo del adulto culto. Detalles que llevas años pasando por alto, lecturas de obras que cambian la próxima visita al museo, historias detrás de edificios y barrios. Es el pilar que construye autoridad: si nos siguen, aprenden a mirar mejor.",
    formatos: "Reels R1 · R4 · Carruseles C1 · Lead magnets de descodificación cultural."
  },
  {
    n: "II",
    nombre: "Patrimonio vivo",
    resumen: "Instituciones, lugares y personas.",
    desarrollo: "El patrimonio no es lo antiguo: es lo que sigue vivo porque hay gente cuidándolo. Comisarios, restauradores, libreros, anticuarios, programadores de filmoteca. Damos voz a quienes mantienen viva la cultura desde dentro y no salen en los titulares.",
    formatos: "Reels R2 · Carruseles C3 · Lead magnets de profundización en figuras y obras."
  },
  {
    n: "III",
    nombre: "Comunidad +30",
    resumen: "Historias reales de la membresía.",
    desarrollo: "Mostrar que detrás del club hay personas reales con vidas reales que han decidido volver a poner cultura en su rutina. Vlogs de experiencias, conversaciones de sobremesa, testimonios sin postureo. Es el pilar que convierte interés en pertenencia.",
    formatos: "Reels R3 · R5 · Stories sostenidas · Newsletter \"Culturioso\"."
  },
  {
    n: "IV",
    nombre: "Ritual cultural",
    resumen: "Micro-hábitos para la vida adulta.",
    desarrollo: "Cómo iniciarse en ópera sin sentirse fuera de lugar. Cómo leer un cuadro en 5 pasos. Cómo planear un domingo cultural sin presión. Damos plantillas y rituales pequeños que hacen que la cultura quepa en una agenda ocupada.",
    formatos: "Carruseles C2 · C4 · Lead magnets prácticos · Newsletter."
  }
];

// -------------------------------------------------------------
// REELS — 5 formatos en rotación · 12 piezas en 12 semanas
// -------------------------------------------------------------
window.TMT.reelsFormatos = [
  {
    id: "R1",
    nombre: "El detalle que nadie ve",
    pilar: "Mirada experta",
    pilarN: "I",
    hookTipo: "\"Llevas pasando por delante de esto toda tu vida y no lo has visto.\"",
    duracion: "25-40s",
    estructura: [
      "0-2s · Hook: afirmación que crea disonancia.",
      "2-8s · Contexto: dato breve que enmarca.",
      "8-20s · Revelación: historia o cambio invisible.",
      "20-28s · Idea grande: por qué importa mirar.",
      "28-35s · CTA blando: invitación al lead magnet activo."
    ],
    kpi: ">8% save rate · >3% share rate",
    desarrollado: true,
    hookEjemplo: "Plano del Edificio Metrópolis en Gran Vía. \"Pasas por aquí cada semana. Pero no estás mirando lo que tienes que mirar.\"",
    copyDesarrollado: `Antes del Ángel hubo un Fénix. La estatua que corona Metrópolis se cambió en 1975, y la mayoría de madrileños no lo sabe.

No te decimos esto para que te sepas un dato. Te lo decimos porque mirar bien una ciudad es un músculo. Y como todos los músculos, se entrena.

Guarda este reel si quieres entrenar el tuyo.

— En la bio: Madrid en 7 paradas que no salen en TripAdvisor.`,
    produccion: [
      "2-3 planos del edificio (zoom in progresivo).",
      "1 imagen de archivo histórico (dominio público o cesión).",
      "Música: ambient mínimo, sin pico.",
      "Texto en pantalla: Fraunces, animación de typing letra a letra."
    ]
  },
  {
    id: "R2",
    nombre: "3 minutos con…",
    pilar: "Patrimonio vivo",
    pilarN: "II",
    hookTipo: "Entrevista cortísima a un artesano, restaurador, comisaria o librero.",
    duracion: "45-60s",
    estructura: [
      "0-3s · Carta de presentación: nombre, oficio, lugar.",
      "3-15s · Una pregunta concreta sobre su trabajo.",
      "15-45s · Respuesta sin cortes: lo que aprendió esta semana.",
      "45-60s · Cierre con frase que se pueda citar + datos del lugar."
    ],
    kpi: ">5% save rate · alta retención hasta el final"
  },
  {
    id: "R3",
    nombre: "Plan en 60 segundos",
    pilar: "Comunidad +30",
    pilarN: "III",
    hookTipo: "\"Sábado culto sin gastarte un sueldo: cómo lo hago yo.\"",
    duracion: "45-60s",
    estructura: [
      "0-3s · Hook con horario y presupuesto reales.",
      "3-25s · Parada 1: lugar + 1 razón.",
      "25-45s · Parada 2: lugar + 1 razón.",
      "45-60s · Parada 3 + cierre: \"esto es lo que yo haría hoy\"."
    ],
    kpi: ">10% save rate (planes se guardan)"
  },
  {
    id: "R4",
    nombre: "Hot take cultural",
    pilar: "Mirada experta",
    pilarN: "I",
    hookTipo: "Opinión incómoda y razonada sobre algo del mundo cultural.",
    duracion: "30-45s",
    estructura: [
      "0-3s · Tesis afilada (\"El Reina Sofía está mal contado\").",
      "3-25s · 2-3 argumentos cortos.",
      "25-40s · Matización honesta — qué sí funciona.",
      "40-45s · Cierre que invita al debate, no al aplauso."
    ],
    kpi: ">6% share rate · >50 comentarios cualitativos"
  },
  {
    id: "R5",
    nombre: "Detrás de la experiencia",
    pilar: "Comunidad +30",
    pilarN: "III",
    hookTipo: "Vlog de una experiencia real del club (miembros incluidos, con permiso).",
    duracion: "60-90s",
    estructura: [
      "0-5s · Cabecera: qué experiencia y dónde.",
      "5-30s · Llegada y primeras impresiones (multi-cámara).",
      "30-70s · Momento clave + 1 frase de un miembro.",
      "70-90s · Cierre editorial: \"esto es lo que pasa cuando juntas a estas personas en este lugar\"."
    ],
    kpi: "Conversión a interés en el club desde audiencia caliente"
  }
];

// 12 piezas concretas en 12 semanas
window.TMT.reels12 = [
  { sem: 1, mes: "Jun", formato: "R1", pieza: "El Fénix antes del Ángel — Edificio Metrópolis" },
  { sem: 2, mes: "Jun", formato: "R2", pieza: "3 min con una restauradora del Museo del Prado" },
  { sem: 3, mes: "Jun", formato: "R3", pieza: "Plan: sábado culto en Madrid por menos de 20€" },
  { sem: 4, mes: "Jun", formato: "R4", pieza: "Hot take: por qué el Reina Sofía está mal contado" },
  { sem: 5, mes: "Jul", formato: "R5", pieza: "Detrás: visita guiada para socios en el Museo Sorolla" },
  { sem: 6, mes: "Jul", formato: "R1", pieza: "El detalle que cambia las Meninas la próxima vez que las mires" },
  { sem: 7, mes: "Jul", formato: "R2", pieza: "3 min con un librero de la Cuesta de Moyano" },
  { sem: 8, mes: "Jul", formato: "R3", pieza: "Plan: domingo en Valencia entre IVAM y el Carmen" },
  { sem: 9, mes: "Ago", formato: "R4", pieza: "Hot take: por qué crees que no entiendes arte contemporáneo" },
  { sem: 10, mes: "Ago", formato: "R5", pieza: "Detrás: tarde de ópera con socios en el Real" },
  { sem: 11, mes: "Ago", formato: "R1", pieza: "Lo que nadie te cuenta del Templo de Debod" },
  { sem: 12, mes: "Ago", formato: "R2", pieza: "3 min con la directora del Museo Cerralbo" }
];

// -------------------------------------------------------------
// CARRUSELES — 4 formatos en rotación · 12 piezas en 12 semanas
// -------------------------------------------------------------
window.TMT.carruselesFormatos = [
  {
    id: "C1",
    nombre: "Glosario del adulto culto",
    pilar: "Mirada experta",
    pilarN: "I",
    slides: "8-10",
    estructura: "Definición + ejemplo visual + por qué importa.",
    kpi: ">7% save rate (los glosarios se vuelven a consultar)"
  },
  {
    id: "C2",
    nombre: "Mapa secreto de…",
    pilar: "Ritual cultural",
    pilarN: "IV",
    slides: "7-9",
    estructura: "Barrio o ciudad con 5 paradas no obvias.",
    kpi: ">12% save rate · >5% share rate",
    desarrollado: true,
    slidesDesarrollados: [
      {
        n: 1,
        titulo: "Lavapiés que no te enseñan.",
        sub: "5 paradas para mirar el barrio con otros ojos.",
        nota: "Portada · Fondo crema, mapa minimalista con 5 puntos numerados."
      },
      {
        n: 2,
        titulo: "Introducción",
        sub: "Lavapiés se ha contado mil veces. Casi siempre mal: como barrio de moda, como barrio conflictivo, como barrio bohemio. Este no es ese mapa."
      },
      {
        n: 3,
        titulo: "Parada 1 — La Corrala",
        sub: "No es solo una corrala. Es el último testigo de la vivienda obrera del XIX. Mira las galerías. Cada barandilla es una vida."
      },
      {
        n: 4,
        titulo: "Parada 2 — Tabacalera",
        sub: "Fábrica de tabaco → centro autogestionado. Edificio del XVIII que aloja arte contemporáneo gratis. Pregunta por el patio: ahí ocurren las cosas."
      },
      {
        n: 5,
        titulo: "Parada 3 — La Casa Encendida",
        sub: "No vayas solo a la expo. Sube a la azotea. Es uno de los mejores miradores del centro y casi nadie lo usa."
      },
      {
        n: 6,
        titulo: "Parada 4 — Plaza de Lavapiés",
        sub: "Mira el cine Doré (Filmoteca). Cinco euros la sesión. Una de las salas con mejor programación de Europa, y la mayoría no entra nunca."
      },
      {
        n: 7,
        titulo: "Parada 5 — Mesón de Paredes 13",
        sub: "Camina hasta el número 13. Es la Posada del Dragón, posada del XVII. No entres como turista. Entra como vecino. Pide un vino."
      },
      {
        n: 8,
        titulo: "Cierre",
        sub: "Un barrio no se conoce yendo. Se conoce mirando.",
        nota: "Cierre · En la bio: la guía completa de Madrid en 7 paradas que no salen en TripAdvisor."
      }
    ],
    copyPie: `Lavapiés se ha contado mil veces. Casi siempre mal.

Este es nuestro mapa: 5 paradas para mirarlo sin los filtros de la guía de fin de semana.

Guarda el carrusel para tu próximo paseo. Y si conoces a alguien que dice que ya conoce Lavapiés, etiquétalo. Le va a venir bien.`
  },
  {
    id: "C3",
    nombre: "Historia en 9 imágenes",
    pilar: "Patrimonio vivo",
    pilarN: "II",
    slides: "9",
    estructura: "Relato visual de una pieza, edificio o tradición.",
    kpi: ">6% save rate · alto tiempo de visualización"
  },
  {
    id: "C4",
    nombre: "Manual cultural +30",
    pilar: "Ritual cultural",
    pilarN: "IV",
    slides: "6-8",
    estructura: "Cómo iniciarte en ópera / arte contemporáneo / jazz / etc.",
    kpi: ">10% save rate · alto share entre personas de 30-45"
  }
];

window.TMT.carruseles12 = [
  { sem: 1, mes: "Jun", formato: "C1", pieza: "Glosario: claroscuro, contrapposto, sfumato" },
  { sem: 2, mes: "Jun", formato: "C2", pieza: "Mapa secreto de Lavapiés" },
  { sem: 3, mes: "Jun", formato: "C3", pieza: "Las Meninas en 9 imágenes — todo lo que no ves" },
  { sem: 4, mes: "Jun", formato: "C4", pieza: "Manual +30: cómo iniciarte en la ópera sin morir en el intento" },
  { sem: 5, mes: "Jul", formato: "C1", pieza: "Glosario: barroco, rococó, neoclásico" },
  { sem: 6, mes: "Jul", formato: "C2", pieza: "Mapa secreto del Madrid de los Austrias" },
  { sem: 7, mes: "Jul", formato: "C3", pieza: "El Guernica en 9 imágenes — antes, durante y después" },
  { sem: 8, mes: "Jul", formato: "C4", pieza: "Manual +30: cómo empezar a coleccionar arte con poco dinero" },
  { sem: 9, mes: "Ago", formato: "C1", pieza: "Glosario: cubismo, surrealismo, abstracción" },
  { sem: 10, mes: "Ago", formato: "C2", pieza: "Mapa secreto de Ruzafa (Valencia)" },
  { sem: 11, mes: "Ago", formato: "C3", pieza: "La Lonja de Valencia en 9 imágenes" },
  { sem: 12, mes: "Ago", formato: "C4", pieza: "Manual +30: cómo aprender a leer un cuadro en 20 minutos" }
];

// -------------------------------------------------------------
// LEAD MAGNETS — 6 piezas, 2/mes, mainstream
// -------------------------------------------------------------
window.TMT.leadMagnets = [
  {
    id: "LM1",
    numero: "01",
    mes: "Junio",
    quincena: "Q1",
    titulo: "El Prado en 90 minutos",
    subtitulo: "Las 12 obras imprescindibles y cómo mirarlas bien.",
    formato: "PDF visual · 24 páginas · A5 horizontal",
    pilar: "Mirada experta",
    pilarN: "I",
    audiencia: "Adultos +30 que han ido al Prado una vez de turistas y quieren volver con criterio.",
    hook: "Hay 8.000 obras en el Prado. Si tienes hora y media, estas son las 12 que importan — y por qué.",
    desarrollado: true,
    indice: [
      { p: 1, contenido: "Carta de bienvenida — firma editorial de Treinta Más Treinta." },
      { p: 2, contenido: "Cómo usar esta guía — el itinerario en mapa con tiempos." },
      { p: "3-20", contenido: "Las 12 obras: Las Meninas, Las Hilanderas, El Jardín de las Delicias, Saturno devorando a su hijo, La maja desnuda, Las tres Gracias, El Caballero de la mano en el pecho, La rendición de Breda, El 3 de mayo, El descendimiento (Van der Weyden), La fragua de Vulcano, Cristo crucificado (Velázquez)." },
      { p: "21-22", contenido: "Para llevarte — 3 rituales para integrar el Prado en tu vida (visita corta mensual, audio para volver, app oficial)." },
      { p: "23-24", contenido: "Carta de despedida + invitación suave al club." }
    ],
    secuencia: [
      { dia: 0, asunto: "Tu guía del Prado ya está aquí", cuerpo: "Entrega + pregunta abierta de feedback." },
      { dia: 2, asunto: "¿Has visto ya las Meninas con estos ojos?", cuerpo: "Una historia breve sobre los espejos del cuadro." },
      { dia: 5, asunto: "La obra que no incluimos (y por qué)", cuerpo: "Pieza secreta exclusiva por email — sensación de insider." },
      { dia: 9, asunto: "Lo que nuestros socios hacen con esta guía", cuerpo: "2-3 testimonios reales de uso." },
      { dia: 13, asunto: "Lo que viene en quince días", cuerpo: "Anuncio del siguiente LM + invitación contextual al club." }
    ],
    diseño: "Cubierta tipo libro editorial (Fraunces XL, ilustración de Las Meninas en línea). Cuerpo en Inter Tight. Una imagen única por obra. Numeración tipo revista.",
    conexion: "La guía abre apetito por el Prado → el siguiente LM (\"Cómo mirar un cuadro\") amplía el músculo → quien siga abriendo entra en segmento \"Engaged\" → propuesta de club con visita guiada gratuita de bienvenida.",
    kpiObjetivo: "450 descargas en 15 días · tasa apertura email 0 >55%."
  },
  {
    id: "LM2",
    numero: "02",
    mes: "Junio",
    quincena: "Q2",
    titulo: "Cómo mirar un cuadro",
    subtitulo: "5 claves que cambian todo (y un audio de 15 min).",
    formato: "PDF 16pp + audio descargable 15 min",
    pilar: "Mirada experta",
    pilarN: "I",
    audiencia: "Adultos que entran a museos y salen con la sensación de no haber visto lo que debían.",
    hook: "Si vas al museo y miras los cuadros 4 segundos, te estás perdiendo el cuadro. Esta guía cambia eso para siempre.",
    kpiObjetivo: "350 descargas · 60% tasa de escucha del audio."
  },
  {
    id: "LM3",
    numero: "03",
    mes: "Julio",
    quincena: "Q1",
    titulo: "Velázquez, Goya, Sorolla",
    subtitulo: "Guía visual para distinguirlos a la primera mirada.",
    formato: "PDF visual 20pp · comparativa lado a lado",
    pilar: "Patrimonio vivo",
    pilarN: "II",
    audiencia: "Quien quiere dejar de sentirse perdido entre nombres y siglos del arte español.",
    hook: "Si pudieras pasar 10 minutos con un cuadro de cada uno y supieras dónde mirar, los reconocerías toda la vida. Esta guía te enseña dónde mirar.",
    kpiObjetivo: "400 descargas · alto share rate en stories."
  },
  {
    id: "LM4",
    numero: "04",
    mes: "Julio",
    quincena: "Q2",
    titulo: "Madrid cultural en un fin de semana",
    subtitulo: "El itinerario completo — sábado y domingo, mañana y tarde.",
    formato: "PDF guía 24pp con mapa desplegable",
    pilar: "Ritual cultural",
    pilarN: "IV",
    audiencia: "Madrileños que quieren redescubrir su ciudad + visitantes que quieren ir más allá de la guía estándar.",
    hook: "El 90% del Madrid cultural que merece la pena cabe en 48 horas bien planificadas. Esta es la planificación.",
    kpiObjetivo: "500 descargas (pico de campaña) · alto save rate."
  },
  {
    id: "LM5",
    numero: "05",
    mes: "Agosto",
    quincena: "Q1",
    titulo: "Valencia más allá de la Albufera",
    subtitulo: "Una ruta cultural en 48h fuera del circuito turístico.",
    formato: "PDF guía 22pp · plantilla de planificación incluida",
    pilar: "Ritual cultural",
    pilarN: "IV",
    audiencia: "Adultos que conocen Valencia por tópicos y quieren la versión cultural del local.",
    hook: "La paella, las Fallas y la Ciudad de las Artes son tres cosas. Valencia tiene cuarenta. Estas son las que importan.",
    kpiObjetivo: "320 descargas · expansión a comunidad valenciana."
  },
  {
    id: "LM6",
    numero: "06",
    mes: "Agosto",
    quincena: "Q2",
    titulo: "De Picasso a Barceló",
    subtitulo: "Arte contemporáneo español sin filtros — un siglo en 12 obras.",
    formato: "PDF visual 26pp · línea de tiempo desplegable",
    pilar: "Mirada experta",
    pilarN: "I",
    audiencia: "Quien siempre ha dicho \"el arte contemporáneo no lo entiendo\" — y ya está cansado de decirlo.",
    hook: "El arte contemporáneo español no es difícil. Es que nadie te lo cuenta en orden. Aquí va en orden.",
    kpiObjetivo: "380 descargas · cierre fuerte del trimestre."
  }
];

// -------------------------------------------------------------
// EMBUDO — 4 fases
// -------------------------------------------------------------
window.TMT.embudo = [
  {
    n: "01",
    nombre: "Descubrimiento",
    titulo: "Orgánico + paid suave",
    objetivo: "Alcance cualificado, no clicks.",
    tacticas: [
      "Reels y carruseles diseñados para guardado y compartido.",
      "Stories diarias como sostén de marca.",
      "Paid muy puntual sobre las 2-3 piezas con mejor performance orgánica."
    ],
    kpi: "Shares + saves + comentarios cualitativos.",
    herramientas: "Meta Business Suite · Notion editorial · CapCut Pro"
  },
  {
    n: "02",
    nombre: "Vinculación",
    titulo: "Lead magnet quincenal",
    objetivo: "Convertir alcance en email cualificado.",
    tacticas: [
      "Cada quincena, un lead magnet lidera la campaña.",
      "1 reel ancla + 2 carruseles satélite + stories sostén apuntan al LM.",
      "Landing minimalista del LM: titular + 3 razones + email + descarga."
    ],
    kpi: "Emails captados + tasa de apertura del primer envío.",
    herramientas: "Beehiiv o ConvertKit · Notion · Figma para portadas LM"
  },
  {
    n: "03",
    nombre: "Relación",
    titulo: "Newsletter editorial",
    objetivo: "Construir hábito de lectura quincenal.",
    tacticas: [
      "Newsletter quincenal \"Culturioso\" — pieza editorial breve, no boletín comercial.",
      "Estructura fija: 1 obra/lugar/idea + 1 plan + 1 pregunta a la comunidad.",
      "Solo el 15-20% de los envíos mencionan el club, siempre como invitación contextual."
    ],
    kpi: "Tasa de respuesta y reenvíos.",
    herramientas: "Beehiiv · automations · segmentación por engagement"
  },
  {
    n: "04",
    nombre: "Conversión natural",
    titulo: "Club como consecuencia",
    objetivo: "Convertir desde la base, no desde el tráfico frío.",
    tacticas: [
      "Trigger: experiencias reales narradas + ventajas mostradas en momentos clave.",
      "Oferta de bienvenida personalizada a segmento Engaged.",
      "Eventos cerrados solo-socios documentados para reforzar pertenencia."
    ],
    kpi: "Conversión suscriptor de la base, no del tráfico frío.",
    herramientas: "Stripe · panel admin de la webapp · CRM ligero"
  }
];

// -------------------------------------------------------------
// CALENDARIO — 14 días tipo, alternancia Quincena 1 / Quincena 2
// -------------------------------------------------------------
window.TMT.calendario = {
  q1: [
    { dia: "L", fecha: "1", pieza: "Story serie · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "2", pieza: "Reel R1 · El Fénix antes del Ángel", formato: "Reel", pilar: "I", apunta: "LM1 activo" },
    { dia: "Mi", fecha: "3", pieza: "Carrusel C1 · Glosario: claroscuro, contrapposto, sfumato", formato: "Carrusel", pilar: "I", apunta: "LM1 activo" },
    { dia: "J", fecha: "4", pieza: "Story serie · Pregunta del jueves", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "V", fecha: "5", pieza: "Newsletter Culturioso · Envío 01", formato: "Email", pilar: "—", apunta: "Relación" },
    { dia: "S", fecha: "6", pieza: "Story experiencia real socios", formato: "Stories", pilar: "III", apunta: "Trigger club" },
    { dia: "D", fecha: "7", pieza: "Recovery editorial · cita del día", formato: "Stories", pilar: "II", apunta: "Engagement" },
    { dia: "L", fecha: "8", pieza: "Story serie · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "9", pieza: "Reel R2 · 3 min con restauradora del Prado", formato: "Reel", pilar: "II", apunta: "LM1 activo" },
    { dia: "Mi", fecha: "10", pieza: "Carrusel C2 · Mapa secreto de Lavapiés", formato: "Carrusel", pilar: "IV", apunta: "LM1 activo" },
    { dia: "J", fecha: "11", pieza: "Story serie · Pregunta del jueves", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "V", fecha: "12", pieza: "Stories de cierre LM1 + teaser LM2", formato: "Stories", pilar: "—", apunta: "Captación" },
    { dia: "S", fecha: "13", pieza: "Story behind the scenes producción", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "D", fecha: "14", pieza: "Lanzamiento LM2 · Cómo mirar un cuadro", formato: "Lead magnet", pilar: "I", apunta: "Captación" }
  ],
  q2: [
    { dia: "L", fecha: "15", pieza: "Story serie · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "16", pieza: "Reel R3 · Sábado culto por menos de 20€", formato: "Reel", pilar: "III", apunta: "LM2 activo" },
    { dia: "Mi", fecha: "17", pieza: "Carrusel C3 · Las Meninas en 9 imágenes", formato: "Carrusel", pilar: "II", apunta: "LM2 activo" },
    { dia: "J", fecha: "18", pieza: "Story serie · Pregunta del jueves", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "V", fecha: "19", pieza: "Newsletter Culturioso · Envío 02", formato: "Email", pilar: "—", apunta: "Relación" },
    { dia: "S", fecha: "20", pieza: "Story experiencia real socios", formato: "Stories", pilar: "III", apunta: "Trigger club" },
    { dia: "D", fecha: "21", pieza: "Recovery editorial · cita del día", formato: "Stories", pilar: "II", apunta: "Engagement" },
    { dia: "L", fecha: "22", pieza: "Story serie · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "23", pieza: "Reel R4 · Hot take Reina Sofía", formato: "Reel", pilar: "I", apunta: "LM2 activo" },
    { dia: "Mi", fecha: "24", pieza: "Carrusel C4 · Manual: iniciarse en ópera", formato: "Carrusel", pilar: "IV", apunta: "LM2 activo" },
    { dia: "J", fecha: "25", pieza: "Story serie · Pregunta del jueves", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "V", fecha: "26", pieza: "Stories de cierre LM2 + teaser LM3", formato: "Stories", pilar: "—", apunta: "Captación" },
    { dia: "S", fecha: "27", pieza: "Story behind the scenes producción", formato: "Stories", pilar: "III", apunta: "Engagement" },
    { dia: "D", fecha: "28", pieza: "Cierre de mes + datos públicos", formato: "Carrusel", pilar: "—", apunta: "Comunidad" }
  ]
};

// -------------------------------------------------------------
// KPIs — recalibrados a 3 meses (jun-ago)
// -------------------------------------------------------------
window.TMT.kpis = {
  comunidad: {
    titulo: "Comunidad",
    n: "01",
    items: [
      { metrica: "Seguidores cualificados +30", benchmark: "0 medible hoy", objetivo: "+3.500 a M3", nota: "% de seguidores en target +30, no vanidad bruta." },
      { metrica: "Saves por publicación", benchmark: "—", objetivo: ">6% mediana", nota: "Indicador #1 de relevancia." },
      { metrica: "Shares por publicación", benchmark: "—", objetivo: ">3% mediana", nota: "Indicador #1 de crecimiento orgánico." },
      { metrica: "Comentarios cualitativos", benchmark: "—", objetivo: ">15 por pieza ancla", nota: "No emojis sueltos. Conversación real." }
    ]
  },
  leads: {
    titulo: "Lead generation",
    n: "02",
    items: [
      { metrica: "Emails captados", benchmark: "Base actual", objetivo: "1.500 a M3", nota: "Acumulado de los 6 lead magnets." },
      { metrica: "Coste por lead orgánico", benchmark: "—", objetivo: "0€", nota: "Foco orgánico, paid solo amplifica top-performers." },
      { metrica: "Tasa apertura newsletter", benchmark: "30% sector cultura", objetivo: ">45%", nota: "Indicador de calidad de la base." },
      { metrica: "Tasa de click newsletter", benchmark: "5% sector cultura", objetivo: ">8%", nota: "Indicador de intención real." }
    ]
  },
  marca: {
    titulo: "Marca",
    n: "03",
    items: [
      { metrica: "Búsquedas \"treinta más treinta\"", benchmark: "Volumen actual", objetivo: "×4 a M3", nota: "Vía Google Search Console + Trends." },
      { metrica: "Tráfico directo a la web", benchmark: "—", objetivo: "+150%", nota: "Señal de marca instalada." },
      { metrica: "Menciones espontáneas", benchmark: "—", objetivo: ">8 piezas/mes a M3", nota: "Prensa cultural y comunidades afines." }
    ]
  },
  conversion: {
    titulo: "Conversión (secundario)",
    n: "04",
    items: [
      { metrica: "Email → trial", benchmark: "—", objetivo: "3-5%", nota: "Solo sobre segmento Engaged." },
      { metrica: "Trial → suscriptor", benchmark: "—", objetivo: "35-45%", nota: "Métrica del producto, no de la campaña." },
      { metrica: "LTV socio a 6 meses", benchmark: "—", objetivo: "Por definir", nota: "Punto ciego que cerramos en kickoff." }
    ]
  }
};

// -------------------------------------------------------------
// PLAN OPERATIVO — 3 meses comprimidos
// -------------------------------------------------------------
window.TMT.plan = {
  fases: [
    {
      n: "01",
      nombre: "Inmersión",
      duracion: "Semana 1",
      fechas: "25 mayo — 31 mayo",
      hitos: [
        "Auditoría de cuentas y newsletter actual.",
        "Entrevistas a fundadores y a 3 miembros activos.",
        "Definición de tono y vocabulario propio.",
        "Aprobación de dirección creativa para Junio."
      ]
    },
    {
      n: "02",
      nombre: "Lanzamiento",
      duracion: "Junio",
      fechas: "1 junio — 30 junio",
      hitos: [
        "Producción y publicación del primer mes (4 reels + 4 carruseles + stories diarias).",
        "Lanzamiento LM1 (El Prado en 90 minutos) y LM2 (Cómo mirar un cuadro).",
        "Newsletter Culturioso: 2 envíos.",
        "Primera lectura de datos: ajuste fino de hooks y formatos."
      ]
    },
    {
      n: "03",
      nombre: "Crucero",
      duracion: "Julio",
      fechas: "1 julio — 31 julio",
      hitos: [
        "Ejecución sostenida (4 reels + 4 carruseles + stories).",
        "Lanzamiento LM3 (Velázquez, Goya, Sorolla) y LM4 (Madrid cultural en un fin de semana).",
        "Newsletter Culturioso: 2 envíos.",
        "Primer paid layer ligero sobre piezas top y LMs con mejor conversión."
      ]
    },
    {
      n: "04",
      nombre: "Consolidación",
      duracion: "Agosto",
      fechas: "1 agosto — 31 agosto",
      hitos: [
        "Ejecución sostenida (4 reels + 4 carruseles + stories).",
        "Lanzamiento LM5 (Valencia) y LM6 (Arte contemporáneo español).",
        "Newsletter Culturioso: 2 envíos + envío de cierre con balance editorial.",
        "Reporte final + propuesta de continuidad a Q4 si procede."
      ]
    }
  ],
  roles: [
    { rol: "Dirección estratégica", entrega: "1 sesión mensual + reporte de cierre." },
    { rol: "Dirección creativa", entrega: "Concept de cada quincena y de cada LM." },
    { rol: "Copy + guion", entrega: "12 reels + 12 carruseles + stories + 6 newsletters + 6 LMs." },
    { rol: "Producción audiovisual", entrega: "Grabación, edición y color de los 12 reels + apoyos para stories." },
    { rol: "Diseño gráfico", entrega: "12 carruseles + 6 lead magnets + plantillas reutilizables." },
    { rol: "Community management", entrega: "Respuesta diaria L-V, escucha activa, gestión de DMs cualificados." },
    { rol: "Email marketing", entrega: "6 newsletters + automations de cada LM (5 envíos x 6 LMs)." },
    { rol: "Analítica", entrega: "Dashboard mensual + revisión quincenal de KPIs." }
  ]
};

// -------------------------------------------------------------
// INVERSIÓN — 3 paquetes orientativos, sin precios ni CTA
// -------------------------------------------------------------
window.TMT.inversion = [
  {
    n: "01",
    nombre: "Foundation",
    posicionamiento: "Lo esencial para empezar bien.",
    incluye: [
      "Auditoría + dirección creativa de los 3 meses.",
      "8 reels + 8 carruseles + stories curadas L-V.",
      "4 lead magnets (uno cada 3 semanas).",
      "Newsletter quincenal · 6 envíos.",
      "Reporte mensual."
    ],
    paraQuien: "Cuando el objetivo principal es probar el sistema antes de escalar."
  },
  {
    n: "02",
    nombre: "Growth",
    destacado: true,
    posicionamiento: "El plan recomendado para esta campaña.",
    incluye: [
      "Todo lo anterior.",
      "12 reels + 12 carruseles + stories diarias.",
      "6 lead magnets (2 al mes).",
      "Paid layer ligero a partir de julio.",
      "Community management activo + DMs cualificados.",
      "Dashboard mensual + revisión quincenal."
    ],
    paraQuien: "Para construir autoridad cultural real en 3 meses y dejar instalado un sistema sostenible."
  },
  {
    n: "03",
    nombre: "Authority",
    posicionamiento: "Para acelerar al máximo.",
    incluye: [
      "Todo lo anterior.",
      "1 producción premium mensual (mini-documental editorial, 3-4 min).",
      "Partnerships con 2-3 instituciones culturales por mes.",
      "PR cultural y gestión de menciones en prensa.",
      "Sesión de dirección estratégica quincenal en lugar de mensual."
    ],
    paraQuien: "Cuando queréis dominar la conversación cultural +30 en España antes de fin de año."
  }
];

// -------------------------------------------------------------
// SIGUIENTES PASOS — narrativa, sin CTA grande
// -------------------------------------------------------------
window.TMT.siguientesPasos = [
  {
    n: "01",
    titulo: "Sesión de descubrimiento",
    duracion: "60 min",
    descripcion: "Conversación abierta entre el equipo de Treinta Más Treinta y la dirección estratégica. Resolvemos dudas de esta propuesta y cerramos el alcance final."
  },
  {
    n: "02",
    titulo: "Propuesta cerrada",
    duracion: "5 días hábiles",
    descripcion: "Os entregamos la versión definitiva del plan con cronograma vinculante, presupuesto cerrado y briefing creativo de las primeras 4 semanas."
  },
  {
    n: "03",
    titulo: "Kickoff",
    duracion: "1 jornada",
    descripcion: "Inmersión presencial con vuestro equipo. Salimos con tono validado, dirección creativa aprobada y producción del primer mes en marcha."
  }
];
