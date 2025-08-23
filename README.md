# Hermanos Jota - Página de Catálogo de Muebles

## Descripción

Esta es una página de catálogo de muebles moderna y elegante que refleja la identidad visual oficial de **Hermanos Jota**. La página permite a los clientes ver todos los productos disponibles en una grilla atractiva y fácil de navegar, manteniendo la coherencia con el manual de marca oficial.

## Características Principales

### 🎯 **Funcionalidades Implementadas**
- **Grilla de Muebles**: Muestra los 12 productos en tarjetas elegantes y atractivas
- **Campo de Búsqueda**: Permite filtrar muebles por nombre, descripción o categoría
- **Diseño Responsive**: Se adapta perfectamente a todos los dispositivos
- **Navegación Intuitiva**: Header sticky con navegación clara
- **Enlaces a Detalles**: Cada mueble es un enlace a su página de detalle

### 🔍 **Sistema de Búsqueda (Bonus)**
- Búsqueda en tiempo real mientras escribes
- Filtrado por múltiples campos (nombre, descripción, categoría)
- Debounce para mejor rendimiento
- Contador de productos mostrados
- Limpieza de búsqueda con tecla Escape
- Mensaje cuando no hay resultados

### 🎨 **Identidad Visual Hermanos Jota**
- **Paleta de Colores Oficial**: Siena Tostado, Verde Salvia, Alabastro Cálido
- **Tipografías Oficiales**: Inter para texto, Playfair Display para títulos
- **Estilo Elegante**: Refleja la sofisticación y artesanía de la marca
- **Diseño Premium**: Sombras, transiciones y efectos hover elegantes
- **Responsive**: Grid que se adapta automáticamente al tamaño de pantalla
- **Accesible**: Focus visible, contraste adecuado y navegación por teclado

## Estructura de Archivos

```
ITBA-ecommerce-1/
├── productos.html      # Página principal del catálogo
├── productos.js        # Lógica JavaScript y datos de muebles
├── styles.css          # Estilos CSS con identidad Hermanos Jota
└── README.md           # Esta documentación
```

## Muebles Incluidos

La página incluye **12 muebles de alta calidad** de diferentes categorías:

- **Aparadores**: Aparador Uspallata (Nogal sostenible)
- **Bibliotecas**: Biblioteca Recoleta (Sistema modular)
- **Asientos**: Butaca Mendoza, Sillón Copacabana
- **Mesas**: Mesa de Centro Araucaria, Mesa Comedor Pampa
- **Dormitorio**: Cama Neuquén, Mesa de Noche Aconcagua
- **Comedor**: Sillas Córdoba (Set de 4)
- **Oficina**: Escritorio Costa, Silla de Trabajo Belgrano
- **Salón**: Sofá Patagonia (3 cuerpos)

## Cómo Usar

### 1. **Ver Muebles**
- Abre `productos.html` en tu navegador
- Los muebles se cargan automáticamente desde `productos.js`

### 2. **Buscar Muebles**
- Usa el campo de búsqueda en la parte superior
- Escribe cualquier término (nombre, descripción o categoría)
- La búsqueda es instantánea y se actualiza en tiempo real

### 3. **Navegar por Muebles**
- Haz clic en cualquier mueble para ir a su página de detalle
- Usa la navegación del header para moverse entre secciones

### 4. **Responsive Design**
- La página se adapta automáticamente a móviles, tablets y desktop
- En móviles, las tarjetas se apilan en una sola columna
- El header se reorganiza para mejor usabilidad en pantallas pequeñas

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Grid, Flexbox, Variables CSS, Animaciones
- **JavaScript ES6+**: Funciones modernas, event listeners, DOM manipulation
- **Google Fonts**: Inter y Playfair Display (tipografías oficiales)

## Identidad de Marca

### 🎨 **Paleta de Colores Oficial**
- **Siena Tostado** (#A0522D) - Color principal de marca
- **Verde Salvia** (#87A96B) - Acento secundario, sustentabilidad
- **Alabastro Cálido** (#F5E6D3) - Fondos principales
- **Vara de Oro** (#D4A437) - Detalles premium
- **Rosa Polvoriento** (#C47A6D) - Acentos suaves

### ✍️ **Tipografías Oficiales**
- **Inter**: Para texto del cuerpo y elementos de UI
- **Playfair Display**: Para títulos editoriales y nombres de productos

### 🎯 **Personalidad de Marca**
- Cálida pero no empalagosa
- Conocedora pero no pretenciosa
- Nostálgica pero innovadora
- Sofisticada pero accesible

## Personalización

### Agregar Nuevos Muebles
Edita `productos.js` y agrega nuevos objetos al array `productos`:

```javascript
{
  id: 13,
  nombre: "Nuevo Mueble",
  descripcion: "Descripción del nuevo mueble",
  precio: "$2,999.99",
  imagen: "ruta/a/imagen.jpg",
  enlace: "detalle-producto13.html",
  categoria: "Nueva Categoría",
  especificaciones: {
    medidas: "Dimensiones del mueble",
    materiales: "Materiales utilizados",
    acabado: "Tipo de acabado"
  }
}
```

### Cambiar Estilos
Modifica `styles.css` usando las variables CSS definidas en `:root`:

```css
:root {
  --burnt-sienna: #tu-color;
  --sage-green: #tu-verde;
  /* ... más variables */
}
```

## Compatibilidad

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Móviles** iOS 12+, Android 8+

## Estructura HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Meta tags y enlaces CSS -->
  </head>
  <body>
    <header class="header">
      <!-- Navegación principal -->
    </header>
    
    <section class="hero">
      <!-- Título y descripción -->
    </section>
    
    <section class="search-section">
      <!-- Campo de búsqueda -->
    </section>
    
    <main class="main-content">
      <!-- Grilla de muebles -->
    </main>
    
    <footer class="footer">
      <!-- Pie de página -->
    </footer>
  </body>
</html>
```

## Funcionalidades JavaScript

- **Carga de Muebles**: Renderizado dinámico desde array de datos
- **Búsqueda en Tiempo Real**: Filtrado instantáneo con debounce
- **Contador Dinámico**: Muestra cantidad de muebles filtrados
- **Manejo de Estados**: Mensajes cuando no hay resultados
- **Event Listeners**: Búsqueda, teclas especiales, DOM ready

## CSS Grid Layout

```css
.productos-grilla {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
}
```

- **Auto-fill**: Se ajusta automáticamente al ancho disponible
- **Minmax**: Mínimo 320px, máximo 1fr (espacio disponible)
- **Responsive**: Se adapta a diferentes tamaños de pantalla

## Contribuir

Para mejorar esta página:

1. Fork del repositorio
2. Crea una rama para tu feature
3. Implementa los cambios
4. Prueba en diferentes dispositivos
5. Envía un pull request

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para fines educativos y comerciales.

---

**Desarrollado para Hermanos Jota** 🚀  
*Redescubriendo el arte de vivir desde 2025*