function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

function filterServices(category, button) {
  const services = document.querySelectorAll(".service");
  const buttons = document.querySelectorAll(".filter-area button");

  buttons.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  services.forEach(service => {
    if (category === "all" || service.classList.contains(category)) {
      service.style.display = "block";
    } else {
      service.style.display = "none";
    }
  });
}

function agendarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const horario = document.getElementById("horario").value;

  const mensagem = `Olá! Meu nome é ${nome}. Gostaria de agendar uma sessão na San Vitale.%0A%0AServiço: ${servico}%0AData: ${data}%0AHorário: ${horario}`;

  window.open(`https://wa.me/5586998055995?text=${mensagem}`, "_blank");
}
