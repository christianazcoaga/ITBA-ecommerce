// Array de productos Hermanos Jota
const productos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    descripcion: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    precio: "$3,299.99",
    imagen: "assets/imgs/aparador-uspallata.png",
    enlace: "detalle-producto1.html",
    categoria: "Aparadores",
    especificaciones: {
      medidas: "180 × 45 × 75 cm",
      materiales: "Nogal macizo FSC®, herrajes de latón",
      acabado: "Aceite natural ecológico",
      peso: "68 kg",
      capacidad: "6 compartimentos interiores"
    }
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    descripcion: "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    precio: "$1,899.99",
    imagen: "assets/imgs/biblioteca-recoleta.png",
    enlace: "detalle-producto2.html",
    categoria: "Bibliotecas",
    especificaciones: {
      medidas: "100 × 35 × 200 cm",
      materiales: "Estructura de acero, estantes de roble",
      acabado: "Laca mate ecológica",
      capacidad: "45 kg por estante",
      modulares: "5 estantes ajustables"
    }
  },
  {
    id: 3,
    nombre: "Butaca Mendoza",
    descripcion: "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    precio: "$1,499.99",
    imagen: "assets/imgs/butaca-mendoza.png",
    enlace: "detalle-producto3.html",
    categoria: "Butacas",
    especificaciones: {
      medidas: "80 × 75 × 85 cm",
      materiales: "Guatambú macizo, tela bouclé",
      acabado: "Cera vegetal, tapizado premium",
      tapizado: "Repelente al agua y manchas",
      confort: "Espuma alta densidad"
    }
  },
  {
    id: 4,
    nombre: "Sillón Copacabana",
    descripcion: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    precio: "$2,199.99",
    imagen: "assets/imgs/sillon-copacabana.png",
    enlace: "detalle-producto4.html",
    categoria: "Sillones",
    especificaciones: {
      medidas: "90 × 85 × 95 cm",
      materiales: "Cuero curtido vegetal, acero pintado",
      acabado: "Cuero anilina premium",
      rotacion: "360° silenciosa y suave",
      garantia: "10 años en estructura"
    }
  },
  {
    id: 5,
    nombre: "Mesa de Centro Araucaria",
    descripcion: "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    precio: "$1,899.99",
    imagen: "assets/imgs/mesa-centro-araucaria.png",
    enlace: "detalle-producto5.html",
    categoria: "Mesas de Centro",
    especificaciones: {
      medidas: "90 × 90 × 45 cm",
      materiales: "Sobre de mármol Patagonia, patas de nogal",
      acabado: "Mármol pulido, aceite natural en madera",
      peso: "42 kg",
      cargaMaxima: "25 kg distribuidos"
    }
  },
  {
    id: 6,
    nombre: "Mesa de Noche Aconcagua",
    descripcion: "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    precio: "$899.99",
    imagen: "assets/imgs/mesa-noche-aconcagua.png",
    enlace: "detalle-producto6.html",
    categoria: "Mesas de Noche",
    especificaciones: {
      medidas: "45 × 35 × 60 cm",
      materiales: "Roble macizo FSC®, herrajes soft-close",
      acabado: "Barniz mate de poliuretano",
      almacenamiento: "1 cajón + repisa inferior",
      caracteristicas: "Cajón con cierre suave"
    }
  },
  {
    id: 7,
    nombre: "Sofá Patagonia",
    descripcion: "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    precio: "$3,899.99",
    imagen: "assets/imgs/sofa-patagonia.png",
    enlace: "detalle-producto7.html",
    categoria: "Sofás",
    especificaciones: {
      medidas: "220 × 90 × 80 cm",
      estructura: "Madera de eucalipto certificada FSC®",
      tapizado: "Lino 100% natural premium",
      relleno: "Espuma HR + plumón reciclado",
      sostenibilidad: "Materiales 100% reciclables"
    }
  },
  {
    id: 8,
    nombre: "Mesa Comedor Pampa",
    descripcion: "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    precio: "$2,899.99",
    imagen: "assets/imgs/mesa-comedor-pampa.png",
    enlace: "detalle-producto8.html",
    categoria: "Mesas de Comedor",
    especificaciones: {
      medidas: "160-240 × 90 × 75 cm",
      materiales: "Roble macizo FSC®, mecanismo alemán",
      acabado: "Aceite-cera natural",
      capacidad: "6-10 comensales",
      extension: "Sistema de mariposa central"
    }
  },
  {
    id: 9,
    nombre: "Sillas Córdoba",
    descripcion: "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    precio: "$1,299.99",
    imagen: "assets/imgs/sillas-cordoba.png",
    enlace: "detalle-producto9.html",
    categoria: "Sillas",
    especificaciones: {
      medidas: "45 × 52 × 80 cm (cada una)",
      materiales: "Contrachapado nogal, tubo de acero",
      acabado: "Laca mate, pintura epoxi",
      apilables: "Hasta 6 sillas",
      incluye: "Set de 4 sillas"
    }
  },
  {
    id: 10,
    nombre: "Escritorio Costa",
    descripcion: "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    precio: "$1,599.99",
    imagen: "assets/imgs/escritorio-costa.png",
    enlace: "detalle-producto10.html",
    categoria: "Escritorios",
    especificaciones: {
      medidas: "120 × 60 × 75 cm",
      materiales: "Bambú laminado, herrajes ocultos",
      acabado: "Laca mate resistente",
      almacenamiento: "1 cajón con organizador",
      cables: "Pasacables integrado"
    }
  },
  {
    id: 11,
    nombre: "Silla de Trabajo Belgrano",
    descripcion: "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    precio: "$899.99",
    imagen: "assets/imgs/silla-trabajo-belgrano.png",
    enlace: "detalle-producto11.html",
    categoria: "Sillas de Trabajo",
    especificaciones: {
      medidas: "60 × 60 × 90-100 cm",
      materiales: "Malla técnica, tejido reciclado",
      acabado: "Base cromada, tapizado premium",
      regulacion: "Altura + inclinación respaldo",
      certificacion: "Ergonomía europea EN 1335"
    }
  }
];

// Función para mostrar el indicador de carga
function mostrarCargando() {
  const cargando = document.getElementById('cargando');
  const grilla = document.getElementById('productos-grilla');
  
  if (cargando && grilla) {
    cargando.style.display = 'flex';
    grilla.innerHTML = '';
  }
}

// Función para ocultar el indicador de carga
function ocultarCargando() {
  const cargando = document.getElementById('cargando');
  if (cargando) {
    cargando.style.display = 'none';
  }
}

// Función para mostrar productos en la grilla
function mostrarProductos(lista) {
  const grilla = document.getElementById('productos-grilla');
  const noResultados = document.getElementById('no-resultados');
  const productosCount = document.getElementById('productos-count');
  
  if (!grilla) return;
  
  // Limpiar la grilla
  grilla.innerHTML = '';
  
  // Mostrar mensaje si no hay resultados
  if (lista.length === 0) {
    if (noResultados) noResultados.style.display = 'block';
    if (productosCount) productosCount.textContent = 'No se encontraron productos';
    return;
  }
  
  // Ocultar mensaje de no resultados
  if (noResultados) noResultados.style.display = 'none';
  
  // Actualizar contador de productos
  if (productosCount) {
    productosCount.textContent = `Mostrando ${lista.length} de ${productos.length} productos`;
  }
  
  // Crear y agregar cada tarjeta de producto
  lista.forEach(producto => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'producto-tarjeta';
    tarjeta.innerHTML = `
      <a href="${producto.enlace}" class="producto-enlace">
        <div class="producto-imagen">
          <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
        </div>
        <div class="producto-info">
          <h3 class="producto-nombre">${producto.nombre}</h3>
          <p class="producto-descripcion">${producto.descripcion}</p>
          <div class="producto-meta">
            <span class="producto-categoria">${producto.categoria}</span>
            <span class="producto-precio">${producto.precio}</span>
          </div>
        </div>
      </a>
    `;
    
    grilla.appendChild(tarjeta);
  });
}

// Función para buscar productos
function buscarProductos(texto) {
  if (!texto || texto.trim() === '') {
    return productos;
  }
  
  const busqueda = texto.toLowerCase().trim();
  
  return productos.filter(producto => 
    producto.nombre.toLowerCase().includes(busqueda) ||
    producto.descripcion.toLowerCase().includes(busqueda) ||
    producto.categoria.toLowerCase().includes(busqueda)
  );
}

// Función para simular carga asíncrona de productos
async function cargarProductos() {
  try {
    // Simular delay de carga (800ms)
    await new Promise(resolve => setTimeout(resolve, 800));
    return productos;
  } catch (error) {
    console.error('Error al cargar productos:', error);
    return [];
  }
}

// Función para manejar la búsqueda con debounce
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Función para manejar la búsqueda
const manejarBusqueda = debounce((texto) => {
  const resultados = buscarProductos(texto);
  mostrarProductos(resultados);
}, 300);

// Event Listeners
document.addEventListener('DOMContentLoaded', async function() {
  // Mostrar indicador de carga
  mostrarCargando();
  
  try {
    // Cargar productos de forma asíncrona
    const productosCargados = await cargarProductos();
    
    // Ocultar indicador de carga
    ocultarCargando();
    
    // Mostrar productos
    mostrarProductos(productosCargados);
    
  } catch (error) {
    console.error('Error:', error);
    ocultarCargando();
    
    // Mostrar mensaje de error
    const grilla = document.getElementById('productos-grilla');
    if (grilla) {
      grilla.innerHTML = `
        <div class="error-carga">
          <h3>Error al cargar productos</h3>
          <p>Por favor, recarga la página o intenta más tarde.</p>
        </div>
      `;
    }
  }
  
  // Configurar búsqueda en tiempo real
  const inputBusqueda = document.getElementById('busqueda-productos');
  if (inputBusqueda) {
    inputBusqueda.addEventListener('input', (e) => {
      manejarBusqueda(e.target.value);
    });
    
    // Permitir búsqueda con Enter
    inputBusqueda.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const resultados = buscarProductos(e.target.value);
        mostrarProductos(resultados);
      }
      
      // Limpiar búsqueda con Escape
      if (e.key === 'Escape') {
        e.target.value = '';
        mostrarProductos(productos);
      }
    });
  }
});

// Función para mostrar productos destacados (para la página de inicio)
function mostrarProductosDestacados() {
  const contenedor = document.getElementById("featured-products");
  
  if (!contenedor) return;
  
  // Limpiar el contenedor
  contenedor.innerHTML = "";
  
  // Mostrar los primeros 4 productos como destacados
  const productosDestacados = productos.slice(0, 4);
  
  productosDestacados.forEach(producto => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'producto-tarjeta featured';
    tarjeta.innerHTML = `
      <a href="${producto.enlace}" class="producto-enlace">
        <div class="producto-imagen">
          <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
        </div>
        <div class="producto-info">
          <h3 class="producto-nombre">${producto.nombre}</h3>
          <p class="producto-descripcion">${producto.descripcion}</p>
          <div class="producto-meta">
            <span class="producto-categoria">${producto.categoria}</span>
            <span class="producto-precio">${producto.precio}</span>
          </div>
        </div>
      </a>
    `;
    
    contenedor.appendChild(tarjeta);
  });
}

// Si estamos en la página de inicio, mostrar productos destacados
if (document.getElementById("featured-products")) {
  document.addEventListener("DOMContentLoaded", mostrarProductosDestacados);
}
