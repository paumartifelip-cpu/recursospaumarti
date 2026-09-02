// Base de datos de vídeos y prompts de Pau Martí
// Cada vídeo tiene sus secciones, etiquetas y lista de prompts en recuadros independientes listos para copiar.

const VIDEOS_DATA = [
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

