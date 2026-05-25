// ============================================================
// CONTENIDO DE TRABAJO — Treinta Más Treinta
// Trimestre operativo: junio · julio · agosto 2026
// Foco geográfico: Madrid. Foco temático: arte y cultura amplios.
// Contenido: mainstream + actualidad. Iconos universales + temas estacionales.
// ============================================================

window.TMT = {};

// -------------------------------------------------------------
// COMPETENCIA — scraping y posicionamiento
// -------------------------------------------------------------
window.TMT.competencia = [
  {
    n: "01",
    handle: "Agenda mainstream",
    tipo: "Listados masivos con marca conocida",
    fortaleza: "Volumen alto, marca reconocible y SEO sólido en búsquedas tipo \"qué hacer en Madrid\". El usuario las consulta por inercia.",
    debilidad: "Cero criterio editorial real. Listan todo, recomiendan nada. El usuario sigue teniendo que filtrar él mismo.",
    aprendizaje: "Nosotros sí filtramos. La ventaja es decir qué vale la pena, no qué existe."
  },
  {
    n: "02",
    handle: "Tips de lugares ocultos",
    tipo: "Reels virales · cuentas de \"el Madrid que no conoces\"",
    fortaleza: "Funcionan muy bien en saves. Han educado al público en el género \"lugares escondidos\" y tienen alcance grande.",
    debilidad: "Sin tono adulto. Hablan a todo el mundo y por tanto a nadie. Clickbait y sorpresa fácil sin profundidad.",
    aprendizaje: "Mismo género (lugares ocultos) pero con voz +30. No \"alucinarás con esto\", sino \"esto es lo que merece la pena saber\"."
  },
  {
    n: "03",
    handle: "Instituciones culturales",
    tipo: "Museos, teatros, fundaciones · voz oficial",
    fortaleza: "Acceso directo a obra y archivo. Autoridad incuestionable. Producción audiovisual cuidada y presupuesto público que les sostiene.",
    debilidad: "Voz institucional, distante. Barrera para quien no se siente \"culto\". Programación rígida por temporadas.",
    aprendizaje: "Misma profundidad de contenido, voz de amigo informado. La autoridad sin la distancia."
  },
  {
    n: "04",
    handle: "Clubes y membresías",
    tipo: "Espacios privados · acceso de pago",
    fortaleza: "Han ocupado el imaginario de \"club privado para gente con criterio\". Comunidad real y vinculada por dentro.",
    debilidad: "Contenido público escaso. La marca solo se entiende si ya estás dentro. Filtro económico alto desde el inicio.",
    aprendizaje: "Diferenciación clara: contenido público fuerte como puerta de entrada. Cualquiera puede aprender de nosotros antes de pagar un euro."
  },
  {
    n: "05",
    handle: "Agendas sin marca",
    tipo: "Listados locales · utilidad pura",
    fortaleza: "Son útiles. Cumplen su función práctica de saber qué hay esta semana.",
    debilidad: "Cero personalidad. Indistinguibles entre sí. Cero relato detrás del evento.",
    aprendizaje: "La utilidad sin marca es commodity. Construir marca = cobrar peaje editorial sobre la utilidad."
  },
  {
    n: "06",
    handle: "Influencers",
    tipo: "Personalidades individuales · lifestyle cultural",
    fortaleza: "Cara reconocible. Engagement personal alto. Recomendaciones percibidas como sinceras.",
    debilidad: "Vinculados a una persona — no escalable. Postureo de fondo. Mezclan cultura con marca personal y promociones.",
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
    titulo: "Iconos universales primero, profundidad después.",
    desarrollo: "Hablamos de lugares que TODOS conocen (Puerta de Alcalá, Mercado de San Miguel, Templo de Debod, Casa Botín, Veranos de la Villa). Lo que añadimos es la mirada, el detalle, la historia que no se cuenta. Atraer mainstream → educar con criterio."
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
    desarrollo: "Detalles ocultos de los iconos de Madrid que TODOS conocemos. La fachada de la Puerta de Alcalá, el horno de Botín, los relieves del Templo de Debod. Lugares mainstream, mirada experta. Entrena el ojo.",
    formatos: "Reels R1 · R4 · Carruseles C1 · Lead magnets de descodificación cultural."
  },
  {
    n: "II",
    nombre: "Patrimonio vivo",
    resumen: "Personas y oficios reconocibles.",
    desarrollo: "Serenos recuperados, programadores de festivales emblemáticos, guías oficiales, chefs Michelin, directores de instituciones culturales. Nombres y oficios que la gente reconoce — sin postureo, con autoridad real.",
    formatos: "Reels R2 · Carruseles C3 · Lead magnets de figuras y lugares."
  },
  {
    n: "III",
    nombre: "Comunidad +30",
    resumen: "Vida cultural real, sin postureo.",
    desarrollo: "Cómo es realmente un sábado culto adulto en Madrid. Planes accesibles, vivencias de socios, conversaciones sin pose. Pertenencia sin filtro.",
    formatos: "Reels R3 · R5 · Stories sostenidas · WhatsApp."
  },
  {
    n: "IV",
    nombre: "Ritual cultural",
    resumen: "Micro-hábitos para la vida adulta.",
    desarrollo: "Cómo planear un finde culto, una ruta de tapas sin trampa, una agenda de festivales del verano, una primera vez en la ópera. Plantillas y rituales pequeños que hacen que la cultura quepa en una agenda ocupada.",
    formatos: "Carruseles C2 · C4 · Lead magnets prácticos · Newsletter."
  }
];

// -------------------------------------------------------------
// REELS — 12 piezas DESARROLLADAS al 100% · Mainstream + actualidad Madrid
// Rotación: R1 R2 R3 R4 R5 · R1 R2 R3 R4 R5 · R1 R2
// -------------------------------------------------------------
window.TMT.reels12 = [
  {
    id: "W01", sem: 1, mes: "Jun", formato: "R1",
    nombreFormato: "El detalle que nadie ve",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "El detalle de la Puerta de Alcalá que casi nadie ve",
    duracion: "30s",
    hookEjemplo: "Plano frontal de la Puerta de Alcalá al amanecer. \"Madrid tiene cinco puertas históricas. La conocida tiene un detalle que llevas viendo toda tu vida y no has visto.\"",
    estructura: [
      "0-2s · Hook: plano del icono + frase de disonancia.",
      "2-10s · \"La fachada tiene marcas de bala. Y no de cualquier batalla.\"",
      "10-22s · Revelación: balazos del levantamiento del 2 de mayo de 1808. Mapa visual de las marcas que se ven hoy.",
      "22-28s · Idea grande: \"Los iconos de Madrid son los que más esconden. Aprender a mirarlos cambia la próxima vez que pasas por delante.\"",
      "28-30s · CTA: \"Comenta MADRID y te paso 10 planes culturales por menos de 20€.\""
    ],
    copyDesarrollado: `La Puerta de Alcalá tiene marcas de bala.

No es leyenda. Son los disparos del levantamiento del 2 de mayo de 1808. Han sobrevivido a dos siglos de obras, reformas y restauraciones.

Las próximas vez que pases por delante, mira la cara que da hacia Cibeles. Las marcas están a la altura de los ojos.

Esto es Madrid: iconos que conoces y no conoces a la vez.

📌 Comenta MADRID y te paso nuestra guía: 10 planes culturales en Madrid por menos de 20€.`,
    produccion: [
      "Plano frontal de la Puerta al amanecer (luz blanda, cero tráfico).",
      "Plano de detalle muy cerrado sobre las marcas de bala.",
      "Foto de archivo del 2 de mayo (cuadro de Goya o ilustración de la época).",
      "Música ambient mínima, sin pico.",
      "Texto en pantalla: Geist Medium, animación typing."
    ],
    kpi: ">8% save rate · >5% share rate · >150 comentarios con palabra clave"
  },
  {
    id: "W02", sem: 2, mes: "Jun", formato: "R2",
    nombreFormato: "Madrid de noche",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "Madrid a las 23:00 — qué pasa cuando la mayoría se va a casa",
    duracion: "50s",
    hookEjemplo: "Plano nocturno de Gran Vía sin tráfico. Voz en off: \"A esta hora Madrid cambia. Te enseñamos 4 cosas que solo pasan después de las 22:30.\"",
    estructura: [
      "0-3s · Plano nocturno + frase: \"Madrid no se va a dormir tan pronto como crees.\"",
      "3-15s · Plano 1: terrazas que aún abren después de las 23h (selección).",
      "15-28s · Plano 2: rutas nocturnas con guía (figura del sereno recuperada por el Ayuntamiento).",
      "28-40s · Plano 3: librería 24h (Vips) y librerías que cierran tarde el viernes.",
      "40-50s · Plano 4: ver un concierto en una sala pequeña. Cierre + CTA NOCHE."
    ],
    copyDesarrollado: `Madrid no se va a dormir tan pronto como crees.

A las 23h cambian las reglas. Terrazas hasta tarde, rutas nocturnas guiadas que el Ayuntamiento ha recuperado, librerías que cierran a medianoche los viernes y salas pequeñas con jazz, flamenco y singer-songwriter en vivo.

La ciudad de noche es otra ciudad. Aprender a usarla cambia los planes con amigos.

📌 Comenta NOCHE y te enviamos: 10 planes culturales en Madrid por menos de 20€ (con horarios nocturnos).`,
    produccion: [
      "Grabar entre 22:30-00:30 en zonas con vida (Huertas, Malasaña, Centro).",
      "Cortes rápidos por escenario (no entrevista a persona concreta).",
      "Sonido ambiente real (sin música en cortes).",
      "Subtítulos durante todo el reel.",
      "Cero personas reconocibles en primer plano sin autorización."
    ],
    kpi: ">7% save · share alto en grupos · DMs preguntando horarios"
  },
  {
    id: "W03", sem: 3, mes: "Jun", formato: "R3",
    nombreFormato: "Plan en 60 segundos",
    pilar: "Comunidad +30", pilarN: "III",
    titulo: "Cena en Casa Botín + paseo Austrias por menos de 30€",
    duracion: "55s",
    hookEjemplo: "POV entrando a Casa Botín por la puerta de Cuchilleros. \"Cenar en el restaurante más antiguo del mundo cuesta menos de lo que crees. Te explico cómo.\"",
    estructura: [
      "0-3s · Hook con dato impactante + POV de entrada.",
      "3-18s · Casa Botín — fundado en 1725, certificado Guinness, cochinillo de horno de leña.",
      "18-32s · Trucos: pedir el cordero (no el cochinillo) y la sopa de ajo. Total: ~28€.",
      "32-45s · Después: paseo por la Plaza Mayor + Plaza de la Villa + Plaza del Cordón.",
      "45-55s · Cierre: \"Total: 28€ + paseo gratis = una de las mejores cenas culturales de Madrid.\""
    ],
    copyDesarrollado: `Cenar en el restaurante más antiguo del mundo cuesta menos de lo que crees.

Casa Botín lleva abierto desde 1725. Es Guinness oficial. El horno de leña no se ha apagado en 300 años.

El truco: el cordero asado y la sopa de ajo cuestan la mitad que el cochinillo y son igual de buenos. Total cena: ~28€.

Después, sales y caminas la Plaza Mayor, la Plaza de la Villa y la Plaza del Cordón. Gratis. Tres siglos de historia de Madrid en 90 minutos.

📌 Reservas con 1 semana: botin.es
📌 Comenta GASTRONOMIA y te enviamos: 5 restaurantes con más historia cultural en Madrid.`,
    produccion: [
      "POV con cámara de mano: entrada Cuchilleros + escalera de bajada al horno.",
      "Plano del horno encendido (autorización del restaurante).",
      "Cuenta visible al pagar.",
      "Música baja, sutil, no folclore.",
      "Cierre con plano largo de la Plaza Mayor al atardecer."
    ],
    kpi: ">12% save · share alto entre amigos · DMs preguntando reservas"
  },
  {
    id: "W04", sem: 4, mes: "Jun", formato: "R4",
    nombreFormato: "Hot take cultural",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Hot take: comer en Lhardy hoy es viajar en el tiempo",
    duracion: "38s",
    hookEjemplo: "A cámara, plano frente al rótulo histórico de Lhardy. \"Vamos con un hot take incómodo: la mayoría de los restaurantes de moda no le llegan a la suela a Lhardy. Y te explico por qué.\"",
    estructura: [
      "0-3s · Tesis afilada a cámara + plano del rótulo.",
      "3-22s · 3 argumentos: cocido como ritual + sala isabelina intacta desde 1839 + camareros como custodios.",
      "22-32s · Matización honesta: \"Sí, el cocido se ha vuelto caro. Pero los entrantes del mostrador (el famoso 'consomé Lhardy') siguen siendo accesibles.\"",
      "32-38s · Cierre: \"Si quieres saber qué restaurantes históricos sobreviven en Madrid, comenta GASTRONOMIA y te lo paso.\""
    ],
    copyDesarrollado: `Hot take impopular: Lhardy es mejor restaurante que el 95% de lo que abre cada mes en Madrid.

Razones:
— Cocido que mantiene la receta de 1839.
— Sala isabelina intacta, espejos originales.
— Camareros que llevan décadas y conocen a cada cliente.

¿Caro? Sí, el menú completo. Pero el truco lo conoce poca gente: la planta baja vende consomé y croquetas de mostrador. Por 8 euros te llevas un trozo de la historia gastronómica de Madrid.

📌 Carrera de San Jerónimo 8 · lhardy.com
📌 Comenta GASTRONOMIA y te enviamos: 5 restaurantes con más historia cultural en Madrid.`,
    produccion: [
      "A cámara, plano fijo, frente al rótulo histórico.",
      "1-2 planos del interior (autorización gerencia).",
      "Plano detalle del mostrador con el consomé al baño maría.",
      "Texto: \"HOT TAKE\" como pestaña Geist.",
      "Sin música — voz, aire y ambiente."
    ],
    kpi: ">6% share · >70 comentarios · debate en hilos"
  },
  {
    id: "W05", sem: 5, mes: "Jul", formato: "R5",
    nombreFormato: "Detrás de la experiencia",
    pilar: "Comunidad +30", pilarN: "III",
    titulo: "Detrás: una tarde en la Biblioteca Nacional (sí, se puede entrar)",
    duracion: "75s",
    hookEjemplo: "Plano fachada BNE en Recoletos. Voz en off: \"La Biblioteca Nacional de España no es solo para investigadores. Y casi nadie lo sabe.\"",
    estructura: [
      "0-5s · Cabecera: fachada BNE + dato (entrada general gratuita en zonas concretas).",
      "5-25s · Llegada, registro, recorrido por las salas abiertas al público y las exposiciones temporales.",
      "25-55s · Detalles concretos: la sala de lectura general, el Museo de la BNE (gratis, mucha gente lo ignora), exposiciones que rotan cada 2 meses.",
      "55-70s · 1 socio o usuario: \"Vengo cada lunes a leer aquí. Es la mejor sala de Madrid para concentrarse.\"",
      "70-75s · Cierre: \"Lunes a sábado. Entrada gratuita. Carnet de investigador opcional. Esto es Madrid.\""
    ],
    copyDesarrollado: `La Biblioteca Nacional de España no es solo para investigadores.

El Museo de la BNE es gratuito y abre lunes a sábado. Las exposiciones temporales rotan cada 2 meses. La sala de lectura general necesita carnet (gratis) y es uno de los espacios más silenciosos del centro.

Madrid los lunes parece cerrada. No lo está. Solo hay que saber dónde mirar.

📌 Paseo de Recoletos 20 · bne.es
📌 Comenta LUNES y te enviamos: Madrid los lunes — qué hacer cuando los museos cierran.`,
    produccion: [
      "Multi-plano: fachada + interior + sala de lectura + museo.",
      "Permiso oficial de la BNE para grabar interiores.",
      "Audio ambiente real (silencio = parte de la pieza).",
      "Subtítulos toda la pieza.",
      "Cierre con plano lectura general al atardecer."
    ],
    kpi: ">8% save · viralidad por revelación (\"no sabía que se podía entrar\")"
  },
  {
    id: "W06", sem: 6, mes: "Jul", formato: "R1",
    nombreFormato: "El detalle que nadie ve",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "El detalle del Templo de Debod que casi nadie sabe",
    duracion: "30s",
    hookEjemplo: "Plano del Templo de Debod al atardecer con gente haciendo fotos. \"Vienes aquí cada verano a ver la puesta de sol. Pero hay algo dentro que el 95% de la gente ignora.\"",
    estructura: [
      "0-3s · Hook: plano postal + frase de disonancia.",
      "3-15s · El Templo es entrada libre. Se puede entrar dentro. La mayoría no sabe.",
      "15-25s · Dentro hay relieves egipcios originales del siglo II a.C. Plano detalle de los jeroglíficos.",
      "25-28s · Idea grande: \"Madrid tiene un templo egipcio gratis y lo usamos solo de fondo de foto.\"",
      "28-30s · CTA: \"Comenta LUNES y te paso qué abre en Madrid cuando todo parece cerrado.\""
    ],
    copyDesarrollado: `Vas al Templo de Debod a ver la puesta de sol. Y haces bien.

Pero dentro hay relieves egipcios originales del siglo II a.C. La entrada es libre. Y el 95% de los madrileños nunca ha entrado dentro.

Esto va de aprender a usar Madrid mejor. Vas a estar por ahí esta semana — entra antes de la foto.

Horarios: martes a domingo 10-19h (julio y agosto). Cerrado lunes.

📌 Comenta LUNES y te paso nuestra guía: Madrid los lunes — qué hacer cuando todo parece cerrado.`,
    produccion: [
      "Planos exteriores hora dorada + planos interiores (autorización Ayuntamiento).",
      "Detalle muy cerrado de los jeroglíficos / relieves originales.",
      "Música minimal, atmosférica.",
      "Texto en pantalla con tipografía Geist."
    ],
    kpi: ">9% save · viralidad alta por sorpresa real"
  },
  {
    id: "W07", sem: 7, mes: "Jul", formato: "R2",
    nombreFormato: "Madrid en directo",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "Música en directo gratis en Madrid: cuatro espacios que tienes que conocer",
    duracion: "55s",
    hookEjemplo: "Plano de un concierto al aire libre en Madrid. Voz en off: \"Madrid tiene más conciertos gratis que cualquier capital de su tamaño. Estos son los cuatro espacios que importan.\"",
    estructura: [
      "0-3s · Plano abierto de concierto al aire libre + frase de hook.",
      "3-15s · Espacio 1: Templo de Debod (Banda Sinfónica Municipal, ciclo verano).",
      "15-28s · Espacio 2: Quinta de los Molinos (banda municipal, agosto, almendros).",
      "28-40s · Espacio 3: Conde Duque (ciclos gratis dentro de Veranos de la Villa).",
      "40-50s · Espacio 4: Plaza de Oriente (concierto de verano gratuito ocasional).",
      "50-55s · Cierre + CTA VERANO."
    ],
    copyDesarrollado: `Madrid tiene más conciertos gratis que cualquier capital europea de su tamaño.

Cuatro espacios maestros:
— Templo de Debod (Banda Sinfónica Municipal, julio).
— Quinta de los Molinos (Banda Municipal, agosto entre almendros).
— Conde Duque (Veranos de la Villa, ciclos sin entrada).
— Plaza de Oriente (conciertos puntuales de verano).

Si crees que un concierto en directo cuesta 40€, no has mirado dónde está tu Banda Municipal.

📌 Comenta VERANO y te enviamos: el mapa de los conciertos gratis de Madrid este verano (todas las fechas confirmadas).`,
    produccion: [
      "Planos generales de cada espacio (no primeros planos de músicos).",
      "Sonido ambiente real (sin música editada encima).",
      "Texto en pantalla con cada espacio + fecha aproximada.",
      "Pieza 9:16 + versión 16:9.",
      "Cero personas reconocibles sin permiso."
    ],
    kpi: ">10% save · viralidad por utilidad inmediata · share en grupos"
  },
  {
    id: "W08", sem: 8, mes: "Jul", formato: "R3",
    nombreFormato: "Plan en 60 segundos",
    pilar: "Comunidad +30", pilarN: "III",
    titulo: "5 conciertos gratis en Madrid este verano que merecen una agenda",
    duracion: "55s",
    hookEjemplo: "POV abriendo calendario móvil. \"Cinco conciertos gratis en Madrid este verano. Apunta fecha. Te ahorras 200€ y vas a las mejores noches del año.\"",
    estructura: [
      "0-3s · Hook con dato económico + POV calendario.",
      "3-15s · Concierto 1: Banda Sinfónica en Templo de Debod (cada semana, julio).",
      "15-25s · Concierto 2: ciclo de jazz en La Casa Encendida (3 fechas confirmadas).",
      "25-35s · Concierto 3: Conde Duque — programación Veranos de la Villa (3-4 conciertos gratis).",
      "35-45s · Concierto 4: Banda Sinfónica en Quinta de los Molinos (Almendros en flor agosto).",
      "45-50s · Concierto 5: Real Conservatorio Superior — recitales abiertos de fin de curso (gratis).",
      "50-55s · Cierre: \"Total ahorrado: 200€. Total cultural: alto. Comenta VERANO.\""
    ],
    copyDesarrollado: `5 conciertos gratis en Madrid este verano que merecen una agenda.

1. Banda Sinfónica · Templo de Debod (julio, semanal)
2. Ciclo jazz · La Casa Encendida (3 fechas)
3. Conde Duque · Veranos de la Villa (3-4 conciertos gratis)
4. Banda Sinfónica · Quinta de los Molinos (agosto)
5. Recitales abiertos · Real Conservatorio Superior

Total ahorrado: ~200€ frente a equivalente de pago. Total cultural: alto.

Apunta las fechas. Las plazas son por orden de llegada.

📌 Comenta VERANO y te enviamos: el mapa completo de los conciertos gratis de Madrid (PDF con todas las fechas).`,
    produccion: [
      "POV calendario móvil + cortes de cada lugar.",
      "Texto sobreimpresionado con fecha y lugar por cada concierto.",
      "Música baja constante (saxo lo-fi).",
      "Mostrar lugares reales (no stock).",
      "Cierre con plano del Templo de Debod al atardecer."
    ],
    kpi: ">15% save (los listados estacionales arrasan) · share alto en chats"
  },
  {
    id: "W09", sem: 9, mes: "Ago", formato: "R4",
    nombreFormato: "Hot take cultural",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Hot take: las librerías independientes son las nuevas plazas de Madrid",
    duracion: "40s",
    hookEjemplo: "A cámara dentro de una librería independiente cualquiera. \"Hot take impopular sobre lo que está pasando en Madrid: las librerías son las nuevas plazas.\"",
    estructura: [
      "0-3s · Tesis afilada a cámara + plano de librería.",
      "3-22s · 3 argumentos: programación cultural propia (presentaciones, lecturas, debates) + cafés con criterio asociados + son los espacios sin consumición obligatoria que quedan en el centro.",
      "22-32s · Matización: \"Sí, hay que comprar de vez en cuando para que sigan abiertas. Es justo.\"",
      "32-40s · Cierre: \"Comenta LIBROS y te paso las 10 librerías que sostienen Madrid hoy.\""
    ],
    copyDesarrollado: `Hot take sobre lo que está pasando en Madrid:

Las librerías independientes son las nuevas plazas. Donde puedes estar 2 horas sin que te miren raro. Donde hay programación cultural sin entrada. Donde te conocen por tu nombre.

¿Lo justo? Comprar un libro de vez en cuando. Eso es todo. Sostener una librería con 12€ al mes es mantener vivo un trozo de Madrid que está desapareciendo.

📌 Comenta LIBROS y te enviamos: las 10 librerías de barrio que merecen un sábado entero.`,
    produccion: [
      "A cámara dentro de librería real (autorización propietaria).",
      "Plano de presentación literaria con público sentado.",
      "Plano de café asociado / asientos con libros encima.",
      "Texto: \"HOT TAKE\" sticker.",
      "Sin música — voz + ambiente."
    ],
    kpi: ">7% share · alta resonancia emocional · trigger a comunidad lectora"
  },
  {
    id: "W10", sem: 10, mes: "Ago", formato: "R5",
    nombreFormato: "Detrás de la experiencia",
    pilar: "Comunidad +30", pilarN: "III",
    titulo: "Detrás: una mañana en la Cuesta de Moyano contada por un cliente fiel",
    duracion: "80s",
    hookEjemplo: "POV bajando la Cuesta de Moyano un sábado por la mañana. \"30 casetas de libros junto al Retiro. Sábado por la mañana. Te enseño cómo lo hace alguien que viene aquí cada semana.\"",
    estructura: [
      "0-5s · POV + cabecera (30 casetas, 100 años de historia).",
      "5-25s · Llegada con un cliente fiel real. Saludo a los libreros que conoce.",
      "25-55s · 2-3 paradas concretas: una caseta de novela clásica, una de cómic vintage, una de libros de fotografía.",
      "55-72s · El cliente: \"Compro 1 libro al mes mínimo. Es mi forma de mantener vivo esto.\"",
      "72-80s · Cierre: \"Sábados 10-14h. Domingos cerrado. Esto sigue ahí porque sigue habiendo gente que viene cada semana.\""
    ],
    copyDesarrollado: `30 casetas de libros junto al Retiro. Sábados 10-14h. 100 años de historia.

La Cuesta de Moyano es el último mercado de libros de viejo del centro de Madrid. Cada caseta tiene voz propia. Y cada caseta sobrevive porque hay gente que viene cada sábado.

Esta mañana fuimos con un cliente fiel que lleva años yendo. Compra 1 libro al mes. Es su forma de cuidar Madrid.

📌 Sábados 10-14h · Domingos cerrado.
📌 Comenta LIBROS y te enviamos: las 10 librerías de barrio que merecen un sábado entero.`,
    produccion: [
      "POV cámara de mano (intencional, no estabilizada).",
      "Audio ambiente Retiro (pájaros, conversación libreros).",
      "Mostrar los libros comprados al final, en una mesa de café.",
      "Acreditar a las casetas que aparezcan.",
      "Música mínima, jazz piano bajo."
    ],
    kpi: ">9% save · alto share · DMs preguntando \"¿cuándo es la próxima visita con socios?\""
  },
  {
    id: "W11", sem: 11, mes: "Ago", formato: "R1",
    nombreFormato: "El detalle que nadie ve",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "El detalle del patio del Conde Duque (donde se monta Veranos de la Villa)",
    duracion: "32s",
    hookEjemplo: "Plano cenital del patio del Conde Duque vacío en hora de día. \"Vas a Veranos de la Villa cada agosto. Pero seguro que no sabes para qué se construyó este edificio.\"",
    estructura: [
      "0-3s · Hook: plano del patio + frase de disonancia.",
      "3-15s · El Conde Duque era cuartel militar en el siglo XVIII (1717). Felipe V mandó construirlo.",
      "15-25s · Conversión a centro cultural en los 80. Hoy alberga teatro, música, cine, biblioteca municipal.",
      "25-30s · Idea grande: \"Madrid ha convertido cuarteles en cultura. Es uno de los pocos países que lo hace bien.\"",
      "30-32s · CTA: \"Comenta AMIGOS y te paso 10 planes de Madrid para hacer con tu grupo.\""
    ],
    copyDesarrollado: `Vas al patio del Conde Duque a algún concierto cada agosto. Y haces bien.

Pero el edificio fue construido en 1717 como cuartel militar por Felipe V. Convertido en centro cultural en los años 80. Hoy: teatro, música, cine, biblioteca municipal y una de las mejores terrazas-bar del centro para ir con un grupo.

Madrid convierte cuarteles en cultura. Es uno de los pocos países que lo hace bien.

📌 Comenta AMIGOS y te enviamos: 10 planes en Madrid para hacer con tu grupo de amigos.`,
    produccion: [
      "Plano cenital (drone o cámara desde una ventana superior).",
      "Plano de la fachada con sus elementos militares (escudos).",
      "Foto de archivo (siglo XVIII si la encontramos).",
      "Música ambient + ligera percusión militar al inicio que se transforma en cuerda.",
      "Texto en pantalla en Geist."
    ],
    kpi: ">8% save · contextualiza el festival → DMs preguntando programa"
  },
  {
    id: "W12", sem: 12, mes: "Ago", formato: "R2",
    nombreFormato: "Madrid con amigos",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "Cuatro planes culturales de Madrid para disfrutar con tu grupo de amigos",
    duracion: "55s",
    hookEjemplo: "Plano cenital de un grupo de amigos brindando en una terraza de azotea. Voz en off: \"Si tu grupo es de cuatro o más, estos cuatro planes funcionan siempre.\"",
    estructura: [
      "0-3s · Plano del grupo + frase: \"Planes culturales para grupos en Madrid que sí funcionan.\"",
      "3-15s · Plan 1: cena en taberna histórica (cocido, cordero o sidrería) — Casa Botín, La Bola, Casa Mingo.",
      "15-28s · Plan 2: concierto al aire libre + caña previa (Conde Duque o Debod).",
      "28-40s · Plan 3: visita guiada nocturna por el centro (sereno + cena en grupo).",
      "40-50s · Plan 4: domingo de Rastro + comida grupo en taberna.",
      "50-55s · Cierre + CTA AMIGOS."
    ],
    copyDesarrollado: `Si vais cuatro o más, no todos los planes valen.

Estos cuatro funcionan siempre:
— Cena en taberna histórica (Botín, La Bola, Casa Mingo).
— Concierto al aire libre + caña previa (Conde Duque, Debod).
— Ruta nocturna guiada + cena (con sereno municipal).
— Domingo de Rastro + caracoles en Casa Amadeo.

Cero ruido, cero tonterías, todos cómodos.

📌 Comenta AMIGOS y te enviamos: 10 planes en Madrid para grupos (con precio por persona, capacidad y dónde reservar).`,
    produccion: [
      "Plano de grupo real (4-6 amigos), cero stock.",
      "Cortes ágiles entre cada plan con sobreimpresión del nombre.",
      "Música baja, conversación natural.",
      "Mostrar precio aproximado en pantalla en cada plan.",
      "Cierre con plano frontal del grupo brindando."
    ],
    kpi: ">12% save · share alto en grupos · DMs preguntando reservas"
  }
];

window.TMT.reelsFormatos = [
  { id: "R1", nombre: "El detalle que nadie ve", pilar: "Mirada experta", pilarN: "I", hookTipo: "\"Llevas pasando por delante de esto y no lo has visto.\"", duracion: "25-35s", estructura: ["Hook de disonancia", "Contexto breve", "Revelación visual o histórica", "Idea grande de fondo", "CTA hacia lead magnet"], kpi: ">8% save · >3% share" },
  { id: "R2", nombre: "3 minutos con…", pilar: "Patrimonio vivo", pilarN: "II", hookTipo: "Entrevista cortísima a una figura cultural reconocible.", duracion: "45-60s", estructura: ["Carta de presentación", "Pregunta concreta", "Respuesta sin cortes", "Frase para citar", "Dirección y horario"], kpi: ">5% save · alta retención" },
  { id: "R3", nombre: "Plan en 60 segundos", pilar: "Comunidad +30", pilarN: "III", hookTipo: "\"Te explico el plan que merece la pena este finde por menos de 30€.\"", duracion: "45-60s", estructura: ["Hook con presupuesto", "Parada 1", "Parada 2", "Parada 3", "Cierre con total"], kpi: ">10% save · alto share entre amigos" },
  { id: "R4", nombre: "Hot take cultural", pilar: "Mirada experta", pilarN: "I", hookTipo: "Opinión razonada e incómoda sobre algo de la cultura madrileña.", duracion: "30-45s", estructura: ["Tesis afilada", "Argumentos cortos", "Matización honesta", "Cierre que invita al debate", "CTA contextual"], kpi: ">6% share · >50 comentarios" },
  { id: "R5", nombre: "Detrás de la experiencia", pilar: "Comunidad +30", pilarN: "III", hookTipo: "Vlog de una experiencia real, abierta o exclusiva.", duracion: "60-90s", estructura: ["Cabecera de contexto", "Llegada", "Momento clave", "Frase de un socio o usuario", "Cierre editorial"], kpi: "Conversión a interés en club · >7% save" }
];

// -------------------------------------------------------------
// CARRUSELES — 12 piezas DESARROLLADAS al 100% · Mainstream Madrid
// -------------------------------------------------------------
window.TMT.carruseles12 = [
  {
    id: "C-W01", sem: 1, mes: "Jun", formato: "C1", nombreFormato: "Glosario del adulto culto",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Las 8 plazas de Madrid que tienes que saber distinguir",
    slides: [
      { n: 1, titulo: "Las 8 plazas de Madrid.", sub: "Para no confundir Plaza Mayor con Plaza de la Villa y otras 6 más.", nota: "Portada · Fondo crema · Mapa minimalista con 8 puntos." },
      { n: 2, titulo: "1. Plaza Mayor", sub: "La gran. Felipe III a caballo en el centro. Diseñada en 1617 por Juan Gómez de Mora. Es la plaza con la que el resto se mide." },
      { n: 3, titulo: "2. Plaza de la Villa", sub: "La plaza original de Madrid antes que la Mayor. Tres siglos en tres edificios. Tranquila. Casi nadie la usa." },
      { n: 4, titulo: "3. Plaza del Sol", sub: "Kilómetro 0 de las carreteras españolas. El Oso y el Madroño. Vacía no se ve nunca." },
      { n: 5, titulo: "4. Plaza de Cibeles", sub: "Diosa Cibeles + Palacio de Cibeles (sede del Ayuntamiento). Las fuentes más fotografiadas del centro." },
      { n: 6, titulo: "5. Plaza de Oriente", sub: "Entre el Palacio Real y el Teatro Real. Esculturas de reyes. Donde casi nadie se sienta porque cree que es solo de paso." },
      { n: 7, titulo: "6. Plaza de Santa Ana", sub: "La plaza literaria — Cervantes, Calderón, García Lorca pasaron por ella. Cervecerías centenarias en la cuadra." },
      { n: 8, titulo: "7. Plaza de Lavapiés", sub: "El triángulo del barrio. Cine Doré + Tabacalera enfrente. Donde se ve mejor el cambio de Madrid en los últimos 20 años." },
      { n: 9, titulo: "8. Plaza del Dos de Mayo", sub: "El corazón de Malasaña. Arco del Cuartel de Monteleón. 1808 — el levantamiento empezó aquí.", nota: "Cierre · CTA: \"Comenta GLOSARIO y te enviamos el glosario completo de plazas de Madrid.\"" }
    ],
    copyPie: `8 plazas que la mayoría de gente conoce mal o confunde.\n\nNo es jerga, es saber qué es qué. Cada plaza es un trozo de Madrid distinto. Saber distinguirlas cambia cómo te mueves por el centro.\n\nGuarda el carrusel. La próxima vez que alguien diga "quedamos en la Mayor", sabrás dónde es exactamente.\n\n📌 Comenta GLOSARIO y te enviamos el glosario completo: 15 plazas de Madrid y por qué importan.`,
    kpi: ">8% save (los glosarios se vuelven a consultar)"
  },
  {
    id: "C-W02", sem: 2, mes: "Jun", formato: "C2", nombreFormato: "Mapa secreto de…",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "7 planes en Madrid para este fin de semana",
    slides: [
      { n: 1, titulo: "Tu fin de semana en Madrid.", sub: "7 planes accesibles · ningún cliché.", nota: "Portada · Mapa minimalista con 7 puntos numerados." },
      { n: 2, titulo: "Sábado 11:00 — La Casa Encendida", sub: "Entrada gratuita. Exposición temporal + sube a la azotea. Uno de los miradores más infrautilizados del centro." },
      { n: 3, titulo: "Sábado 14:00 — Comer en taberna castiza", sub: "La Bola para cocido. Casa Mingo para sidra y pollo. Casa Botín para cordero. Elige una. Máximo 25€." },
      { n: 4, titulo: "Sábado 17:00 — Museo Cerralbo", sub: "Sábados después de las 14h: entrada libre. Palacio del XIX intacto. La sala olvidada del ala este vale toda la visita." },
      { n: 5, titulo: "Sábado 21:00 — Cine Doré", sub: "Sesión a 5€. Filmoteca Española. Una de las salas con mejor programación de Europa." },
      { n: 6, titulo: "Domingo 11:00 — El Rastro", sub: "Aprende a regatear sin ofender. Vinilo, libros, antigüedades. Compra una cosa, sostén el mercado." },
      { n: 7, titulo: "Domingo 14:00 — Caracoles en Casa Amadeo", sub: "Plaza Cascorro. Menú ~12€. Los caracoles los hacen como hace 100 años. Si no te atreves, pide el guiso del día." },
      { n: 8, titulo: "Domingo 18:00 — Templo de Debod por dentro", sub: "Entra en el templo. Casi nadie lo hace. Es gratis. Y luego, atardecer fuera. Cierre cultural perfecto." }
    ],
    copyPie: `Tu fin de semana en Madrid. 7 planes. Cero cliché. Cero gasto excesivo.\n\nGuarda el carrusel y úsalo. Y si conoces a alguien que dice "no sé qué hacer este finde en Madrid", etiquétalo. Esto es lo que hay.\n\n📌 Comenta FINDE y te enviamos: 10 planes culturales en Madrid por menos de 20€ (PDF con precios, horarios y mapa).`,
    kpi: ">15% save (los planes de finde son los reyes del save) · >5% share"
  },
  {
    id: "C-W03", sem: 3, mes: "Jun", formato: "C3", nombreFormato: "Historia en 9 imágenes",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "Historia del Mercado de San Miguel en 9 imágenes",
    slides: [
      { n: 1, titulo: "El Mercado de San Miguel en 9 imágenes.", sub: "Cómo un mercado tradicional se convirtió en el icono gastronómico de Madrid." },
      { n: 2, titulo: "1916", sub: "Se inaugura como mercado de abastos tradicional. Estructura de hierro, vidrio y cerámica. Diseñado por Alfonso Dubé y Díez." },
      { n: 3, titulo: "1916-1990", sub: "Mercado de barrio funcional. Frutas, verduras, pescado. Las plazas de los Austrias compran aquí cada mañana." },
      { n: 4, titulo: "Años 90", sub: "Crisis del modelo de mercado tradicional. Cierre progresivo de puestos. Riesgo real de demolición." },
      { n: 5, titulo: "2003", sub: "Se inicia el plan de rehabilitación. Idea: convertirlo en mercado gastronómico de calidad, no en mall de comida rápida." },
      { n: 6, titulo: "2009", sub: "Reapertura como Mercado de San Miguel gastronómico. 33 puestos seleccionados con criterio: tapas de calidad, productores locales, vino, ostras." },
      { n: 7, titulo: "Años 10", sub: "Boom turístico. Riesgo opuesto: convertirse solo en parada de Instagram. Críticas locales por precios y aglomeración." },
      { n: 8, titulo: "Hoy", sub: "Equilibrio difícil. Funciona si vas en horarios buenos (11h o 16h, no a la hora de comer). Pide a puestos concretos: jamón en uno, vino en otro, ostras en otro." },
      { n: 9, titulo: "Por qué importa", sub: "Madrid casi perdió este edificio. Saber su historia es entender por qué cuidamos lo que tenemos antes de que sea tarde. Plaza de San Miguel · Junto a Plaza Mayor." }
    ],
    copyPie: `El Mercado de San Miguel casi se demuele en los 90. Hoy es uno de los iconos gastronómicos de Madrid.\n\nTruco para esquivar la masificación: ir entre las 11 y las 13, o después de las 16. Pedir a puestos concretos (jamón en uno, vino en otro, ostras en otro), no menú único.\n\nEsto es Madrid: salvado, vivo, contado.\n\n📌 Plaza de San Miguel · mercadodesanmiguel.es\n📌 Comenta GASTRONOMIA y te enviamos: 5 restaurantes con más historia cultural en Madrid.`,
    kpi: ">8% save · alto tiempo de visualización · viralidad por nostalgia local"
  },
  {
    id: "C-W04", sem: 4, mes: "Jun", formato: "C4", nombreFormato: "Manual cultural +30",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "Cómo hacer una ruta de tapas sin caer en trampa de turistas",
    slides: [
      { n: 1, titulo: "Cómo hacer una ruta de tapas en Madrid.", sub: "Sin caer en trampa de turistas. Manual +30." },
      { n: 2, titulo: "Paso 1 — Elige la zona", sub: "La Latina (Cava Baja), Huertas (Cervantes y Lope), Chamberí (Ponzano para tapeo moderno). Evita zonas con \"menú turístico\" en la puerta." },
      { n: 3, titulo: "Paso 2 — Empieza temprano", sub: "20:30-21:00 es la hora local. A las 22h se llena. Si llegas a las 21:30 ya estás tarde para los sitios buenos." },
      { n: 4, titulo: "Paso 3 — Un sitio, una tapa. Y se cambia.", sub: "La regla de oro madrileña: una tapa, una caña, y se cambia. No pidas 4 cosas en el mismo sitio. La gracia es la rotación." },
      { n: 5, titulo: "Paso 4 — Pide lo que pidan los locales", sub: "Mira las mesas vecinas. Las tapas con más demanda son las del día. Pide \"lo de la barra\", no del menú impreso." },
      { n: 6, titulo: "Paso 5 — Caña corta, no jarra", sub: "Madrid bebe corto y rota. La jarra es para turistas. La caña corta acompaña la rotación de bares y conversación." },
      { n: 7, titulo: "Paso 6 — 3 sitios mínimo, 5 máximo", sub: "Menos de 3, no es ruta. Más de 5, se diluye. Lo ideal: 4 sitios distintos en 2 horas. Cada uno con su especialidad." },
      { n: 8, titulo: "Para llevarte", sub: "Total bien hecho: ~30€ por persona. Total cultural: una de las mejores formas de entender Madrid. Si quieres la ruta concreta, comenta TAPAS." }
    ],
    copyPie: `Cómo se hace una ruta de tapas en Madrid sin caer en trampa de turistas.\n\nLa regla esencial: una tapa, una caña, se cambia. No es opinión, es código local.\n\nGuarda el carrusel para tu próxima salida. 30€ por persona, 4 bares, 2 horas. Esto es Madrid.\n\n📌 Comenta TAPAS y te enviamos: la ruta exacta con direcciones, qué pedir en cada sitio y orden recomendado.`,
    kpi: ">12% save (los manuales prácticos arrasan) · DMs preguntando rutas concretas"
  },
  {
    id: "C-W05", sem: 5, mes: "Jul", formato: "C1", nombreFormato: "Glosario del adulto culto",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Glosario: qué abre en Madrid los lunes (y qué no)",
    slides: [
      { n: 1, titulo: "Madrid los lunes.", sub: "Qué abre, qué no, y dónde sí puedes ir." },
      { n: 2, titulo: "1. Museos públicos", sub: "Lunes cerrados casi todos: Prado, Reina Sofía, Thyssen, Sorolla, Cerralbo. Es la regla general." },
      { n: 3, titulo: "2. Excepción: museos municipales", sub: "Museo de Historia de Madrid y Museo de San Isidro abren los lunes. Y son gratuitos. Casi nadie lo sabe." },
      { n: 4, titulo: "3. Bibliotecas", sub: "Biblioteca Nacional abre lunes a sábado. La Biblioteca Eugenio Trías (Retiro) también. Salas de lectura impecables." },
      { n: 5, titulo: "4. Cines", sub: "Cines de Plaza Sevilla, Cinesa, Yelmo: todos los días. Cine Doré (Filmoteca): cerrado los lunes." },
      { n: 6, titulo: "5. Galerías de arte", sub: "La mayoría cerradas los lunes. Excepción: salas de fundaciones (Mapfre, Telefónica, Canal Isabel II) — abren toda la semana." },
      { n: 7, titulo: "6. Restaurantes históricos", sub: "Botín, Lhardy: abiertos lunes. Casa Mingo: abierta. La Bola: cerrada los lunes (su día de descanso). Verifica siempre." },
      { n: 8, titulo: "7. Templos / monumentos", sub: "Templo de Debod: cerrado lunes. Palacio Real: abierto. Plaza Mayor: siempre abierta (es plaza). Catedral de la Almudena: abierta." },
      { n: 9, titulo: "Para llevarte", sub: "Madrid los lunes parece cerrada. No lo está. Solo hay que saber dónde mirar. Comenta LUNES y te paso la guía completa." }
    ],
    copyPie: `Madrid los lunes parece cerrada. No lo está.\n\nMuseos públicos sí (casi todos). Pero no las bibliotecas, no los cines, no los monumentos municipales, no muchas galerías de fundaciones.\n\nGuarda este carrusel. La próxima vez que tengas un lunes libre, sabrás exactamente qué hacer.\n\n📌 Comenta LUNES y te enviamos: Madrid los lunes — qué hacer cuando los museos cierran (PDF guía 14 páginas).`,
    kpi: ">10% save · alto comportamiento de share entre autónomos / flex workers"
  },
  {
    id: "C-W06", sem: 6, mes: "Jul", formato: "C2", nombreFormato: "Mapa secreto de…",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "Mapa de Madrid los lunes — 7 sitios abiertos que merecen la pena",
    slides: [
      { n: 1, titulo: "Madrid los lunes, sin morir de aburrimiento.", sub: "7 sitios abiertos · 7 planes culturales.", nota: "Portada · Mapa minimalista con 7 puntos." },
      { n: 2, titulo: "1. Templo de Debod (entrada exterior)", sub: "El templo cierra los lunes, pero el parque y el atardecer no. Pasa al menos a la hora azul." },
      { n: 3, titulo: "2. Biblioteca Nacional", sub: "Sala de lectura general + Museo de la BNE (gratuito). El sitio más silencioso del centro." },
      { n: 4, titulo: "3. Museo de Historia de Madrid", sub: "Calle Fuencarral 78. Lunes abierto. Gratuito. Una sorpresa para quien no lo conoce." },
      { n: 5, titulo: "4. Fundación Mapfre (Recoletos)", sub: "Sala de fotografía + sala de pintura. Lunes abierto. Precio simbólico (3€)." },
      { n: 6, titulo: "5. Cine — sesión vermut", sub: "Cinesa Príncipe Pío o Yelmo Ideal. Sesión vermut domingo-lunes a 4-5€. Cualquier estreno." },
      { n: 7, titulo: "6. Palacio Real", sub: "Abierto lunes. Entrada 14€ (residentes Madrid: gratis primer día del mes). Visita corta — 90 minutos suficiente." },
      { n: 8, titulo: "7. Cervecería Alemana", sub: "Plaza de Santa Ana. Abierta lunes. Hemingway pasaba aquí. Una caña y un libro = lunes resuelto." }
    ],
    copyPie: `Madrid los lunes ofrece más de lo que parece.\n\n7 sitios abiertos. Algunos gratis, otros casi. Todos con criterio.\n\nGuarda el mapa y mándalo a quien dice "los lunes no se puede hacer nada en Madrid".\n\n📌 Comenta LUNES y te enviamos: Madrid los lunes — qué hacer cuando los museos cierran (la guía completa con horarios).`,
    kpi: ">12% save · share alto entre autónomos · DMs de gente confirmando que descubrió sitios nuevos"
  },
  {
    id: "C-W07", sem: 7, mes: "Jul", formato: "C3", nombreFormato: "Historia en 9 imágenes",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "Historia de la música en directo en Madrid en 9 imágenes",
    slides: [
      { n: 1, titulo: "La música en directo en Madrid.", sub: "9 momentos · 100 años · del Café de Chinitas a Mad Cool." },
      { n: 2, titulo: "1920s — Café de Chinitas", sub: "Tablao flamenco mítico en Torija. Lorca lo inmortaliza en sus versos. La nobleza madrileña paga por oírlo." },
      { n: 3, titulo: "1940s — Cafés cantantes", sub: "Resistencia cultural en plena posguerra. Cafés donde se canta copla y se programa lo poco que está permitido." },
      { n: 4, titulo: "1960s — Movida pre-Movida", sub: "Whisky Club, Bocaccio. Madrid empieza a programar lo que llega de fuera. Gato Pérez, Vainica Doble." },
      { n: 5, titulo: "1980s — La Movida y los clubs", sub: "Rock-Ola, Carolina, Sala Universal. Madrid es centro cultural de Europa. Almodóvar filma en sus barras." },
      { n: 6, titulo: "1990s — Salas medianas", sub: "Caracol, Galileo Galilei, El Sol. La sala mediana se consolida como espacio de descubrimiento. 200-400 personas, calidad alta." },
      { n: 7, titulo: "2000s — Festivales urbanos", sub: "Veranos de la Villa, Festimad, Conde Duque. Madrid programa al aire libre. Cambio del modelo de noche al modelo de festival." },
      { n: 8, titulo: "2010s — Mad Cool y la era macro", sub: "2016: Mad Cool nace. Festivales con 80.000 personas. Modelo internacional. Tensión con las salas pequeñas que pierden público." },
      { n: 9, titulo: "Hoy", sub: "Coexistencia tensa: macrofestivales + Veranos de la Villa + Café Central + Conde Duque + salas pequeñas. Madrid programa más conciertos al año que ninguna capital española. Hay que aprender a navegarlo." }
    ],
    copyPie: `Madrid tiene 100 años programando música en directo de forma ininterrumpida.\n\nDel Café de Chinitas a Mad Cool. De las salas Movida al Conde Duque. La oferta es brutal — y aprender a navegarla cambia tu vida cultural.\n\n📌 Si quieres aprender a usar Madrid musical, comenta VERANO y te enviamos: el mapa de los conciertos gratis de Madrid este verano.`,
    kpi: ">8% save · alta retención · share entre melómanos"
  },
  {
    id: "C-W08", sem: 8, mes: "Jul", formato: "C4", nombreFormato: "Manual cultural +30",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "Cómo encontrar conciertos gratis en Madrid sin pasarte horas en Google",
    slides: [
      { n: 1, titulo: "Cómo encontrar conciertos gratis en Madrid.", sub: "Sin pasarte horas en Google. Manual +30." },
      { n: 2, titulo: "Paso 1 — Las 4 webs maestras", sub: "1. madrid.es/agenda (Ayuntamiento) · 2. condeduquemadrid.es · 3. veranosdelavilla.com · 4. fundaciones (Telefónica, Mapfre, La Casa Encendida) — todas tienen ciclos gratis." },
      { n: 3, titulo: "Paso 2 — Sigue 3 cuentas concretas", sub: "@condeduquemadrid · @veranosdelavilla · @bandasinfonicamadrid. Programan a 30-60 días vista. Suficiente para planificar." },
      { n: 4, titulo: "Paso 3 — Los 4 espacios que SIEMPRE tienen algo gratis", sub: "Templo de Debod (Banda Sinfónica julio) · Quinta de los Molinos (Banda Sinfónica agosto) · Plaza de Oriente (verano) · La Casa Encendida (ciclo jazz)." },
      { n: 5, titulo: "Paso 4 — El truco del Real Conservatorio", sub: "Recitales abiertos de alumnos de fin de curso y conciertos de cátedra: alta calidad, gratuitos, casi nadie lo sabe. Calle Doctor Mata 2." },
      { n: 6, titulo: "Paso 5 — Apunta con 2 semanas de antelación", sub: "Los buenos se llenan. Aforo limitado en muchos espacios. Reservar con tiempo en madrid.es." },
      { n: 7, titulo: "Paso 6 — Lleva una manta o cojín", sub: "Muchos conciertos al aire libre son en suelo o gradas duras. Cojín pequeño y manta cambian tu noche." },
      { n: 8, titulo: "Para llevarte", sub: "Hay más conciertos gratis en Madrid que en cualquier otra capital española. La diferencia entre ir y no ir es 10 minutos de planificación al mes." }
    ],
    copyPie: `Hay más conciertos gratis en Madrid que en cualquier otra capital española.\n\nNo es exageración: súmalo. Banda Sinfónica + Veranos de la Villa + La Casa Encendida + Conservatorio + Conde Duque. Calidad alta, coste cero.\n\nLa diferencia entre disfrutarlos y perdértelos: 10 minutos al mes planificando.\n\n📌 Comenta VERANO y te enviamos: el mapa completo de los conciertos gratis de Madrid (PDF con todas las fechas confirmadas).`,
    kpi: ">14% save (los manuales prácticos + temporada) · share alto entre melómanos económicos"
  },
  {
    id: "C-W09", sem: 9, mes: "Ago", formato: "C1", nombreFormato: "Glosario del adulto culto",
    pilar: "Mirada experta", pilarN: "I",
    titulo: "Glosario del libro de viejo: incunable, primera edición, ex libris…",
    slides: [
      { n: 1, titulo: "Glosario del libro de viejo.", sub: "Para entrar en la Cuesta de Moyano y no perderte." },
      { n: 2, titulo: "Incunable", sub: "Libro impreso antes de 1501 — los primeros 50 años de la imprenta. Una caseta de Moyano puede tener facsímiles. Originales: museo." },
      { n: 3, titulo: "Primera edición", sub: "La primera tirada de un libro. Para clásicos del XIX-XX puede costar de 50€ a miles. Es coleccionable real." },
      { n: 4, titulo: "Ex libris", sub: "Marca personal que el dueño pegaba en la portadilla. Pequeño grabado con su nombre. Si compras un libro con ex libris valioso, no lo quites — añade valor." },
      { n: 5, titulo: "Encuadernación", sub: "Tela, piel, cartoné, rústica. La encuadernación cuenta tanto como el contenido. Una piel del XIX puede valer más que el libro mismo." },
      { n: 6, titulo: "Estado", sub: "Vocabulario clave: \"buen estado\", \"completo\", \"con desperfectos\". Pregunta SIEMPRE si tiene las páginas completas. Falta de un cuaderno = pérdida total." },
      { n: 7, titulo: "Numerado vs. no numerado", sub: "Las ediciones numeradas (\"1/500\") suelen valer más que las masivas. Si vas a coleccionar, pregunta por estas." },
      { n: 8, titulo: "Firma del autor", sub: "Libro firmado = multiplica valor. Pero cuidado: en Moyano hay falsificaciones. Si pagas más por una firma, pide certificado o procedencia." },
      { n: 9, titulo: "Para llevarte", sub: "Saber estas 7 palabras te da derecho a estar en la Cuesta de Moyano sin sentirte fuera. Y a comprar bien. Sábados 10-14h." }
    ],
    copyPie: `7 palabras para entender la Cuesta de Moyano y comprar bien.\n\nUna caseta no es una tienda — es un microoficio. Saber lo que pides cambia el trato y el precio.\n\nGuarda el carrusel. La próxima vez que bajes la cuesta, vas con red.\n\n📌 Sábados 10-14h junto al Retiro.\n📌 Comenta LIBROS y te enviamos: las 10 librerías de barrio que merecen un sábado entero.`,
    kpi: ">9% save · share entre lectores y colectivos"
  },
  {
    id: "C-W10", sem: 10, mes: "Ago", formato: "C2", nombreFormato: "Mapa secreto de…",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "Las 10 librerías icónicas del centro de Madrid",
    slides: [
      { n: 1, titulo: "Las 10 librerías del centro de Madrid.", sub: "Las que merecen un sábado entero · mapa.", nota: "Portada · Mapa minimalista del centro con 10 puntos." },
      { n: 2, titulo: "1. La Central (Reina Sofía)", sub: "Dentro del museo. Selección de arte, fotografía, diseño. La librería de museo más rigurosa de Madrid." },
      { n: 3, titulo: "2. Librería Antonio Machado (Fernando VI)", sub: "Literatura española de fondo. Personal que conoce el catálogo entero. Programación de presentaciones cada semana." },
      { n: 4, titulo: "3. Librería Méndez (Mayor 80)", sub: "Casi 90 años en la misma puerta. Especialidad: libros antiguos y agotados. Si lo buscas, ellos lo encuentran." },
      { n: 5, titulo: "4. Tipos Infames (San Joaquín 3)", sub: "Librería + vinoteca. Café honesto. Curaduría de no ficción y editoriales independientes. Mejor barrio para escritura." },
      { n: 6, titulo: "5. Panta Rhei (Hernán Cortés 7)", sub: "Cómic y novela gráfica. La mejor selección de Madrid de literatura ilustrada. Programa firmas mensuales." },
      { n: 7, titulo: "6. La Buena Vida (Vergara 5)", sub: "En Ópera. Pequeña, exquisita. Especializada en literatura contemporánea. El lugar para comprar regalos literarios." },
      { n: 8, titulo: "7. Cervantes y Compañía (Pez 27)", sub: "Malasaña. Selección amplia + café. Programación de talleres de escritura y club de lectura." },
      { n: 9, titulo: "8-10. Tres más para tener en cuenta", sub: "Librería Mujeres (San Cristóbal 17) — feminismo · Casa del Lector (Matadero) — programación cultural · Librería Rafael Alberti (Tutor 57) — poesía y teatro." },
      { n: 10, titulo: "Para llevarte", sub: "Madrid tiene una de las mejores escenas de librería independiente de Europa. Cada visita = sostener esta escena. Compra al menos un libro al mes." }
    ],
    copyPie: `Madrid tiene una de las mejores escenas de librería independiente de Europa.\n\nNo es opinión: visita estas 10 y luego compara. Las cadenas tienen todo. Las independientes tienen criterio.\n\nGuarda el mapa. Y si quieres mantenerlas vivas: compra al menos un libro al mes.\n\n📌 Comenta LIBROS y te enviamos: las 10 librerías de barrio que merecen un sábado entero (con horarios, café asociado y especialidad).`,
    kpi: ">13% save (los mapas se guardan y consultan) · share alto entre lectores"
  },
  {
    id: "C-W11", sem: 11, mes: "Ago", formato: "C3", nombreFormato: "Historia en 9 imágenes",
    pilar: "Patrimonio vivo", pilarN: "II",
    titulo: "Historia de Veranos de la Villa en 9 imágenes",
    slides: [
      { n: 1, titulo: "Veranos de la Villa en 9 imágenes.", sub: "Cómo Madrid construyó el festival cultural más importante de su verano." },
      { n: 2, titulo: "1984", sub: "Primera edición. Madrid acaba de salir de la Transición y necesita programación cultural pública de calidad. Idea: aprovechar el verano sin parar la vida cultural." },
      { n: 3, titulo: "Años 80", sub: "Programación en patios históricos. Conde Duque empieza a ser sede principal. Las primeras compañías invitadas son nacionales." },
      { n: 4, titulo: "Años 90", sub: "Internacionalización. Se incorporan compañías europeas. Aparece la programación de danza contemporánea y circo." },
      { n: 5, titulo: "Años 2000", sub: "Expansión a 30+ espacios por toda la ciudad. La marca \"Veranos de la Villa\" se consolida como sinónimo de verano cultural madrileño." },
      { n: 6, titulo: "Años 2010", sub: "Programación expandida: música, teatro, cine, talleres, infantil. 200+ eventos por edición. Audiencia 250.000-300.000 personas/edición." },
      { n: 7, titulo: "Pandemia (2020-21)", sub: "Adaptación a aforos reducidos. Refuerzo del programa al aire libre. Confirma su valor estratégico para Madrid." },
      { n: 8, titulo: "Hoy", sub: "6 semanas (julio-agosto). 200+ eventos. 30+ espacios. Programación equilibrada entre titulares y descubrimientos. Precios subvencionados o gratis." },
      { n: 9, titulo: "Por qué importa", sub: "Pocas capitales europeas mantienen un festival público veraniego de esta escala y calidad. Si vives en Madrid en agosto y no usas Veranos, te estás perdiendo lo mejor del verano." }
    ],
    copyPie: `Veranos de la Villa cumple 42 años en 2026.\n\n42 años programando cultura pública de calidad cada verano en Madrid. 200+ eventos por edición. 30+ espacios. Precios subvencionados o gratis.\n\nUno de los mejores planes en grupo del verano madrileño: entrada barata o gratis, espacios amplios donde caben tus amigos y un patio con bar entre función y función.\n\n📌 Programa: veranosdelavilla.com\n📌 Comenta AMIGOS y te enviamos: 10 planes en Madrid para hacer con tu grupo de amigos.`,
    kpi: ">8% save · viralidad por orgullo local"
  },
  {
    id: "C-W12", sem: 12, mes: "Ago", formato: "C4", nombreFormato: "Manual cultural +30",
    pilar: "Ritual cultural", pilarN: "IV",
    titulo: "Cómo planear tu agenda de Veranos de la Villa este agosto",
    slides: [
      { n: 1, titulo: "Cómo planear tu agenda de Veranos de la Villa.", sub: "Para no quedarte sin nada bueno. Manual +30." },
      { n: 2, titulo: "Paso 1 — Mira el programa completo HOY", sub: "veranosdelavilla.com publica el programa completo a principios de junio. Mira los 200+ eventos antes de comprar. No improvises." },
      { n: 3, titulo: "Paso 2 — Bloquea 4-5 noches en agenda", sub: "Mínimo 4 noches en 6 semanas. Si quieres apuntar a 8-10 eventos (recomendable), bloquea 6 noches." },
      { n: 4, titulo: "Paso 3 — Distingue titulares vs. descubrimientos", sub: "Programación = titulares conocidos (DJ internacional, ballet conocido) + descubrimientos (compañía local sin nombre). Lo mejor suele estar en los segundos." },
      { n: 5, titulo: "Paso 4 — Reserva en cuanto se abra", sub: "Las plazas se llenan rápido. La taquilla online del Conde Duque abre 30 días antes. Calendario en el móvil." },
      { n: 6, titulo: "Paso 5 — Mix de espacios", sub: "No vayas solo a Conde Duque. Mezcla: Teatros del Canal, Galileo, Quinta de los Molinos, Plaza de Oriente. Cada espacio cambia la experiencia." },
      { n: 7, titulo: "Paso 6 — Lleva pareja o socio, no solo", sub: "Los Veranos se digieren mejor compartidos. Después de la función, una caña en el patio del Conde Duque (10€ menú) cierra la noche." },
      { n: 8, titulo: "Para llevarte", sub: "Veranos de la Villa no se \"va a\". Se planifica. Esto es la diferencia entre verlo desde fuera o vivirlo desde dentro." }
    ],
    copyPie: `El festival que organizas con tu grupo no se "va a". Se planifica.\n\n6 pasos para no perdértelo este agosto. Programa hoy. Bloquea fechas. Distingue titulares de descubrimientos. Reserva en grupo. Mezcla espacios. Vete con tu gente.\n\n📌 veranosdelavilla.com\n📌 Comenta AMIGOS y te enviamos: 10 planes en Madrid para hacer con tu grupo de amigos.`,
    kpi: ">11% save · DMs preguntando por plan grupal con socios"
  }
];

window.TMT.carruselesFormatos = [
  { id: "C1", nombre: "Glosario del Madrid culto", pilar: "Mirada experta", pilarN: "I", slides: "7-9", estructura: "Vocabulario o conceptos accesibles + ejemplo + por qué importa.", kpi: ">8% save" },
  { id: "C2", nombre: "Mapa de Madrid", pilar: "Ritual cultural", pilarN: "IV", slides: "7-9", estructura: "Plan, ruta o mapa con 5-7 paradas concretas y accionables.", kpi: ">12% save" },
  { id: "C3", nombre: "Historia en 9 imágenes", pilar: "Patrimonio vivo", pilarN: "II", slides: "9", estructura: "Relato visual de un lugar / institución de Madrid universalmente conocida.", kpi: ">8% save · alto tiempo" },
  { id: "C4", nombre: "Manual cultural +30", pilar: "Ritual cultural", pilarN: "IV", slides: "7-8", estructura: "Cómo hacer algo cultural en Madrid en X pasos concretos.", kpi: ">11% save" }
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
    palabraClave: "GASTRONOMIA",
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
    titulo: "10 planes en Madrid para hacer con tu grupo de amigos",
    subtitulo: "Cenas, terrazas, conciertos y rutas que funcionan en grupos de 4 a 10.",
    formato: "PDF guía · 18 páginas · A5 vertical · con plantilla de reserva",
    pilar: "Ritual cultural", pilarN: "IV",
    audiencia: "Adultos que organizan planes para su grupo y nunca encuentran sitios que funcionen para todos.",
    hook: "Cuando vais cuatro o más, no todos los planes valen. Esta guía recoge los 10 planes culturales de Madrid que sí funcionan en grupo — con precio por persona, capacidad y dónde reservar.",
    palabraClave: "AMIGOS",
    kpiObjetivo: "460 descargas (pico de fin de trimestre) · share alto en grupos · DMs preguntando reservas"
  }
];

// -------------------------------------------------------------
// EMBUDO — Instagram → ManyChat → HubSpot (email + WhatsApp) → Multicanal semanal
// -------------------------------------------------------------
window.TMT.embudo = [
  {
    n: "01",
    nombre: "Captación orgánica por Instagram",
    titulo: "Reels + carruseles + stories con palabra clave",
    objetivo: "Convertir scroll en intención. Cada pieza orgánica termina con una palabra clave concreta.",
    tacticas: [
      "Cada pieza acaba con CTA: \"Comenta MADRID · FINDE · GASTRONOMIA · AMIGOS / etc.\".",
      "Stories diarias re-activan las palabras clave de las piezas grandes.",
      "1 lead magnet activo cada quincena con su keyword dedicada."
    ],
    kpi: "Comentarios con palabra clave por pieza > 80 (orgánico)",
    herramientas: "Notion editorial · CapCut Pro · Meta Business Suite",
    detalleOperativo: "Las keywords se acuerdan al inicio de cada quincena. Se usan en el pie y sobreimpresionadas en pantalla en el último segundo de cada pieza."
  },
  {
    n: "02",
    nombre: "Automatización con ManyChat",
    titulo: "Comentario clave → DM automático → email capturado",
    objetivo: "Convertir el comentario público en email cualificado sin fricción humana.",
    tacticas: [
      "Trigger: keyword en comentario público (flujo configurado en ManyChat por LM).",
      "Bot envía DM: \"¡Hola! Te dejo aquí la guía. Para enviártela completa, dime tu email.\"",
      "Usuario responde con email → bot valida formato y envía link de descarga del lead magnet.",
      "Email entra automáticamente en HubSpot en la propiedad de lifecycle correspondiente.",
      "Recordatorio único a las 24h para usuarios que no responden."
    ],
    kpi: "Conversión comentario → email cualificado > 65%",
    herramientas: "ManyChat (plan Pro) · webhook → HubSpot",
    detalleOperativo: "Un flujo maestro por palabra clave. Documentación de flujos en Notion. Auditoría semanal de tasa de finalización."
  },
  {
    n: "03",
    nombre: "Email + invitación a WhatsApp",
    titulo: "Entrega del lead magnet + apertura de comunidad",
    objetivo: "Convertir el lead capturado en miembro activo de la comunidad WhatsApp.",
    tacticas: [
      "Email 0 (D+0): entrega del lead magnet desde HubSpot + pregunta abierta.",
      "Email 1 (D+2): historia complementaria sobre uno de los puntos del LM (refuerzo editorial).",
      "Email 2 (D+4): invitación a la comunidad WhatsApp con link directo + explicación del valor.",
      "Email 3 (D+7): testimonios reales de uso del LM y la comunidad.",
      "Toda la secuencia se ejecuta como workflow en HubSpot."
    ],
    kpi: "% que acepta WhatsApp sobre entregas de LM > 30% · apertura serie > 50% mediana",
    herramientas: "HubSpot (workflows + email marketing) · WhatsApp Business · link de comunidad",
    detalleOperativo: "Plantillas de los 4 emails revisadas al inicio del trimestre. Tono editorial igual al newsletter — nunca comercial."
  },
  {
    n: "04",
    nombre: "Comunicación multicanal semanal",
    titulo: "Newsletter semanal + WhatsApp",
    objetivo: "Mantener relación continua con cadencia semanal. Reparto claro entre canales, sin solapar mensajes.",
    tacticas: [
      "Newsletter Culturioso: 1 envío semanal (cada viernes) desde HubSpot. Pieza editorial breve, contenido no perecedero.",
      "WhatsApp Comunidad: alta frecuencia, mensajes cortos con planes inmediatos (\"hoy a las 19h gratis en Debod\").",
      "WhatsApp Canales temáticos: Música en directo · Arte joven · Plan de domingo.",
      "Cada 4 semanas: comunicación dirigida a leads más activos invitándoles a una experiencia gratuita del club.",
      "HubSpot centraliza: segmentación, propiedades, reportes y atribución cross-canal."
    ],
    kpi: "Tasa de respuesta WhatsApp > 18% · apertura newsletter semanal > 45% · conversión Engaged → club 8-12%",
    herramientas: "HubSpot (CRM + email + workflows + reporting) · WhatsApp Business",
    detalleOperativo: "Calendario maestro semanal en Notion sincronizado con HubSpot. Regla: lo que va por WhatsApp no se repite en email y viceversa. Reporte semanal por canal."
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
        "Configuración de ManyChat (6 flujos maestros — uno por LM) + webhook a HubSpot.",
        "Setup de propiedades, lifecycle stages y workflows de bienvenida en HubSpot.",
        "Creación de la comunidad WhatsApp + 3 canales temáticos.",
        "Producción y diseño LM1 + LM2 (Junio Q1 y Q2).",
        "Aprobación del plan editorial del primer mes."
      ]
    },
    {
      n: "02", nombre: "Junio · Lanzamiento", duracion: "4 semanas", fechas: "1 junio — 28 junio",
      hitos: [
        "Publicación de 8 reels + 8 carruseles (2 + 2 por semana) y stories diarias.",
        "Lanzamiento LM1 (10 planes <20€ · keyword MADRID) y LM2 (5 restaurantes con historia · keyword GASTRONOMIA).",
        "4 envíos de newsletter Culturioso semanal desde HubSpot.",
        "Apertura WhatsApp con primeros 100 invitados desde la base existente.",
        "Lectura de datos al final de cada quincena + ajuste fino de keyword y rotación."
      ]
    },
    {
      n: "03", nombre: "Julio · Crucero", duracion: "5 semanas", fechas: "29 junio — 2 agosto",
      hitos: [
        "Ejecución sostenida (8 reels + 8 carruseles + stories diarias).",
        "Lanzamiento LM3 (Madrid los lunes · keyword LUNES) y LM4 (conciertos gratis · keyword VERANO).",
        "4 envíos newsletter Culturioso semanal.",
        "Primer paid layer ligero sobre las piezas con mejor performance orgánica.",
        "Primer evento real solo-socios documentado para reel R5 ancla."
      ]
    },
    {
      n: "04", nombre: "Agosto · Consolidación", duracion: "4 semanas", fechas: "3 agosto — 30 agosto",
      hitos: [
        "Ejecución sostenida (8 reels + 8 carruseles + stories diarias).",
        "Lanzamiento LM5 (librerías de barrio · keyword LIBROS) y LM6 (planes con amigos · keyword AMIGOS).",
        "4 envíos newsletter semanal + envío de cierre con reporte editorial trimestral.",
        "Reporte de trimestre desde HubSpot: datos, aprendizajes y propuesta operativa para escalar en septiembre."
      ]
    }
  ],
  roles: [
    { rol: "Dirección estratégica", entrega: "Sesión mensual + reporte de cierre trimestral." },
    { rol: "Dirección creativa", entrega: "Concept editorial de cada quincena + revisión de cada LM antes de publicación." },
    { rol: "Copy + guion", entrega: "12 reels + 12 carruseles + stories + 6 newsletters + 6 LMs." },
    { rol: "Producción audiovisual", entrega: "Grabación, edición y color de los 12 reels + recursos para stories diarias." },
    { rol: "Diseño gráfico", entrega: "12 carruseles + 6 lead magnets + plantillas reutilizables Stories." },
    { rol: "Automatizaciones · CRM", entrega: "6 flujos ManyChat + integraciones HubSpot + canales WhatsApp configurados." },
    { rol: "Community management", entrega: "Respuesta L-V · escucha activa · DMs cualificados · moderación WhatsApp." },
    { rol: "Analítica", entrega: "Dashboard HubSpot semanal · KPIs por canal · revisión quincenal con cliente." }
  ]
};

window.TMT.calendario = {
  q1: [
    { dia: "L", fecha: "1", pieza: "Stories diarias · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "2", pieza: "Reel ancla W01 · El detalle de la Puerta de Alcalá", formato: "Reel", pilar: "I", apunta: "LM1 · keyword MADRID" },
    { dia: "Mi", fecha: "3", pieza: "Carrusel ancla C-W01 · 8 plazas de Madrid", formato: "Carrusel", pilar: "I", apunta: "LM1 · keyword GLOSARIO" },
    { dia: "J", fecha: "4", pieza: "Reel satélite · Plan en 60s — Sábado culto por menos de 30€", formato: "Reel", pilar: "III", apunta: "LM1 · keyword MADRID" },
    { dia: "V", fecha: "5", pieza: "Newsletter Culturioso · Semanal 01", formato: "Email", pilar: "—", apunta: "Relación · HubSpot" },
    { dia: "S", fecha: "6", pieza: "Carrusel satélite · Manual del sábado culto en Madrid", formato: "Carrusel", pilar: "IV", apunta: "LM1 · keyword MADRID" },
    { dia: "D", fecha: "7", pieza: "Stories recovery editorial + cita Madrid", formato: "Stories", pilar: "II", apunta: "Engagement" },
    { dia: "L", fecha: "8", pieza: "Stories diarias · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "9", pieza: "Reel ancla W02 · Madrid a las 23:00", formato: "Reel", pilar: "II", apunta: "LM1 · keyword NOCHE" },
    { dia: "Mi", fecha: "10", pieza: "Carrusel ancla C-W02 · 7 planes de finde", formato: "Carrusel", pilar: "IV", apunta: "LM1 · keyword FINDE" },
    { dia: "J", fecha: "11", pieza: "Reel satélite · Hot take sobre las terrazas de Madrid", formato: "Reel", pilar: "I", apunta: "LM1 · keyword MADRID" },
    { dia: "V", fecha: "12", pieza: "Newsletter Culturioso · Semanal 02 + teaser LM2", formato: "Email", pilar: "—", apunta: "Relación · HubSpot" },
    { dia: "S", fecha: "13", pieza: "Carrusel satélite · Mapa del Madrid de noche", formato: "Carrusel", pilar: "IV", apunta: "LM1 · keyword NOCHE" },
    { dia: "D", fecha: "14", pieza: "Lanzamiento LM2 · 5 restaurantes con historia", formato: "Lead magnet", pilar: "II", apunta: "Captación · keyword GASTRONOMIA" }
  ],
  q2: [
    { dia: "L", fecha: "15", pieza: "Stories diarias · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "16", pieza: "Reel ancla W03 · Casa Botín + paseo Austrias", formato: "Reel", pilar: "III", apunta: "LM2 · keyword GASTRONOMIA" },
    { dia: "Mi", fecha: "17", pieza: "Carrusel ancla C-W03 · Mercado de San Miguel en 9 imágenes", formato: "Carrusel", pilar: "II", apunta: "LM2 · keyword GASTRONOMIA" },
    { dia: "J", fecha: "18", pieza: "Reel satélite · 3 tabernas centenarias del centro", formato: "Reel", pilar: "II", apunta: "LM2 · keyword GASTRONOMIA" },
    { dia: "V", fecha: "19", pieza: "Newsletter Culturioso · Semanal 03", formato: "Email", pilar: "—", apunta: "Relación · HubSpot" },
    { dia: "S", fecha: "20", pieza: "Carrusel satélite · Manual del cocido madrileño en 6 pasos", formato: "Carrusel", pilar: "IV", apunta: "LM2 · keyword COCIDO" },
    { dia: "D", fecha: "21", pieza: "Stories experiencia real con socios", formato: "Stories", pilar: "III", apunta: "Trigger club · WhatsApp" },
    { dia: "L", fecha: "22", pieza: "Stories diarias · Lunes de detalle", formato: "Stories", pilar: "I", apunta: "Engagement" },
    { dia: "Ma", fecha: "23", pieza: "Reel ancla W04 · Hot take Lhardy", formato: "Reel", pilar: "I", apunta: "LM2 · keyword GASTRONOMIA" },
    { dia: "Mi", fecha: "24", pieza: "Carrusel ancla C-W04 · Ruta de tapas sin trampa", formato: "Carrusel", pilar: "IV", apunta: "LM2 · keyword TAPAS" },
    { dia: "J", fecha: "25", pieza: "Reel satélite · 5 mercados con historia en Madrid", formato: "Reel", pilar: "II", apunta: "LM2 · keyword GASTRONOMIA" },
    { dia: "V", fecha: "26", pieza: "Newsletter Culturioso · Semanal 04 + teaser LM3", formato: "Email", pilar: "—", apunta: "Relación · HubSpot" },
    { dia: "S", fecha: "27", pieza: "Carrusel satélite · Mapa de menús del día con criterio", formato: "Carrusel", pilar: "IV", apunta: "LM2 · keyword GASTRONOMIA" },
    { dia: "D", fecha: "28", pieza: "Lectura de quincena + datos públicos de cierre", formato: "Carrusel", pilar: "—", apunta: "Comunidad" }
  ]
};

// -------------------------------------------------------------
// OBJETIVOS DEL TRIMESTRE
// -------------------------------------------------------------
window.TMT.kpis = {
  comunidad: {
    titulo: "Comunidad", n: "01",
    items: [
      { metrica: "Crecimiento de seguidores +30 cualificados en Instagram", nota: "Solo segmento +30 en target geográfico Madrid. Vanidad bruta no cuenta." },
      { metrica: "Save rate por publicación", nota: "Indicador #1 de relevancia editorial. El save es \"esto me sirve y volveré a ello\"." },
      { metrica: "Share rate por publicación", nota: "Indicador #1 de crecimiento orgánico. Cada share trae a alguien afín." },
      { metrica: "Volumen y calidad de comentarios", nota: "Conversación real frente a emojis sueltos. Sondea qué temas funcionan." }
    ]
  },
  leads: {
    titulo: "Captación de leads", n: "02",
    items: [
      { metrica: "Emails captados acumulados", nota: "Suma de los 6 lead magnets. Indicador del músculo de captación." },
      { metrica: "Conversión comentario → email cualificado", nota: "Auditoría semanal del flujo ManyChat. Detecta fricción del bot." },
      { metrica: "Tasa de apertura newsletter Culturioso", nota: "Calidad real de la base — si abren, la base es buena." },
      { metrica: "Tasa de click en newsletter", nota: "Intención real más allá de la apertura." }
    ]
  },
  whatsapp: {
    titulo: "Comunidad WhatsApp", n: "03",
    items: [
      { metrica: "Miembros activos en la comunidad WhatsApp", nota: "Activo = al menos una interacción en los últimos 30 días." },
      { metrica: "% de leads que aceptan invitación a WhatsApp", nota: "Mide el atractivo de la comunidad sobre los que ya descargan." },
      { metrica: "Tasa de respuesta a mensajes en WhatsApp", nota: "Indicador de relación real, no broadcast unidireccional." },
      { metrica: "Activación de canales temáticos", nota: "Música · Arte joven · Plan de domingo. Densidad de uso por canal." }
    ]
  },
  marca: {
    titulo: "Marca y autoridad", n: "04",
    items: [
      { metrica: "Búsquedas de marca \"treinta más treinta\"", nota: "Google Trends + Search Console. Señal de notoriedad instalada." },
      { metrica: "Tráfico directo a la web", nota: "Cuanto más directo entran a la web, más se acuerdan de la marca." },
      { metrica: "Menciones espontáneas en prensa cultural y newsletters afines", nota: "Aparecer sin pedirlo es la señal de que somos referencia." },
      { metrica: "Conversión Engaged → suscriptor del club", nota: "Métrica secundaria — el club no es el objetivo de la campaña, es la consecuencia." }
    ]
  }
};
