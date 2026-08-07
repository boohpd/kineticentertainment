/* ─────────────────────────────────────
   KINETIC ENTERTAINMENT — main.js
   ───────────────────────────────────── */

/* ── Artist Data ── */
const ARTISTS = {
  hanchae: {
    number: '01',
    nameKo: '한채영',
    nameEn: 'HAN CHAE YOUNG',
    photos: [
      PHOTO_DATA["hanchae_1"],
      PHOTO_DATA["hanchae_2"],
      PHOTO_DATA["hanchae_3"],
    ],
    bgClass: 'ac-bg-1',
    specs: [
      { label: '신장', value: '169 cm' },
    ],
    filmo: [
      { year: '2024', title: '드라마', platform: 'KBS2' },
      { year: '2023', title: '드라마', platform: 'Netflix' },
      { year: '2021', title: '드라마', platform: 'MBN' },
      { year: '2018', title: '드라마', platform: 'MBC' },
      { year: '2013', title: '드라마', platform: 'KBS2' },
      { year: '2006', title: '드라마', platform: 'MBC' },
      { year: '2005', title: '드라마', platform: 'SBS' },
      { year: '2002', title: '드라마', platform: 'SBS' },
      { year: '2001', title: '드라마', platform: 'SBS' },
      { year: '2000', title: '드라마', platform: 'KBS2' },
    ],
    ads: [
      { year: '2025', title: '광고·화보 활동', platform: 'CF' },
      { year: '2017', title: '광고·화보 활동', platform: 'CF' },
      { year: '2011', title: '광고·화보 활동', platform: 'CF' },
    ],
  },
  gominseung: {
    number: '02',
    nameKo: '고민승',
    nameEn: 'GO MIN SEUNG',
    photos: [
      PHOTO_DATA["gominseung_1"],
      PHOTO_DATA["gominseung_2"],
      PHOTO_DATA["gominseung_3"],
    ],
    bgClass: 'ac-bg-2',
    specs: [
      { label: '신장', value: '161 cm' },
      { label: '생년', value: '2002년생' },
    ],
    filmo: [
      { year: '2026', title: '드라마', platform: 'SBS' },
      { year: '2026', title: '드라마 시즌 3', platform: 'Netflix' },
      { year: '2026', title: '드라마', platform: 'Netflix' },
      { year: '2025', title: '드라마', platform: 'MBC' },
      { year: '2025', title: '드라마', platform: 'Tving' },
      { year: '2025', title: '드라마', platform: 'SBS' },
    ],
    ads: [],
  },
  leehyunjeong: {
    number: '03',
    nameKo: '이현정',
    nameEn: 'LEE HYUN JEONG',
    photos: [
      PHOTO_DATA["leehyunjeong_1"],
      PHOTO_DATA["leehyunjeong_2"],
      PHOTO_DATA["leehyunjeong_3"],
      PHOTO_DATA["leehyunjeong_4"],
    ],
    bgClass: 'ac-bg-3',
    specs: [
      { label: '신장', value: '163 cm' },
      { label: '생년', value: '1996년생' },
    ],
    filmo: [
      { year: '2026', title: '드라마', platform: '방영예정' },
      { year: '2025', title: '드라마', platform: '방영작' },
    ],
    ads: [
      { year: '2026', title: '화보 촬영', platform: '화보' },
    ],
  },
  ryujiyeon: {
    number: '04',
    nameKo: '류지연',
    nameEn: 'RYU JIYEON',
    photos: [
      PHOTO_DATA["ryujiyeon_1"],
      PHOTO_DATA["ryujiyeon_2"],
      PHOTO_DATA["ryujiyeon_3"],
      PHOTO_DATA["ryujiyeon_4"],
    ],
    bgClass: 'ac-bg-4',
    specs: [
      { label: '신장', value: '163 cm' },
      { label: '생년', value: '2000년생' },
    ],
    filmo: [
      { year: '2026', title: '드라마 시즌 2', platform: 'Coupang Play' },
      { year: '2026', title: '드라마 (8부작)', platform: 'Topreels' },
      { year: '2021', title: '드라마', platform: 'TVING' },
      { year: '2020', title: '드라마', platform: '드라마' },
      { year: '2019', title: '드라마 시즌 1·2', platform: '드라마' },
      { year: '2018', title: '드라마', platform: 'OCN' },
    ],
    ads: [],
  },
  jinhyuk: {
    number: '05',
    nameKo: '진혁',
    nameEn: 'JIN HYUK',
    photos: [
      PHOTO_DATA["jinhyuk_1"],
      PHOTO_DATA["jinhyuk_2"],
      PHOTO_DATA["jinhyuk_3"],
    ],
    bgClass: 'ac-bg-5',
    specs: [
      { label: '신장', value: '183 cm' },
      { label: '생년', value: '1987년생' },
    ],
    filmo: [
      { year: '2024', title: '드라마', platform: 'KBS' },
      { year: '2022', title: '드라마', platform: 'tvN' },
      { year: '2019', title: '웹드라마', platform: 'WEB' },
      { year: '2017', title: '드라마', platform: 'OCN' },
      { year: '2016', title: '드라마', platform: 'MBC' },
      { year: '2014', title: '드라마', platform: 'SBS' },
      { year: '2013', title: '드라마', platform: 'SBS' },
      { year: '2012', title: '드라마', platform: 'MBC' },
    ],
    ads: [
      { year: '2021', title: '광고 활동', platform: 'CF' },
      { year: '2020', title: '광고 활동', platform: 'CF' },
    ],
  },
  leekyoungjae: {
    number: '06',
    nameKo: '이경재',
    nameEn: 'LEE KYOUNG JAE',
    photos: [
      PHOTO_DATA["leekyoungjae_1"],
      PHOTO_DATA["leekyoungjae_2"],
      PHOTO_DATA["leekyoungjae_3"],
      PHOTO_DATA["leekyoungjae_4"],
    ],
    bgClass: 'ac-bg-6',
    specs: [
      { label: '신장', value: '182 cm' },
      { label: '생년', value: '1994년생' },
    ],
    filmo: [
      { year: '2026', title: '신작 드라마', platform: '방영예정' },
      { year: '2021', title: '드라마', platform: '드라마' },
      { year: '2020', title: '드라마', platform: 'SBS' },
      { year: '2020', title: '드라마', platform: 'OCN' },
    ],
    ads: [
      { year: '2023', title: '수상 / 활동', platform: '수상' },
    ],
  },
  leegunhee: {
    number: '07',
    nameKo: '이건희',
    nameEn: 'LEE GUNHEE',
    photos: [
      PHOTO_DATA["leegunhee_1"],
      PHOTO_DATA["leegunhee_2"],
      PHOTO_DATA["leegunhee_3"],
      PHOTO_DATA["leegunhee_4"],
    ],
    bgClass: 'ac-bg-7',
    specs: [
      { label: '신장', value: '188 cm' },
      { label: '생년', value: '1992년생' },
    ],
    filmo: [
      { year: '2023', title: '드라마', platform: 'Coupang Play' },
      { year: '2022', title: '드라마 시즌 2', platform: 'ENA' },
      { year: '2017', title: '드라마', platform: 'MBC' },
      { year: '2015', title: '드라마', platform: 'SBS' },
      { year: '2015', title: '드라마', platform: 'MBC' },
    ],
    ads: [
      { year: '2022', title: 'TENNIS UNIVERSITY', platform: 'CF' },
      { year: '2021', title: 'BANG BANG', platform: 'CF' },
      { year: '2018', title: 'Samsung Galaxy Note9', platform: 'CF' },
    ],
  },
};

document.addEventListener('DOMContentLoaded', () => {

  /* ── Preloader ── */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 2000);
  });
  // fallback
  setTimeout(() => preloader.classList.add('fade-out'), 3500);


  /* ── Custom Cursor ── */
  const cursor    = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursor-dot');
  let mx = 0, my = 0;
  let cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursorDot.style.left = mx + 'px';
    cursorDot.style.top  = my + 'px';
  });

  const animateCursor = () => {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(animateCursor);
  };
  animateCursor();

  // Hide on mobile
  if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    cursorDot.style.display = 'none';
  }


  /* ── Nav scroll ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });


  /* ── Mobile menu ── */
  const menuBtn   = document.getElementById('menuBtn');
  const menuClose = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('mobileMenu');
  const mmLinks   = document.querySelectorAll('.mm-link');

  menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
  menuClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mmLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('open')));


  /* ── Scroll Reveal (IntersectionObserver) ── */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObs.observe(el));


  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* ── Artist card hover tilt ── */
  document.querySelectorAll('.artist-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-4px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });


  /* ── Platform items stagger on scroll ── */
  const platItems = document.querySelectorAll('.platform-item');
  const platObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const i = [...platItems].indexOf(entry.target);
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        platObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  platItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity .5s ease, transform .5s ease';
    platObs.observe(item);
  });


  /* ── Contact form ── */
  window.handleForm = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    const original = btn.textContent;
    btn.textContent = '전송되었습니다 ✓';
    btn.style.background = '#4a7c59';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 4000);
  };


  /* ── Hero parallax ── */
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    const heroStats   = document.querySelector('.hero-stats');
    if (heroContent) heroContent.style.transform = `translateY(${sy * 0.18}px)`;
    if (heroStats)   heroStats.style.transform   = `translateY(${sy * 0.1}px)`;
  }, { passive: true });


  /* ── Active nav link highlight ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  const activeObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.style.color = '');
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--gold)';
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => activeObs.observe(s));


  /* ── Number counter animation ── */
  const statNums = document.querySelectorAll('.stat-num');
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // just a subtle fade-in pulse
        entry.target.style.animation = 'none';
        entry.target.offsetHeight; // reflow
        entry.target.style.animation = 'statPulse .6s ease both';
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 1 });

  statNums.forEach(el => counterObs.observe(el));

  // inject keyframe
  const ks = document.createElement('style');
  ks.textContent = `
    @keyframes statPulse {
      0%   { transform: scale(.8); opacity: 0; }
      60%  { transform: scale(1.08); }
      100% { transform: scale(1); opacity: 1; }
    }
  `;
  document.head.appendChild(ks);


  /* ── Artist Modal ── */
  const modal      = document.getElementById('artistModal');
  const modalClose = document.getElementById('modalClose');
  const modalPhoto = document.getElementById('modalPhoto');
  const modalDots  = document.getElementById('modalDots');
  const modalPrev  = document.getElementById('modalPrev');
  const modalNext  = document.getElementById('modalNext');

  let currentPhotos = [];
  let currentPhotoIdx = 0;

  function renderModalPhotos(photos, bgClass) {
    currentPhotos = photos.filter(Boolean);
    currentPhotoIdx = 0;

    // Show photo or fallback bg
    updatePhoto();

    // Dots
    modalDots.innerHTML = '';
    if (currentPhotos.length > 1) {
      currentPhotos.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'mpn-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToPhoto(i));
        modalDots.appendChild(dot);
      });
    }

    // Show/hide nav
    const showNav = currentPhotos.length > 1;
    modalPrev.style.display = showNav ? '' : 'none';
    modalNext.style.display = showNav ? '' : 'none';
  }

  function updatePhoto() {
    if (currentPhotos.length > 0) {
      modalPhoto.style.backgroundImage = `url('${currentPhotos[currentPhotoIdx]}')`;
      modalPhoto.style.backgroundSize = 'cover';
      modalPhoto.style.backgroundPosition = 'center top';
    } else {
      modalPhoto.style.backgroundImage = '';
    }
    // Update dots
    document.querySelectorAll('.mpn-dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentPhotoIdx);
    });
  }

  function goToPhoto(idx) {
    currentPhotoIdx = (idx + currentPhotos.length) % currentPhotos.length;
    updatePhoto();
  }

  modalPrev.addEventListener('click', () => goToPhoto(currentPhotoIdx - 1));
  modalNext.addEventListener('click', () => goToPhoto(currentPhotoIdx + 1));

  function openModal(artistKey) {
    const a = ARTISTS[artistKey];
    if (!a) return;

    // Number & name
    document.getElementById('modalNumber').textContent = a.number;
    document.getElementById('modalNameKo').textContent = a.nameKo;
    document.getElementById('modalNameEn').textContent = a.nameEn;

    // Specs
    const specsEl = document.getElementById('modalSpecs');
    specsEl.innerHTML = a.specs.map(s => `
      <div class="spec-item">
        <span class="spec-label">${s.label}</span>
        <span class="spec-value">${s.value}</span>
      </div>
    `).join('');

    // Bio
    document.getElementById('modalBio').textContent = a.bio;

    // Filmo
    const filmoEl = document.getElementById('modalFilmo');
    const filmoSection = document.getElementById('modalFilmoSection');
    if (a.filmo && a.filmo.length) {
      filmoEl.innerHTML = a.filmo.map(f => `
        <div class="filmo-item">
          <span class="filmo-year">${f.year}</span>
          <span class="filmo-title">${f.title}</span>
          <span class="filmo-platform">${f.platform}</span>
        </div>
      `).join('');
      filmoSection.style.display = '';
    } else {
      filmoSection.style.display = 'none';
    }

    // Ads
    const adEl = document.getElementById('modalAd');
    const adSection = document.getElementById('modalAdSection');
    if (a.ads && a.ads.length) {
      adEl.innerHTML = a.ads.map(f => `
        <div class="filmo-item">
          <span class="filmo-year">${f.year}</span>
          <span class="filmo-title">${f.title}</span>
          <span class="filmo-platform">${f.platform}</span>
        </div>
      `).join('');
      adSection.style.display = '';
    } else {
      adSection.style.display = 'none';
    }

    // Photos — use ac-bg class from card as fallback
    const card = document.querySelector(`[data-artist="${artistKey}"] .ac-img-bg`);
    const bgStyle = card ? window.getComputedStyle(card).backgroundImage : '';
    if (a.photos.some(Boolean)) {
      renderModalPhotos(a.photos, a.bgClass);
    } else {
      // Use same gradient as card
      modalPhoto.style.backgroundImage = bgStyle;
      modalPhoto.style.backgroundSize = 'cover';
      modalDots.innerHTML = '';
      modalPrev.style.display = 'none';
      modalNext.style.display = 'none';
    }

    // Open
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Card click → open modal
  document.querySelectorAll('.artist-card[data-artist]').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset.artist);
    });
  });

  // Close
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (modal.classList.contains('open')) {
      if (e.key === 'ArrowLeft')  goToPhoto(currentPhotoIdx - 1);
      if (e.key === 'ArrowRight') goToPhoto(currentPhotoIdx + 1);
    }
  });

  // CTA button closes modal and scrolls to contact
  document.getElementById('modalCtaBtn').addEventListener('click', () => {
    closeModal();
  });

  // ── Inject card background photos ──
  const cardBgMap = {
    'hanchae':      { cls: '.ac-bg-1', key: 'hanchae_1_card' },
    'gominseung':   { cls: '.ac-bg-2', key: 'gominseung_1_card' },
    'leehyunjeong': { cls: '.ac-bg-3', key: 'leehyunjeong_card' },
    'ryujiyeon':    { cls: '.ac-bg-4', key: 'ryujiyeon_card' },
    'jinhyuk':      { cls: '.ac-bg-5', key: 'jinhyuk_1_card' },
    'leekyoungjae': { cls: '.ac-bg-6', key: 'leekyoungjae_card' },
    'leegunhee':    { cls: '.ac-bg-7', key: 'leegunhee_card' },
  };
  if (typeof CARD_DATA !== 'undefined') {
    Object.values(cardBgMap).forEach(({ cls, key }) => {
      const el = document.querySelector(cls);
      if (el && CARD_DATA[key]) {
        el.style.backgroundImage = `url('${CARD_DATA[key]}')`;
      }
    });
  }

});
