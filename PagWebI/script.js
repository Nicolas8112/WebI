// --- LOGIN ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === "admin" && pass === "hola12345") {
      window.location.href = "main.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
}

// --- MOSTRAR FORMULARIO DE CONTACTO ---
const btnContacto = document.getElementById('btnContacto');
if (btnContacto) {
  btnContacto.addEventListener('click', () => {
    document.getElementById('contacto').classList.remove('d-none');
    btnContacto.classList.add('d-none');
    window.scrollTo({ top: document.getElementById('contacto').offsetTop, behavior: 'smooth' });
  });
}

// --- FORMULARIO DE CONTACTO ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
    contactForm.reset();
  });
}