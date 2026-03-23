
/* ═══════════════════════════════════════════
   SUEMWEB — main.js
   Funciones compartidas para todas las páginas
   ═══════════════════════════════════════════ */

/* ── Drawer (menú móvil) ── */
function toggleDrawer(){
  var d=document.getElementById('drawer'),h=document.getElementById('ham');
  var o=d.classList.toggle('open');
  if(h)h.classList.toggle('open',o);
  document.body.style.overflow=o?'hidden':'';
}
function closeDrawer(){
  var d=document.getElementById('drawer'),h=document.getElementById('ham');
  d.classList.remove('open');
  if(h)h.classList.remove('open');
  document.body.style.overflow='';
}
window.toggleDrawer=toggleDrawer;
window.closeDrawer=closeDrawer;

/* ── Marca el link activo del nav según la página actual ── */
function markActiveNav(){
  // Detecta en qué página estamos por el <body data-page="...">
  var page = document.body.getAttribute('data-page') || '';
  // Desktop nav
  document.querySelectorAll('.nav-links [data-page]').forEach(function(el){
    el.classList.toggle('on', el.getAttribute('data-page') === page);
  });
  // Drawer móvil
  document.querySelectorAll('#drawer [data-page]').forEach(function(el){
    el.classList.toggle('on', el.getAttribute('data-page') === page);
  });
}

/* ── Botón volver arriba ── */
function initBtt(){
  var btt=document.getElementById('btt');
  if(!btt)return;
  window.addEventListener('scroll',function(){
    btt.classList.toggle('show', window.scrollY>400);
  });
}

/* ── FAQ ── */
function toggleFaq(trigger){
  var item=trigger.closest('.faq-item');
  var open=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open')});
  if(!open)item.classList.add('open');
}
window.toggleFaq=toggleFaq;

/* ── Sticky bar ── */
function initSticky(){
  var bar=document.getElementById('sb'),foot=document.getElementById('footer');
  if(!bar||!foot)return;
  window.addEventListener('scroll',function(){
    var sy=window.scrollY,fb=foot.getBoundingClientRect().top+window.scrollY,wb=sy+window.innerHeight;
    if(sy>500&&wb<fb+60){bar.classList.add('show');bar.classList.remove('off');}
    else if(wb>=fb+60){bar.classList.remove('show');bar.classList.add('off');}
    else{bar.classList.remove('show');bar.classList.remove('off');}
  });
}

/* ── Scroll Reveal ── */
function initReveal(){
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}
    });
  },{threshold:0.06});
  document.querySelectorAll('[data-r]:not(.vis)').forEach(function(el,i){
    el.style.transitionDelay=Math.min(i*55,280)+'ms';
    obs.observe(el);
  });
}

/* ── Filtros tienda ── */
function filtrar(btn,cat){
  document.querySelectorAll('#frow .fb').forEach(function(b){b.classList.remove('on')});
  btn.classList.add('on');
  var any=false;
  document.querySelectorAll('#tienda-pgrid .pcard').forEach(function(c){
    var show=cat==='all'||c.dataset.cat===cat;
    c.style.display=show?'flex':'none';if(show)any=true;
  });
  var nr=document.getElementById('no-res');if(nr)nr.style.display=any?'none':'block';
}
window.filtrar=filtrar;

/* ── Ir a tienda y filtrar ── */
function goToFiltro(cat){
  window.location.href='tienda.html?cat='+encodeURIComponent(cat);
}
window.goToFiltro=goToFiltro;

/* ── Aplicar filtro desde URL param (en tienda.html) ── */
function applyUrlFilter(){
  var params=new URLSearchParams(window.location.search);
  var cat=params.get('cat');
  if(cat){
    var btn=document.querySelector('#frow .fb[data-cat="'+cat+'"]');
    if(btn)filtrar(btn,cat);
  }
}

/* ── Carousel de tarjetas ── */
var carState={};
function getCard(id){return document.querySelector('[data-id="'+id+'"]')}
function getTrk(id){var c=getCard(id);return c?c.querySelector('.pc-trk'):null}
function updateCar(id){
  var st=carState[id]||{slides:[],idx:0};
  var trk=getTrk(id);if(!trk)return;
  trk.style.transform='translateX(-'+((st.idx||0)*100)+'%)';
  var card=getCard(id);
  var dots=card?card.querySelector('.pc-dots'):null;
  var prev=card?card.querySelector('.pc-arr.prev'):null;
  var next=card?card.querySelector('.pc-arr.next'):null;
  var n=(st.slides||[]).length;
  if(dots){dots.innerHTML='';for(var i=0;i<n;i++){var d=document.createElement('button');d.className='pc-dot'+(i===st.idx?' on':'');d.addEventListener('click',(function(ii){return function(){carGoTo(id,ii)}})(i));dots.appendChild(d);}}
  if(prev)prev.classList.toggle('hide',n<=1);
  if(next)next.classList.toggle('hide',n<=1);
}
function startAuto(id){
  var st=carState[id];if(!st)return;
  if(st.timer)clearInterval(st.timer);
  st.timer=setInterval(function(){carNext(null,id);},4000);
}
function carNext(e,id){if(e)e.stopPropagation();var st=carState[id];if(!st)return;st.idx=(st.idx+1)%st.slides.length;updateCar(id);}
function carPrev(e,id){if(e)e.stopPropagation();var st=carState[id];if(!st)return;st.idx=(st.idx-1+st.slides.length)%st.slides.length;updateCar(id);}
function carGoTo(id,i){var st=carState[id];if(!st)return;st.idx=i;updateCar(id);}
window.carPrev=carPrev;window.carNext=carNext;

/* ── Init DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded',function(){
  markActiveNav();
  initReveal();
  initSticky();
  initBtt();
  applyUrlFilter();
});
