function agendarConsulta() {
  alert("Redirecionando para o agendamento de consulta...");
  
}

function enviarFormulario(event) {
  event.preventDefault();
  alert("Formulário enviado com sucesso!");
  document.querySelector("form").reset();
  return false;
}
function aumentarFonte() {
  const texto = document.getElementById("texto");
  let tamanhoAtual = window.getComputedStyle(texto).fontSize;
  let tamanhoNumerico = parseFloat(tamanhoAtual);
  texto.style.fontSize = (tamanhoNumerico + 2) + "px";
}
function enviarAgendamento(event) {
  event.preventDefault();
  alert("✅ Agendamento realizado com sucesso! Em breve entraremos em contato.");
  document.querySelector("form").reset();
  return false;
}
function lerConteudo() {
  const synth = window.speechSynthesis;

  if (synth.speaking) {
    synth.cancel(); 
  }


  const mainContent = document.querySelector("main");
  if (!mainContent) return;

  const texto = mainContent.innerText;

  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = 'pt-BR';
  utterance.rate = 1;
  utterance.pitch = 1;

  synth.speak(utterance);
}

function aumentarFonte() {
  const body = document.body;
  const currentSize = window.getComputedStyle(body).fontSize;
  const newSize = parseFloat(currentSize) * 1.2 + "px";
  body.style.fontSize = newSize;
}

function ativarLibras() {
  if (!window.vlibrasAtivado) {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
    window.vlibrasAtivado = true; // Evita ativar múltiplas vezes
  }
}


function lerConteudo() {
  const content = document.querySelector('main');
  const utterance = new SpeechSynthesisUtterance(content.innerText);
  window.speechSynthesis.speak(utterance);
}


document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll('.faq-item');
  
  const options = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  faqItems.forEach(item => {
    observer.observe(item);
  });
});

function aumentarFonte() {
  const body = document.body;
  const style = window.getComputedStyle(body).fontSize;
  const novaFonte = parseFloat(style) * 1.1 + "px";
  body.style.fontSize = novaFonte;
}

function ativarLibras() {
  if (!window.vlibrasAtivado) {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
    window.vlibrasAtivado = true;
  }
}

function lerConteudo() {
  const texto = document.querySelector('main').innerText;
  const utterance = new SpeechSynthesisUtterance(texto);
  window.speechSynthesis.speak(utterance);
}

function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  document.getElementById("mensagemEnviada").style.display = "block";
  document.getElementById("formContato").reset();

  setTimeout(() => {
    document.getElementById("mensagemEnviada").style.display = "none";
  }, 4000);

  return false;
}

function simularVideo() {
  const simulacao = document.getElementById("simulacaoVideo");
  simulacao.classList.remove("hidden");
  simulacao.classList.add("fade-in");

  // Scroll suave até a simulação
  simulacao.scrollIntoView({ behavior: "smooth" });
}

function aumentarFonte() {
  document.body.style.fontSize = "larger";
}

function ativarLibras() {
  alert("Recurso de tradução em Libras ativado (simulação).");
}

function lerConteudo() {
  const texto = document.body.innerText;
  const msg = new SpeechSynthesisUtterance(texto);
  window.speechSynthesis.speak(msg);
}

function confirmarConsulta(event) {
  event.preventDefault();
  const nome = document.getElementById("nomePaciente").value.trim();

  if (nome.length > 0) {
    // Exibe a sala de vídeo simulada com o nome do paciente
    document.getElementById("simulacaoVideo").classList.remove("hidden");
    document.getElementById("nomePacienteSimulado").textContent = nome;
  } else {
    alert("Por favor, digite seu nome para prosseguir.");
  }
}
