
const escolas = [
  {
    nome: "Interagino",
    fase: "Jardim de Infância",
    historia: "Foi onde tudo começou. Entre brincadeiras, desenhos, músicas e novas amizades, Guilherme descobriu um mundo de possibilidades."
  },
  {
    nome: "Colégio Energia Ativa",
    fase: "Ensino Fundamental até o 8º ano",
    historia: "Foram muitos anos de aprendizado, amizades, recreios, trabalhos em grupo, provas e momentos especiais. Uma escola que fez parte de grande parte da infância de Guilherme."
  },
  {
    nome: "Colégio Nossa Senhora de Fátima",
    fase: "9º ano — 3 meses",
    historia: "Uma passagem curta, mas que trouxe novas experiências, colegas e aprendizados."
  },
  {
    nome: "Colégio Estadual Inez Vicente Borocz",
    fase: "9º ano",
    historia: "Uma nova etapa, com desafios, novas amizades e experiências que ajudaram Guilherme a amadurecer."
  },
  {
    nome: "Colégio Estadual Teobaldo",
    fase: "1º ano do Ensino Médio",
    historia: "O começo do Ensino Médio marcou uma fase de novas responsabilidades, professores, colegas e objetivos."
  },
  {
    nome: "Colégio Morelli",
    fase: "Ensino Médio — LEGACY 2026",
    historia: "Mais um capítulo importante da trajetória de Guilherme, reunindo experiências, aprendizados e expectativas para o futuro."
  }
];

// Espaço para as 12 redações.
// Substitua os títulos e textos pelos seus trabalhos.

const redacoes = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  titulo: `Redação ${String(i + 1).padStart(2, "0")}`,
  texto: ""
}));

const STORAGE_KEY = "guilherme_legacy_redacoes";

function carregarRedacoes() {
  try {
    const salvas = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (Array.isArray(salvas)) {
      salvas.forEach((redacao, i) => {
        if (redacoes[i] && redacao) {
          redacoes[i].titulo = redacao.titulo || redacoes[i].titulo;
          redacoes[i].texto = redacao.texto || "";
        }
      });
    }
  } catch (erro) {
    console.warn("Não foi possível carregar as redações.", erro);
  }
}

function salvarRedacoes() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(redacoes));
  } catch (erro) {
    console.warn("Não foi possível salvar as redações.", erro);
  }
}

function criarElemento(tag, classe, texto) {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto !== undefined) elemento.textContent = texto;
  return elemento;
}

function renderizarEscolas() {
  const container = document.querySelector(
    "#timeline, #escolas, [data-escolas]"
  );

  if (!container) return;

  container.innerHTML = "";

  escolas.forEach((escola, indice) => {
    const card = criarElemento("article", "timeline-item reveal");
    const numero = criarElemento(
      "span",
      "timeline-number",
      String(indice + 1).padStart(2, "0")
    );
    const conteudo = criarElemento("div", "timeline-content");
    const fase = criarElemento("span", "timeline-phase", escola.fase);
    const titulo = criarElemento("h3", "", escola.nome);
    const historia = criarElemento("p", "", escola.historia);

    conteudo.append(fase, titulo, historia);
    card.append(numero, conteudo);
    container.appendChild(card);
  });
}

function renderizarRedacoes(filtro = "") {
  const container = document.querySelector(
    "#redacoes-grid, #redacoesGrid, [data-redacoes]"
  );

  if (!container) return;

  container.innerHTML = "";

  const termo = filtro.toLocaleLowerCase("pt-BR").trim();

  const filtradas = redacoes.filter(redacao =>
    `${redacao.titulo} ${redacao.texto}`
      .toLocaleLowerCase("pt-BR")
      .includes(termo)
  );

  if (!filtradas.length) {
    container.appendChild(
      criarElemento("p", "empty-state", "Nenhuma redação encontrada.")
    );
    return;
  }

  filtradas.forEach(redacao => {
    const card = criarElemento("article", "redacao-card reveal");
    const numero = criarElemento(
      "span",
      "redacao-number",
      String(redacao.id).padStart(2, "0")
    );
    const titulo = criarElemento("h3", "", redacao.titulo);
    const resumo = criarElemento(
      "p",
      "",
      redacao.texto
        ? redacao.texto.slice(0, 130) +
          (redacao.texto.length > 130 ? "..." : "")
        : "Um novo capítulo de ideias e palavras."
    );

    const botao = criarElemento(
      "button",
      "redacao-button",
      redacao.texto ? "Ler redação" : "Adicionar redação"
    );

    botao.type = "button";
    botao.addEventListener("click", () => abrirRedacao(redacao.id));

    card.append(numero, titulo, resumo, botao);
    container.appendChild(card);
  });

  observarAnimacoes();
}

function abrirRedacao(id) {
  const redacao = redacoes.find(item => item.id === Number(id));
  if (!redacao) return;

  let modal = document.querySelector("#legacy-modal");

  if (!modal) {
    modal = criarElemento("div", "legacy-modal");
    modal.id = "legacy-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    document.body.appendChild(modal);
  }

  modal.innerHTML = "";

  const painel = criarElemento("div", "legacy-modal-content");
  const fechar = criarElemento("button", "modal-close", "×");
  const titulo = criarElemento("h2", "", redacao.titulo);
  const texto = criarElemento(
    "p",
    "modal-text",
    redacao.texto || "Esta redação ainda não foi adicionada."
  );

  fechar.type = "button";
  fechar.setAttribute("aria-label", "Fechar");
  fechar.addEventListener("click", fecharModal);

  const editar = criarElemento("button", "redacao-button", "Editar redação");
  editar.type = "button";
  editar.addEventListener("click", () => editarRedacao(id));

  painel.append(fechar, titulo, texto, editar);
  modal.appendChild(painel);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function editarRedacao(id) {
  const redacao = redacoes.find(item => item.id === Number(id));
  if (!redacao) return;

  const modal = document.querySelector("#legacy-modal");
  if (!modal) return;

  modal.innerHTML = "";

  const painel = criarElemento("div", "legacy-modal-content");
  const fechar = criarElemento("button", "modal-close", "×");
  const titulo = criarElemento("h2", "", "Editar redação");

  const campoTitulo = criarElemento("input", "redacao-input");
  campoTitulo.value = redacao.titulo;
  campoTitulo.placeholder = "Título da redação";

  const campoTexto = criarElemento("textarea", "redacao-textarea");
  campoTexto.value = redacao.texto;
  campoTexto.placeholder = "Escreva sua redação completa aqui...";
  campoTexto.rows = 14;

  const salvar = criarElemento("button", "redacao-button", "Salvar redação");

  fechar.type = "button";
  fechar.addEventListener("click", fecharModal);

  salvar.type = "button";
  salvar.addEventListener("click", () => {
    redacao.titulo = campoTitulo.value.trim() || redacao.titulo;
    redacao.texto = campoTexto.value;

    salvarRedacoes();
    renderizarRedacoes();
    abrirRedacao(id);
  });

  painel.append(fechar, titulo, campoTitulo, campoTexto, salvar);
  modal.appendChild(painel);
  modal.classList.add("active");
}

function fecharModal() {
  const modal = document.querySelector("#legacy-modal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

let observer;

function observarAnimacoes() {
  const elementos = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elementos.forEach(el => el.classList.add("visible"));
    return;
  }

  if (!observer) {
    observer = new IntersectionObserver(
      entradas => {
        entradas.forEach(entrada => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  }

  elementos.forEach(el => observer.observe(el));
}

function configurarPesquisa() {
  const pesquisa = document.querySelector(
    "#pesquisa, #searchInput, #search, [data-pesquisa]"
  );

  if (!pesquisa) return;

  pesquisa.addEventListener("input", () => {
    renderizarRedacoes(pesquisa.value);
  });
}

function configurarMenu() {
  const botao = document.querySelector(
    "#menu-toggle, .menu-toggle, [data-menu-toggle]"
  );

  const menu = document.querySelector(
    "#nav-menu, .nav-links, [data-nav-menu]"
  );

  if (!botao || !menu) return;

  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("active");
    botao.setAttribute("aria-expanded", String(aberto));
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      botao.setAttribute("aria-expanded", "false");
    });
  });
}

function configurarRolagem() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", evento => {
      const destino = document.querySelector(link.getAttribute("href"));

      if (destino) {
        evento.preventDefault();
        destino.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") fecharModal();
});

document.addEventListener("click", evento => {
  if (evento.target?.id === "legacy-modal") fecharModal();
});

document.addEventListener("DOMContentLoaded", () => {
  carregarRedacoes();
  renderizarEscolas();
  renderizarRedacoes();
  configurarPesquisa();
  configurarMenu();
  configurarRolagem();
  observarAnimacoes();

  console.log("Guilherme Tavares | LEGACY 2026");
});
