const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const searchInput = document.getElementById('book-search');
const filterPills = document.querySelectorAll('.pill');
const bookCards = document.querySelectorAll('.book-card');

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();
    filterBooks(query, document.querySelector('.pill.active')?.dataset.filter || 'all');
  });
}

filterPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    filterPills.forEach((item) => item.classList.remove('active'));
    pill.classList.add('active');
    const selected = pill.dataset.filter || 'all';
    const query = (searchInput?.value || '').trim().toLowerCase();
    filterBooks(query, selected);
  });
});

function filterBooks(query, category) {
  bookCards.forEach((card) => {
    const title = card.dataset.title?.toLowerCase() || '';
    const tag = card.dataset.category?.toLowerCase() || '';
    const matchesQuery = !query || title.includes(query) || tag.includes(query);
    const matchesCategory = category === 'all' || tag === category;
    card.style.display = matchesQuery && matchesCategory ? 'block' : 'none';
  });
}

const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    faqButtons.forEach((otherButton) => {
      otherButton.closest('.faq-item')?.classList.remove('open');
    });

    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Mahadsanid! Foomkaaga waa la diray. Ciyaartoyga taageerada ayaa kulankiina laguugu soo celin doonaa.';
    formStatus.style.display = 'block';
    contactForm.reset();
  });
}
