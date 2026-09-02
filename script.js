const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const catalogCards = document.querySelectorAll('.book-card[data-category]');
const searchInput = document.querySelector('.search-box input');

if (filterButtons.length) {
  let activeFilter = 'all';

  const applyFilters = () => {
    const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : '';

    catalogCards.forEach((card) => {
      const category = card.dataset.category;
      const text = card.textContent.toLowerCase();
      const matchesCategory = activeFilter === 'all' || category === activeFilter;
      const matchesSearch = !searchValue || text.includes(searchValue);

      card.style.display = matchesCategory && matchesSearch ? 'block' : 'none';
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      activeFilter = button.dataset.filter;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
}

const subscribeForms = document.querySelectorAll('.subscribe-form');

subscribeForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const message = form.querySelector('.subscribe-message');

    if (!emailInput || !message || !emailInput.checkValidity()) {
      form.reportValidity();
      return;
    }

    localStorage.setItem('readSphereSubscriber', emailInput.value.trim());
    message.textContent = 'Thanks for subscribing!';
    form.reset();
  });
});
