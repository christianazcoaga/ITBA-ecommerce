const productos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    descripcion:
      "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    precio: "$3,299.99",
    imagen: "assets/imgs/aparador-uspallata.png",
    enlace: "detalle-producto1.html",
    categoria: "Aparadores",
    especificaciones: {
      medidas: "180 × 45 × 75 cm",
      materiales: "Nogal macizo FSC®, herrajes de latón",
      acabado: "Aceite natural ecológico",
      peso: "68 kg",
      capacidad: "6 compartimentos interiores",
    },
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    descripcion:
      "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    precio: "$1,899.99",
    imagen: "assets/imgs/biblioteca-recoleta.png",
    enlace: "detalle-producto2.html",
    categoria: "Bibliotecas",
    especificaciones: {
      medidas: "100 × 35 × 200 cm",
      materiales: "Estructura de acero, estantes de roble",
      acabado: "Laca mate ecológica",
      peso: "45 kg por estante",
      modulares: "5 estantes ajustables",
    },
  },
  {
    id: 3,
    nombre: "Butaca Mendoza",
    descripcion:
      "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    precio: "$1,499.99",
    imagen: "assets/imgs/butaca-mendoza.png",
    enlace: "detalle-producto3.html",
    categoria: "Butacas",
    especificaciones: {
      medidas: "80 × 75 × 85 cm",
      materiales: "Guatambú macizo, tela bouclé",
      acabado: "Cera vegetal, tapizado premium",
      tapizado: "Repelente al agua y manchas",
      confort: "Espuma alta densidad",
    },
  },
  {
    id: 4,
    nombre: "Sillón Copacabana",
    descripcion:
      "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    precio: "$2,199.99",
    imagen: "assets/imgs/sillon-copacabana.png",
    enlace: "detalle-producto4.html",
    categoria: "Sillones",
    especificaciones: {
      medidas: "90 × 85 × 95 cm",
      materiales: "Cuero curtido vegetal, acero pintado",
      acabado: "Cuero anilina premium",
      rotacion: "360° silenciosa y suave",
      garantia: "10 años en estructura",
    },
  },
  {
    id: 5,
    nombre: "Mesa de Centro Araucaria",
    descripcion:
      "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    precio: "$1,899.99",
    imagen: "assets/imgs/mesa-centro-araucaria.png",
    enlace: "detalle-producto5.html",
    categoria: "Mesas de Centro",
    especificaciones: {
      medidas: "90 × 90 × 45 cm",
      materiales: "Sobre de mármol Patagonia, patas de nogal",
      acabado: "Mármol pulido, aceite natural en madera",
      peso: "42 kg",
      cargaMaxima: "25 kg distribuidos",
    },
  },
  {
    id: 6,
    nombre: "Mesa de Noche Aconcagua",
    descripcion:
      "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    precio: "$899.99",
    imagen: "assets/imgs/mesa-noche-aconcagua.png",
    enlace: "detalle-producto6.html",
    categoria: "Mesas de Noche",
    especificaciones: {
      medidas: "45 × 35 × 60 cm",
      materiales: "Roble macizo FSC®, herrajes soft-close",
      acabado: "Barniz mate de poliuretano",
      almacenamiento: "1 cajón + repisa inferior",
      caracteristicas: "Cajón con cierre suave",
    },
  },
  /*{
    id: 6,
    nombre: "Cama Neuquén",
    descripcion: "Cama plataforma con cabecero flotante tapizado en lino natural y estructura de madera maciza. Su diseño minimalista y sofisticado crea un ambiente de serenidad y elegancia, perfecto para dormitorios contemporáneos que buscan paz y simplicidad.",
    precio: "$2,499.99",
    imagen: "assets/imgs/cama-neuquen.png",
    enlace: "detalle-producto7.html",
    categoria: "Camas",
    especificaciones: {
      medidas: "160 × 200 × 90 cm",
      materiales: "Roble macizo FSC®, tapizado lino",
      acabado: "Aceite natural, tapizado premium",
      colchon: "Compatible con colchón 160×200",
      caracteristicas: "Cabecero flotante acolchado"
    }
  },*/
  {
    id: 7,
    nombre: "Sofá Patagonia",
    descripcion:
      "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    precio: "$3,899.99",
    imagen: "assets/imgs/sofa-patagonia.png",
    enlace: "detalle-producto8.html",
    categoria: "Sofás",
    especificaciones: {
      medidas: "220 × 90 × 80 cm",
      estructura: "Madera de eucalipto certificada FSC®",
      tapizado: "Lino 100% natural premium",
      relleno: "Espuma HR + plumón reciclado",
      sostenibilidad: "Materiales 100% reciclables",
    },
  },
  {
    id: 8,
    nombre: "Mesa Comedor Pampa",
    descripcion:
      "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    precio: "$2,899.99",
    imagen: "assets/imgs/mesa-comedor-pampa.png",
    enlace: "detalle-producto9.html",
    categoria: "Mesas de Comedor",
    especificaciones: {
      medidas: "160-240 × 90 × 75 cm",
      materiales: "Roble macizo FSC®, mecanismo alemán",
      acabado: "Aceite-cera natural",
      capacidad: "6-10 comensales",
      extension: "Sistema de mariposa central",
    },
  },
  {
    id: 9,
    nombre: "Sillas Córdoba",
    descripcion:
      "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    precio: "$1,299.99",
    imagen: "assets/imgs/sillas-cordoba.png",
    enlace: "detalle-producto10.html",
    categoria: "Sillas",
    especificaciones: {
      medidas: "45 × 52 × 80 cm (cada una)",
      materiales: "Contrachapado nogal, tubo de acero",
      acabado: "Laca mate, pintura epoxi",
      apilables: "Hasta 6 sillas",
      incluye: "Set de 4 sillas",
    },
  },
  {
    id: 10,
    nombre: "Escritorio Costa",
    descripcion:
      "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    precio: "$1,599.99",
    imagen: "assets/imgs/escritorio-costa.png",
    enlace: "detalle-producto11.html",
    categoria: "Escritorios",
    especificaciones: {
      medidas: "120 × 60 × 75 cm",
      materiales: "Bambú laminado, herrajes ocultos",
      acabado: "Laca mate resistente",
      almacenamiento: "1 cajón con organizador",
      cables: "Pasacables integrado",
    },
  },
  {
    id: 11,
    nombre: "Silla de Trabajo Belgrano",
    descripcion:
      "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    precio: "$899.99",
    imagen: "assets/imgs/silla-trabajo-belgrano.png",
    enlace: "detalle-producto12.html",
    categoria: "Sillas de Trabajo",
    especificaciones: {
      medidas: "60 × 60 × 90-100 cm",
      materiales: "Malla técnica, tejido reciclado",
      acabado: "Base cromada, tapizado premium",
      regulacion: "Altura + inclinación respaldo",
      certificacion: "Ergonomía europea EN 1335",
    },
  },
];

// Elementos del DOM
const grilla = document.getElementById("productos-grilla");
const inputBusqueda = document.getElementById("busqueda-productos");
const contadorProductos = document.getElementById("productos-count");

// Función para simular carga asíncrona (requisito técnico)
async function cargarProductos() {
  try {
    // Simular delay de carga (requisito técnico)
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Simular que los productos vienen de una API
    return productos;
  } catch (error) {
    console.error("Error al cargar productos:", error);
    return [];
  }
}

// Función para mostrar indicador de carga
function mostrarCargando() {
  if (!grilla) return;

  grilla.innerHTML = `
    <div class="cargando" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
      <div class="spinner" style="width: 40px; height: 40px; border: 4px solid #e2e8f0; border-top: 4px solid #2563eb; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 1rem;"></div>
      <p>Cargando productos...</p>
    </div>
  `;
}

// Función para renderizar productos en la grilla
function mostrarProductos(lista) {
  if (!grilla) return;

  grilla.innerHTML = "";

  if (lista.length === 0) {
    grilla.innerHTML = `
      <div class="no-resultados">
        <h3>No se encontraron productos</h3>
        <p>Intenta con otros términos de búsqueda</p>
      </div>
    `;
    return;
  }

  lista.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "producto-tarjeta";
    tarjeta.innerHTML = `
      <div class="producto-imagen">
        <a href="${producto.enlace}">
          <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
        </a>
      </div>
      <div class="producto-info">
        <h3 class="producto-nombre">
          <a href="${producto.enlace}">${producto.nombre}</a>
        </h3>
        <p class="producto-descripcion">${producto.descripcion}</p>
        <div class="producto-meta">
          <span class="producto-categoria">${producto.categoria}</span>
          <span class="producto-precio">${producto.precio}</span>
        </div>
      </div>
    `;
    grilla.appendChild(tarjeta);
  });

  // Actualizar contador
  actualizarContador(lista.length);
}

// Función para actualizar el contador de productos
function actualizarContador(cantidad) {
  if (!contadorProductos) return;

  if (cantidad === productos.length) {
    contadorProductos.textContent = `Mostrando todos los productos (${cantidad})`;
  } else {
    contadorProductos.textContent = `Mostrando ${cantidad} de ${productos.length} productos`;
  }
}

// Función de búsqueda con debounce para mejor rendimiento
let timeoutBusqueda;
function buscarProductos(texto) {
  clearTimeout(timeoutBusqueda);

  timeoutBusqueda = setTimeout(() => {
    const textoLower = texto.toLowerCase().trim();

    if (textoLower === "") {
      mostrarProductos(productos);
      return;
    }

    const filtrados = productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(textoLower) ||
        producto.descripcion.toLowerCase().includes(textoLower) ||
        producto.categoria.toLowerCase().includes(textoLower)
    );

    mostrarProductos(filtrados);
  }, 300);
}

// Event listeners
if (inputBusqueda) {
  inputBusqueda.addEventListener("input", (e) => {
    buscarProductos(e.target.value);
  });

  // Limpiar búsqueda con Escape
  inputBusqueda.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      inputBusqueda.value = "";
      mostrarProductos(productos);
    }
  });
}

// Inicializar la página con carga asíncrona (requisito técnico)
document.addEventListener("DOMContentLoaded", async () => {
  // Mostrar indicador de carga
  mostrarCargando();

  // Cargar productos de forma asíncrona
  const productosCargados = await cargarProductos();

  // Mostrar productos
  mostrarProductos(productosCargados);
});
