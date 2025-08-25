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
  },
  {
    id: 7,
    nombre: "Sofá Patagonia",
    descripcion:
      "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    precio: "$3,899.99",
    imagen: "assets/imgs/sofa-patagonia.png",
    enlace: "detalle-producto8.html",
    categoria: "Sofás",
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
  },
];

//  mostrar productos destacados
function mostrarProductosDestacados() {
  const contenedor = document.getElementById("featured-products");
  
  if (!contenedor) return;
  
  // limpiar el contenedor
  contenedor.innerHTML = "";
  
  // mostrar solo los primeros 4 productos como destacados
  const productosDestacados = productos.slice(0, 4);
  
  productosDestacados.forEach(producto => {
    const tarjeta = `
      <div class="producto-tarjeta">
        <div class="producto-imagen">
          <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="producto-info">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <div class="producto-meta">
            <span>${producto.categoria}</span>
            <span>${producto.precio}</span>
          </div>
        </div>
      </div>
    `;
    
    contenedor.innerHTML += tarjeta;
  });
}

// para mostrar todos los productos
function mostrarTodosLosProductos() {
  const contenedor = document.getElementById("productos-grilla");
  
  if (!contenedor) return;
  
  // limpiar el contenedor
  contenedor.innerHTML = "";
  
  // mostrar todos los productos
  productos.forEach(producto => {
    const tarjeta = `
      <div class="producto-tarjeta">
        <div class="producto-imagen">
          <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="producto-info">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <div class="producto-meta">
            <span>${producto.categoria}</span>
            <span>${producto.precio}</span>
          </div>
        </div>
      </div>
    `;
    
    contenedor.innerHTML += tarjeta;
  });
}

// cuando la pagina se carga
document.addEventListener("DOMContentLoaded", function() {
  // si estamos en la pagina de inicio
  if (document.getElementById("featured-products")) {
    mostrarProductosDestacados();
  }
  
  // si estamos en la pagina de productos
  if (document.getElementById("productos-grilla")) {
    mostrarTodosLosProductos();
  }
});
