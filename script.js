// Interação nas imagens principais
document.querySelectorAll('.interactive-img').forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  });
  
  // Clique no botão comprar
  document.querySelectorAll('.comprar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Produto adicionado ao carrinho!');
    });
  });
  