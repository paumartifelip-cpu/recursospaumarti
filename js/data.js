// Base de datos de vídeos y prompts de Pau Martí
// Cada vídeo tiene sus secciones, etiquetas y lista de prompts en recuadros independientes listos para copiar.

const VIDEOS_DATA = [
  {
    id: "30-skills-gemini",
    title: "30 Nuevas Skills de Gemini — Prompts para Copiar y Pegar",
    thumbnail: "thumbnails/30 nuevas skills gemini.png",
    category: "Modelos y Aplicaciones",
    tags: ["30 Skills Gemini", "Google Gemini", "Skills", "Habilidades", "Productividad", "Automatización", "Negocio", "Contenido", "Prompts"],
    description: "30 habilidades de Gemini listas para copiar y pegar en el chat. Abre Gemini, pega el prompt tal cual en el chat y envíalo: Gemini crea la habilidad automáticamente. Luego podrás usarla escribiendo / (pronto @) y su nombre.",
    rulesTitle: "⚡ Cómo se usan y avisos importantes:",
    rules: [
      "1. Cómo se usan — Abre Gemini, pega el prompt tal cual en el chat y envíalo. Gemini crea la habilidad sola. Luego la usas escribiendo / (pronto será @) y el nombre.",
      "2. Los huecos van entre [CORCHETES] — Donde pone [PEGA AQUÍ…] o […], cambia eso por tus datos antes de enviar.",
      "3. Apps conectadas necesarias — Las que usan tu correo (Gmail), calendario o Drive necesitan tener esas apps conectadas en Gemini.",
      "4. Habilidades encadenadas — La habilidad 26 (/maquina-de-propuestas) combina varias habilidades previas: asegúrate de haber creado antes /propuesta-cliente (1), /imita-mi-voz (7) y /brief-miniatura (12)."
    ],
    sections: [
      {
        title: "💼 Dinero y negocio",
        items: [
          {
            title: "1. /propuesta-cliente",
            badge: "Propuesta de Venta",
            text: `Crea una habilidad llamada «propuesta-cliente». Descripción: Úsala cuando te describa un posible cliente y necesite una propuesta de venta. Instrucciones: con mis servicios y precios (son estos: [PEGA AQUÍ TUS SERVICIOS Y PRECIOS]), prepara una propuesta con diagnóstico breve del cliente, qué le ofrezco, entregables, precio y siguiente paso. Tono cercano, convincente y orientado a cerrar, sin exagerar. Si falta algún dato del cliente, pregúntamelo antes de escribir.`
          },
          {
            title: "2. /presupuesto-express",
            badge: "Presupuesto y Factura",
            text: `Crea una habilidad llamada «presupuesto-express». Descripción: Úsala cuando te dé datos sueltos de un trabajo y necesite un presupuesto o factura. Instrucciones: conviértelos en un documento con este formato fijo: encabezado, concepto, cantidad, precio unitario, total, condiciones y validez. Mantén siempre el mismo orden. Nunca inventes importes; si falta un precio o un dato, pídemelo.`
          },
          {
            title: "3. /adapta-mi-cv",
            badge: "CV y Empleo",
            text: `Crea una habilidad llamada «adapta-mi-cv». Descripción: Úsala cuando te dé mi CV y una oferta de trabajo o proyecto. Instrucciones: compara los dos, extrae las palabras clave y los requisitos de la oferta, pregúntame por lo que falte, y reescribe mi CV y una carta de presentación enfocados a esa oferta. No inventes experiencia que no tengo.`
          },
          {
            title: "4. /radar-precios",
            badge: "Comparativa y Precios",
            text: `Crea una habilidad llamada «radar-precios». Descripción: Úsala cuando te dé mi lista de precios y la de un competidor. Instrucciones: compáralas servicio por servicio, dime dónde estoy caro o barato, y sugiéreme cómo posicionar y justificar mi precio. Respóndeme en una tabla sencilla.`
          },
          {
            title: "5. /cobros-pendientes",
            badge: "Recordatorios de Cobro",
            text: `Crea una habilidad llamada «cobros-pendientes». Descripción: Úsala cuando te suba o pegue mi lista de facturas. Instrucciones: 1) detecta las facturas impagadas, 2) ordénalas de la más antigua a la más reciente, 3) redacta un correo de recordatorio por cada una, firme pero amable, con importe y fecha. Déjalos listos para que yo los revise, no los envíes. Nunca inventes datos; si falta el correo del cliente, pídemelo.`
          },
          {
            title: "6. /guion-de-ventas",
            badge: "Guión y Objeciones",
            text: `Crea una habilidad llamada «guion-de-ventas». Descripción: Úsala cuando te dé las características de un producto o servicio. Instrucciones: convierte cada característica en un beneficio para el cliente, lístame las 5 objeciones más probables con una respuesta para cada una, y termina con una frase de cierre. Lenguaje simple, de persona a persona.`
          }
        ]
      },
      {
        title: "📱 Creador de contenido",
        items: [
          {
            title: "7. /imita-mi-voz",
            badge: "Tono y Estilo Propio",
            text: `Crea una habilidad llamada «imita-mi-voz». Descripción: Úsala cuando te pida escribir cualquier texto público mío. Instrucciones: aprende mi estilo con estos ejemplos ([PEGA AQUÍ 2 O 3 TEXTOS TUYOS]). Usa mi tono, mi longitud de frase y mi vocabulario. Frases cortas, cercanas, sin jerga. Si te falta contexto, pregúntame antes de inventar.`
          },
          {
            title: "8. /trocea-mi-video",
            badge: "Clips y Momentos Top",
            text: `Crea una habilidad llamada «trocea-mi-video». Descripción: Úsala cuando te pegue la transcripción de un vídeo largo. Instrucciones: encuentra los 10 mejores momentos para clips cortos. Para cada uno dame el minuto donde empieza, una frase gancho y un título corto. Ordénalos del más potente al menos potente.`
          },
          {
            title: "9. /un-contenido-diez-piezas",
            badge: "Multiformato Redes",
            text: `Crea una habilidad llamada «un-contenido-diez-piezas». Descripción: Úsala cuando te dé un vídeo, un artículo o una idea. Instrucciones: con mi estilo, crea un hilo para X, un texto de carrusel para Instagram, un guion de short y un texto de newsletter. Al final, propón una idea de infografía. Mantén la misma idea central en todas las piezas.`
          },
          {
            title: "10. /titulos-que-venden",
            badge: "Títulos con Gancho",
            text: `Crea una habilidad llamada «titulos-que-venden». Descripción: Úsala cuando te dé el tema de un vídeo. Instrucciones: dame 10 títulos con gancho, cada uno de menos de 60 caracteres, ordenados del mejor al peor. Evita títulos vagos; cada uno debe prometer algo concreto.`
          },
          {
            title: "11. /comentarios-a-ideas",
            badge: "Ideas de la Comunidad",
            text: `Crea una habilidad llamada «comentarios-a-ideas». Descripción: Úsala cuando te pegue los comentarios de mis vídeos o redes. Instrucciones: detecta qué está pidiendo la gente (dudas, temas repetidos, quejas) y conviértelo en 5 ideas de contenido nuevo, cada una con un título propuesto y por qué funcionaría.`
          },
          {
            title: "12. /brief-miniatura",
            badge: "Plan de Miniatura",
            text: `Crea una habilidad llamada «brief-miniatura». Descripción: Úsala cuando te dé el título de un vídeo. Instrucciones: propón el plan de la miniatura: un texto de máximo 3 palabras que complemente al título (no que lo repita), un color de fondo, la expresión de cara y un icono. Explica en una línea por qué.`
          }
        ]
      },
      {
        title: "⚡ Productividad y apps conectadas",
        items: [
          {
            title: "13. /bandeja-a-cero",
            badge: "Gmail Conectado",
            text: `Crea una habilidad llamada «bandeja-a-cero». Descripción: Úsala cuando te pida revisar mi correo. Instrucciones: usando mi Gmail conectado, resume los correos sin leer, márcame los urgentes primero y prepárame un borrador de respuesta para los que lo necesiten. No envíes nada; déjalo en borrador para que yo lo revise.`
          },
          {
            title: "14. /prepara-mi-reunion",
            badge: "Calendario Conectado",
            text: `Crea una habilidad llamada «prepara-mi-reunion». Descripción: Úsala cuando te diga que tengo una reunión. Instrucciones: con la info que te dé (y mi calendario conectado si aplica), prepárame un brief con contexto, objetivo de la reunión, puntos a tratar y temas delicados a cuidar. Media página como mucho. Si falta algún dato, pídemelo.`
          },
          {
            title: "15. /acta-automatica",
            badge: "Google Tasks Conectado",
            text: `Crea una habilidad llamada «acta-automatica». Descripción: Úsala cuando te pegue las notas de una reunión. Instrucciones: hazme un acta con las decisiones tomadas, el responsable de cada cosa y la fecha límite. Luego crea esas tareas en mi Google Tasks. No inventes responsables; si no está claro, pregúntame.`
          },
          {
            title: "16. /planifica-por-energia",
            badge: "Calendario y Tareas",
            text: `Crea una habilidad llamada «planifica-por-energia». Descripción: Úsala cuando te pida organizar mi semana. Instrucciones: mira mi calendario y mi lista de tareas y ordénalas según mi energía: lo más difícil en mis horas de más foco (dímelas si no las sabes) y lo fácil o repetitivo en las horas flojas. Dámelo como un plan por días.`
          },
          {
            title: "17. /viaje-listo",
            badge: "Itinerario y Maleta",
            text: `Crea una habilidad llamada «viaje-listo». Descripción: Úsala cuando te diga destino y fechas de un viaje. Instrucciones: prepárame un itinerario día a día, una lista de qué meter en la maleta según el clima y propón recordatorios para mi calendario. Pregúntame si viajo por trabajo o por placer antes de empezar.`
          },
          {
            title: "18. /pdf-honesto",
            badge: "Análisis de Documentos",
            text: `Crea una habilidad llamada «pdf-honesto». Descripción: Úsala cuando te suba un PDF y te pregunte por su contenido. Instrucciones: responde SOLO con lo que aparece en el documento. Si algo no está, dilo claramente («no aparece en el documento»); nunca lo inventes ni lo supongas. Cita la página cuando puedas.`
          },
          {
            title: "19. /hoja-limpia",
            badge: "Limpieza de Hojas de Cálculo",
            text: `Crea una habilidad llamada «hoja-limpia». Descripción: Úsala cuando te suba una hoja de cálculo desordenada. Instrucciones: límpiala (quita filas vacías, unifica formatos), organiza los datos en una tabla clara, añade las fórmulas o totales que falten y señálame los números raros o que no cuadran. No borres datos sin avisarme.`
          }
        ]
      },
      {
        title: "🧩 Avanzadas (rompecabezas)",
        items: [
          {
            title: "20. /segundo-cerebro",
            badge: "Google Drive Conectado",
            text: `Crea una habilidad llamada «segundo-cerebro». Descripción: Úsala cuando te haga preguntas sobre mis propios documentos. Instrucciones: busca la respuesta en mis archivos de Google Drive conectados y respóndeme citando de qué documento sale. Si no lo encuentras en mis archivos, dímelo en vez de inventar.`
          },
          {
            title: "21. /traductor-con-alma",
            badge: "Traducción Adaptada",
            text: `Crea una habilidad llamada «traductor-con-alma». Descripción: Úsala cuando te pida traducir un texto mío. Instrucciones: traduce manteniendo mi tono (no literal) y adáptalo al país que te indique, con sus expresiones naturales. Pregúntame el país de destino si no te lo he dicho.`
          },
          {
            title: "22. /abogado-del-diablo",
            badge: "Crítica y Objeciones",
            text: `Crea una habilidad llamada «abogado-del-diablo». Descripción: Úsala cuando te dé una idea o un texto y te pida que lo critiques. Instrucciones: ponte en la piel de un cliente escéptico y dame las 5 pegas u objeciones más fuertes, y para cada una, cómo la rebatiría yo. No me des la razón por quedar bien; sé honesto.`
          },
          {
            title: "23. /de-foto-a-texto",
            badge: "OCR y Digitalización",
            text: `Crea una habilidad llamada «de-foto-a-texto». Descripción: Úsala cuando te suba la foto de una pizarra, un ticket, una tarjeta o notas a mano. Instrucciones: pásalo a texto ordenado. Si son datos (gastos, contactos), organízalo en una tabla. Si algo no se lee bien, márcalo como [ilegible] en vez de adivinar.`
          },
          {
            title: "24. /explica-como-a-un-nino",
            badge: "Explicación Sencilla",
            text: `Crea una habilidad llamada «explica-como-a-un-nino». Descripción: Úsala cuando te pida entender un tema difícil. Instrucciones: explícamelo con una comparación sencilla de la vida diaria, en frases cortas, como si se lo contaras a un niño o a un abuelo. Sin tecnicismos. Termina con un resumen de una frase.`
          },
          {
            title: "25. /profe-particular",
            badge: "Test y Corrección",
            text: `Crea una habilidad llamada «profe-particular». Descripción: Úsala cuando te dé un temario, apuntes o un PDF para estudiar. Instrucciones: hazme un test de 10 preguntas tipo test sobre ese material. Espera a que responda y luego corrígeme, explicando por qué cada respuesta es correcta o no.`
          },
          {
            title: "26. /maquina-de-propuestas (antes crea 1, 7 y 12)",
            badge: "⭐ Habilidad Combinada",
            text: `Crea una habilidad llamada «maquina-de-propuestas». Descripción: Úsala cuando te describa un cliente y quiera una propuesta completa de una sola vez. Instrucciones: combina mis habilidades imita-mi-voz, propuesta-cliente y brief-miniatura. Con los datos del cliente, entrégame 1) la propuesta escrita con mi voz, 2) el precio con mi formato y 3) una idea de imagen para presentarla. Si falta un dato del cliente, pídemelo.`
          },
          {
            title: "27. /manual-en-un-clic",
            badge: "Manual y Procedimientos",
            text: `Crea una habilidad llamada «manual-en-un-clic». Descripción: Úsala cuando te explique cómo hago una tarea y quiera convertirla en un manual. Instrucciones: conviértelo en un procedimiento paso a paso que pueda seguir otra persona: objetivo, materiales o accesos necesarios, pasos numerados y errores a evitar. Lenguaje claro para alguien que lo hace por primera vez.`
          }
        ]
      },
      {
        title: "🌱 Vida diaria",
        items: [
          {
            title: "28. /chef-de-lo-que-tengo",
            badge: "Cocina y Recetas",
            text: `Crea una habilidad llamada «chef-de-lo-que-tengo». Descripción: Úsala cuando te diga qué ingredientes tengo. Instrucciones: dame 3 recetas sencillas que pueda hacer con eso, con los pasos, y al final una lista de la compra solo con lo poco que falte. Pregúntame cuántas personas somos si no te lo digo.`
          },
          {
            title: "29. /entrenador-realista",
            badge: "Entrenamiento Personal",
            text: `Crea una habilidad llamada «entrenador-realista». Descripción: Úsala cuando te pida organizar mi rutina de ejercicio. Instrucciones: con el tiempo real que tengo (dímelo), arma un plan de actividad semanal realista y fácil de mantener. Si un día me salto algo, reajústalo sin regañarme. No des consejos médicos ni de dieta; para eso, recomiéndame consultar a un profesional.`
          },
          {
            title: "30. /abogado-del-correo-dificil",
            badge: "Comunicación Difícil",
            text: `Crea una habilidad llamada «abogado-del-correo-dificil». Descripción: Úsala cuando tenga que escribir un mensaje incómodo (decir que no, reclamar, pedir un aumento). Instrucciones: con la situación que te cuente, dame 2 versiones del mensaje, una suave y diplomática y otra firme y directa, ambas educadas y cortas. Dime en una línea cuándo usar cada una.`
          }
        ]
      }
    ]
  },
  {
    id: "preparate-para-gemini-4",
    title: "Prepárate para Gemini 4",
    thumbnail: "thumbnails/gemini 4.png",
    category: "Modelos y Aplicaciones",
    tags: ["Gemini 4", "Google Gemini", "Mandar no Preguntar", "Herramientas", "Automatización", "Productividad", "Prompts"],
    description: "Este vídeo enseña las dos formas nuevas de usar la IA: darle tareas enteras (mandar, no preguntar) y pedirle que te construya una herramienta. Funcionan hoy con el Gemini gratis. Los huecos van entre [CORCHETES] para cambiarlos por lo tuyo.",
    rulesTitle: "⚡ Reglas de oro y consejos para este vídeo:",
    rules: [
      "1. Para qué son — Este vídeo enseña las dos formas nuevas de usar la IA: darle tareas enteras (mandar, no preguntar) y pedirle que te construya una herramienta. Funcionan HOY con el Gemini gratis.",
      "2. Los huecos van entre [CORCHETES] — Cámbialos por tus propios datos o situación antes de enviar el prompt.",
      "3. Dile quién eres y para quién es — El contexto lo cambia todo para que el resultado encaje exactamente con lo que necesitas.",
      "4. Pídele el plan ANTES de que lo haga — Así no se desvía y ves su planteamiento paso a paso antes de ejecutarlo.",
      "5. Añade 'si te falta algún dato, pregúntame antes de empezar' — Evita que se invente cosas o asuma detalles críticos.",
      "6. Pídeselo 'fácil, sin palabras técnicas' — Sobre todo si lo vas a enseñar a gente mayor, clientes o usuarios sin conocimientos técnicos.",
      "7. Encárgale la tarea entera, no le hagas preguntas sueltas — De currante, a jefe.",
      "8. Para la descripción del vídeo — El Prompt 1 de 'Encargo entero' (las 10 ideas de vídeo para vender) es el que mencionas en el guion. Los demás puedes enseñarlos en pantalla o dejarlos también en la descripción como regalo."
    ],
    sections: [
      {
        title: "📐 La plantilla base (El esqueleto de 'mandar, no preguntar')",
        items: [
          {
            title: "Plantilla base: El esqueleto universal (Mandar, no preguntar)",
            badge: "⭐ Plantilla Base",
            text: `Actúa como mi ayudante. Yo soy: [QUIÉN ERES / A QUÉ TE DEDICAS].
Quiero que hagas esta tarea entera por mí, no solo responder una pregunta:
[DESCRIBE LA TAREA].

Hazlo así:
1) Primero dime tu plan en pasos.
2) Luego ejecútalo paso a paso.
3) Al final, dame el resultado listo para usar.

Si te falta algún dato para hacerlo bien, pregúntamelo antes de empezar.
Explícamelo fácil, en español sencillo, sin palabras técnicas.`
          }
        ]
      },
      {
        title: "💼 Prompts de 'encargo entero' (Darle la tarea completa)",
        items: [
          {
            title: "Prompt 1. Ideas de vídeo para vender (El del guion)",
            badge: "⭐ El del guion / Oro",
            text: `Actúa como mi ayudante de marketing. Yo me dedico a esto: [A QUÉ TE DEDICAS].
Quiero vender: [TU PRODUCTO O SERVICIO].
Dame 10 ideas de vídeo corto para venderlo, y para cada idea escríbeme el gancho,
la primera frase que se dice a cámara. Explícamelo fácil, sin palabras técnicas.`
          },
          {
            title: "Prompt 2. Organiza tu semana (Asistente personal)",
            badge: "Asistente Personal",
            text: `Actúa como mi asistente personal. Estas son mis tareas y compromisos de esta semana,
sin ningún orden: [PEGA AQUÍ TU LISTA TAL CUAL].
Organízamelo entero: ordénalo por días y por prioridad, dime qué hago primero cada día,
avísame de lo que choca o de lo que no me va a dar tiempo, y déjame un plan claro
de lunes a domingo. Si te falta algún dato, pregúntame antes. Hazlo fácil de leer.`
          },
          {
            title: "Prompt 3. Deja listos los correos de la semana (Secretario)",
            badge: "Secretario",
            text: `Actúa como mi secretario. Esta semana tengo que escribir estos correos:
[LISTA CADA CORREO: A QUIÉN ES Y PARA QUÉ].
Escríbemelos todos, uno por uno, listos para enviar, cada uno con su asunto.
Tono: [CERCANO / FORMAL]. Que sean cortos y claros.
Si te falta algún dato, pregúntame antes de empezar.`
          },
          {
            title: "Prompt 4. Un tema, una semana de contenido (Creador de contenido)",
            badge: "Creador Contenido",
            text: `Actúa como mi creador de contenido. Mi tema es: [TU TEMA].
Mi público es: [A QUIÉN TE DIRIGES].
Prepárame un plan de contenido para una semana entera: 7 publicaciones, una por día.
De cada una dame la idea, el gancho de la primera frase y un pie de foto corto.
Explícamelo fácil, sin palabras técnicas.`
          },
          {
            title: "Prompt 5. Descripción de producto que vende (Redactor de ventas)",
            badge: "Copy de Ventas",
            text: `Actúa como redactor de ventas. Mi producto es: [PRODUCTO].
Lo que tiene de bueno es: [3 COSAS BUENAS].
Escríbeme la descripción para venderlo por internet: un titular que enganche,
un párrafo que despierte las ganas de comprarlo y una lista de beneficios
(beneficios, no características). Termina con una frase que invite a comprar.
Que suene humano y cercano, nada robótico.`
          },
          {
            title: "Prompt 6. Un plan paso a paso para tu objetivo (Entrenador personal)",
            badge: "Plan Paso a Paso",
            text: `Actúa como mi entrenador. Mi objetivo es: [OBJETIVO].
Quiero conseguirlo en: [CUÁNTO TIEMPO]. Hoy estoy en: [DÓNDE ESTÁS AHORA].
Hazme un plan paso a paso, semana a semana, con qué hacer cada semana
y cómo saber si voy bien. Si te falta algún dato, pregúntame antes.
Explícamelo fácil.`
          }
        ]
      },
      {
        title: "🛠️ Prompts de 'construir una herramienta' (Que te lo monte él)",
        items: [
          {
            title: "Prompt 7. Calculadora para tu negocio (Web interactiva)",
            badge: "🛠️ Calculadora",
            text: `Hazme una pequeña herramienta que sea una calculadora para mi negocio.
Tiene que: [QUÉ QUIERES QUE CALCULE, EJ: "a partir del coste y el margen que yo ponga,
decirme el precio de venta"].
Dámela como una página web sencilla que pueda abrir en el móvil, con casillas para
escribir y el resultado bien grande. Fácil de usar para alguien que no sabe de tecnología.`
          },
          {
            title: "Prompt 8. Lista u organizador (Inventario o tareas)",
            badge: "🛠️ Organizador",
            text: `Hazme una pequeña herramienta para llevar el control de [QUÉ, EJ: "mi inventario" /
"mis tareas del día"]. Que pueda añadir cosas, marcarlas como hechas y borrarlas.
Dámela como una página web sencilla, con botones grandes y clara.
Pensada para alguien que no sabe de tecnología.`
          },
          {
            title: "Prompt 9. App para ponerle un efecto a tus fotos (Filtro y descarga)",
            badge: "🛠️ App Fotos",
            text: `Hazme una pequeña aplicación web donde yo pueda subir una foto y ponerle un efecto
[EJ: "retro", "blanco y negro", "viejo"]. Con una zona grande para arrastrar la foto
y un botón para descargar el resultado. Sencilla y que funcione en el móvil.`
          }
        ]
      }
    ]
  },
  {
    id: "video-producto-ia",
    title: "Cómo hacer el VÍDEO de tu producto con IA (ChatGPT · Higgsfield / Astra)",
    thumbnail: "thumbnails/video producto ia.png",
    category: "Vídeo con IA",
    tags: ["Vídeo con IA", "Vídeo de Producto", "Higgsfield", "Astra", "ChatGPT", "Pauwer Bank", "Publicidad", "Anuncios", "Ecommerce", "Spots"],
    description: "Prompts listos para pegar en ChatGPT (con el plugin de Higgsfield y Astra), usando una sola imagen de tu producto como referencia. Incluye la estructura de anuncio de TV de oro, variaciones de estilo y plantillas universales de alta conversión para cualquier producto.",
    rulesTitle: "⚡ Cómo usar esto y las reglas de oro para un anuncio impecable:",
    rules: [
      "1. Cómo usar esto — 1) Adjunta tu imagen de la Pauwer Bank (o tu producto) en ChatGPT. 2) Pega un prompt de abajo. 3) Deja que Astra te enseñe su plan en 3 líneas y genere el vídeo con Higgsfield. 4) Descarga tu vídeo. Para el siguiente anuncio, nuevo chat o 'ahora hazme este otro' y pegas el siguiente.",
      "2. Nombre legible siempre — Mantén el nombre de tu marca o producto ('PAUWER BANK' o el tuyo) nítido y sin letras deformadas. Es el error más común de la IA con texto.",
      "3. Sin logos ni marcas inventadas — No inventes otros logos ni texto aparte del tuyo, y nada de marcas reales de terceros.",
      "4. Producto centrado y sin obstruir — Mantén el producto protagonista, centrado y con aspecto premium en todo momento.",
      "5. Solo manos, nunca caras reconocibles — Si aparece una persona, solo planos de manos cuidadas (queda más limpio, profesional y evita deformaciones faciales de la IA).",
      "6. Fondos simples y sobrios — Coherentes con una estética premium (negro, mármol, madera natural, estudio minimalista).",
      "7. Menos VFX = Más caro — El producto vendiendo por sí mismo, no fuegos artificiales ni exceso de efectos baratos. Un movimiento de cámara elegante y luz de estudio venden mucho más.",
      "8. Consejo para el vídeo de YouTube — Para grabar: enseña el prompt 1 de principio a fin (es el que tiene estructura y luce como un anuncio de verdad), y usa el prompt 6 (las tres versiones) para el momento 'y además, con una instrucción, tres anuncios'. Los demás enséñalos por encima como 'y también puedes hacer este estilo, y este otro'."
    ],
    sections: [
      {
        title: "🎬 Los 6 prompts del vídeo (Caso Pauwer Bank)",
        items: [
          {
            title: "Prompt 1. El Anuncio de Oro (Estructura de anuncio de TV — Empieza por este)",
            badge: "⭐ El del vídeo / Oro",
            text: `Eres mi director creativo de publicidad. Con esta imagen de mi producto —una power bank premium con forma de concha de nautilus dorada llamada PAUWER BANK, 20000mAh, eslogan "POWER LIVES FURTHER"— quiero un anuncio cinematográfico de 15 segundos, formato horizontal 16:9, con la calidad de un spot de televisión de una marca tecnológica top.

Constrúyelo en tres actos, por beats de 2-3 segundos:

Acto 1 (0-4s) — Gancho premium. Plano de apertura impactante del producto sobre el pedestal de mármol negro, en penumbra, con un haz de luz cálida que entra y recorre la concha revelando su espiral y el brillo dorado. Movimiento de cámara lento y seguro. Que se sienta caro antes de entender qué es.
Acto 2 (4-10s) — El producto como héroe. Dos o tres planos de detalle que vendan la calidad: macro de la espiral de la concha, primer plano del nombre PAUWER BANK, la luz recorriendo el acabado dorado, el puerto y los LED de carga encendiéndose uno a uno. Cada plano un movimiento distinto.
Acto 3 (10-15s) — Resolución y marca. El producto vuelve a un plano heroico completo, aparece el eslogan "POWER LIVES FURTHER" de forma elegante, y cierre limpio sobre el nombre PAUWER BANK.

Estética: oscura, premium, lujosa, tipo Apple/tecnología de gama alta. Luz dramática, dorados cálidos sobre negro. Sin música cursi, sin efectos baratos, sin exceso de VFX.

Mantén PAUWER BANK legible y sin deformar en todo momento, no inventes otros logos ni texto. Enséñame primero tu plan en 3 líneas (los tres actos) y luego genera.`
          },
          {
            title: "Prompt 2. Producto como Héroe (Estilo Apple / Dyson — Puro lujo)",
            badge: "⭐ Estilo Apple",
            text: `Eres mi director creativo. Con esta imagen de la PAUWER BANK, quiero un anuncio de 12 segundos, 16:9, al estilo de los vídeos de producto de Apple o Dyson: sin personas, solo el producto, protagonista absoluto.

Un único movimiento continuo y elegante alrededor de la concha: revelación lenta de la espiral, macro del acabado dorado y del texto PAUWER BANK, los LED encendiéndose. Fondo negro absoluto, una sola fuente de luz cálida y controlada. Silencio y elegancia, ritmo pausado. Que cada plano parezca fotografía de producto en movimiento.

Cierre sobre el eslogan "POWER LIVES FURTHER". Mantén el nombre legible y sin deformar, sin logos ni texto inventados. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 3. Problema–Solución (El formato que más vende)",
            badge: "⭐ Problema–Solución",
            text: `Eres mi director creativo. Con esta imagen de la PAUWER BANK, quiero un anuncio de 15 segundos, formato vertical 9:16 para redes, con estructura problema-solución:

Problema (0-4s): un móvil con la batería al 1%, la pantalla parpadeando, en un momento de tensión (alguien a punto de perder una foto, un mensaje importante). Solo manos, nada de caras. Ambiente agobiante.
Solución (4-11s): entra la PAUWER BANK. Se conecta el cable, el móvil empieza a cargar rápido, los LED de la power bank se encienden. La tensión se disuelve, la luz se vuelve cálida.
Cierre (11-15s): plano heroico del producto + eslogan "POWER LIVES FURTHER".

Mantén PAUWER BANK legible y sin deformar, sin marcas de móvil reconocibles ni logos inventados. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 4. Estilo de Vida / Viaje (Encaja con marca nómada y libertad)",
            badge: "Estilo de Vida",
            text: `Eres mi director creativo. Con esta imagen de la PAUWER BANK, quiero un anuncio de 15 segundos, 9:16, de estilo de vida: la power bank acompañando a alguien que trabaja y viaja. Manos usándola en una mochila, en una cafetería, en un tren, junto a un portátil, con luz natural y cálida. Sin caras, solo manos y ambiente. Sensación de libertad, movimiento, vida en marcha.

El producto siempre bien visible y protagonista en cada escena. Cierre sobre el producto y el eslogan "POWER LIVES FURTHER". Mantén el nombre legible y sin deformar, sin logos de terceros. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 5. Corte Dinámico para Redes (Rápido y punchy para TikTok/Reels)",
            badge: "TikTok / Reels",
            text: `Eres mi director creativo. Con esta imagen de la PAUWER BANK, quiero un anuncio corto y enérgico de 10 segundos, 9:16, para TikTok e Instagram: cortes rápidos, ritmo alto, mucha energía. Planos veloces de la concha girando, el dorado brillando, los LED, el nombre PAUWER BANK, todo al ritmo. Colores saturados, negro y amarillo dorado, sensación viral.

Cierre rápido y contundente sobre el producto. Mantén el nombre legible y sin deformar, sin logos inventados. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 6. Las Tres Versiones (Test A/B: Emocional, Directa y Divertida)",
            badge: "⭐ Test A/B (3 en 1)",
            text: `Eres mi director creativo. Con esta imagen de la PAUWER BANK, dame 3 versiones distintas del anuncio de 15 segundos para probar cuál funciona mejor: una emocional (cálida, aspiracional), una directa (producto y beneficio al grano) y una divertida (con un toque de humor). Tú decides el enfoque de cada una. Todas en 9:16, con el producto protagonista y PAUWER BANK legible. Enséñame el plan de las tres y genera.`
          }
        ]
      },
      {
        title: "📐 Plantillas maestras universales (Para CUALQUIER producto)",
        items: [
          {
            title: "Prompt 7. Plantilla Maestra Universal (Estructura de 3 Actos para tu producto)",
            badge: "📐 Plantilla Maestra",
            text: `Eres mi director creativo de publicidad. Con esta imagen de mi producto —[NOMBRE DE TU PRODUCTO / QUÉ ES: ej. una botella térmica de acero inoxidable, unas zapatillas urbanas, una vela aromática de soja, un sérum facial] de la marca [TU MARCA], con el eslogan "[TU ESLOGAN: ej. Pureza en cada gota / Camina a tu ritmo]"— quiero un anuncio cinematográfico de 15 segundos, formato [horizontal 16:9 / vertical 9:16], con la calidad de un spot publicitario de una marca de primer nivel.

Constrúyelo en tres actos, por beats de 2-3 segundos:

Acto 1 (0-4s) — Gancho visual. Plano de apertura intrigante e impactante del producto en un entorno limpio y premium [ej. sobre una superficie de piedra natural / flotando con luz tenue]. Entrada de luz direccional que recorre las texturas y silueta del producto. Movimiento de cámara suave y cinematográfico.
Acto 2 (4-10s) — Planos de detalle y calidad. 2 o 3 planos macro que vendan el material y el diseño: primer plano de los acabados, plano detalle del logo o nombre [TU MARCA], y una interacción sutil que demuestre su funcionalidad o beneficio [ej. gotas deslizándose / cierre magnético / manos elegantes interactuando].
Acto 3 (10-15s) — Cierre heroico y marca. Plano general heroico del producto perfectamente iluminado, aparición sutil del eslogan "[TU ESLOGAN]" y cierre limpio y memorable con el nombre [TU MARCA].

Estética: iluminación de estudio profesional, texturas reales, paleta de colores coherente con la marca, sin efectos baratos ni sobrecarga de VFX.
Reglas: mantén [TU MARCA] legible y sin deformar, sin marcas de terceros ni logos inventados. Si aparece una persona, solo manos cuidadas. Enséñame primero tu plan en 3 líneas y luego genera.`
          },
          {
            title: "Prompt 8. Plantilla Universal Problema – Solución (Transformación y Alivio)",
            badge: "📐 Problema–Solución",
            text: `Eres mi director creativo. Con esta imagen de [NOMBRE DE TU PRODUCTO] de la marca [TU MARCA], quiero un anuncio de 15 segundos en formato vertical 9:16 optimizado para Reels y TikTok, enfocado en el dolor del cliente y su solución inmediata:

Problema (0-4s): Muestra la frustración o problema cotidiano que resuelve el producto [ej. café frío en un termo ordinario / cables enredados / piel reseca / calzado incómodo al caminar]. Ambiente tenso, ritmo visual ágil, solo planos de manos o situaciones cotidianas sin caras reconocibles.
Solución (4-10s): Transición fluida donde entra en plano [NOMBRE DE TU PRODUCTO]. Demostración clara y visual de cómo soluciona el problema de inmediato [ej. apertura perfecta / aplicación suave / funcionamiento impecable]. La iluminación cambia a un tono cálido, satisfactorio y relajado.
Cierre (10-15s): Plano heroico de [NOMBRE DE TU PRODUCTO], texto en pantalla "[BENEFICIO CLAVE: ej. 24h Frío Garantizado / Tu piel hidratada todo el día]" y cierre con el logo [TU MARCA].

Mantén el producto centrado, nombre de marca nítido y legible en todo momento, sin logos inventados. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 9. Plantilla Universal Unboxing Cinematográfico (E-Commerce y Packaging)",
            badge: "📦 Unboxing Lujo",
            text: `Eres mi director creativo. Con esta imagen de [NOMBRE DE TU PRODUCTO] de [TU MARCA], quiero un anuncio de 15 segundos en formato vertical 9:16 con estética de unboxing de lujo y experiencia de apertura de producto:

Acto 1 (0-4s): Primer plano cenital y cinematográfico de una caja de empaque minimalista sobre una mesa de diseño. Unas manos cuidadas retiran la faja protectora o abren la tapa con lentitud y precisión.
Acto 2 (4-10s): La cámara desciende a nivel del producto mientras es revelado sobre su lecho protector. Manos que lo levantan delicadamente; plano macro del material, acabados prémium y el nombre [TU MARCA] grabado en relieve con reflejos limpios.
Acto 3 (10-15s): El producto reposa en un plano estético final junto a su packaging, con iluminación de catálogo de lujo. Cierre limpio con el nombre [TU MARCA] y eslogan "[TU ESLOGAN]".

Estética pulcra, colores neutros, sensación táctil muy satisfactoria (ASMR visual). Solo manos, sin caras reconocibles. Plan en 3 líneas y genera.`
          }
        ]
      },
      {
        title: "🛍️ Prompts universales por categoría y nicho de producto",
        items: [
          {
            title: "Prompt 10. Botellas, Termos y Bebidas (El ejemplo de la miniatura)",
            badge: "🥤 Bebidas / Botellas",
            text: `Eres mi director creativo. Con esta foto de mi botella térmica [o bebida], quiero un spot publicitario cinematográfico de 15 segundos, formato 16:9, al estilo de las grandes campañas de Red Bull, Stanley o Evian:

Gancho (0-4s): Primer plano en cámara lenta de la botella en un ambiente exterior fresco o estudio moderno con luz lateral intensa. Gotas de agua y condensación resbalando por la superficie metálica mate. Se siente la frescura antes de ver el producto entero.
Desarrollo (4-10s): Travelling circular suave. Manos atléticas que toman la botella, desenroscan la tapa con un sonido satisfactorio de vacío hermético. Salpicadura sutil de agua cristalina iluminada a contraluz que envuelve la botella sin tapar la marca.
Cierre (10-15s): La botella vuelve al centro en un plano heroico con fondo de naturaleza o ciclorama minimalista, gotas resplandecientes y cierre nítido con el logo y el texto "MÁXIMA FRESCURA. EN CUALQUIER LUGAR".

Luz natural brillante, alto contraste, sensación refrescante y prémium. Mantén el producto centrado y la marca intacta. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 11. Cosmética, Skincare y Belleza (Gotas, Textura y Pureza)",
            badge: "✨ Cosmética / Skincare",
            text: `Eres mi director creativo. Con esta imagen de mi producto de cosmética [sérum, crema facial o perfume], quiero un anuncio publicitario de 15 segundos en formato 9:16 con la delicadeza y elegancia de marcas como Dior, Glossier o The Ordinary:

Acto 1 (0-4s): Macro cinematográfico a cámara superlenta: una gota traslúcida y densa cae desde el gotero o dosificador hacia una superficie de cristal sobre agua tranquila, generando ondas suaves y perfectas. Iluminación etérea, tonos pastel y blancos luminosos.
Acto 2 (4-10s): Plano detalle del frasco girando lentamente. La luz incide en el cristal transparente revelando la textura del contenido. Unas manos suaves aplican una pequeña muestra sobre el dorso de la piel, mostrando una absorción sedosa y brillo natural e hidratado.
Acto 3 (10-15s): Plano de conjunto del envase rodeado de elementos botánicos mínimos (hojas húmedas o piedra de cuarzo blanco). Cierre elegante con el nombre de la marca y el eslogan "PUREZA PARA TU PIEL".

Estética limpia, nórdica, sensación de hidratación y bienestar. Sin caras, solo manos impecables. Nombre de marca 100% legible. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 12. Moda, Zapatillas y Sneakers (Cultura Urbana y Dinamismo)",
            badge: "👟 Sneakers / Moda",
            text: `Eres mi director creativo. Con esta foto de mis zapatillas [o prenda de moda], quiero un anuncio publicitario de 15 segundos en formato 9:16 con la energía visual de Nike o Salomon:

Acto 1 (0-4s): Primer plano rasante del suelo. La zapatilla impacta el asfalto mojado en slow motion, levantando una cortina sutil de microgotas iluminadas por luces de atardecer urbano.
Acto 2 (4-10s): Sucesión de planos detalle rítmicos: macro de la textura del tejido transpirable, detalle de las costuras de alta precisión, la flexibilidad de la suela en movimiento y el relieve del logotipo de la marca.
Acto 3 (10-15s): La zapatilla levita y gira 360 grados en un espacio de estudio oscuro con reflectores direccionales que resaltan su silueta aerodinámica. Cierre contundente con el nombre del modelo y el logotipo nítido.

Ritmo dinámico, iluminación editorial urbana, colores intensos. Sin deformar el calzado ni inventar detalles. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 13. Café de Especialidad y Gastronomía Gourmet (Sensorial)",
            badge: "☕ Gourmet / Café",
            text: `Eres mi director creativo. Con esta imagen de mi producto gastronómico [paquete de café de especialidad, botella de aceite de oliva, chocolate artesanal], quiero un spot de 15 segundos en formato 9:16 que despierte el apetito y transmita origen artesanal:

Acto 1 (0-4s): Plano detalle de vapor cálido saliendo suavemente con fondo desenfocado. Luz de mañana entrando oblicua por un ventanal de madera rústica, iluminando granos de café [o ingredientes frescos] esparcidos sobre una tabla natural.
Acto 2 (4-10s): Manos vertiendo el producto con mimo y precisión; caída lenta de líquido dorado o molienda cayendo en cámara lenta. Plano macro del empaque mostrando la textura del papel kraft o cristal y la tipografía de la marca perfectamente nítida.
Acto 3 (10-15s): El producto protagonista reposa listo para degustar junto al empaque original. Cierre con el mensaje "EL SABOR DE LO AUTÉNTICO" y el nombre de la marca.

Colores cálidos, orgánicos, sensación acogedora y de máxima calidad gastronómica. Sin caras, solo manos. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 14. Relojes, Joyería y Accesorios de Lujo (Macro y Reflejos)",
            badge: "💎 Joyas / Relojes",
            text: `Eres mi director creativo. Con esta imagen de mi reloj [o pieza de joyería], quiero un anuncio cinematográfico de 12 segundos, formato 16:9, con la sofisticación de Rolex o Cartier:

Inicio (0-4s): Fondo en penumbra sobre piedra pizarra negra. Un único haz de luz fría de precisión barre la pieza, arrancando destellos limpios en el bisel metálico, el cristal de zafiro y los eslabones pulidos.
Desarrollo (4-8s): Macro extremo del movimiento o de los grabados artesanales. La cámara recorre la corona y el cierre con un travelling milimétrico mientras la luz va descubriendo la textura del material.
Cierre (8-12s): Plano heroico completo en ángulo de tres cuartos, perfectamente equilibrado. Cierre con el nombre de la marca grabado en tipografía noble y limpia.

Silencio visual, máxima precisión técnica, sensación de lujo atemporal. Sin efectos artificiales. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 15. Hogar, Decoración y Mobiliario (Ambiente Cálido)",
            badge: "🛋️ Hogar / Decoración",
            text: `Eres mi director creativo. Con esta imagen de mi producto de hogar [lámpara de diseño, sillón, difusor o accesorio decorativo], quiero un spot publicitario de 15 segundos en 9:16 con el estilo visual de Zara Home o Kave Home:

Acto 1 (0-4s): Gran plano general de un salón moderno, luminoso y sereno. La luz de media tarde proyecta sombras geométricas suaves a través de cortinas de lino blanco.
Acto 2 (4-10s): La cámara se desliza con suavidad hacia el producto, que armoniza el espacio. Planos de detalle que muestran las vetas de la madera, la textura del tejido o el brillo cerámico. Unas manos colocan un detalle al lado o interactúan con su encendido/uso.
Acto 3 (10-15s): Plano medio que resume el confort del espacio con el producto como protagonista indiscutible. Cierre con el nombre de la marca y la frase "DISEÑADO PARA TU HOGAR".

Tonos tierra, neutros y cálidos, atmósfera relajante y elegante. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 16. Tecnología, Auriculares y Gadgets de Precisión",
            badge: "🎧 Gadgets Tech",
            text: `Eres mi director creativo. Con esta imagen de mi producto tecnológico [auriculares inalámbricos, altavoz portátil, ratón ergonómico], quiero un spot publicitario de 15 segundos en 16:9 con la estética de Teenage Engineering o Sony:

Acto 1 (0-4s): Plano cenital sobre mesa de trabajo minimalista con superficie mate. El gadget reposa en el centro mientras se activa un sutil indicador luminoso o LED de estado con un sonido nítido.
Acto 2 (4-10s): Planos de detalle rotatorios a cámara lenta: textura del aluminio pulido, rejilla acústica metálica, bisagras de precisión y logotipo grabado a láser. Unas manos interactúan con un botón háptico o dial giratorio.
Acto 3 (10-15s): Plano heroico flotante con iluminación cenital suave y sombras limpias. Cierre con el nombre de la marca y el eslogan "INGENIERÍA PARA TUS SENTIDOS".

Minimalismo nórdico-tecnológico, alta precisión industrial, elegancia funcional. Plan en 3 líneas y genera.`
          }
        ]
      },
      {
        title: "🚀 Formatos publicitarios de alta conversión (E-Commerce y Redes)",
        items: [
          {
            title: "Prompt 17. Comparativa Visual (Tu Producto vs. Lo Ordinario)",
            badge: "⚡ Comparativa",
            text: `Eres mi director creativo. Con esta imagen de mi producto [NOMBRE DEL PRODUCTO], quiero un anuncio de 15 segundos en formato vertical 9:16 con formato de pantalla dividida o transición antes/después:

Acto 1 (0-5s): A la izquierda [o en los primeros segundos], un producto genérico y corriente fallando o viéndose desgastado y de mala calidad (colores apagados, material endeble).
Acto 2 (5-11s): Transición enérgica con barrido limpio hacia mi producto. Colores vivos, acabados robustos y prémium, demostrando al instante su superioridad en resistencia, velocidad o estética.
Acto 3 (11-15s): El producto protagonista al frente ocupando el centro de la pantalla con el texto "LA DIFERENCIA ESTÁ EN LOS DETALLES" y el nombre de la marca.

Enfoque comercial directo, contrastante y persuasivo. Mantén la marca totalmente legible y sin deformaciones. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 18. Formato UGC Orgánico (Grabación Realista con Móvil)",
            badge: "📱 Estilo UGC Real",
            text: `Eres mi director creativo. Con esta imagen de [NOMBRE DEL PRODUCTO], quiero un vídeo publicitario de 15 segundos en formato 9:16 que parezca un contenido orgánico grabado por un cliente real (formato UGC / User Generated Content) para TikTok y Reels:

Acto 1 (0-4s): Gancho casual. La cámara en primera persona (POV) sostiene o apunta al producto recién sacado de su caja en un escritorio o encimera bien iluminada. Movimiento de cámara natural a pulso (sin vibración exagerada, pero creíble).
Acto 2 (4-10s): Demostración en vivo y sin filtros de uso: manos que tocan el producto, prueban su función principal en tiempo real y muestran lo fácil y satisfactorio que resulta.
Acto 3 (10-15s): La persona sostiene el producto hacia la cámara en señal de recomendación satisfecha. Aparece en texto nativo tipo subtítulo: "La mejor compra del año ⭐⭐⭐⭐⭐" y la marca.

Estética fresca, hiperrealista, cero corporativa. Sin rostros visibles, solo manos naturales. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 19. Campaña Flash / Descuento / Black Friday",
            badge: "🔥 Campaña Flash",
            text: `Eres mi director creativo. Con esta imagen de [NOMBRE DE TU PRODUCTO], quiero un anuncio de impacto rápido de 10 segundos en 9:16 para campañas de venta flash, rebajas o Black Friday:

Acto 1 (0-3s): Pantalla negra que se rompe con un destello de luz sobre el producto. Tipografía limpia y grande anunciando "[OFERTA ESPECIAL / -30% HOY]". Ritmo visual muy acelerado.
Acto 2 (3-7s): Cortes dinámicos cada segundo mostrando 3 ángulos clave del producto con iluminación vibrante y reflejos potentes sobre la marca.
Acto 3 (7-10s): Plano frontal heroico con el botón simulado "COMPRAR AHORA" o "UNIDADES LIMITADAS" y el nombre de marca en grande.

Mucha energía, alta retención para Instagram Stories y TikTok Ads. El producto siempre en el centro y la marca 100% nítida. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 20. Reseña 5 Estrellas y Prueba Social",
            badge: "⭐ Reseña 5 Estrellas",
            text: `Eres mi director creativo. Con esta imagen de [NOMBRE DEL PRODUCTO], quiero un anuncio publicitario de 15 segundos en 9:16 fundamentado en prueba social y satisfacción del cliente:

Acto 1 (0-4s): Apertura con el producto en movimiento elegante mientras se superponen en pantalla 5 estrellas doradas animadas de calificación perfecta.
Acto 2 (4-10s): Se muestra una cita corta de cliente destacado: '"El mejor acabado que he visto jamás. Vale cada céntimo."' mientras la cámara hace planos macro de las partes más destacadas del producto.
Acto 3 (10-15s): La cita se desvanece dejando el producto en plano estelar con el mensaje "+10.000 CLIENTES SATISFECHOS" y el logotipo oficial de la marca.

Tono de autoridad, credibilidad y sofisticación. Marca legible y sin deformar. Plan en 3 líneas y genera.`
          },
          {
            title: "Prompt 21. Generador 3-en-1 Multiversión Universal (Test A/B para cualquier producto)",
            badge: "⭐ Test A/B Universal",
            text: `Eres mi director creativo de agencia publicitaria. Con esta imagen de mi producto [NOMBRE DEL PRODUCTO], crea simultáneamente 3 conceptos de anuncio publicitario de 15 segundos en formato [9:16 / 16:9] para hacer un test A/B en redes sociales:

Versión A — Emocional & Aspiracional: Enfocada en cómo hace sentir al usuario, estilo de vida, luz cálida y beneficio emocional.
Versión B — Directa & Demostrativa: Foco 100% en el producto, materiales, primer plano de funcionamiento y datos técnicos clave.
Versión C — Humor / Hook disruptivo: Apertura con un contraste divertido o inesperado en los primeros 2 segundos que capture de inmediato la atención del feed.

Mantén en las 3 versiones el producto como héroe absoluto, el nombre de la marca legible y sin deformar, y sin rostros reconocibles (solo manos). Presenta el desglose de los 3 planes y genera.`
          }
        ]
      }
    ]
  },
  {
    id: "google-lyria-musica-ia",
    title: "Música con IA (Gemini · Lyria 3.5)",
    thumbnail: "thumbnails/google lyria.png",
    category: "Música con IA",
    tags: ["Google Lyria", "Lyria 3.5", "Gemini", "Música con IA", "Audio", "Prompts Musicales", "Canciones"],
    description: "Para la descripción del vídeo y para probar en directo. Todos siguen la fórmula de los 5 ingredientes: género/época, ritmo/tempo, instrumentos, voz y letra.",
    rulesTitle: "🎼 La fórmula de los 5 ingredientes para crear música con IA:",
    rules: [
      "1. Género y época — Pon un estilo concreto, una mezcla o una década (ej. 'pop de los 80', 'reguetón viejo', 'bolero clásico', 'indie folk', 'lo-fi hip hop', 'salsa de los 70', 'synthwave').",
      "2. Ritmo / tempo — Marca el pulso y cómo se siente (ej. 'lento de balada', 'alegre y bailable', 'energético y rápido', 'medio tiempo relajado', '90 BPM', '120 BPM', '140 BPM con hi-hats rápidos').",
      "3. Instrumentos — Pide sonidos o solos concretos para dar textura (ej. 'guitarra española', 'piano suave', 'arpa paraguaya', 'sintetizadores brillantes', '808 potentes', 'palmas y cajón').",
      "4. Voz — Sexo + textura (timbre) + rango, y cómo canta (ej. 'voz de mujer suave y susurrante', 'barítono masculino grave', 'rockero con voz rasgada', 'rapero con flow', o 'instrumental, sin voz').",
      "5. Letra — El tema, o tu propia letra, con etiquetas de estructura ([Estrofa 1], [Estribillo], [Puente]) y una palabra que se repita como un mantra en el estribillo."
    ],
    sections: [
      {
        title: "🎬 Los prompts que salen en el vídeo",
        items: [
          {
            title: "Prompt 1. Indie folk tranquilo (el del perro)",
            badge: "⭐ El del vídeo",
            text: `Una canción de indie folk con un ritmo relajado. Guitarra acústica limpia e íntima, piano suave y percusión ligera. Voz de mujer suave y susurrante. Letra sobre pasear al perro un día nublado. [Estribillo] con una palabra que se repita como un mantra.`
          },
          {
            title: "Prompt 2. Disco pop de los 80 (fiesta)",
            badge: "⭐ Fiesta",
            text: `Una canción de disco pop de los 80, alegre y muy bailable. Bajo funky, sintetizadores brillantes y palmas. Voz de hombre enérgica. Letra sobre un fin de semana épico con amigos. [Estribillo] pegadizo y repetitivo.`
          },
          {
            title: "Prompt 3. Polca paraguaya (control total en Flow Music)",
            badge: "Flow Music",
            text: `Polca paraguaya, neo-folclore, festiva y animada. Arpa paraguaya, guitarra de nailon, bajo acústico y percusión de madera. Voz femenina de alto, orgánica y cálida. 100 BPM.`
          },
          {
            title: "Prompt 4. Versión divertida: indie folk con pingüino",
            badge: "⭐ Divertido",
            text: `Indie folk juguetón y tierno, ritmo tranquilo. Ukelele, glockenspiel y silbidos. Voz de mujer dulce y cercana. Letra sobre un pingüino que sale a pasear un día nublado y no encuentra el charco perfecto. [Estribillo] con un \"la-la-la\" que se repita.`
          }
        ]
      },
      {
        title: "🎂 Cumpleaños y dedicatorias",
        items: [
          {
            title: "Prompt 5. Cumpleaños alegre",
            badge: "Cumpleaños",
            text: `Canción de cumpleaños alegre, estilo pop festivo, tempo animado. Piano, palmas y trompetas. Coro de voces alegres. Letra que felicita a [NOMBRE] por su cumpleaños, con su nombre en el [Estribillo] repetido.`
          },
          {
            title: "Prompt 6. Dedicatoria romántica (bolero)",
            badge: "Romántica",
            text: `Bolero romántico y lento. Guitarra española, cuerdas suaves y piano. Voz de hombre cálida y sentida. Letra dedicada a alguien que quieres, agradeciéndole estar ahí. [Estribillo] emotivo y sencillo.`
          },
          {
            title: "Prompt 7. Para un grupo de amigos (himno)",
            badge: "Himno amigos",
            text: `Pop rock enérgico y coreable, tempo medio-alto. Guitarras eléctricas, batería potente y coros. Voz de hombre desenfadada. Letra sobre un grupo de amigos inseparables. [Estribillo] tipo himno para cantar todos juntos.`
          }
        ]
      },
      {
        title: "🎧 Música de fondo, concentración y streaming",
        items: [
          {
            title: "Prompt 8. Lo-fi para estudiar",
            badge: "Lo-Fi / Estudio",
            text: `Lo-fi hip hop relajado para concentrarse, tempo lento y constante. Piano suave, vinilo de fondo, bajo cálido y batería sutil. Instrumental, sin voz. Ambiente de tarde lluviosa.`
          },
          {
            title: "Prompt 9. Música de fondo para vídeos (vlog)",
            badge: "Fondo Vlog",
            text: `Pop acústico luminoso y positivo, tempo medio. Guitarra acústica, claps y ukelele. Instrumental, sin voz. Energía alegre de fondo para un vlog de viaje.`
          },
          {
            title: "Prompt 10. Ambiente épico / cinematográfico",
            badge: "Cinematográfico",
            text: `Banda sonora épica y cinematográfica, in crescendo. Cuerdas, percusión de tambores grandes y coros. Instrumental. Sensación de aventura y de gran final.`
          },
          {
            title: "Prompt 11. Concentración deep focus",
            badge: "Deep Focus",
            text: `Ambient minimalista para concentración profunda, muy lento. Sintetizadores suaves, pads cálidos y notas largas. Instrumental, sin percusión marcada. Sin cambios bruscos.`
          }
        ]
      },
      {
        title: "📱 Tonos de llamada y marca",
        items: [
          {
            title: "Prompt 12. Tono de llamada pegadizo",
            badge: "Tono llamada",
            text: `Melodía corta y muy pegadiza para tono de llamada, tempo alegre. Marimba y sintes brillantes. Instrumental. Que enganche en los primeros 3 segundos y se pueda repetir en bucle.`
          },
          {
            title: "Prompt 13. Sintonía de marca (jingle de negocio)",
            badge: "Jingle marca",
            text: `Jingle corto, moderno y optimista para una marca, tempo animado. Sintes limpios, palmas y un gancho melódico claro. Voz alegre que canta el nombre de la marca en el [Estribillo]. Duración breve, tipo anuncio.`
          },
          {
            title: "Prompt 14. Intro para tu canal de YouTube",
            badge: "Intro YouTube",
            text: `Sintonía de introducción con energía, tempo rápido. Sintes potentes, un golpe de graves inicial y percusión electrónica. Instrumental. Corta, memorable, que suba la energía desde el primer segundo.`
          }
        ]
      },
      {
        title: "🌎 Estilos latinos",
        items: [
          {
            title: "Prompt 15. Reggaetón melódico",
            badge: "Reggaetón",
            text: `Reggaetón melódico, dembow de tempo medio, 95 BPM. Voz masculina de tenor suave con ligero auto-tune, pads envolventes, guitarras eléctricas limpias y sub-graves potentes. Letra sobre una noche de verano. [Estribillo] pegadizo.`
          },
          {
            title: "Prompt 16. Cumbia alegre",
            badge: "Cumbia",
            text: `Cumbia alegre y bailable, tempo medio. Acordeón, güira, bajo y teclado. Voz masculina cálida. Letra festiva para bailar en familia. [Estribillo] repetitivo y fácil de cantar.`
          },
          {
            title: "Prompt 17. Bolero clásico",
            badge: "Bolero",
            text: `Bolero clásico y nostálgico, muy lento. Guitarra española, contrabajo y piano suave. Voz de hombre grave y aterciopelada. Letra de amor de otra época. [Estribillo] sentido.`
          },
          {
            title: "Prompt 18. Corrido / ranchera moderna",
            badge: "Ranchera / Corrido",
            text: `Ranchera moderna con fuerza, tempo medio. Trompetas, guitarra acústica y bajo sexto. Voz masculina potente y con sentimiento. Letra sobre volver al pueblo de origen. [Estribillo] para corear.`
          }
        ]
      },
      {
        title: "🎙️ Voz a canción y estilos concretos",
        items: [
          {
            title: "Prompt 19. Rock con voz rasgada",
            badge: "Rock",
            text: `Rock enérgico y crudo, tempo rápido. Guitarras eléctricas distorsionadas, batería potente y bajo marcado. Voz de hombre rasgada y potente, tipo rockero. Letra sobre romper con la rutina. [Estribillo] para gritar.`
          },
          {
            title: "Prompt 20. R&B suave y nocturno",
            badge: "R&B",
            text: `R&B suave y sensual, tempo lento. Rhodes, sub-graves cálidos, hi-hats sutiles. Voz de mujer aterciopelada con ad-libs. Letra íntima de madrugada. [Estribillo] con una frase que se repita.`
          },
          {
            title: "Prompt 21. Trap moderno",
            badge: "Trap",
            text: `Trap moderno, 140 BPM, con hi-hats rápidos. 808 potentes, melodía de campanas y sintes oscuros. Voz masculina con flow y auto-tune. Letra de superación personal. [Estribillo] pegadizo.`
          },
          {
            title: "Prompt 22. Flamenco fusión",
            badge: "Flamenco Fusión",
            text: `Flamenco fusión con aire moderno, compás vivo. Guitarra flamenca, palmas, cajón y toques de sintetizador. Voz femenina con quejío. Letra sobre la libertad. [Estribillo] con jaleos.`
          }
        ]
      },
      {
        title: "📸 Desde una foto (en Gemini)",
        items: [
          {
            title: "Prompt 23. Foto de un atardecer",
            badge: "Foto Atardecer",
            text: `A partir de esta foto, crea una pista tranquila y emotiva. Guitarra acústica y pads suaves. Instrumental o voz muy suave. Que transmita calma de final del día.`
          },
          {
            title: "Prompt 24. Foto de fiesta con amigos",
            badge: "Foto Fiesta",
            text: `A partir de esta foto, crea una canción alegre y fiestera, tempo alto, para bailar. Que capte la energía del momento. [Estribillo] eufórico.`
          },
          {
            title: "Prompt 25. Foto de un paisaje de viaje",
            badge: "Foto Viaje",
            text: `A partir de esta foto, crea una banda sonora cinematográfica y luminosa, in crescendo. Instrumental. Sensación de aventura y de estar descubriendo un sitio nuevo.`
          }
        ]
      },
      {
        title: "💡 Truco pro: escribe tú la letra con etiquetas",
        items: [
          {
            title: "Plantilla de estructura con etiquetas",
            badge: "💡 Truco Pro",
            text: `[Estrofa 1]
(tus versos aquí)

[Estribillo]
(el gancho — repite una palabra clave como un mantra)

[Estrofa 2]
(más versos)

[Puente]
(el giro antes del último estribillo)`
          }
        ]
      }
    ]
  },
  {
    id: "google-pics",
    title: "10 Prompts para probar Google Pics",
    thumbnail: "thumbnails/google pics.png",
    category: "Generación de Imágenes",
    tags: ["Google Pics", "Imágenes", "Edición", "Diseño", "Docs", "Slides", "Colaboración"],
    description: "Ordenados por las 5 cosas que se explican en el vídeo. Copia y pega tal cual, o cambia lo que está entre paréntesis por lo tuyo. Funcionan dentro de Google Docs, Google Slides o la app de Google Pics.",
    rulesTitle: "💡 Consejos y recomendaciones para este vídeo:",
    rules: [
      "Ordenados por las 5 cosas que se explican en el vídeo.",
      "Copia y pega tal cual, o cambia lo que está entre paréntesis por lo tuyo.",
      "Funcionan dentro de Google Docs, Google Slides o la app de Google Pics.",
      "Consejo para el vídeo: Los prompts 3 (el cartel de matcha) y 5 (despejar la habitación) son los que mejor se ven en directo, porque el 'antes y después' es inmediato y visual.",
      "Anima a la gente a pausar y copiar el que quiera probar."
    ],
    sections: [
      {
        title: "COSA 1 — Crear una imagen desde cero con una frase (dentro de Docs o Slides)",
        items: [
          {
            title: "Prompt 1. Portada de informe o documento",
            badge: "Docs / Slides",
            text: `Créame una imagen para la portada de un documento sobre (marketing digital para pequeños negocios). Estilo moderno y limpio, colores azules y blancos, con un aspecto profesional que quede bien en un informe de empresa. Formato horizontal.`
          },
          {
            title: "Prompt 2. Ilustración para post de blog",
            badge: "Ilustración",
            text: `Genera una ilustración sencilla y amigable de (una persona trabajando desde una cafetería con un portátil), estilo dibujo plano y colores cálidos, para acompañar un texto de blog. Sin texto dentro de la imagen.`
          }
        ]
      },
      {
        title: "COSA 2 — Varias versiones a la vez para elegir (el ejemplo del cartel)",
        items: [
          {
            title: "Prompt 3. Cartel con varias versiones",
            badge: "⭐ Wow en directo",
            text: `Créame un cartel para (mi club de matcha llamado "The Matcha Club"). Que sea elegante, con tonos verdes y un aire natural y premium. Enséñame varias versiones distintas para que pueda elegir la que más me guste.`
          },
          {
            title: "Prompt 4. Propuestas de logotipo",
            badge: "Logos",
            text: `Diséñame un logo sencillo para (una tienda de plantas llamada "Raíces"). Quiero varias propuestas diferentes: unas más minimalistas y otras más ilustradas, para comparar estilos antes de decidir.`
          }
        ]
      },
      {
        title: "COSA 3 — Tocar y cambiar/borrar un objeto de una foto (el ejemplo del piso)",
        items: [
          {
            title: "Prompt 5. Despejar y limpiar una habitación",
            badge: "⭐ Antes y después",
            text: `(Sube una foto de una habitación) Quita los objetos que están tirados por el suelo y despeja la mesa, dejando el resto de la habitación exactamente igual, sin cambiar los muebles, la luz ni el fondo.`
          },
          {
            title: "Prompt 6. Cambiar color de un objeto en foto de producto",
            badge: "Producto",
            text: `(Sube una foto de producto) Cambia el color de (el sofá) a un tono gris claro, sin tocar nada más de la imagen. Mantén las sombras y la luz naturales.`
          },
          {
            title: "Prompt 7. Borrar a una persona del fondo",
            badge: "Retoque",
            text: `(Sube una foto tuya) Quita a la persona que aparece al fondo, rellenando ese hueco con el mismo fondo, de forma que no se note que había alguien.`
          }
        ]
      },
      {
        title: "COSA 4 — Cambiar y traducir el texto dentro de una imagen",
        items: [
          {
            title: "Prompt 8. Modificar fecha o texto en un cartel",
            badge: "Edición de Texto",
            text: `(Sube un cartel que ya tenga texto) Cambia la fecha del cartel a (sábado 20 de abril), sin tocar el diseño ni cambiar el tipo de letra. Que solo cambie ese texto y el resto quede idéntico.`
          },
          {
            title: "Prompt 9. Traducir diseño conservando tipografía",
            badge: "Traducción",
            text: `(Sube un flyer en español) Traduce todo el texto de este flyer al inglés, manteniendo exactamente el mismo diseño, los mismos colores y la misma tipografía. Solo cambia el idioma del texto.`
          }
        ]
      },
      {
        title: "COSA 5 — Trabajo en equipo sobre la misma imagen",
        items: [
          {
            title: "Prueba 10. Colaboración y edición en tiempo real",
            badge: "👥 En equipo",
            text: `Crea cualquier imagen con uno de los prompts de arriba. Luego pulsa el botón de compartir (como en un documento de Google), mete el correo de otra persona con permiso de "Editor", y pídele que entre y le haga un cambio. Veréis cómo los dos podéis editar la misma imagen a la vez, en tiempo real.`
          }
        ]
      }
    ]
  },
  {
    id: "gemini-38-flash",
    title: "10 Prompts para probar Gemini 3.8 Flash",
    thumbnail: "thumbnails/gemini 3.8 flash.png",
    category: "Modelos y Aplicaciones",
    tags: ["Gemini 3.8 Flash", "Constructor", "Videojuegos", "Webs", "Automatización", "Educación"],
    description: "Todos pensados para el constructor (Gemini 3.8 Flash), dentro de la app de Gemini o del buscador de Google. Copia y pega tal cual, o cambia lo que está entre paréntesis por lo tuyo.",
    rulesTitle: "💡 Consejos y recomendaciones para este vídeo:",
    rules: [
      "Todos pensados para el constructor (Gemini 3.8 Flash), dentro de la app de Gemini o del buscador de Google.",
      "Copia y pega tal cual, o cambia lo que está entre paréntesis por lo tuyo.",
      "Consejo para el vídeo: Los prompts 1, 2 y 10 son los más 'wow' para grabar en directo, porque el resultado se ve al instante y es visual.",
      "Enséñalos en pantalla mientras hablas y anima a la gente a pausar el vídeo para copiar el que más le interese."
    ],
    sections: [
      {
        title: "1. Juegos, Webs y Calculadoras (Prompts 1 al 3)",
        items: [
          {
            title: "1. El videojuego con un solo mensaje (el del vídeo)",
            badge: "⭐ El del vídeo",
            text: `Créame un videojuego completo y jugable en un solo archivo HTML, estilo arcade retro, en el que un personaje tiene que esquivar obstáculos que caen desde arriba y sumar puntos. Añade una pantalla de inicio con un botón de "Jugar", un marcador de puntos en la esquina, dificultad que sube poco a poco, y una pantalla de "Game Over" con la puntuación final y un botón para volver a empezar. Que funcione con las flechas del teclado y también tocando la pantalla en el móvil.`
          },
          {
            title: "2. Una web de una página para tu negocio",
            badge: "⭐ Wow en directo",
            text: `Créame una página web de una sola pantalla para (mi negocio: una cafetería de especialidad llamada El Grano). Que tenga un titular grande con el nombre y una frase que enamore, una sección con 3 puntos de por qué elegirnos, una lista de productos con precios, un mapa de cómo llegar y un botón de WhatsApp para reservar. Diseño limpio y moderno, colores cálidos, y que se vea perfecta en el móvil. Dámela en un solo archivo HTML listo para publicar.`
          },
          {
            title: "3. Una calculadora útil a medida",
            badge: "Herramienta",
            text: `Créame una calculadora sencilla en un solo archivo HTML que me diga cuánto tengo que cobrar por un proyecto. Que me deje meter las horas que calculo dedicarle, mi precio por hora, un porcentaje extra por imprevistos, y que me muestre el total desglosado y bien grande. Diseño claro, con botones fáciles de tocar en el móvil.`
          }
        ]
      },
      {
        title: "2. Automatización y Planes de Acción (Prompts 4 y 5)",
        items: [
          {
            title: "4. Automatizar un texto repetitivo",
            badge: "Atención al cliente",
            text: `Actúa como mi asistente de atención al cliente. Te voy a dar el mensaje de un cliente y tú me escribes tres respuestas posibles: una muy cordial, una neutra y profesional, y una breve y directa. Que todas suenen humanas, cercanas, y nunca robóticas. Este es el mensaje del cliente: (pega aquí el mensaje). Espera mi mensaje y responde solo con las tres opciones.`
          },
          {
            title: "5. Convertir una idea en un plan paso a paso",
            badge: "Plan de acción",
            text: `Quiero (montar un canal de YouTube sobre cocina casera para principiantes) pero no sé por dónde empezar. Créame un plan de acción para los primeros 30 días, dividido en 4 semanas, con tareas concretas para cada semana, ordenadas de lo más importante a lo menos importante. Explícamelo como si yo no tuviera ninguna experiencia, sin palabras técnicas, y al final dime cuál es el único error que hunde a la mayoría de los que empiezan.`
          }
        ]
      },
      {
        title: "3. Diseño y Explicaciones Sencillas (Prompts 6 y 7)",
        items: [
          {
            title: "6. Un cartel o flyer con texto exacto",
            badge: "Diseño e impresión",
            text: `Créame el diseño de un cartel vertical para (un mercadillo de segunda mano el sábado 15 de marzo). El texto debe decir exactamente, sin cambiar nada: arriba "MERCADILLO SOLIDARIO", en el centro "Sábado 15 de marzo · 10:00 a 18:00", debajo "Plaza Mayor · Entrada gratis", y abajo del todo "Ropa, libros, juguetes y mucho más". Estilo alegre y colorido, fácil de leer desde lejos. Dámelo listo para imprimir.`
          },
          {
            title: "7. Explicar algo difícil para que lo entienda cualquiera",
            badge: "Explicaciones",
            text: `Explícame (cómo funciona una hipoteca) como si se lo contaras a alguien que no sabe nada de bancos ni de dinero. Usa una metáfora sencilla del día a día que se quede en la cabeza, no uses ni una sola palabra técnica sin explicarla, y termina con los 3 errores más comunes que comete la gente. Que no ocupe más de lo que se lee en un minuto.`
          }
        ]
      },
      {
        title: "4. Organización, Formularios y Simuladores (Prompts 8 al 10)",
        items: [
          {
            title: "8. Organizar información desordenada",
            badge: "Productividad",
            text: `Te voy a pegar un montón de notas desordenadas que tengo apuntadas de cualquier manera. Quiero que las organices en una tabla clara con columnas de "Tarea", "Prioridad" (alta, media o baja) y "Cuándo hacerla". Ordénalas de más urgente a menos urgente y, si ves algo que falta o que no tiene sentido, avísame al final. Estas son mis notas: (pega aquí tus notas).`
          },
          {
            title: "9. Un formulario de contacto funcional",
            badge: "Código web",
            text: `Créame un formulario de contacto en un solo archivo HTML con campos para nombre, correo electrónico, teléfono y un mensaje. Que valide que el correo esté bien escrito antes de enviar, que muestre un mensaje de "¡Gracias, te responderemos pronto!" al terminar, y que tenga un diseño limpio y profesional que quede bien en cualquier web. Sin errores y listo para usar.`
          },
          {
            title: "10. Un simulador o herramienta educativa",
            badge: "⭐ Wow interactivo",
            text: `Créame una página web interactiva en un solo archivo HTML que enseñe (las tablas de multiplicar) a un niño. Que le haga preguntas de una en una, le diga si acierta o falla con un mensaje simpático, lleve la cuenta de aciertos, y al final le enseñe cuántas ha acertado con un dibujo de celebración si le ha ido bien. Colores vivos, letras grandes, y botones fáciles de tocar en una tablet.`
          }
        ]
      }
    ]
  },
  {
    id: "google-modo-ia",
    title: "Google modo IA posicionamiento",
    thumbnail: "thumbnails/google modo ia.png",
    category: "SEO e Inteligencia Artificial",
    tags: ["SEO", "AI Overviews", "Modo IA", "Google"],
    docUrl: "https://docs.google.com/document/d/1wCIv92J1CR5WX_NF8tAYjOLP8yqIfaK0bd6OHmTT2hk/edit?tab=t.0",
    description: "Prompt diseñado para reescribir y estructurar los textos de tu web para que la IA de Google (AI Overviews y Modo IA) los cite como fuente recomendada.",
    sections: [
      {
        title: "Prompt Principal",
        items: [
          {
            title: "Reescribir contenido para ser citado por Google AI",
            badge: "⭐ Principal",
            text: `Actúa como experto en posicionamiento para inteligencia artificial. Te paso el texto de una página de mi web. Reescríbelo para que la IA de Google (AI Overviews y Modo IA) lo cite como fuente. Requisitos: 1) una respuesta directa y clara en las dos primeras frases; 2) convierte los subtítulos en las preguntas reales que haría una persona buscando esto; 3) indica dónde iría la fecha de actualización y el nombre del autor; 4) lenguaje sencillo, frases cortas; 5) no inventes ningún dato. Aquí está mi texto: [PEGA AQUÍ TU PÁGINA]`
          }
        ]
      }
    ]
  },
  {
    id: "tareas-servicios",
    title: "Gemini Spark tareas para servicios",
    thumbnail: "thumbnails/tareas servicios.png",
    category: "Automatización y Negocio",
    tags: ["Servicios", "Clientes", "Facturación", "Productividad", "Automatizaciones"],
    docUrl: "https://docs.google.com/document/d/1wCIv92J1CR5WX_NF8tAYjOLP8yqIfaK0bd6OHmTT2hk/edit?tab=t.0#heading=h.umluiagdim5g",
    description: "Flujos de trabajo y prompts para conseguir clientes, cobrar a tiempo, ahorrar horas al día y automatizar la gestión de tu negocio de servicios.",
    sections: [
      {
        title: "Conseguir Clientes",
        items: [
          {
            title: "1. El que contesta antes que nadie (evento)",
            text: `Cuando llegue un correo de alguien preguntando por mis servicios o pidiendo presupuesto, apunta en mi hoja de clientes el nombre, la empresa, qué necesita y la fecha, créale una carpeta con su nombre en mi Drive, y déjame en borrador una respuesta que agradezca el interés, haga las preguntas que necesito para presupuestar y proponga una llamada. No la envíes.`
          },
          {
            title: "2. El cazador de oportunidades (tiempo, diario)",
            text: `Cada día a las 7:00 busca en la web ofertas, proyectos o personas que estén pidiendo públicamente un servicio como el mío en [tu sector y zona]. Para cada una dime quién es, qué pide, dónde lo ha publicado y el enlace. Ordénalas por lo reciente y lo concreto que sea lo que piden. Si no encuentras el enlace original, descártala. Déjame las diez mejores en un documento.`
          },
          {
            title: "3. El perfil siempre fresco (tiempo, semanal)",
            text: `Todos los domingos, mira los tres últimos trabajos que he guardado en mi carpeta de proyectos y escríbeme un texto corto para actualizar mi perfil profesional y un borrador de publicación para redes contando el último, en mi tono, sin exagerar.`
          }
        ]
      },
      {
        title: "Cobrar y No Perder Dinero",
        items: [
          {
            title: "4. El cobrador (tiempo, semanal)",
            text: `Todos los lunes busca mis presupuestos enviados hace más de siete días sin respuesta y déjame un correo de seguimiento escrito para cada uno, breve y sin presionar. No lo envíes. Si el cliente ya respondió, descártalo.`
          },
          {
            title: "5. El vigilante de facturas (evento)",
            text: `Cuando me llegue una factura o un recibo, apúntalo en mi hoja de gastos con proveedor, fecha, importe y concepto, y guarda el archivo en mi carpeta de facturas del mes. Si falta algún dato, déjalo en blanco, no lo inventes.`
          },
          {
            title: "6. El aviso de impago (tiempo, semanal)",
            text: `Revisa mi hoja de facturas emitidas y dime cuáles llevan más de treinta días sin marcar como cobradas. Para cada una, déjame un recordatorio de pago escrito, educado. No lo envíes.`
          }
        ]
      },
      {
        title: "Ahorrar Tiempo",
        items: [
          {
            title: "7. El resumen de la mañana (tiempo, diario)",
            text: `Cada día a las 6:20 revisa mis correos desde ayer y mi calendario de hoy, y hazme un documento con lo que necesita respuesta hoy, lo que puede esperar, y mis compromisos con su hora. Marca lo que lleve más de tres días sin responder. Nada de newsletters.`
          },
          {
            title: "8. El repaso del viernes (tiempo, semanal)",
            text: `Los viernes a las 17:00 hazme un resumen de la semana: qué he cerrado, qué clientes están pendientes de respuesta mía, y qué se ha quedado sin hacer. Déjalo en un documento y ponme lo pendiente arriba del todo.`
          }
        ]
      },
      {
        title: "Lo que Más Cambia",
        items: [
          {
            title: "9. El buscador de clientes (tiempo, diario) — LA ESTRELLA",
            badge: "⭐ La Estrella",
            text: `Cada día busca en la web personas o empresas que estén mostrando públicamente que podrían necesitar [tu servicio]: quejas de un proveedor, búsquedas activas, señales recientes de necesidad. Para cada una dime quién es, qué necesita, dónde lo publicó, por qué encaja conmigo, y escríbeme un primer mensaje personalizado para contactar sin parecer spam. Ordénalas por lo concreto de la necesidad. Solo fuentes con enlace real; si no lo hay, descártala.`
          },
          {
            title: "10. El asistente de propuestas (habilidad)",
            text: `Úsala cuando haya que preparar una propuesta para un cliente. Mis tarifas son [las tuyas], cobro el 50% por adelantado, mis plazos son [los tuyos]. Estructura siempre: qué incluye, qué no, plazo, precio y forma de pago. No inventes precios fuera de mi lista: si no encaja, márcalo para que lo ponga yo.`
          }
        ]
      }
    ]
  },
  {
    id: "tareas-creadores-contenido",
    title: "Gemini Spark tareas para empresas que crean contenido",
    thumbnail: "thumbnails/tareas crear contenido.png",
    category: "Creación de Contenido",
    tags: ["Contenido", "YouTube", "Redes Sociales", "Canva", "Shorts"],
    docUrl: "https://docs.google.com/document/d/1wCIv92J1CR5WX_NF8tAYjOLP8yqIfaK0bd6OHmTT2hk/edit?tab=t.0#heading=h.8h5ci16s1wag",
    description: "Sistemas y automatizaciones para generar ideas ganadoras, producir guiones y miniaturas en minutos, y gestionar patrocinios e ingresos.",
    sections: [
      {
        title: "Generación de Ideas y Vigilancia",
        items: [
          {
            title: "1. El generador de ideas (tiempo, semanal)",
            text: `Cada lunes, mira los temas que están subiendo en mi nicho ([tu tema]) esta semana y dame diez ideas de vídeo o publicación, cada una con un titular tentador y una frase de por qué funcionaría ahora. Ordénalas de más a menos oportuna. Solo tendencias reales con enlace.`
          },
          {
            title: "2. El cazador de comentarios con oro (tiempo, semanal)",
            text: `Revisa los comentarios de mis últimos vídeos y dime las cinco preguntas o dudas que más se repiten. Cada una de esas es una idea de vídeo. Dámelas ordenadas por cuánta gente lo pregunta.`
          },
          {
            title: "3. El vigilante de la competencia (tiempo, semanal) — LA ESTRELLA",
            badge: "⭐ La Estrella",
            text: `Cada semana mira qué han publicado los tres referentes de mi nicho que te indico, qué temas están tocando y cuáles les están funcionando mejor. Dime tres huecos: temas que ellos no están cubriendo bien y que yo podría hacer mejor. Con el enlace de lo que has visto.`
          }
        ]
      },
      {
        title: "Producir Más Rápido",
        items: [
          {
            title: "4. El guionista de arranques (tarea puntual)",
            text: `Te doy el tema de un vídeo y me escribes tres arranques distintos de los primeros 15 segundos, pensados para que la gente no se vaya. En mi tono, directo, sin rodeos. Dime qué gancho usa cada uno.`
          },
          {
            title: "5. El diseñador de miniaturas (Canva conectado)",
            text: `Diséñame en Canva tres miniaturas para un vídeo sobre [tema], en 16:9, con un texto de máximo tres palabras muy grande, mi estilo, y que sean editables. Luego adáptalas también a vertical para Shorts.`
          },
          {
            title: "6. El adaptador de formatos (tarea puntual — el repurposing)",
            text: `Te paso el guion o la transcripción de un vídeo largo y me sacas: tres ideas de Short con su texto, un post para redes, un hilo de X y un pie de foto para Instagram. Todo en mi tono, cada uno adaptado a su formato, no copiado y pegado.`
          }
        ]
      },
      {
        title: "Publicar Sin Agobio",
        items: [
          {
            title: "7. El calendario de la semana (tiempo, semanal)",
            text: `Cada domingo hazme un plan de publicación para la semana: qué subo cada día y en qué red, mezclando lo que tengo grabado con ideas nuevas. Déjalo en un documento con casillas para ir marcando lo hecho.`
          },
          {
            title: "8. El community manager (tiempo, diario)",
            text: `Cada día revisa los comentarios nuevos de mis vídeos, agrúpame los que necesitan respuesta mía de verdad, y déjame un borrador de respuesta para cada uno en mi tono. Los que son solo un gracias o un emoji, no me los pases. No respondas tú, déjamelos en borrador.`
          }
        ]
      },
      {
        title: "El Negocio Detrás del Contenido",
        items: [
          {
            title: "9. El buscador de colaboraciones y marcas (tiempo, semanal)",
            text: `Cada semana busca marcas o empresas de mi sector que estén trabajando con creadores o buscando patrocinar contenido. Para cada una dime quién es, por qué encaja conmigo, y déjame escrito un primer mensaje de presentación, sin parecer plantilla. Solo con enlace real.`
          },
          {
            title: "10. El contable del creador (evento)",
            text: `Cuando me llegue un ingreso (patrocinio, plataforma, venta) o una factura de una herramienta que pago, apúntalo en mi hoja con fecha, concepto e importe. A final de mes dime cuánto he ingresado, cuánto gasto en herramientas y qué me queda. Si falta algún dato, déjalo en blanco.`
          }
        ]
      }
    ]
  },
  {
    id: "gemini-37-flash",
    title: "Gemini 3.7 Flash",
    thumbnail: "thumbnails/gemini 3.7.png",
    category: "Modelos y Aplicaciones",
    tags: ["Gemini 3.7", "Webs", "PDFs", "Mini-Apps", "Spark"],
    docUrl: "https://docs.google.com/document/d/1wCIv92J1CR5WX_NF8tAYjOLP8yqIfaK0bd6OHmTT2hk/edit?tab=t.0#heading=h.6m6frdrqfs02",
    description: "Copia y pega. Cambia lo que está entre [corchetes] por lo tuyo. Todos funcionan en Google AI Studio (gratis) o en la app de Gemini.",
    rules: [
      "Dile para quién es y para qué (un cliente, tu jefe, tu tienda).",
      "Pídele siempre que se vea bien en el móvil.",
      "Si no sale a la primera, háblale normal: 'el botón más grande', 'ponlo azul', 'más corto'."
    ],
    sections: [
      {
        title: "1. Montar una web enseñándole una foto",
        items: [
          {
            title: "Base con foto",
            badge: "Base",
            text: `Te paso una foto de una web que me gusta. Hazme una parecida, pero para [mi negocio], con mi nombre arriba y un botón de WhatsApp. Que se vea bien en el móvil.`
          },
          {
            title: "Variante 1: Sin foto (una sola pantalla)",
            text: `Sin foto: hazme una página web de una sola pantalla para [mi negocio]. Arriba, mi nombre "[tu nombre]" y una frase que diga qué hago. Debajo, un botón grande de WhatsApp con mi número [tu número]. Colores [tu color] y blanco. Que se vea bien en el móvil.`
          },
          {
            title: "Variante 2: Copiar estilo de foto",
            text: `Copia el estilo de esta foto (colores, tipo de letra, distribución), pero cambia el texto por el de mi negocio: [describe tu negocio en una línea]. Dame el resultado listo para publicar.`
          },
          {
            title: "Variante 3: Captar contactos (Lead Magnet)",
            text: `Hazme una página para captar contactos: un titular potente, tres motivos por los que elegirme, y un formulario de nombre, correo y teléfono. Tema: [tu oferta].`
          },
          {
            title: "Variante 4: Página de venta directa",
            text: `Hazme una página para vender [tu producto o servicio]: foto arriba, precio, tres beneficios y un botón de "Comprar" o "Reservar". Sencilla y clara.`
          },
          {
            title: "Variante 5: Tipo 'Linktree' con todos mis enlaces",
            text: `Hazme una página tipo "todos mis enlaces" (estilo Linktree) para [tu nombre], con botones a mi Instagram, mi YouTube, mi WhatsApp y mi web. Fondo [tu color].`
          },
          {
            title: "Variante 6: Menú digital para hostelería",
            text: `Hazme un menú digital para [tu restaurante/cafetería]: secciones de entrantes, principales y bebidas, con precios. Que se lea fácil desde el móvil.`
          },
          {
            title: "💡 Truco final para publicar",
            badge: "Truco",
            text: `Dame el código listo para copiar y explícame en pasos sencillos cómo subirlo a internet gratis.`
          }
        ]
      },
      {
        title: "2. Convertir un PDF aburrido en algo que se entiende",
        items: [
          {
            title: "Base con gráficos y resumen",
            badge: "Base",
            text: `Te paso este PDF. Conviértelo en una página web sencilla de entender, con gráficos, y resúmeme lo importante para que se lo pueda enseñar a un cliente.`
          },
          {
            title: "Variante: Explicar como a un niño de 10 años",
            text: `Te paso este informe. Explícamelo como si tuviera diez años, en cuatro líneas, y dime lo único que de verdad importa.`
          },
          {
            title: "Variante: 5 puntos clave y plan de acción",
            text: `Te paso este PDF. Sácame los 5 puntos clave y, de cada uno, qué tengo que hacer yo. En forma de lista corta.`
          },
          {
            title: "Variante: Cuentas de negocio a gráficos interactivos",
            text: `Te paso las cuentas de mi negocio. Conviértelas en una página con gráficos que se muevan y dime en qué estoy ganando y en qué estoy perdiendo.`
          },
          {
            title: "Variante: Auditoría de contratos y partes con trampa",
            text: `Te paso este contrato. Dime en cristiano qué me conviene, qué me perjudica y qué debería preguntar antes de firmar. Márcame las partes con trampa.`
          },
          {
            title: "Variante: Datos / tablas a gráfico claro",
            text: `Te paso estos datos (o esta tabla). Hazme un gráfico claro y una frase que explique qué está pasando.`
          },
          {
            title: "Variante: Comparativa de 2 documentos",
            text: `Te paso dos documentos. Compáramelos y dime en qué se diferencian y cuál me conviene más.`
          }
        ]
      },
      {
        title: "3. De una frase a una mini-herramienta o app",
        items: [
          {
            title: "Base de mini-app",
            badge: "Base",
            text: `Hazme una [calculadora / ruleta de premios / juego sencillo] para [mi negocio], que funcione y se vea bien en el móvil.`
          },
          {
            title: "Calculadora de presupuestos",
            text: `Hazme una calculadora sencilla para que mis clientes calculen [el precio de X según Y]. Que sea fácil de usar en el móvil, con mis colores [tu color].`
          },
          {
            title: "Ruleta interactiva de premios",
            text: `Hazme una ruleta de premios para mi tienda con estos premios: [premio 1, premio 2, premio 3...]. Que gire al pulsar un botón y sea vistosa.`
          },
          {
            title: "Juego sencillo personalizado",
            text: `Hazme un juego sencillo de [naves / preguntas / memoria] con la temática de [tu marca]. Divertido y que se juegue desde el móvil.`
          },
          {
            title: "Cuestionario recomendador con WhatsApp",
            text: `Hazme un cuestionario de 5 preguntas que, según las respuestas, recomiende [mi producto/servicio adecuado]. Al final, un botón de WhatsApp para contactarme.`
          },
          {
            title: "Conversor de unidades rápido",
            text: `Hazme un conversor de [unidad A] a [unidad B] para [tu sector], limpio y rápido.`
          },
          {
            title: "Temporizador / cuenta atrás",
            text: `Hazme un temporizador / cuenta atrás bonito para [tu uso: entrenar, cocinar, un sorteo], a pantalla completa.`
          },
          {
            title: "Generador de ideas / frases con botón",
            text: `Hazme un generador de [ideas de nombres / frases / excusas] sobre [tu tema], con un botón que saque uno nuevo cada vez.`
          }
        ]
      },
      {
        title: "Bonus — El agente que trabaja por ti (Spark)",
        items: [
          {
            title: "Unificar documentos sueltos",
            text: `Junta estos archivos sueltos en un solo documento ordenado y ponle un título y un índice.`
          },
          {
            title: "Respuestas a correos con tu tono",
            text: `Redáctame los correos de respuesta a estos mensajes, con mi tono [cercano / formal], y déjamelos listos para revisar antes de enviar.`
          },
          {
            title: "Documento de estado semanal",
            text: `Actualízame este documento de estado con lo último de esta semana y resáltame lo que está atascado.`
          },
          {
            title: "Comparador de proveedores en tabla",
            text: `Búscame [tres proveedores / tres opciones] de [lo que sea] y ponme los precios y los pros y contras en una tabla.`
          }
        ]
      }
    ]
  },
  {
    id: "google-ai-studio",
    title: "Google AI Studio",
    thumbnail: "thumbnails/google ai studio.png",
    category: "Google AI Studio",
    tags: ["AI Studio", "Gemini 3.7", "Nano Banana", "Veo", "Audio", "Modelos"],
    docUrl: "https://docs.google.com/document/d/1wCIv92J1CR5WX_NF8tAYjOLP8yqIfaK0bd6OHmTT2hk/edit?tab=t.0#heading=h.niv0ofkh4lyh",
    description: "Todos los prompts del vídeo organizados por modelo (texto, código, imágenes, vídeo, voz y en tiempo real), con los que salen en el vídeo (⭐) y extras de regalo.",
    rules: [
      "Dile para quién es y para qué.",
      "Pídele siempre que quede claro y sencillo.",
      "Si no sale a la primera, corrígele hablando normal ('más corto', 'otro tono', 'cámbiame esto')."
    ],
    sections: [
      {
        title: "🧠 Featured — Cerebros que escriben y piensan",
        items: [
          {
            title: "Gemini 3.7 Flash — Títulos de YouTube, descripción y hashtags",
            badge: "⭐ Del vídeo",
            text: `Te paso el texto de mi último vídeo. Sácame 10 títulos llamativos para YouTube, una descripción de 3 líneas y 10 hashtags. Aquí va: [pega la transcripción]`
          },
          {
            title: "Gemini 3.7 Flash — Guion con gancho de 15s",
            badge: "Extra",
            text: `Tengo una idea de vídeo sobre [tema]. Hazme el guion con un gancho de los primeros 15 segundos y los puntos que debo tocar.`
          },
          {
            title: "Gemini 3.7 Flash — Texto a 5 posts para Instagram",
            badge: "Extra",
            text: `Convierte este texto en 5 publicaciones cortas para Instagram, cada una con su gancho. Texto: [pega]`
          },
          {
            title: "Gemini 3.7 Flash — Plan de contenido de 7 días",
            badge: "Extra",
            text: `Hazme un plan de contenido de 7 días sobre [tema], un post por día, con la idea y el título de cada uno.`
          },
          {
            title: "Gemini 3.7 Flash — Responder correos en lote",
            badge: "Extra",
            text: `Respóndeme estos correos de clientes con un tono cercano y resolutivo, y déjamelos listos para revisar: [pega los correos]`
          },
          {
            title: "Gemini 3.5 Flash Lite — Clasificar comentarios en lote",
            badge: "⭐ Del vídeo",
            text: `Te paso una lista de comentarios. Clasifícalos en tres grupos: interesados en comprar, dudas, y spam. Aquí van: [pega los comentarios]`
          },
          {
            title: "Gemini 3.5 Flash Lite — Extraer nombres y correos a tabla",
            badge: "Extra",
            text: `De esta lista de mensajes, extráeme nombre y correo de cada persona y ponlo en una tabla: [pega]`
          },
          {
            title: "Gemini 3.5 Flash Lite — Traducir 50 títulos manteniendo el gancho",
            badge: "Extra",
            text: `Tradúceme estos 50 títulos al inglés, manteniendo el gancho: [pega]`
          },
          {
            title: "Gemini 3.5 Flash Lite — Etiquetar reseñas por sentimiento",
            badge: "Extra",
            text: `Etiqueta estas reseñas como positiva, negativa o neutra, y cuéntame cuántas hay de cada: [pega]`
          },
          {
            title: "Gemini 3.1 Pro — Análisis crítico de contrato o plan",
            badge: "⭐ Del vídeo",
            text: `Te paso mi [contrato / plan de negocio]. Dime los puntos débiles, lo que puede salir mal y lo que me conviene cambiar. Aquí va: [pega o adjunta]`
          },
          {
            title: "Gemini 3.1 Pro — Crítica y optimización de precios",
            badge: "Extra",
            text: `Critica esta estrategia de precios y dame tres alternativas mejores para [tu negocio]: [describe]`
          },
          {
            title: "Gemini 3.1 Pro — Análisis DAFO completo",
            badge: "Extra",
            text: `Hazme un análisis DAFO (debilidades, amenazas, fortalezas, oportunidades) de mi negocio: [descríbelo].`
          },
          {
            title: "Gemini 3.1 Pro — Detección de fallos de lógica",
            badge: "Extra",
            text: `Lee este texto y encuéntrame los fallos de lógica o las cosas que no se sostienen: [pega]`
          }
        ]
      },
      {
        title: "💬 Code and Chat — Chatbots y Programación",
        items: [
          {
            title: "Montar un Chatbot de atención al cliente",
            badge: "⭐ Del vídeo",
            text: `Ayúdame a montar un chatbot que responda solo las preguntas típicas de mis clientes, con la información de mi negocio. Mi negocio es [descríbelo] y las preguntas más comunes son [lista].`
          },
          {
            title: "System Prompt de chatbot vendedor",
            badge: "Extra",
            text: `Escríbeme las instrucciones (el "system prompt") de un chatbot que venda [producto], con tono [cercano/formal] y que siempre termine invitando a escribir por WhatsApp.`
          },
          {
            title: "Calculadora web adaptada a móvil",
            badge: "Extra",
            text: `Hazme una calculadora en una página web para que mis clientes calculen [lo que sea]. Sencilla y que se vea bien en el móvil.`
          }
        ]
      },
      {
        title: "🖼️ Image Generation — Crear y Editar Imágenes (Nano Banana)",
        items: [
          {
            title: "Nano Banana 2 Lite — 20 fondos distintos para producto",
            badge: "⭐ Del vídeo",
            text: `Coge esta foto de mi producto y hazme 20 versiones con fondos distintos, para ver cuál llama más la atención. [adjunta la foto]`
          },
          {
            title: "Nano Banana 2 Lite — 5 estilos diferentes para una foto",
            badge: "Extra",
            text: `Convierte esta foto en 5 estilos diferentes: minimalista, de lujo, veraniego, navideño y urbano. [adjunta]`
          },
          {
            title: "Nano Banana 2 Lite — Fondo blanco para catálogo",
            badge: "Extra",
            text: `Quítale el fondo a esta foto y ponlo blanco, listo para catálogo. [adjunta]`
          },
          {
            title: "Nano Banana 2 — Foto de estudio profesional",
            badge: "⭐ Del vídeo",
            text: `Convierte esta foto de mi producto en una foto de estudio, con buena luz y fondo limpio, como de catálogo profesional. [adjunta]`
          },
          {
            title: "Nano Banana 2 — Cambiar fondo por playa de Tailandia",
            badge: "⭐ Del vídeo",
            text: `Coge esta foto mía y ponme de fondo una playa de Tailandia, que quede realista. [adjunta]`
          },
          {
            title: "Nano Banana 2 — Producto en la mano con luz natural",
            badge: "Extra",
            text: `Pon mi producto en la mano de una persona, con luz natural, como una foto de Instagram. [adjunta]`
          },
          {
            title: "Nano Banana Pro — Miniatura llamativa de YouTube",
            badge: "⭐ Del vídeo",
            text: `Hazme una miniatura de YouTube sobre [tema], con una cara de sorpresa, colores llamativos y el texto "[máx. 3 palabras]".`
          },
          {
            title: "Nano Banana Pro — Cartel publicitario de oferta",
            badge: "⭐ Del vídeo",
            text: `Hazme un cartel para mi negocio [nombre], que anuncie [oferta], con estos datos [teléfono/dirección] y un estilo [moderno/elegante].`
          },
          {
            title: "Nano Banana Pro — Diseño de logo limpio",
            badge: "Extra",
            text: `Diseña un logo sencillo y limpio para [marca], que trata de [describe]. Dame un par de variantes.`
          }
        ]
      },
      {
        title: "🎬 Video Generation — Crear Vídeos",
        items: [
          {
            title: "Gemini Omni Flash — Foto de producto a vídeo de 8s",
            badge: "⭐ Del vídeo",
            text: `Convierte esta foto de mi producto en un vídeo de 8 segundos para un anuncio. [adjunta] — Luego: ahora haz que el producto gire.`
          },
          {
            title: "Gemini Omni Flash — Movimiento de cámara lento",
            badge: "Extra",
            text: `Convierte esta imagen en un vídeo con un movimiento de cámara lento acercándose. [adjunta]`
          },
          {
            title: "Gemini Omni Flash — Vídeo vertical de 5s para Reel",
            badge: "Extra",
            text: `Hazme un vídeo de 5 segundos de [escena] para un Reel, en vertical.`
          },
          {
            title: "Veo 3.1 — Anuncio cinematográfico con sonido",
            badge: "⭐ Del vídeo",
            text: `Hazme un anuncio corto para mi marca [nombre]: una escena de [descríbela], con movimiento y sonido ambiente.`
          },
          {
            title: "Veo 3.1 — Plano cinemático a cámara lenta",
            badge: "Extra",
            text: `Plano cinematográfico de [escena], en cámara lenta, luz de atardecer, con música de fondo.`
          },
          {
            title: "Veo 3.1 Fast — 3 clips cortos para redes",
            badge: "⭐ Del vídeo",
            text: `Hazme 3 clips cortos sobre [tema] para publicar en mis redes esta semana.`
          },
          {
            title: "Veo 3.1 Fast — Clip dinámico de 6s para TikTok",
            badge: "Extra",
            text: `Vídeo vertical de 6 segundos para TikTok sobre [tema], dinámico y directo.`
          }
        ]
      },
      {
        title: "🎙️ Speech and Music — Voz y Música",
        items: [
          {
            title: "Gemini 3.5 Live Translate — Traducción de voz en directo",
            badge: "⭐ Del vídeo",
            text: `Tradúceme del español al [inglés / chino / lo que sea] en tiempo real. Voy a empezar a hablar.`
          },
          {
            title: "Gemini 3.1 Flash TTS — Voz natural para narración de vídeo",
            badge: "⭐ Del vídeo",
            text: `Ponle voz natural y cercana a este texto, como si lo narrara para un vídeo: [pega el texto]`
          },
          {
            title: "Gemini 3.1 Flash TTS — Lectura con tono enérgico",
            badge: "Extra",
            text: `Léelo con tono emocionado y enérgico, voz [masculina/femenina]: [pega]`
          },
          {
            title: "Gemini 3.1 Flash TTS — Voz tranquila para audiolibro",
            badge: "Extra",
            text: `Convierte este capítulo en audio, con voz tranquila, para un audiolibro: [pega]`
          },
          {
            title: "Lyria 3 Pro — Música instrumental de fondo para vídeos",
            badge: "⭐ Del vídeo",
            text: `Hazme una música de fondo instrumental para mis vídeos, estilo [lo-fi tranquilo / épico / alegre], de un minuto, sin voz.`
          },
          {
            title: "Lyria 3 Pro — Jingle corto y pegadizo para anuncio",
            badge: "Extra",
            text: `Crea una canción corta y pegadiza para el anuncio de [marca], que transmita [sensación].`
          }
        ]
      },
      {
        title: "⚡ Real-time — Interacción en Directo",
        items: [
          {
            title: "Gemini 3.1 Flash Live — Simulador de entrevista de trabajo por voz",
            badge: "⭐ Del vídeo",
            text: `Vas a hacer de entrevistador para un puesto de [trabajo]. Hazme preguntas difíciles de una en una y yo te respondo por voz.`
          },
          {
            title: "Gemini 3.1 Flash Live — Cliente difícil para practicar ventas",
            badge: "Extra",
            text: `Haz de cliente indeciso que no quiere comprar. Yo te voy a vender [producto] y tú me pones pegas.`
          }
        ]
      }
    ]
  },
  {
    id: "google-nano-banana-prompts-visuales",
    title: "Google Nano Banana",
    thumbnail: "thumbnails/nanobanana.png",
    category: "Generación de Imágenes",
    tags: ["Nano Banana", "Imágenes", "Fotografía", "Editorial", "Posters", "Fondos", "Apple Style"],
    description: "Colección curada de prompts fotográficos y visuales de alta gama: estilo Apple, retratos, arquitectura, producto, posters tipográficos, infografías y reemplazo de fondos.",
    sections: [
      {
        title: "🤖 Asistente GPT Recomendado",
        items: [
          {
            title: "Crea tú tus propios prompts con el asistente Promptero Colectivo",
            badge: "⭐ Asistente GPT",
            linkUrl: "https://chatgpt.com/g/g-687a15ef729c81919e6488d749988636-promptero-colectivo",
            text: `https://chatgpt.com/g/g-687a15ef729c81919e6488d749988636-promptero-colectivo`
          }
        ]
      },
      {
        title: "Negocios y Marcas Premium",
        items: [
          {
            title: "Escena cinematográfica de negocios de lujo",
            badge: "Negocios",
            text: `Cinematic luxury business scene inside a modern glass office at sunset, confident entrepreneur standing beside a large holographic growth dashboard, vibrant blue and gold lighting, premium atmosphere, blurred city background, ultra-clean composition, high-end advertising look`
          },
          {
            title: "Lanzamiento futurista de producto tecnológico",
            badge: "Producto",
            text: `Futuristic premium product launch for a digital business brand, sleek black pedestal with glowing abstract 3D objects, electric blue and neon orange accents, dramatic studio lighting, soft blurred background, bold minimalist composition, luxurious tech campaign aesthetic`
          },
          {
            title: "Retrato de joven fundador exitoso en su oficina",
            badge: "Fundador",
            text: `Portrait of a successful young founder in a stylish modern workspace, direct eye contact with camera, confident subtle smile, elegant business outfit, warm cinematic lighting, vibrant brand colors, blurred background with screens and creative elements, premium personal brand photography, powerful and aspirational mood`
          }
        ]
      },
      {
        title: "Fotografía Editorial y Estilo Apple",
        items: [
          {
            title: "Retrato editorial ultra detallado de emprendedor",
            badge: "Editorial",
            text: `Ultra-detailed editorial portrait of a young creative entrepreneur, direct eye contact with camera, natural confident expression, soft daylight wrapping around the face, realistic skin texture, crisp eyes, subtle neutral wardrobe, clean modern interior, gentle background blur, refined color palette, precise composition, premium commercial photography, incredibly sharp and natural`
          },
          {
            title: "Arquitectura contemporánea en hora dorada",
            badge: "Arquitectura",
            text: `Striking contemporary architecture photographed at golden hour, massive curved concrete and glass structure surrounded by open landscape, perfect symmetry, dramatic natural shadows, subtle reflections, minimal human presence for scale, crystal-clear materials and textures, soft atmospheric depth, clean sky, sophisticated editorial composition, high-end architectural photography`
          },
          {
            title: "Fotografía minimalista de altavoz negro mate",
            badge: "Producto",
            text: `Minimalist product photograph of a beautifully designed matte-black wireless speaker on a seamless light-gray surface, soft directional studio lighting, delicate shadow, visible micro-textures and material details, perfect edges, subtle reflections, shallow depth of field, clean negative space, refined neutral colors, hyper-realistic premium advertising photography`
          }
        ]
      },
      {
        title: "Retratos, Arquitectura y Paisajes",
        items: [
          {
            title: "Primer plano de diseñadora con luz natural",
            badge: "Retrato",
            text: `Close-up portrait of a female designer in natural window light, direct eye contact with camera, calm focused expression, ultra-sharp eyes, realistic skin texture, subtle hair detail, clean neutral background with soft blur, elegant minimal styling, balanced composition, refined commercial photography, crisp natural colors, premium editorial look`
          },
          {
            title: "Paisaje aéreo de costa escarpada y mar profundo",
            badge: "Paisaje",
            text: `Aerial landscape of a dramatic coastline with deep blue water, sculpted cliffs and a narrow modern road cutting through the terrain, early morning light, subtle mist, rich natural textures, precise details in rock and vegetation, clean composition, realistic colors, cinematic depth, high-end travel photography`
          },
          {
            title: "Portátil de aluminio pulido sobre mesa de piedra",
            badge: "Producto",
            text: `Premium product photograph of a brushed aluminum laptop resting on a pale stone table beside a glass of water, soft morning sunlight, realistic reflections, visible metal texture, elegant shadows, minimal interior background softly out of focus, precise framing, sophisticated neutral palette, ultra-detailed commercial photography`
          },
          {
            title: "Macro ultra detallado de reloj mecánico de lujo",
            badge: "Macro",
            text: `Ultra-detailed macro photograph of a luxury mechanical watch resting on smooth dark stone, brushed metal surfaces, sapphire glass reflections, intricate dial textures, soft directional daylight, deep natural shadows, shallow depth of field, extremely crisp details, minimal composition, premium product photography`
          },
          {
            title: "Casa moderna de hormigón en acantilado costero",
            badge: "Arquitectura",
            text: `Modern concrete house built into a rugged coastal cliff, floor-to-ceiling glass walls, ocean stretching into the distance, overcast soft light, wet stone textures, subtle reflections, clean geometric composition, realistic materials, atmospheric depth, ultra-sharp architectural photography`
          },
          {
            title: "Retrato potente de director creativo al aire libre",
            badge: "Retrato",
            text: `Powerful close-up portrait of a young male creative director outdoors, direct eye contact with camera, calm confident expression, natural skin texture, individual hair strands visible, soft cloudy daylight, muted urban background with gentle bokeh, perfectly balanced tones, ultra-realistic editorial photography`
          },
          {
            title: "Escalera escultórica blanca en museo minimalista",
            badge: "Arquitectura",
            text: `A sculptural white staircase inside a minimalist concrete museum, soft natural light pouring through a massive skylight, precise geometric shadows, subtle stone textures, perfectly clean lines, quiet human figure for scale, neutral tones, ultra-detailed architectural photography, crisp and realistic`
          },
          {
            title: "Auriculares inalámbricos premium sobre tela natural",
            badge: "Producto",
            text: `Close-up product photograph of premium wireless headphones resting on folded natural fabric, brushed aluminum and soft matte textures clearly visible, soft side lighting, delicate realistic shadows, shallow depth of field, warm neutral background, extremely sharp material detail, refined commercial photography`
          },
          {
            title: "Gran lago alpino rodeado de montañas nevadas",
            badge: "Paisaje",
            text: `Vast alpine lake surrounded by dramatic snow-covered mountains, crystal-clear reflections on the water, early morning sunlight touching the peaks, subtle mist above the surface, detailed rock and vegetation textures, natural color balance, strong composition, ultra-sharp landscape photography`
          }
        ]
      },
      {
        title: "Retratos de Emprendedores",
        items: [
          {
            title: "Emprendedor moderno en estudio limpio",
            badge: "Estudio",
            text: `Ultra-detailed portrait of a modern entrepreneur in a clean studio, direct eye contact with camera, calm confident expression, soft natural daylight, ultra-sharp eyes, realistic skin texture, subtle neutral wardrobe, smooth blurred background, refined tones, premium editorial photography, crisp and natural`
          },
          {
            title: "Joven creativa profesional en espacio luminoso",
            badge: "Espacio de trabajo",
            text: `Close-up portrait of a young creative professional in a bright minimalist workspace, direct eye contact with camera, slight inspiring smile, detailed hair and skin texture, soft window light, elegant styling, blurred background with subtle desk elements, balanced composition, high-end commercial photography, incredibly sharp detail`
          },
          {
            title: "Fundador de negocio al aire libre en hora dorada",
            badge: "Hora Dorada",
            text: `Striking portrait of a business founder outdoors in soft golden-hour light, direct eye contact with camera, poised and self-assured expression, natural skin tones, visible fabric texture in a tailored jacket, softly blurred urban background, clean composition, premium lifestyle photography, ultra-realistic and highly detailed`
          }
        ]
      },
      {
        title: "Retratos con Colores Vivos",
        items: [
          {
            title: "Retrato con americana azul cobalto",
            badge: "Azul",
            text: `Ultra-detailed portrait of a young entrepreneur, direct eye contact with camera, confident and approachable expression, vivid cobalt blue blazer over a crisp neutral shirt, soft natural daylight, ultra-sharp eyes, realistic skin texture, clean blurred background, refined editorial composition, premium commercial photography, crisp and natural colors`
          },
          {
            title: "Retrato con suéter verde esmeralda",
            badge: "Verde",
            text: `Close-up portrait of a creative professional in a minimalist workspace, direct eye contact with camera, slight inspiring smile, rich emerald green sweater with elegant texture, soft window light, detailed hair and skin, blurred background with subtle modern interior elements, balanced framing, high-end portrait photography, ultra-realistic and highly detailed`
          },
          {
            title: "Retrato con chaqueta entallada color burdeos",
            badge: "Burdeos",
            text: `Striking portrait of a business founder outdoors, direct eye contact with camera, calm self-assured expression, tailored jacket in deep burgundy with subtle fabric texture, soft golden-hour light, natural skin tones, gently blurred urban background, clean composition, premium lifestyle photography, sharp realistic detail and polished color contrast`
          }
        ]
      },
      {
        title: "Fotografía de Producto",
        items: [
          {
            title: "Smartphone premium vertical sobre piedra lisa",
            badge: "Tecnología",
            text: `Ultra-detailed product photograph of a premium smartphone standing vertically on a smooth stone surface, deep cobalt blue finish, precise metal edges, subtle glass reflections, soft natural side light, delicate realistic shadow, clean blurred background, minimal composition, crisp material textures, refined commercial photography`
          },
          {
            title: "Frasco cosmético de cristal ámbar sobre pedestal de travertino",
            badge: "Belleza",
            text: `Premium skincare bottle in translucent amber glass placed on a pale travertine pedestal, warm sunlight passing through the bottle, soft geometric shadows, visible glass and label textures, muted beige background with gentle blur, elegant composition, ultra-sharp product photography, natural luxurious color palette`
          },
          {
            title: "Altavoz inalámbrico verde bosque sobre mesa de madera",
            badge: "Audio",
            text: `Minimalist photograph of a sleek wireless speaker in rich forest green fabric and brushed aluminum, placed on a clean wooden table, soft morning light, realistic texture detail, subtle reflections, shallow depth of field, blurred modern interior in the background, balanced composition, premium advertising photography`
          }
        ]
      },
      {
        title: "Ciudades del Mundo",
        items: [
          {
            title: "Tokio en hora azul tras la lluvia",
            badge: "Tokio",
            text: `Ultra-realistic street photography in Tokyo at blue hour, glowing storefronts and crosswalk reflections after light rain, pedestrians in natural motion, detailed signs and architecture, realistic skin tones, subtle depth of field, crisp textures, cinematic but natural lighting, premium travel photography`
          },
          {
            title: "Vista aérea de París al amanecer",
            badge: "París",
            text: `Ultra-realistic aerial view of Paris at sunrise, warm light hitting classic Haussmann rooftops, the Eiffel Tower in the distance, soft morning haze, intricate architectural detail, natural colors, balanced composition, atmospheric depth, high-end editorial city photography`
          },
          {
            title: "Nueva York en hora dorada con taxis amarillos",
            badge: "Nueva York",
            text: `Ultra-realistic street scene in New York City during golden hour, yellow taxis, glass towers, detailed brick facades, pedestrians crossing the avenue, warm sunlight between buildings, realistic shadows and reflections, subtle background blur, sharp textures, premium urban photography`
          }
        ]
      },
      {
        title: "Retratos con Tipografía Integrada",
        items: [
          {
            title: "Texto detrás del sujeto: BUILD WHAT MATTERS",
            badge: "Tipografía",
            text: `Ultra-detailed portrait of a young entrepreneur wearing a vivid cobalt blue jacket, direct eye contact with camera, confident expression, clean studio background, soft natural light, realistic skin texture, premium editorial photography, bold white text behind the subject reading “BUILD WHAT MATTERS”, perfectly legible typography, minimal composition`
          },
          {
            title: "Texto en la ropa: CREATE MORE",
            badge: "Tipografía",
            text: `Close-up portrait of a creative professional in a rich red sweater, direct eye contact with camera, subtle smile, soft window light, crisp facial details, blurred modern interior, refined commercial photography, small elegant text printed on the sweater reading “CREATE MORE”, clean sans-serif typography, realistic fabric integration`
          },
          {
            title: "Texto en valla publicitaria: FOCUS",
            badge: "Tipografía",
            text: `Striking portrait of a founder standing in a modern urban setting, emerald green jacket, direct eye contact with camera, calm confident expression, golden-hour light, softly blurred architecture, ultra-realistic skin and fabric detail, large minimalist billboard in the background displaying the word “FOCUS”, perfectly readable text, premium campaign photography`
          }
        ]
      },
      {
        title: "Pósters Minimalistas",
        items: [
          {
            title: "Póster tipográfico: THINK DIFFERENT",
            badge: "Póster",
            text: `Minimalist poster on a clean off-white background, large centered black sans-serif text reading “THINK DIFFERENT”, perfect spacing, strong typography, subtle paper texture, generous negative space, refined editorial design, crisp studio lighting, premium modern advertising aesthetic`
          },
          {
            title: "Póster en fondo azul cobalto: MAKE IT SIMPLE",
            badge: "Póster",
            text: `Bold minimal poster with a solid cobalt blue background, oversized white text reading “MAKE IT SIMPLE”, clean geometric sans-serif typography, perfectly centered layout, no extra elements, sharp edges, balanced spacing, high-end contemporary brand campaign design`
          },
          {
            title: "Póster elegante negro: CREATE",
            badge: "Póster",
            text: `Elegant black poster with a single word “CREATE” in large white uppercase letters, ultra-clean sans-serif font, subtle embossed texture, precise alignment, dramatic simplicity, lots of negative space, premium minimalist graphic design, crisp realistic print detail`
          }
        ]
      },
      {
        title: "Pósters Infográficos de Negocios",
        items: [
          {
            title: "Infografía: 5 pasos para construir una marca sólida",
            badge: "Infografía",
            text: `Minimalist infographic poster on a warm off-white background, clear black sans-serif typography, large headline reading “5 STEPS TO BUILD A STRONG BRAND”, followed by five short sections with bold numbers, concise supporting text, thin divider lines, subtle cobalt blue accents, perfect alignment, generous spacing, clean editorial grid, highly legible text, premium modern business design`
          },
          {
            title: "Infografía: Cómo las grandes ideas se convierten en productos",
            badge: "Infografía",
            text: `Clean business infographic with a soft light-gray background, bold title reading “HOW GREAT IDEAS BECOME GREAT PRODUCTS”, three structured columns labeled “RESEARCH”, “DESIGN”, and “LAUNCH”, each with short explanatory text and simple geometric icons, black typography with muted red accents, precise spacing, minimalist layout, clear hierarchy, refined corporate editorial style`
          },
          {
            title: "Infografía estratégica: El marco de crecimiento (Growth Framework)",
            badge: "Infografía",
            text: `Premium strategy infographic poster with a deep navy background, large white headline reading “THE GROWTH FRAMEWORK”, four horizontal sections titled “ATTRACT”, “ENGAGE”, “CONVERT”, and “RETAIN”, each section containing two short lines of readable supporting text, subtle orange highlights, thin grid lines, clean sans-serif typography, balanced composition, minimal but information-rich design, highly polished modern presentation aesthetic`
          }
        ]
      },
      {
        title: "Transformación de Fotos de Producto",
        items: [
          {
            title: "Transformación sobre superficie de nogal oscuro",
            badge: "Edición Producto",
            text: `Transform the original smartphone product photo into a premium luxury product photograph, preserving the exact product shape, proportions, colors, logo, labels and packaging details. Place the product on a refined dark walnut wooden surface with visible natural grain, soft warm side lighting, subtle realistic shadows, elegant reflections, shallow depth of field, softly blurred sophisticated interior background, rich neutral tones, ultra-sharp material textures, high-end commercial advertising photography, clean composition, realistic and polished`
          },
          {
            title: "Transformación sobre mesa de roble claro con piedra y lino",
            badge: "Edición Producto",
            text: `Transform the original product photo into an elegant editorial product shot, keeping the product completely unchanged and recognizable. Position it on a light oak wooden table beside subtle natural elements such as stone and linen, soft morning window light, delicate shadows, realistic reflections, warm beige and brown palette, blurred background, precise textures, premium lifestyle photography, minimal composition, ultra-realistic detail`
          },
          {
            title: "Transformación sobre pedestal escultórico de nogal",
            badge: "Edición Producto",
            text: `Transform the original mobile product photo into a refined luxury campaign image, preserving every important detail of the product exactly as photographed. Place it on a sculptural walnut pedestal with a dark wooden background, dramatic soft directional lighting, controlled highlights, deep natural shadows, subtle atmospheric depth, elegant negative space, extremely crisp product details, realistic materials, sophisticated color grading, premium commercial photography`
          }
        ]
      },
      {
        title: "Más Retratos con Texto de Campaña",
        items: [
          {
            title: "Texto al lado del sujeto: CREATE",
            badge: "Tipografía",
            text: `Ultra-detailed portrait of a young creative entrepreneur wearing a vivid cobalt blue jacket, direct eye contact with camera, confident expression, soft natural studio lighting, realistic skin texture, clean blurred background, bold minimalist white text beside the subject reading “CREATE”, perfectly legible typography, premium editorial photography`
          },
          {
            title: "Texto integrado en el fondo: BUILD YOUR VISION",
            badge: "Tipografía",
            text: `Close-up portrait of a female founder in a rich emerald green outfit, direct eye contact with camera, calm powerful expression, crisp facial details, soft window light, neutral blurred interior, elegant black text integrated into the background reading “BUILD YOUR VISION”, clean sans-serif typography, refined commercial photography`
          },
          {
            title: "Texto en valla publicitaria: START NOW",
            badge: "Tipografía",
            text: `Striking portrait of a modern business professional wearing a deep red jacket, direct eye contact with camera, subtle confident smile, natural golden-hour light, softly blurred urban background, large simple billboard behind the subject reading “START NOW”, perfectly readable text, balanced composition, ultra-realistic premium campaign photography`
          }
        ]
      },
      {
        title: "Reemplazo de Fondos Hiperrealista",
        items: [
          {
            title: "Prompt base de reemplazo de fondo hiperrealista",
            badge: "⭐ Base Español",
            text: `Transforma la imagen original manteniendo intacto al sujeto principal, su pose, proporciones, rostro, ropa e iluminación natural, y reemplaza únicamente el fondo por un paisaje espectacular y totalmente realista, como montañas alpinas, costa con acantilados, lago cristalino, desierto monumental o bosque entre niebla, integrando perspectiva, profundidad, sombras y reflejos de forma natural, con luz realista, colores equilibrados, textura detallada, atmósfera cinematográfica sutil y acabado fotográfico premium, ultra-realistic, highly detailed, seamless background replacement`
          },
          {
            title: "Fondo de montañas alpinas y lago cristalino",
            badge: "Alpino",
            text: `Replace the background with dramatic alpine mountains and a crystal-clear lake, realistic natural light, seamless integration, ultra-detailed photography.`
          },
          {
            title: "Fondo de acantilado oceánico en hora dorada",
            badge: "Costero",
            text: `Replace the background with a spectacular ocean cliff at golden hour, realistic shadows, natural depth, crisp premium photography.`
          },
          {
            title: "Fondo de gran desierto y montañas lejanas",
            badge: "Desierto",
            text: `Replace the background with a vast desert landscape and distant mountains, soft cinematic light, realistic perspective, high-end photography.`
          }
        ]
      },
      {
        title: "Reemplazo de Fondo — Bloqueo y Protección del Rostro",
        items: [
          {
            title: "Protección facial: Montañas alpinas y lago",
            badge: "Bloqueo Facial",
            text: `Replace only the background with dramatic alpine mountains and a crystal-clear lake, keep the boy completely unchanged, do not alter his face at all, realistic light, seamless integration, ultra-detailed photography.`
          },
          {
            title: "Protección facial: Acantilado oceánico al atardecer",
            badge: "Bloqueo Facial",
            text: `Replace only the background with a spectacular ocean cliff at golden hour, keep the boy completely unchanged, do not alter his face at all, natural shadows, realistic depth, premium photography.`
          },
          {
            title: "Protección facial: Desierto monumental",
            badge: "Bloqueo Facial",
            text: `Replace only the background with a vast desert landscape and distant mountains, keep the boy completely unchanged, do not alter his face at all, soft cinematic light, realistic perspective, high-end photography.`
          }
        ]
      },
      {
        title: "Reemplazo de Fondo — Integración de Luz y Desenfoque",
        items: [
          {
            title: "Luz y desenfoque ajustados: Montañas alpinas",
            badge: "Luz Ajustada",
            text: `Replace only the background with dramatic alpine mountains, keep the boy completely unchanged, do not alter his face, match the original lighting and color temperature, softly blurred background, realistic depth, seamless photography.`
          },
          {
            title: "Dirección de luz ajustada: Acantilado con bokeh natural",
            badge: "Luz Ajustada",
            text: `Replace only the background with a spectacular ocean cliff at golden hour, keep the boy and his face exactly unchanged, match the original light direction and intensity, natural bokeh background, realistic shadows, seamless integration.`
          },
          {
            title: "Temperatura de luz ajustada: Desierto y cordillera",
            badge: "Luz Ajustada",
            text: `Replace only the background with a vast desert and distant mountains, keep the boy completely untouched, preserve his face exactly, match the original lighting perfectly, softly blurred landscape, realistic perspective, premium photography.`
          }
        ]
      },
      {
        title: "Fondos de Poblado Africano Auténtico",
        items: [
          {
            title: "Poblado africano con chozas tradicionales",
            badge: "Poblado",
            text: `Place the same person in a realistic African village with traditional huts, keep his face completely unchanged, match the original lighting, softly blurred background, natural colors, seamless photography.`
          },
          {
            title: "Calle rústica con casas de arcilla y mercado local",
            badge: "Poblado",
            text: `Place the same person on a dusty street in a rural African village with clay houses and local market stalls, preserve his face exactly, realistic matched light, shallow depth of field, ultra-natural photography.`
          },
          {
            title: "Poblado con cabañas de paja y paisaje cálido",
            badge: "Poblado",
            text: `Place the same person in a beautiful African village surrounded by traditional thatched huts and warm earthy landscapes, do not alter his face or features, matching sunlight, realistic shadows, soft background blur.`
          },
          {
            title: "Poblado rural con vestimentas tradicionales",
            badge: "Documental",
            text: `Place the same person in a realistic rural African village with villagers wearing traditional wrapped garments, keep his face completely unchanged, match the original lighting, softly blurred background, natural documentary photography.`
          },
          {
            title: "Sendero de aldea con trajes culturales",
            badge: "Cultura",
            text: `Place the same person on a village path surrounded by traditional huts and people in culturally inspired traditional clothing, preserve his face exactly, realistic matched light, shallow depth of field.`
          },
          {
            title: "Entorno auténtico con arquitectura de barro",
            badge: "Arquitectura",
            text: `Place the same person in an authentic African village setting with earthy architecture and traditional garments, do not alter his face or body, match the original sunlight, soft background blur, seamless realistic photography.`
          }
        ]
      },
      {
        title: "Infografías de Bases de Datos",
        items: [
          {
            title: "Infografía minimalista con datos verificados",
            badge: "Datos",
            text: `Minimalist database infographic using only the real data provided, no invented numbers or statistics, clean tables, simple charts, clear labels, white background, black typography, subtle blue accents, modern editorial design.`
          },
          {
            title: "Panel de control profesional con métricas reales",
            badge: "Panel",
            text: `Professional data dashboard infographic built exclusively from the supplied dataset, no fabricated values, organized metrics, bar charts, percentages and tables, clean grid layout, highly readable typography, premium minimal business style.`
          },
          {
            title: "Póster de visualización estructurada de datos",
            badge: "Visualización",
            text: `Clean database visualization poster showing only verified input data, no made-up information, structured rows, key metrics, charts and category labels, soft gray background, bold headings, simple color coding, polished modern infographic design.`
          }
        ]
      },
      {
        title: "Mascota Deportiva de Baloncesto",
        items: [
          {
            title: "Primer plano de mascota divertida de baloncesto",
            badge: "Mascota",
            text: `Close-up portrait of a funny basketball team mascot, colorful oversized costume, direct eye contact with camera, playful energetic expression, vibrant blue and orange details, soft arena lights, blurred background, ultra-detailed, sharp premium photography`
          },
          {
            title: "Personaje deportivo alegre y carismático",
            badge: "Mascota",
            text: `Portrait close-up of a cheerful sports mascot character for a basketball team, bold expressive face, bright colorful uniform, dynamic and friendly pose, vivid lighting, shallow depth of field, blurred stadium background, crisp high-end commercial photography`
          },
          {
            title: "Mascota con gran sonrisa y traje rojo y amarillo",
            badge: "Mascota",
            text: `Ultra-detailed close-up portrait of a charismatic basketball mascot, big smile, exaggerated features, vibrant red and yellow costume, direct look to camera, fun and memorable mood, soft professional lighting, bokeh arena background, premium editorial photography`
          }
        ]
      },
      {
        title: "Mascota Alrededor del Mundo",
        items: [
          {
            title: "Mascota en Times Square, Nueva York",
            badge: "Nueva York",
            text: `The same basketball team mascot in Times Square, New York, colorful costume, playful pose, direct eye contact, vibrant city lights, iconic billboards in the softly blurred background, ultra-detailed, realistic premium photography`
          },
          {
            title: "Mascota frente a la Torre Eiffel, París",
            badge: "París",
            text: `The same basketball team mascot in front of the Eiffel Tower in Paris, cheerful expression, bold colorful uniform, stylish portrait composition, warm natural light, elegant city background softly blurred, ultra-realistic high-end photography`
          },
          {
            title: "Mascota en el Cruce de Shibuya, Tokio",
            badge: "Tokio",
            text: `The same basketball team mascot in Tokyo at Shibuya Crossing, energetic and funny attitude, vivid costume details, direct eye contact, neon signs and busy street softly blurred in the background, sharp premium commercial photography`
          },
          {
            title: "Mascota en Santorini, Grecia",
            badge: "Santorini",
            text: `The same basketball team mascot in Santorini, Greece, funny and charismatic pose, direct eye contact, vibrant costume, whitewashed buildings and blue domes softly blurred in the background, warm natural light, ultra-detailed realistic photography`
          },
          {
            title: "Mascota en Río de Janeiro, Brasil",
            badge: "Río",
            text: `The same basketball team mascot in Rio de Janeiro, Brazil, playful expression, colorful team outfit, Christ the Redeemer and lush mountains softly blurred in the background, bright daylight, sharp premium travel photography`
          },
          {
            title: "Mascota en Dubái frente al Burj Khalifa",
            badge: "Dubái",
            text: `The same basketball team mascot in Dubai, United Arab Emirates, energetic and humorous attitude, bold costume details, modern skyline with the Burj Khalifa softly blurred in the background, golden-hour light, ultra-realistic high-end photography`
          }
        ]
      }
    ]
  }
];

