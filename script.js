// script.js – Hamiaphone Interactive Features

// Product click handler – shows availability message
document.querySelectorAll('.products img').forEach(img => {
  img.addEventListener('click', () => {
    alert("📱 Produit disponible en boutique ! Contactez-nous pour la livraison.");
  });
  img.style.cursor = 'pointer';
});

// Auto-update footer year
document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} Hamiaphone – Vente et Réparation iPhone à Kouba`;

// Optional: smooth scroll for menu links (if needed)
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
