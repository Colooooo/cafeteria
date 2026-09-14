# Café Aurora

Web en React + TypeScript + Vite, adaptable a escritorio y celular. Incluye menú filtrable, navegación móvil y mapa de OpenStreetMap.

## Desarrollo

Requisitos: Node.js 22.12 o superior y npm.

```bash
npm install
npm run dev
```

Abrí la URL que muestra Vite en la terminal.

## Verificación y producción

```bash
npm run typecheck
npm run build
npm run preview
```

El resultado publicable se genera en `dist/`. Se puede alojar en cualquier hosting estático. No necesita un servidor de aplicaciones ni variables de entorno.

## Estructura

- `src/App.tsx`: página, historia, opiniones y ubicación.
- `src/components/`: marca, navegación y menú.
- `src/data/menu.ts`: productos, categorías, precios y fotos.
- `src/styles.css`: estilos y diseño adaptable.
- `public/favicon.svg`: icono de la marca.
- `original/`: respaldo del HTML y CSS originales.

Los nueve productos, precios, historia, dirección, horario y opiniones proceden del HTML original. Las descripciones breves y el texto editorial se adaptaron para la nueva presentación. Confirmá los datos comerciales antes de publicar. No se agregaron días de apertura, teléfonos, redes sociales, puntuaciones ni nombres de clientes sin información disponible.

Las imágenes se cargan desde Unsplash; las fuentes, desde Google Fonts. El mapa usa OpenStreetMap con atribución visible y no necesita API key. Estos recursos requieren conexión a Internet. La clave de MapTiler del HTML original no se utiliza en la nueva página; la copia histórica conserva el archivo original.

## Git

No es necesario para ejecutar la página. Es recomendable para guardar versiones:

```bash
git init
git add .
git commit -m "Crear web de Café Aurora en React"
```

Antes de publicar el repositorio, revisá `original/index.html`, que conserva la clave pública del mapa anterior.
