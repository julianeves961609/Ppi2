function login() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';
    modal.classList.add('show');
  }
  
  function fechar() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'none';
    modal.classList.remove('show');
  }
  
  function submitLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      alert(`Login realizado com email: ${email}`);
      closeModal();  // Fechar modal após o login
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  

  function submitCadastro() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      alert(`Login realizado com email: ${email}`);
      closeModal();  // Fechar modal após o login
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }