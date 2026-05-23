# Web Scraping Atlas Polínico del NOA

Crawler y scraper desarrollado en Node.js para extraer, estructurar y modernizar el contenido del sitio:

## Atlas Polínico del NOA – Fundación Miguel Lillo

El objetivo del proyecto es reconstruir el contenido de la palinoteca en un formato moderno (JSON/API/frontend).

---

# 🚀 Tecnologías utilizadas

- Node.js
- Axios
- Cheerio

---

# 📦 Instalación

## Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/TU-REPO.git
```

## Entrar al proyecto

```bash
cd web-scrapping
```

## Instalar dependencias

```bash
npm install
```

---

# ▶️ Ejecutar el crawler

```bash
node index.js
```

El crawler:

- navega automáticamente por las páginas HTML
- detecta enlaces internos
- extrae:
  - títulos
  - imágenes
  - descripciones
- genera un archivo:

```text
output.json
```

---

# 📁 Estructura del proyecto

```text
web-scrapping/
│
├── index.js
├── package.json
├── output.json
└── README.md
```

---

# 🧠 Cómo funciona

El crawler:

1. comienza desde la página principal
2. extrae todos los enlaces HTML
3. visita recursivamente cada página
4. evita URLs repetidas
5. almacena el contenido scrapeado en JSON

---

# 📄 Ejemplo de salida

```json
{
  "url": "https://...",
  "title": "Asteraceae",
  "description": "Descripción...",
  "images": [
    "https://..."
  ]
}
```

---

# ⚠️ Consideraciones

El sitio original utiliza:

- HTML antiguo
- tablas
- rutas relativas
- estructura inconsistente

Por eso:

- algunas páginas pueden fallar
- existen contenidos duplicados
- puede requerirse limpieza posterior de datos

---

# 🔮 Próximos pasos

- limpieza automática del JSON
- exportación a base de datos
- API REST
- frontend moderno con React/Next.js
- buscador taxonómico

---

# 📜 Licencia

Proyecto educativo y experimental.

El contenido original pertenece a la Fundación Miguel Lillo.
