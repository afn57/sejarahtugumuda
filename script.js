// ═══════════════════════════════════════════
//  TUGU MUDA — script.js  (revisi)
//  Smooth page transitions, no beranda
// ═══════════════════════════════════════════

/* ── NAVIGASI SMOOTH antar halaman ── */
function goPage(url){
  // Hindari navigasi ke halaman yang sama
  const current = window.location.pathname.split('/').pop() || 'sejarah.html';
  if(current === url) return;

  // Flash overlay ringan
  const overlay = document.getElementById('page-transition');
  if(overlay){
    overlay.classList.add('flash');
    setTimeout(()=>{
      window.location.href = url;
    }, 200);
  } else {
    window.location.href = url;
  }
}

/* ── RELIEF: toggle accordion ── */
function tglRelief(card){
  const wasOpen = card.classList.contains('open');
  document.querySelectorAll('.rcard').forEach(c => c.classList.remove('open'));
  if(!wasOpen) card.classList.add('open');
}

/* ── GALERI: filter kategori ── */
function filterGal(cat, btn){
  document.querySelectorAll('.gtab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.gi').forEach(i => {
    if(cat === 'semua' || i.dataset.cat === cat){
      i.style.opacity = '0';
      i.style.display = 'flex';
      setTimeout(()=>{ i.style.transition = 'opacity .3s'; i.style.opacity = '1'; }, 10);
    } else {
      i.style.opacity = '0';
      setTimeout(()=>{ i.style.display = 'none'; }, 300);
    }
  });
}

/* ── GALERI: tampilkan catatan ── */
function gnote(title, desc){
  const el = document.getElementById('gnote-box');
  if(!el) return;
  el.style.opacity = '0';
  el.style.transition = 'opacity .25s';
  setTimeout(()=>{
    el.innerHTML =
      '<strong style="color:var(--gold)">' + title + '</strong><br>' +
      '<span style="font-size:11px">' + desc + '</span>';
    el.style.opacity = '1';
  }, 150);
}

/* ── DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', function(){

  // Tandai nav-link aktif
  const path = window.location.pathname.split('/').pop() || 'sejarah.html';
  document.querySelectorAll('.nbtn').forEach(btn => {
    btn.classList.toggle('on', btn.dataset.page === path);
  });

  // Trigger animasi masuk halaman
  const page = document.querySelector('.page');
  if(page){
    requestAnimationFrame(()=>{
      page.classList.add('on');
    });
  }

  // Hapus flash overlay setelah halaman dimuat
  const overlay = document.getElementById('page-transition');
  if(overlay){
    overlay.classList.remove('flash');
  }

});
