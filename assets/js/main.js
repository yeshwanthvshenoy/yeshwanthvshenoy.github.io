// Nav scroll effect + active section tracking
const nav      = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObserver.observe(s));

// Scroll-in animations
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => entry.target.classList.add('in-view'), delay);
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));

// Mobile menu
const hamburger     = document.getElementById('hamburger');
const mobileOverlay = document.getElementById('mobileOverlay');

hamburger.addEventListener('click', () => {
  const open = mobileOverlay.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileOverlay.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileOverlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Engineering Insights — fetch from Medium RSS via rss2json
async function loadBlog() {
  const grid  = document.getElementById('blog-grid');
  const empty = document.getElementById('blog-empty');
  const cta   = document.getElementById('blog-cta');
  if (!grid) return;

  try {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 6000);

    const res  = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=' +
      encodeURIComponent('https://medium.com/feed/@yeshwanthvshenoy') +
      '&count=6',
      { signal: controller.signal }
    );
    clearTimeout(tid);

    const data = await res.json();

    if (data.status !== 'ok' || !Array.isArray(data.items) || data.items.length === 0) {
      showEmpty();
      return;
    }

    renderArticles(data.items);
  } catch (_) {
    showEmpty();
  }

  function showEmpty() {
    grid.style.display  = 'none';
    empty.style.display = 'flex';
  }

  function renderArticles(items) {
    grid.innerHTML = items.map(item => {
      const date = new Date(item.pubDate).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
      });
      const words    = (item.content || '').replace(/<[^>]+>/g, '').split(/\s+/).length;
      const readTime = Math.max(1, Math.round(words / 200));
      const excerpt  = (item.description || '')
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 155) + '…';
      const tags = (item.categories || []).slice(0, 3);

      const thumbHtml = item.thumbnail
        ? `<img src="${item.thumbnail}" alt="" loading="lazy">`
        : '';

      const tagsHtml = tags.length
        ? `<div class="article-tags">${tags.map(t =>
            `<span class="article-tag">${t}</span>`).join('')}</div>`
        : '';

      return `
        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="article-card">
          <div class="article-thumb${item.thumbnail ? '' : ' article-thumb-fallback'}">${thumbHtml}</div>
          <div class="article-body">
            ${tagsHtml}
            <h3 class="article-title">${item.title}</h3>
            <p class="article-excerpt">${excerpt}</p>
            <div class="article-footer">
              <span class="article-date">${date}</span>
              <span class="article-read">${readTime} min read</span>
            </div>
          </div>
        </a>`;
    }).join('');

    cta.style.display = 'flex';
  }
}

loadBlog();

// Typed.js
new Typed('#typed', {
  strings: [
    'Staff Software Engineer',
    'Platform Engineering',
    'Developer Experience',
    'Distributed Systems',
    'Cloud Native SaaS',
  ],
  typeSpeed: 75,
  backSpeed: 45,
  backDelay: 2200,
  loop: true,
  cursorChar: '|',
});
