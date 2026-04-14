/* ════════════════════════════════════════════════════════════
   templates.js — Datos de plantillas SUEMWEB
   ════════════════════════════════════════════════════════════

   CÓMO AGREGAR IMÁGENES:
   imgs: []              → placeholder de color con emoji
   imgs: ['url1']        → imagen fija
   imgs: ['url1','url2'] → carrusel automático cada 4 segundos

   CÓMO AGREGAR UNA NUEVA PLANTILLA:
   Copia un bloque existente, cambia el id (t10, t11...)
   y rellena los campos. Guarda y sube a GitHub.

   Tamaño imágenes recomendado: 800×500px (3:2)
   URLs válidas: raw.githubusercontent.com, jsDelivr, Cloudinary...
   ════════════════════════════════════════════════════════════ */

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
