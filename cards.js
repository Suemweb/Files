/* ===========================================
   cards.js - TEMPLATES + buildCard + renderTo
   ===========================================

   COMO AGREGAR IMAGENES:
   imgs: []             muestra placeholder de color
   imgs: ['url1']       imagen fija
   imgs: ['url1','url2'] carrusel automatico

   COMO AGREGAR NUEVA PLANTILLA:
   Copia un bloque, cambia id (t10, t11...) y rellena campos.
*/

/* ===========================================
   cards.js - TEMPLATES + buildCard + renderTo
   ===========================================

   COMO AGREGAR IMAGENES:
   imgs: []             muestra placeholder de color
   imgs: ['url1']       imagen fija
   imgs: ['url1','url2'] carrusel automatico

   COMO AGREGAR NUEVA PLANTILLA:
   Copia un bloque, cambia id (t10, t11...) y rellena campos.
*/

/* ===========================================
   cards.js - TEMPLATES + buildCard + renderTo
   ===========================================

   COMO AGREGAR IMAGENES:
   imgs: []             muestra placeholder de color
   imgs: ['url1']       imagen fija
   imgs: ['url1','url2'] carrusel automatico

   COMO AGREGAR NUEVA PLANTILLA:
   Copia un bloque, cambia id (t10, t11...) y rellena campos.
*/

var TEMPLATES=[
  /* ── Plantilla 1 ── Para cambiar imágenes edita el array "imgs" ── */
  {id:'t1',sku:'TPL-WEB-PIZZERIA-01', title:'Plantilla Google Sites Pizzería',cat:'Sitios Web',price:'$14.99',oldPrice:'',
   link:'https://www.suemweb.click/google-sites-templates/es/categorias/sitios-web-con-google-sites/plantilla-de-google-sites-para-pizzerias',
   desc:'Plantilla multipropósito para pizzerías y restaurantes. Menú online, botón de pedidos por WhatsApp, diseño responsivo y 6 páginas listas para editar. Sin código.',
   grad:'g-az',em:'🍦',badge:'POPULAR',
   imgs:[
     /* IMAGEN 1 → reemplaza esta URL con la de tu plantilla */
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl-pizzeria3.png',
  
   ]},

  /* ── Plantilla 2 ── */
  {id:'t2',sku:'TPL-ECOM-JOYERIA-01',title:'Plantilla Google Sites Joyería',cat:'Tiendas Online',price:'$19.99',oldPrice:'',
   link:'https://www.suemweb.click/google-sites-templates/es/categorias/plantillas-de-tiendas-en-linea-con-google-sites/plantilla--pluss-tienda-de-joyeria-para-google-sites',
   desc:'Tienda online multiuso y elegante para joyería, bisutería y accesorios. 14 páginas con catálogo, categorías, blog y pedidos por WhatsApp. Sin código, 100% editable.',
   grad:'g-ro',em:'💼',badge:'POPULAR',
   imgs:[
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl%20joyeria2.png',
   ]},

  /* ── Plantilla 3 ── */
  {id:'t3',sku:'TPL-LAND-HELADERIA-01',title:'Plantilla Google Sites Heladería',cat:'Landing Page',price:'Pronto',
   link:'',
   desc:'Plantilla multipropósito para llevar tu heladería o negocio gastronómico a la web. Menú, descuentos y contacto en una landing page profesional y editable.',
   grad:'g-am',em:'🛒',badge:'MUY PRONTO',
   imgs:[
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl-heladeria-3.png',
   ]},

  /* ── Plantilla 4 ── */
  {id:'t4',sku:'TPL-BIO-DM-04',title:'Plantilla Google Sites Link in Bio Marketing Digital',cat:'Link in Bio',price:'Pronto',
   link:'',
   desc:'Plantilla multipropósito de Link in Bio para Google Sites. Ideal para emprendedores y negocios que quieren centralizar sus redes, servicios y contacto en un solo lugar.',
   grad:'g-ve',em:'🔗',badge:'MUY PRONTO',
   imgs:[
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl-bio-marketing-digital.png'
   ]},

  /* ── Plantilla 5 ── */
  {id:'t5',sku:'TPL-LAND-SEMINARIO-01',title:'Plantilla Google Sites Seminario',cat:'Landing Page',price:'Pronto',
   link:'',
   desc:'Plantilla gratuita y multipropósito para seminarios, emprendimientos y organizaciones. Landing page profesional con 7 secciones lista para personalizar en Google Sites. Sin código.',
   grad:'g-pu',em:'🏢',badge:'GRATIS',
   imgs:[
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl-seminario-01.png',
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl-seminario-01.png',
   ]},

  /* ── Plantilla 6 ── sin imágenes → muestra placeholder de color ── */
  {id:'t6',sku:'TPL-FREE-CHOCOLATES-01',title:'Plantilla Google Sites Chocolates',cat:'Gratuitas',price:'Pronto',
   link:'https://sites.google.com/view/tpl-free-lp-chocolates-03/',
   desc:'Plantilla gratuita y multipropósito para chocolaterías, emprendimientos y negocios de comida. Landing page con menú, promociones, horarios y contacto. Sin código.',
   grad:'g-or',em:'🎁',badge:'GRATIS',
   imgs:[
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl-chocolateria-free.png',
   ]}, /* ← agrega URLs aquí cuando tengas imágenes */

  /* ── Plantilla 7 ── */
  {id:'t7',sku:'TPL-LAND-CUPCAKES-01',title:'Plantilla Google Sites Cupcakes',cat:'Landing Page',price:'Pronto',
   link:'',
   desc:'Landing page multipropósito para cupcakes y emprendimientos de repostería. Incluye menú, contacto, Link in Bio y página de lanzamiento. 100% editable en Google Sites.',
   grad:'g-ro',em:'🍽️',badge:'MUY PRONTO',
   imgs:[
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl-cupcakes-01.png',
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl-cupcakes-01.png'
   ]},

  /* ── Plantilla 8 ── */
  {id:'t8',sku:'TPL-ECOM-PERFUMERIA-01',title:' Plantilla Google Sites Perfumería',cat:'Tiendas Online',price:'Pronto',
   link:'',
   desc:'Tienda online multiuso para perfumerías, maquillaje e indumentaria. 8 páginas con catálogo, producto detalle, Link in Bio y próximamente. Sin código, 100% editable.',
   grad:'g-az',em:'🧠',badge:'MUY PRONTO',
   imgs:[
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl-perfumeria.png'
   ]},

  /* ── Plantilla 9 ── */
  {id:'t9',sku:'TPL-WEB-JUGOS-01',title:'Plantilla Google Sites Jugos',cat:'Sitios Web',price:'Pronto',
   link:'',
   desc:'Plantilla multipropósito para juguerías y negocios de bebidas. Sitio web completo con menú, blog integrado, Link in Bio y contacto. 100% editable en Google Sites.',
   grad:'g-te',em:'✂️',badge:'MUY PRONTO',
   imgs:[
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl-jugos-01.png',
     'https://raw.githubusercontent.com/Suemweb/Images/refs/heads/main/tpl-jugos-01.png',
   ]}
];

/* =========================================
   buildCard
   ========================================= */
function buildCard(t) {

  /* Badge */
  var bCls = 'badge-ro';
  if (t.badge === 'GRATIS')      bCls = 'badge-ve';
  if (t.badge === 'PREMIUM')     bCls = 'badge-am';
  if (t.badge === 'MUY PRONTO')  bCls = 'badge-soon';
  var bdg = t.badge ? '<div class="pm-badge"><span class="badge ' + bCls + '">' + t.badge + '</span></div>' : '';

  /* Slides */
  var imgs = t.imgs || [];
  var slides = '';
  var i;
  if (imgs.length > 0) {
    for (i = 0; i < imgs.length; i++) {
      slides += '<div class="pc-slide"><img src="' + imgs[i] + '" alt="' + t.title + '" loading="lazy"></div>';
    }
  } else {
    slides = '<div class="pc-slide"><div class="pc-ph ' + t.grad + '">'
           + '<span class="pe">' + t.em + '</span>'
           + '<span class="pl">' + t.title + '</span>'
           + '<span class="ps">Vista previa</span>'
           + '</div></div>';
  }

  /* Carousel arrows — usando JSON.stringify para evitar problemas de comillas */
  var arrows = '';
  if (imgs.length > 1) {
    var tid = JSON.stringify(t.id);
    arrows = '<button class="pc-arr prev" onclick="carPrev(event,' + tid + ')">&#8249;</button>'
           + '<button class="pc-arr next" onclick="carNext(event,' + tid + ')">&#8250;</button>'
           + '<div class="pc-dots"></div>';
  }

  /* Precio */
  var oldP = t.oldPrice ? '<span class="pc-oldprice">' + t.oldPrice + '</span>' : '';
  var priceHtml = '<div class="pc-price-wrap">' + oldP + '<span class="pc-price">' + t.price + '</span></div>';

  /* CTA */
  var ctaBtn;
  if (t.link) {
    ctaBtn = '<a href="' + t.link + '" target="_blank" class="pc-cta">Ver plantilla &#8594;</a>';
  } else {
    ctaBtn = '<a href="como-funciona.html" class="pc-cta">Ver plantilla &#8594;</a>';
  }

  /* SKU */
  var skuHtml = t.sku ? '<div class="pc-sku">SKU: ' + t.sku + '</div>' : '';

  return '<div class="pcard" data-cat="' + t.cat + '" data-id="' + t.id + '">'
       + '<div class="pm">' + bdg
       + '<div class="pc-wrap"><div class="pc-trk" data-idx="0">' + slides + '</div></div>'
       + arrows
       + '</div>'
       + '<div class="pcb">'
       + '<div class="pc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>'
       + '<div class="pc-cat">' + t.cat + '</div>'
       + skuHtml
       + '<div class="pc-title">' + t.title + '</div>'
       + '<div class="pc-desc">' + t.desc + '</div>'
       + '<div class="pc-foot">' + priceHtml + ctaBtn + '</div>'
       + '</div></div>';
}

/* =========================================
   renderTo
   containerId : id del div donde insertar
   list        : array de TEMPLATES a mostrar
   ========================================= */
function renderTo(containerId, list) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  for (var i = 0; i < list.length; i++) {
    el.innerHTML += buildCard(list[i]);
  }
  /* Iniciar carruseles */
  for (var j = 0; j < list.length; j++) {
    var t = list[j];
    var imgs = t.imgs || [];
    if (imgs.length > 1) {
      carState[t.id] = { slides: imgs, idx: 0, timer: null };
      updateCar(t.id);
      startAuto(t.id);
    } else if (imgs.length === 1) {
      carState[t.id] = { slides: imgs, idx: 0, timer: null };
    }
  }
}

/* =========================================
   buildCard
   ========================================= */
function buildCard(t) {

  /* Badge */
  var bCls = 'badge-ro';
  if (t.badge === 'GRATIS')      bCls = 'badge-ve';
  if (t.badge === 'PREMIUM')     bCls = 'badge-am';
  if (t.badge === 'MUY PRONTO')  bCls = 'badge-soon';
  var bdg = t.badge ? '<div class="pm-badge"><span class="badge ' + bCls + '">' + t.badge + '</span></div>' : '';

  /* Slides */
  var imgs = t.imgs || [];
  var slides = '';
  var i;
  if (imgs.length > 0) {
    for (i = 0; i < imgs.length; i++) {
      slides += '<div class="pc-slide"><img src="' + imgs[i] + '" alt="' + t.title + '" loading="lazy"></div>';
    }
  } else {
    slides = '<div class="pc-slide"><div class="pc-ph ' + t.grad + '">'
           + '<span class="pe">' + t.em + '</span>'
           + '<span class="pl">' + t.title + '</span>'
           + '<span class="ps">Vista previa</span>'
           + '</div></div>';
  }

  /* Carousel arrows — usando JSON.stringify para evitar problemas de comillas */
  var arrows = '';
  if (imgs.length > 1) {
    var tid = JSON.stringify(t.id);
    arrows = '<button class="pc-arr prev" onclick="carPrev(event,' + tid + ')">&#8249;</button>'
           + '<button class="pc-arr next" onclick="carNext(event,' + tid + ')">&#8250;</button>'
           + '<div class="pc-dots"></div>';
  }

  /* Precio */
  var oldP = t.oldPrice ? '<span class="pc-oldprice">' + t.oldPrice + '</span>' : '';
  var priceHtml = '<div class="pc-price-wrap">' + oldP + '<span class="pc-price">' + t.price + '</span></div>';

  /* CTA */
  var ctaBtn;
  if (t.link) {
    ctaBtn = '<a href="' + t.link + '" target="_blank" class="pc-cta">Ver plantilla &#8594;</a>';
  } else {
    ctaBtn = '<a href="como-funciona.html" class="pc-cta">Ver plantilla &#8594;</a>';
  }

  /* SKU */
  var skuHtml = t.sku ? '<div class="pc-sku">SKU: ' + t.sku + '</div>' : '';

  return '<div class="pcard" data-cat="' + t.cat + '" data-id="' + t.id + '">'
       + '<div class="pm">' + bdg
       + '<div class="pc-wrap"><div class="pc-trk" data-idx="0">' + slides + '</div></div>'
       + arrows
       + '</div>'
       + '<div class="pcb">'
       + '<div class="pc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>'
       + '<div class="pc-cat">' + t.cat + '</div>'
       + skuHtml
       + '<div class="pc-title">' + t.title + '</div>'
       + '<div class="pc-desc">' + t.desc + '</div>'
       + '<div class="pc-foot">' + priceHtml + ctaBtn + '</div>'
       + '</div></div>';
}

/* =========================================
   renderTo
   containerId : id del div donde insertar
   list        : array de TEMPLATES a mostrar
   ========================================= */
function renderTo(containerId, list) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  for (var i = 0; i < list.length; i++) {
    el.innerHTML += buildCard(list[i]);
  }
  /* Iniciar carruseles */
  for (var j = 0; j < list.length; j++) {
    var t = list[j];
    var imgs = t.imgs || [];
    if (imgs.length > 1) {
      carState[t.id] = { slides: imgs, idx: 0, timer: null };
      updateCar(t.id);
      startAuto(t.id);
    } else if (imgs.length === 1) {
      carState[t.id] = { slides: imgs, idx: 0, timer: null };
    }
  }
}

/* =========================================
   buildCard
   ========================================= */
function buildCard(t) {

  /* Badge */
  var bCls = 'badge-ro';
  if (t.badge === 'GRATIS')      bCls = 'badge-ve';
  if (t.badge === 'PREMIUM')     bCls = 'badge-am';
  if (t.badge === 'MUY PRONTO')  bCls = 'badge-soon';
  var bdg = t.badge ? '<div class="pm-badge"><span class="badge ' + bCls + '">' + t.badge + '</span></div>' : '';

  /* Slides */
  var imgs = t.imgs || [];
  var slides = '';
  var i;
  if (imgs.length > 0) {
    for (i = 0; i < imgs.length; i++) {
      slides += '<div class="pc-slide"><img src="' + imgs[i] + '" alt="' + t.title + '" loading="lazy"></div>';
    }
  } else {
    slides = '<div class="pc-slide"><div class="pc-ph ' + t.grad + '">'
           + '<span class="pe">' + t.em + '</span>'
           + '<span class="pl">' + t.title + '</span>'
           + '<span class="ps">Vista previa</span>'
           + '</div></div>';
  }

  /* Carousel arrows — usando JSON.stringify para evitar problemas de comillas */
  var arrows = '';
  if (imgs.length > 1) {
    var tid = JSON.stringify(t.id);
    arrows = '<button class="pc-arr prev" onclick="carPrev(event,' + tid + ')">&#8249;</button>'
           + '<button class="pc-arr next" onclick="carNext(event,' + tid + ')">&#8250;</button>'
           + '<div class="pc-dots"></div>';
  }

  /* Precio */
  var oldP = t.oldPrice ? '<span class="pc-oldprice">' + t.oldPrice + '</span>' : '';
  var priceHtml = '<div class="pc-price-wrap">' + oldP + '<span class="pc-price">' + t.price + '</span></div>';

  /* CTA */
  var ctaBtn;
  if (t.link) {
    ctaBtn = '<a href="' + t.link + '" target="_blank" class="pc-cta">Ver plantilla &#8594;</a>';
  } else {
    ctaBtn = '<a href="como-funciona.html" class="pc-cta">Ver plantilla &#8594;</a>';
  }

  /* SKU */
  var skuHtml = t.sku ? '<div class="pc-sku">SKU: ' + t.sku + '</div>' : '';

  return '<div class="pcard" data-cat="' + t.cat + '" data-id="' + t.id + '">'
       + '<div class="pm">' + bdg
       + '<div class="pc-wrap"><div class="pc-trk" data-idx="0">' + slides + '</div></div>'
       + arrows
       + '</div>'
       + '<div class="pcb">'
       + '<div class="pc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>'
       + '<div class="pc-cat">' + t.cat + '</div>'
       + skuHtml
       + '<div class="pc-title">' + t.title + '</div>'
       + '<div class="pc-desc">' + t.desc + '</div>'
       + '<div class="pc-foot">' + priceHtml + ctaBtn + '</div>'
       + '</div></div>';
}

/* =========================================
   renderTo
   containerId : id del div donde insertar
   list        : array de TEMPLATES a mostrar
   ========================================= */
function renderTo(containerId, list) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  for (var i = 0; i < list.length; i++) {
    el.innerHTML += buildCard(list[i]);
  }
  /* Iniciar carruseles */
  for (var j = 0; j < list.length; j++) {
    var t = list[j];
    var imgs = t.imgs || [];
    if (imgs.length > 1) {
      carState[t.id] = { slides: imgs, idx: 0, timer: null };
      updateCar(t.id);
      startAuto(t.id);
    } else if (imgs.length === 1) {
      carState[t.id] = { slides: imgs, idx: 0, timer: null };
    }
  }
}