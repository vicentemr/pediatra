# Web del Dr. Vicente Mori · Pediatra en Málaga (demo)

Web estática en **Astro** con perfil, especialidades, cursos de alimentación infantil, reserva de citas con pago y una **landing para anuncios**, en español e inglés.

> ⚠️ Todo el contenido (nombre, bio, precios, dirección, horarios, colegiado) es **de ejemplo**.

## Páginas

| Español | Inglés | Qué es |
|---|---|---|
| `/` | `/en/` | Perfil, especialidades, cursos, reserva y preguntas frecuentes |
| `/cursos/` | `/en/courses/` | Todos los cursos con detalle y botón de compra |
| `/reservar/` | `/en/book/` | Reserva y pago de cita |
| `/landing/` | `/en/landing/` | Landing para Google/Meta Ads (sin menú, `noindex`) |
| `/legal/` | `/en/legal/` | Aviso legal, privacidad, cookies (textos pendientes) |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

Requiere Node 18.20+ (probado con Node 22).

## Editar el contenido

Casi todo está en **`src/data/site.ts`** (doctor, contacto, consultas y precios, especialidades, cursos, FAQ). Los textos de la interfaz están en `src/i18n/ui.ts`.

## Pasar de demo a real

1. **Citas con pago:** el pediatra crea su cuenta en [Cal.com](https://cal.com), conecta Stripe y crea un evento por cada consulta (slugs: `primera-consulta`, `revision`, `consulta-alimentacion`). Poner su URL en `booking.calUrl`. La web mostrará su calendario real en lugar del selector de ejemplo.
2. **Cursos:** crear un *Payment Link* en Stripe por curso y pegarlo en `stripeLink`.
3. Poner `demo: false` en `src/data/site.ts` para quitar los avisos de demo.
4. Cambiar `site` en `astro.config.mjs` por el dominio real.
5. Completar los textos legales en `src/views/LegalView.astro`.
6. Al activar anuncios: añadir el píxel de Meta y la etiqueta de Google en `src/layouts/Base.astro`, junto con un banner de cookies.

## Publicar

Cloudflare Pages o Netlify (plan gratuito): comando `npm run build`, carpeta `dist`.

## Diseño

Se hizo con la skill **impeccable** (en `.claude/skills/impeccable`). Contexto del producto en `PRODUCT.md`, sistema visual en `DESIGN.md`.
