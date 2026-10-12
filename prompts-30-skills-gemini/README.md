# 30 Habilidades de Gemini — Prompts para Copiar y Pegar

Guía oficial con las **30 nuevas habilidades de Gemini** listas para copiar y pegar de **Pau Martí**.

---

## 🚀 Cómo se usan

1. Abre **Gemini**.
2. Pega el prompt tal cual en el chat y envíalo. Gemini creará la habilidad sola.
3. Luego la usas escribiendo `/` (pronto será `@`) y el nombre de la habilidad.

---

## ⚡ Dos avisos importantes

- **Los huecos van entre corchetes**: Donde pone `[PEGA AQUÍ…]` o `[…]`, cambia eso por tus propios datos.
- **Apps conectadas**: Las habilidades que usan tu correo (Gmail), calendario o Google Drive necesitan tener esas extensiones conectadas en Gemini.
- **Habilidad 26 (`/maquina-de-propuestas`)**: Requiere haber creado previamente las habilidades 1 (`/propuesta-cliente`), 7 (`/imita-mi-voz`) y 12 (`/brief-miniatura`).

---

## 💼 Dinero y Negocio

### 1. `/propuesta-cliente`
```text
Crea una habilidad llamada «propuesta-cliente». Descripción: Úsala cuando te describa un posible cliente y necesite una propuesta de venta. Instrucciones: con mis servicios y precios (son estos: [PEGA AQUÍ TUS SERVICIOS Y PRECIOS]), prepara una propuesta con diagnóstico breve del cliente, qué le ofrezco, entregables, precio y siguiente paso. Tono cercano, convincente y orientado a cerrar, sin exagerar. Si falta algún dato del cliente, pregúntamelo antes de escribir.
```

### 2. `/presupuesto-express`
```text
Crea una habilidad llamada «presupuesto-express». Descripción: Úsala cuando te dé datos sueltos de un trabajo y necesite un presupuesto o factura. Instrucciones: conviértelos en un documento con este formato fijo: encabezado, concepto, cantidad, precio unitario, total, condiciones y validez. Mantén siempre el mismo orden. Nunca inventes importes; si falta un precio o un dato, pídemelo.
```

### 3. `/adapta-mi-cv`
```text
Crea una habilidad llamada «adapta-mi-cv». Descripción: Úsala cuando te dé mi CV y una oferta de trabajo o proyecto. Instrucciones: compara los dos, extrae las palabras clave y los requisitos de la oferta, pregúntame por lo que falte, y reescribe mi CV y una carta de presentación enfocados a esa oferta. No inventes experiencia que no tengo.
```

### 4. `/radar-precios`
```text
Crea una habilidad llamada «radar-precios». Descripción: Úsala cuando te dé mi lista de precios y la de un competidor. Instrucciones: compáralas servicio por servicio, dime dónde estoy caro o barato, y sugiéreme cómo posicionar y justificar mi precio. Respóndeme en una tabla sencilla.
```

### 5. `/cobros-pendientes`
```text
Crea una habilidad llamada «cobros-pendientes». Descripción: Úsala cuando te suba o pegue mi lista de facturas. Instrucciones: 1) detecta las facturas impagadas, 2) ordénalas de la más antigua a la más reciente, 3) redacta un correo de recordatorio por cada una, firme pero amable, con importe y fecha. Déjalos listos para que yo los revise, no los envíes. Nunca inventes datos; si falta el correo del cliente, pídemelo.
```

### 6. `/guion-de-ventas`
```text
Crea una habilidad llamada «guion-de-ventas». Descripción: Úsala cuando te dé las características de un producto o servicio. Instrucciones: convierte cada característica en un beneficio para el cliente, lístame las 5 objeciones más probables con una respuesta para cada una, y termina con una frase de cierre. Lenguaje simple, de persona a persona.
```

---

## 📱 Creador de Contenido

### 7. `/imita-mi-voz`
```text
Crea una habilidad llamada «imita-mi-voz». Descripción: Úsala cuando te pida escribir cualquier texto público mío. Instrucciones: aprende mi estilo con estos ejemplos ([PEGA AQUÍ 2 O 3 TEXTOS TUYOS]). Usa mi tono, mi longitud de frase y mi vocabulario. Frases cortas, cercanas, sin jerga. Si te falta contexto, pregúntame antes de inventar.
```

### 8. `/trocea-mi-video`
```text
Crea una habilidad llamada «trocea-mi-video». Descripción: Úsala cuando te pegue la transcripción de un vídeo largo. Instrucciones: encuentra los 10 mejores momentos para clips cortos. Para cada uno dame el minuto donde empieza, una frase gancho y un título corto. Ordénalos del más potente al menos potente.
```

### 9. `/un-contenido-diez-piezas`
```text
Crea una habilidad llamada «un-contenido-diez-piezas». Descripción: Úsala cuando te dé un vídeo, un artículo o una idea. Instrucciones: con mi estilo, crea un hilo para X, un texto de carrusel para Instagram, un guion de short y un texto de newsletter. Al final, propón una idea de infografía. Mantén la misma idea central en todas las piezas.
```

### 10. `/titulos-que-venden`
```text
Crea una habilidad llamada «titulos-que-venden». Descripción: Úsala cuando te dé el tema de un vídeo. Instrucciones: dame 10 títulos con gancho, cada uno de menos de 60 caracteres, ordenados del mejor al peor. Evita títulos vagos; cada uno debe prometer algo concreto.
```

### 11. `/comentarios-a-ideas`
```text
Crea una habilidad llamada «comentarios-a-ideas». Descripción: Úsala cuando te pegue los comentarios de mis vídeos o redes. Instrucciones: detecta qué está pidiendo la gente (dudas, temas repetidos, quejas) y conviértelo en 5 ideas de contenido nuevo, cada una con un título propuesto y por qué funcionaría.
```

### 12. `/brief-miniatura`
```text
Crea una habilidad llamada «brief-miniatura». Descripción: Úsala cuando te dé el título de un vídeo. Instrucciones: propón el plan de la miniatura: un texto de máximo 3 palabras que complemente al título (no que lo repita), un color de fondo, la expresión de cara y un icono. Explica en una línea por qué.
```

---

## ⚡ Productividad y Apps Conectadas

### 13. `/bandeja-a-cero`
```text
Crea una habilidad llamada «bandeja-a-cero». Descripción: Úsala cuando te pida revisar mi correo. Instrucciones: usando mi Gmail conectado, resume los correos sin leer, márcame los urgentes primero y prepárame un borrador de respuesta para los que lo necesiten. No envíes nada; déjalo en borrador para que yo lo revise.
```

### 14. `/prepara-mi-reunion`
```text
Crea una habilidad llamada «prepara-mi-reunion». Descripción: Úsala cuando te diga que tengo una reunión. Instrucciones: con la info que te dé (y mi calendario conectado si aplica), prepárame un brief con contexto, objetivo de la reunión, puntos a tratar y temas delicados a cuidar. Media página como mucho. Si falta algún dato, pídemelo.
```

### 15. `/acta-automatica`
```text
Crea una habilidad llamada «acta-automatica». Descripción: Úsala cuando te pegue las notas de una reunión. Instrucciones: hazme un acta con las decisiones tomadas, el responsable de cada cosa y la fecha límite. Luego crea esas tareas en mi Google Tasks. No inventes responsables; si no está claro, pregúntame.
```

### 16. `/planifica-por-energia`
```text
Crea una habilidad llamada «planifica-por-energia». Descripción: Úsala cuando te pida organizar mi semana. Instrucciones: mira mi calendario y mi lista de tareas y ordénalas según mi energía: lo más difícil en mis horas de más foco (dímelas si no las sabes) y lo fácil o repetitivo en las horas flojas. Dámelo como un plan por días.
```

### 17. `/viaje-listo`
```text
Crea una habilidad llamada «viaje-listo». Descripción: Úsala cuando te diga destino y fechas de un viaje. Instrucciones: prepárame un itinerario día a día, una lista de qué meter en la maleta según el clima y propón recordatorios para mi calendario. Pregúntame si viajo por trabajo o por placer antes de empezar.
```

### 18. `/pdf-honesto`
```text
Crea una habilidad llamada «pdf-honesto». Descripción: Úsala cuando te suba un PDF y te pregunte por su contenido. Instrucciones: responde SOLO con lo que aparece en el documento. Si algo no está, dilo claramente («no aparece en el documento»); nunca lo inventes ni lo supongas. Cita la página cuando puedas.
```

### 19. `/hoja-limpia`
```text
Crea una habilidad llamada «hoja-limpia». Descripción: Úsala cuando te suba una hoja de cálculo desordenada. Instrucciones: límpiala (quita filas vacías, unifica formatos), organiza los datos en una tabla clara, añade las fórmulas o totales que falten y señálame los números raros o que no cuadran. No borres datos sin avisarme.
```

---

## 🧩 Avanzadas (Rompecabezas)

### 20. `/segundo-cerebro`
```text
Crea una habilidad llamada «segundo-cerebro». Descripción: Úsala cuando te haga preguntas sobre mis propios documentos. Instrucciones: busca la respuesta en mis archivos de Google Drive conectados y respóndeme citando de qué documento sale. Si no lo encuentras en mis archivos, dímelo en vez de inventar.
```

### 21. `/traductor-con-alma`
```text
Crea una habilidad llamada «traductor-con-alma». Descripción: Úsala cuando te pida traducir un texto mío. Instrucciones: traduce manteniendo mi tono (no literal) y adáptalo al país que te indique, con sus expresiones naturales. Pregúntame el país de destino si no te lo he dicho.
```

### 22. `/abogado-del-diablo`
```text
Crea una habilidad llamada «abogado-del-diablo». Descripción: Úsala cuando te dé una idea o un texto y te pida que lo critiques. Instrucciones: ponte en la piel de un cliente escéptico y dame las 5 pegas u objeciones más fuertes, y para cada una, cómo la rebatiría yo. No me des la razón por quedar bien; sé honesto.
```

### 23. `/de-foto-a-texto`
```text
Crea una habilidad llamada «de-foto-a-texto». Descripción: Úsala cuando te suba la foto de una pizarra, un ticket, una tarjeta o notas a mano. Instrucciones: pásalo a texto ordenado. Si son datos (gastos, contactos), organízalo en una tabla. Si algo no se lee bien, márcalo como [ilegible] en vez de adivinar.
```

### 24. `/explica-como-a-un-nino`
```text
Crea una habilidad llamada «explica-como-a-un-nino». Descripción: Úsala cuando te pida entender un tema difícil. Instrucciones: explícamelo con una comparación sencilla de la vida diaria, en frases cortas, como si se lo contaras a un niño o a un abuelo. Sin tecnicismos. Termina con un resumen de una frase.
```

### 25. `/profe-particular`
```text
Crea una habilidad llamada «profe-particular». Descripción: Úsala cuando te dé un temario, apuntes o un PDF para estudiar. Instrucciones: hazme un test de 10 preguntas tipo test sobre ese material. Espera a que responda y luego corrígeme, explicando por qué cada respuesta es correcta o no.
```

### 26. `/maquina-de-propuestas` *(Antes crea las habilidades 1, 7 y 12)*
```text
Crea una habilidad llamada «maquina-de-propuestas». Descripción: Úsala cuando te describa un cliente y quiera una propuesta completa de una sola vez. Instrucciones: combina mis habilidades imita-mi-voz, propuesta-cliente y brief-miniatura. Con los datos del cliente, entrégame 1) la propuesta escrita con mi voz, 2) el precio con mi formato y 3) una idea de imagen para presentarla. Si falta un dato del cliente, pídemelo.
```

### 27. `/manual-en-un-clic`
```text
Crea una habilidad llamada «manual-en-un-clic». Descripción: Úsala cuando te explique cómo hago una tarea y quiera convertirla en un manual. Instrucciones: conviértelo en un procedimiento paso a paso que pueda seguir otra persona: objetivo, materiales o accesos necesarios, pasos numerados y errores a evitar. Lenguaje claro para alguien que lo hace por primera vez.
```

---

## 🌱 Vida Diaria

### 28. `/chef-de-lo-que-tengo`
```text
Crea una habilidad llamada «chef-de-lo-que-tengo». Descripción: Úsala cuando te diga qué ingredientes tengo. Instrucciones: dame 3 recetas sencillas que pueda hacer con eso, con los pasos, y al final una lista de la compra solo con lo poco que falte. Pregúntame cuántas personas somos si no te lo digo.
```

### 29. `/entrenador-realista`
```text
Crea una habilidad llamada «entrenador-realista». Descripción: Úsala cuando te pida organizar mi rutina de ejercicio. Instrucciones: con el tiempo real que tengo (dímelo), arma un plan de actividad semanal realista y fácil de mantener. Si un día me salto algo, reajústalo sin regañarme. No des consejos médicos ni de dieta; para eso, recomiéndame consultar a un profesional.
```

### 30. `/abogado-del-correo-dificil`
```text
Crea una habilidad llamada «abogado-del-correo-dificil». Descripción: Úsala cuando tenga que escribir un mensaje incómodo (decir que no, reclamar, pedir un aumento). Instrucciones: con la situación que te cuente, dame 2 versiones del mensaje, una suave y diplomática y otra firme y directa, ambas educadas y cortas. Dime en una línea cuándo usar cada una.
```
