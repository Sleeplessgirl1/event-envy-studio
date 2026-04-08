

## Plan: Ajustar heroes de secciones y hero de Nosotros

### Contexto

- **Inicio** (Index.tsx): Hero con `<img>` + overlay `bg-brown-dark/40`. Este es el estilo de referencia.
- **Catálogo** (Catalogo.tsx): Hero con background-image CSS + overlay `bg-background/[0.72]` (muy opaco, 72%).
- **Nosotros** (Nosotros.tsx): Hero con background-image CSS + `opacity-25` en imagen + overlay extra `bg-[#713345]/[0.07]`. Tiene título grande "Nosotros" y subtítulo. Padding vertical `py-32 md:py-40` (muy alto).
- **Inspo** y **Contacto**: No tienen hero con imagen de fondo, solo texto. No aplican cambios.

### Cambios

#### 1. Catálogo — Reducir opacidad del overlay
- Cambiar `bg-background/[0.72]` a `bg-black/40` para igualar el estilo del inicio (overlay oscuro al 40%).

#### 2. Nosotros — Ajustar hero
- **Quitar título**: Eliminar el `<div>` con el texto "Experiencia 013" y el `<h1>` "Nosotros".
- **Imagen visible con colores reales**: Cambiar `opacity-25` a `opacity-100` en la imagen de fondo, y reemplazar la sección `bg-white` por un enfoque similar al inicio: imagen a tamaño completo con overlay suave `bg-black/40`.
- **Reducir altura vertical**: Cambiar `py-32 md:py-40` a `py-16 md:py-24` para que la sección "Sobre nosotros" se vea debajo sin hacer scroll.
- **Quitar overlay café/vino**: Eliminar el div `bg-[#713345]/[0.07]`.

#### Archivos a modificar
- `src/pages/Catalogo.tsx` (línea 38)
- `src/pages/Nosotros.tsx` (líneas 15-29)

