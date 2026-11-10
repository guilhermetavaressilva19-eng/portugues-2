
const escolas = [
  {
    nome: "Interagino",
    fase: "Jardim de Infância",
    historia: `Foi na Interagino que Guilherme deu seus primeiros passos na vida escolar. Entre desenhos coloridos, brincadeiras no recreio, músicas e atividades em grupo, começou a descobrir o mundo e a fazer suas primeiras amizades. Cada dia era uma aventura diferente, cheia de curiosidade e pequenas conquistas.`
  },
  {
    nome: "Colégio Energia Ativa",
    fase: "Ensino Fundamental até o 8º ano",
    historia: `O Energia Ativa foi muito mais do que uma escola: foi o cenário de grande parte da infância de Guilherme. Foram anos de amizades, provas, trabalhos em grupo, conversas nos corredores, brincadeiras e risadas durante os intervalos. Também houve dias difíceis, tarefas esquecidas e aquela ansiedade antes das avaliações. Entre momentos simples e especiais, Guilherme cresceu, aprendeu e construiu lembranças que levaria para sempre.`
  },
  {
    nome: "Colégio Nossa Senhora de Fátima",
    fase: "9º ano — 3 meses",
    historia: `No 9º ano, Guilherme começou uma nova etapa no Colégio Nossa Senhora de Fátima. Embora tenha estudado ali por apenas três meses, viveu a experiência de conhecer professores, fazer novas amizades e se adaptar a uma rotina diferente. Foi uma passagem rápida, mas que trouxe aprendizados e mostrou que mudanças fazem parte da vida.`
  },
  {
    nome: "Colégio Estadual Inez Vicente Borocz",
    fase: "9º ano",
    historia: `Depois de sua passagem pelo Nossa Senhora de Fátima, Guilherme chegou ao Colégio Estadual Inez Vicente Borocz. Mais uma vez, precisou se adaptar a um ambiente diferente, conhecer colegas e construir novas amizades. Entre aulas, trabalhos, provas e momentos de descontração, concluiu uma etapa importante de sua trajetória escolar.`
  },
  {
    nome: "Colégio Estadual Teobaldo",
    fase: "1º ano do Ensino Médio",
    historia: `O início do Ensino Médio trouxe novos desafios e responsabilidades. No Colégio Estadual Teobaldo, Guilherme conheceu outra rotina, novas matérias e professores. As conversas com os colegas, as atividades em grupo e as experiências do dia a dia marcaram o começo de uma fase de amadurecimento e de novas perspectivas para o futuro.`
  },
  {
    nome: "Colégio Morelli",
    fase: "Ensino Médio — LEGACY 2026",
    historia: `A chegada ao Colégio Morelli representou mais um capítulo da história de Guilherme. Depois de passar por diferentes escolas e conhecer tantas pessoas, ele trouxe consigo experiências, amizades e aprendizados. Agora, cada aula, trabalho e conquista ajuda a construir não apenas suas lembranças escolares, mas também os sonhos e objetivos que pretende realizar.`
  }
];

/* =========================================
   REDAÇÕES — PARTE 1
========================================= */

const redacoes = [
  {
    id: 1,
    titulo: "Cultura fitness: bem-estar ou busca por estética inatingível",
    texto: `A busca por saúde e bem-estar ganhou um espaço sem precedentes na sociedade moderna. Academias lotadas, alimentação equilibrada e a rotina de exercícios físicos são celebrados como pilares de uma vida longa e funcional. No entanto, existe uma linha tênue entre a cultura fitness voltada para o autocuidado e a obsessão pela busca de uma estética inatingível.

Impulsionada pelas redes sociais, a indústria do corpo perfeito frequentemente vende padrões irrealistas, moldados por filtros, ângulos estudados e, em muitos casos, procedimentos estéticos não revelados. Essa comparação constante transforma o cuidado com a saúde em uma fonte de frustração e ansiedade. Quando o valor de uma pessoa passa a ser medido pelo percentual de gordura ou pela definição muscular, o bem-estar físico e mental é comprometido.

A verdadeira cultura fitness deve focar na funcionalidade, na energia e na longevidade, respeitando a diversidade de corpos e limites de cada indivíduo. Cuidar de si mesmo é um ato de respeito ao próprio corpo, e não uma punição para alcançar um ideal fabricado. Encontrar o equilíbrio entre metas saudáveis e a aceitação pessoal é o único caminho sustentável para o real bem-estar.`
  },
  {
    id: 2,
    titulo: "Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil",
    texto: `A Constituição Federal de 1988 garante direitos aos povos indígenas, como a proteção de suas terras e culturas. Porém, muitos desses direitos ainda não são respeitados, dificultando a cidadania indígena no Brasil.

Um dos principais problemas é a invasão de terras indígenas, causada pelo garimpo ilegal e pelo desmatamento. Além disso, a falta de fiscalização do governo coloca em risco a vida dessas comunidades.

Outro desafio é o preconceito, que dificulta o acesso dos indígenas à educação, à saúde e a oportunidades. Isso mostra que ainda falta respeito e valorização de suas culturas.

Portanto, o Governo Federal, junto à Funai, deve aumentar a fiscalização das terras indígenas. Além disso, as escolas devem promover atividades sobre a cultura desses povos, para combater o preconceito e garantir seus direitos.`
  },
  {
    id: 3,
    titulo: "Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea",
    texto: `Atualmente, as redes sociais influenciam cada vez mais o comportamento das pessoas. Por meio dos algoritmos, conteúdos são selecionados de acordo com os interesses dos usuários, afetando suas escolhas, opiniões e hábitos de consumo.

Um dos principais problemas é o consumo exagerado, pois as plataformas mostram constantemente produtos e estilos de vida que incentivam as pessoas a comprar coisas desnecessárias.

Além disso, os algoritmos podem limitar o acesso a diferentes opiniões, fazendo com que os usuários vejam apenas conteúdos semelhantes aos que já gostam. Isso pode prejudicar o pensamento crítico e a diversidade cultural.

Portanto, o Ministério da Educação deve promover aulas sobre o uso consciente das redes sociais, ensinando os jovens a identificar influências digitais. Assim, será possível desenvolver uma sociedade mais crítica e menos dependente dos algoritmos.`
  },
  {
    id: 4,
    titulo: "Espécies em extinção e equilíbrio ecológico: desafios para a conservação da fauna brasileira",
    texto: `A conservação da fauna brasileira é um desafio importante para a preservação do meio ambiente. Nesse sentido, o Brasil possui uma grande diversidade de espécies, porém muitas estão ameaçadas de extinção devido às ações humanas. Entre as principais causas desse problema estão o desmatamento e a caça ilegal, que prejudicam o equilíbrio ecológico e colocam em risco a biodiversidade.

Em primeiro lugar, o desmatamento é um dos principais fatores que ameaçam os animais brasileiros. A destruição de florestas para a expansão agropecuária e urbana reduz os habitats naturais, dificultando a sobrevivência de diversas espécies. Como consequência, ocorre a diminuição da biodiversidade e o desequilíbrio das cadeias alimentares, prejudicando o funcionamento dos ecossistemas.

Além disso, a caça ilegal e o tráfico de animais silvestres contribuem para o desaparecimento de espécies. A retirada desses animais da natureza afeta a reprodução e o controle das populações, causando impactos ambientais. Dessa forma, a falta de fiscalização e de conscientização da sociedade agrava o problema e dificulta a conservação da fauna brasileira.

Portanto, é necessário combater a extinção de espécies e preservar o equilíbrio ecológico. Para isso, o Governo Federal, por meio dos órgãos ambientais, deve ampliar a fiscalização e combater o desmatamento e o tráfico de animais. Além disso, as escolas e os meios de comunicação devem promover campanhas de conscientização sobre a importância da biodiversidade. Assim, será possível proteger a fauna brasileira e garantir a preservação dos ecossistemas para as futuras gerações.`
  },

  {
    id: 5,
    titulo: "Exploração espacial no século XXI: desafios para a conciliação entre avanço científico e responsabilidade social",
    texto: `Desde o início da corrida espacial, no século XX, a humanidade passou a ampliar seus conhecimentos sobre o Universo e a desenvolver tecnologias capazes de transformar a vida em sociedade. No século XXI, esse processo ganhou ainda mais força com o crescimento de empresas privadas e de novas missões espaciais. Entretanto, embora a exploração do espaço represente importantes avanços científicos, ela também apresenta desafios relacionados à desigualdade social e aos impactos ambientais. Dessa forma, torna-se necessário conciliar o progresso científico com a responsabilidade social.

Em primeiro lugar, é importante destacar que os investimentos na exploração espacial podem contribuir para o desenvolvimento tecnológico. Tecnologias criadas para missões espaciais podem posteriormente ser utilizadas em áreas como comunicação, meteorologia e monitoramento ambiental. Nesse sentido, o avanço científico pode trazer benefícios para a sociedade. Contudo, quando os investimentos são concentrados em projetos de alto custo enquanto problemas básicos, como pobreza, fome e falta de acesso à educação, permanecem, surge um questionamento sobre a distribuição dos recursos e das prioridades sociais.

Além disso, a intensificação das atividades espaciais gera impactos que não podem ser ignorados. O aumento do número de satélites e lançamentos contribui para a formação de detritos espaciais, que podem colocar outras missões em risco e dificultar a utilização sustentável da órbita terrestre. Assim, o desenvolvimento tecnológico precisa estar acompanhado de medidas de controle e cooperação internacional, evitando que a busca pelo conhecimento provoque novos problemas ambientais e tecnológicos.

Portanto, é fundamental buscar um equilíbrio entre exploração espacial e responsabilidade social. Para isso, governos e organizações internacionais devem estabelecer normas para controlar os impactos ambientais das atividades espaciais, além de fiscalizar empresas privadas do setor. Paralelamente, os investimentos científicos devem promover benefícios sociais, direcionando parte dos recursos e das tecnologias desenvolvidas para áreas como educação, comunicação e preservação ambiental. Dessa maneira, será possível garantir que a exploração espacial avance sem deixar de considerar as necessidades da sociedade e a preservação do planeta.`
  },
  {
    id: 6,
    titulo: "Migração e acolhimento: desafios da convivência em contextos globais",
    texto: `A migração é um fenômeno presente em diversos países e ocorre por motivos como guerras, crises econômicas e busca por melhores condições de vida. Nesse contexto, a Declaração Universal dos Direitos Himanos, criada pela Organização das Nações Unidas (ONU), estabelece que todos os indivíduos possuem direitos fundamentais, independentemente de sua origem. Entretanto, na sociedade contemporânea, muitos migrantes enfrentam dificuldades de acolhimento e preconceito nos países de destino. Dessa forma, a discriminação e a falta de políticas públicas eficientes representam desafios para a convivência em contextos globais.

Em primeiro lugar, o preconceito contra imigrantes dificulta sua integração social. Isso acontece porque muitos estrangeiros são vistos de maneira negativa devido às diferenças culturais, linguísticas e religiosas. Como consequência, essas pessoas podem sofrer exclusão social e encontrar obstáculos para conseguir emprego, moradia e acesso à educação. Assim, a intolerância prejudica tanto os migrantes quanto a construção de uma sociedade mais justa e respeitosa.

Além disso, a insuficiência de políticas públicas de acolhimento agrava essa situação. A falta de assistência governamental, de oportunidades de trabalho e de acesso aos serviços básicos dificulta a adaptação dos recém-chegados. Nesse sentido, é fundamental que os países desenvolvam medidas que garantam condições dignas de vida aos migrantes, contribuindo para sua inclusão e para a redução das desigualdades sociais.

Portanto, é necessário enfrentar os desafios relacionados à migração e ao acolhimento. Para isso, os governos devem ampliar as políticas públicas de assistência aos imigrantes, por meio da oferta de cursos de idiomas, oportunidades de emprego e acesso à educação e à saúde. Ademais, as escolas e os meios de comunicação devem promover campanhas de conscientização sobre o respeito às diferenças culturais. Dessa maneira, será possível construir uma sociedade mais acolhedora, na qual a diversidade seja valorizada e os direitos humanos sejam respeitados.`
  },
  {
    id: 7,
    titulo: "El Niño e mudanças climáticas: desafios para a preparação da sociedade diante de eventos extremos",
    texto: `As mudanças climáticas representam um dos maiores desafios da sociedade contemporânea. Nesse contexto, o fenômeno El Niño, caracterizado pelo aquecimento anormal das águas do Oceano Pacífico Equatorial, pode intensificar eventos climáticos extremos, como secas, enchentes e ondas de calor. No Brasil, esses acontecimentos afetam milhares de pessoas e evidenciam a falta de preparação da sociedade. Dessa forma, a ausência de infraestrutura adequada e a pouca conscientização da população dificultam o enfrentamento desses problemas.

Em primeiro lugar, a precariedade da infraestrutura urbana aumenta os impactos dos eventos climáticos extremos. Em diversas cidades brasileiras, a falta de sistemas eficientes de drenagem, o descarte irregular de lixo e a ocupação de áreas de risco contribuem para enchentes e deslizamentos. Como consequência, muitas famílias perdem suas casas e enfrentam dificuldades para reconstruir suas vidas. Assim, torna-se necessário ampliar os investimentos públicos em prevenção e planejamento urbano.

Além disso, a falta de educação ambiental também prejudica a preparação da sociedade. Muitas pessoas desconhecem os riscos relacionados às mudanças climáticas e não sabem como agir em situações de emergência. Nesse sentido, as escolas e os meios de comunicação possuem papel fundamental na divulgação de informações sobre prevenção, sustentabilidade e segurança. Portanto, conscientizar a população é essencial para diminuir os danos causados por esses fenômenos.

Diante disso, é fundamental que o Governo Federal, em parceria com estados e municípios, desenvolva políticas públicas de prevenção aos desastres climáticos. Para isso, devem ser realizados investimentos em infraestrutura, sistemas de alerta e fiscalização de áreas de risco. Além disso, o Ministério da Educação deve promover campanhas e projetos escolares sobre mudanças climáticas, por meio de palestras e atividades educativas. Dessa maneira, será possível construir uma sociedade mais preparada, consciente e segura diante dos eventos extremos.`
  },
  {
    id: 8,
    titulo: "Obsolescência tecnológica e descarte de resíduos eletrônicos: desafios para a sustentabilidade no Brasil",
    texto: `Atualmente, o avanço da tecnologia faz com que aparelhos eletrônicos sejam substituídos cada vez mais rápido. Entretanto, o descarte incorreto desses produtos causa problemas ambientais e dificulta a sustentabilidade no Brasil.

Um dos principais desafios é a obsolescência tecnológica, pois muitos aparelhos ficam ultrapassados em pouco tempo, incentivando o consumo de novos produtos. Isso aumenta a quantidade de lixo eletrônico produzido.

Além disso, a falta de informação sobre o descarte correto faz com que celulares, computadores e baterias sejam jogados no lixo comum, contaminando o solo e a água com substâncias tóxicas.

Portanto, o Governo Federal deve ampliar os pontos de coleta de resíduos eletrônicos e promover campanhas educativas nas escolas e nas redes sociais. Assim, será possível reduzir os impactos ambientais e incentivar um consumo mais consciente.`
  },
  {
    id: 9,
    titulo: "Redação 09 — Em breve",
    texto: ""
  },
  {
    id: 10,
    titulo: "Redação 10 — Em breve",
    texto: ""
  },
  {
    id: 11,
    titulo: "Redação 11 — Em breve",
    texto: ""
  },
  {
    id: 12,
    titulo: "Redação 12 — Em breve",
    texto: ""
  }
];

/* FIM DA PARTE 2 DE 3 */

/* ==========================================
   GUILHERME TAVARES | LEGACY 2026
   PARTE 3 DE 3 — FUNCIONALIDADES
========================================== */

/* ==========================================
   SALVAMENTO LOCAL DAS REDAÇÕES
========================================== */

const STORAGE_KEY = "guilherme_legacy_redacoes";

function carregarRedacoes() {
  try {
    const salvas = JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    );

    if (!Array.isArray(salvas)) return;

    salvas.forEach(item => {
      if (!item || item.editada !== true) return;

      const original = redacoes.find(
        r => r.id === item.id
      );

      if (original) {
        original.titulo = item.titulo;
        original.texto = item.texto;
        original.editada = true;
      }
    });
  } catch (erro) {
    console.warn(
      "Erro ao carregar redações:",
      erro
    );
  }
}

function salvarRedacoes() {
  try {
    const editadas = redacoes.filter(
      r => r.editada === true
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(editadas)
    );
  } catch (erro) {
    console.warn(
      "Erro ao salvar redações:",
      erro
    );
  }
}

/* ==========================================
   CRIAR ELEMENTOS HTML
========================================== */

function criarElemento(tag, classe = "", texto) {
  const elemento = document.createElement(tag);

  if (classe) {
    elemento.className = classe;
  }

  if (texto !== undefined) {
    elemento.textContent = texto;
  }

  return elemento;
}

/* ==========================================
   LINHA DO TEMPO DAS ESCOLAS
========================================== */

function renderizarEscolas() {
  const container = document.querySelector(
    "#timeline, #escolas, [data-escolas]"
  );

  if (!container) {
    console.warn(
      "Container da linha do tempo não encontrado."
    );
    return;
  }

  container.innerHTML = "";

  escolas.forEach((escola, indice) => {
    const card = criarElemento(
      "article",
      "timeline-item reveal"
    );

    const numero = criarElemento(
      "span",
      "timeline-number",
      String(indice + 1).padStart(2, "0")
    );

    const conteudo = criarElemento(
      "div",
      "timeline-content"
    );

    const fase = criarElemento(
      "span",
      "timeline-phase",
      escola.fase
    );

    const titulo = criarElemento(
      "h3",
      "",
      escola.nome
    );

    const historia = criarElemento(
      "p",
      "",
      escola.historia
    );

    conteudo.append(
      fase,
      titulo,
      historia
    );

    card.append(
      numero,
      conteudo
    );

    container.appendChild(card);
  });

  observarAnimacoes();
}

/* ==========================================
   CARTÕES DAS REDAÇÕES
========================================== */

function renderizarRedacoes(filtro = "") {
  const container = document.querySelector(
    "#redacoes-grid, #redacoesGrid, [data-redacoes]"
  );

  if (!container) {
    console.warn(
      "Container das redações não encontrado."
    );
    return;
  }

  container.innerHTML = "";

  const termo = filtro
    .toLocaleLowerCase("pt-BR")
    .trim();

  const filtradas = redacoes.filter(redacao => {
    const conteudo = (
      redacao.titulo + " " + redacao.texto
    ).toLocaleLowerCase("pt-BR");

    return conteudo.includes(termo);
  });

  if (filtradas.length === 0) {
    const aviso = criarElemento(
      "p",
      "empty-state",
      "Nenhuma redação encontrada."
    );

    container.appendChild(aviso);
    return;
  }

  filtradas.forEach(redacao => {
    const card = criarElemento(
      "article",
      "redacao-card reveal"
    );

    const numero = criarElemento(
      "span",
      "redacao-number",
      String(redacao.id).padStart(2, "0")
    );

    const titulo = criarElemento(
      "h3",
      "",
      redacao.titulo
    );

    const resumoTexto = redacao.texto
      ? redacao.texto.slice(0, 130) +
        (redacao.texto.length > 130 ? "..." : "")
      : "Este espaço está reservado para uma nova redação.";

    const resumo = criarElemento(
      "p",
      "",
      resumoTexto
    );

    const botao = criarElemento(
      "button",
      "redacao-button",
      redacao.texto
        ? "Ler redação"
        : "Adicionar redação"
    );

    botao.type = "button";

    botao.addEventListener("click", () => {
      abrirRedacao(redacao.id);
    });

    card.append(
      numero,
      titulo,
      resumo,
      botao
    );

    container.appendChild(card);
  });

  observarAnimacoes();
}

/* ==========================================
   CRIAR JANELA DAS REDAÇÕES
========================================== */

function obterModal() {
  let modal = document.querySelector(
    "#legacy-modal"
  );

  if (!modal) {
    modal = criarElemento(
      "div",
      "legacy-modal"
    );

    modal.id = "legacy-modal";

    modal.setAttribute(
      "role",
      "dialog"
    );

    modal.setAttribute(
      "aria-modal",
      "true"
    );

    document.body.appendChild(modal);
  }

  return modal;
}

/* ==========================================
   ABRIR REDAÇÃO COMPLETA
========================================== */

function abrirRedacao(id) {
  const redacao = redacoes.find(
    r => r.id === Number(id)
  );

  if (!redacao) return;

  const modal = obterModal();

  modal.innerHTML = "";

  const painel = criarElemento(
    "div",
    "legacy-modal-content"
  );

  const fechar = criarElemento(
    "button",
    "modal-close",
    "×"
  );

  fechar.type = "button";

  fechar.setAttribute(
    "aria-label",
    "Fechar janela"
  );

  fechar.addEventListener(
    "click",
    fecharModal
  );

  const titulo = criarElemento(
    "h2",
    "",
    redacao.titulo
  );

  const texto = criarElemento(
    "div",
    "modal-text",
    redacao.texto ||
      "Esta redação ainda não foi adicionada."
  );

  // Preserva os parágrafos originais.
  texto.style.whiteSpace = "pre-line";

  const editar = criarElemento(
    "button",
    "redacao-button",
    redacao.texto
      ? "Editar redação"
      : "Adicionar redação"
  );

  editar.type = "button";

  editar.addEventListener("click", () => {
    editarRedacao(id);
  });

  painel.append(
    fechar,
    titulo,
    texto,
    editar
  );

  modal.appendChild(painel);

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}

/* ==========================================
   EDITAR OU ADICIONAR REDAÇÃO
========================================== */

function editarRedacao(id) {
  const redacao = redacoes.find(
    r => r.id === Number(id)
  );

  if (!redacao) return;

  const modal = obterModal();

  modal.innerHTML = "";

  const painel = criarElemento(
    "div",
    "legacy-modal-content"
  );

  const fechar = criarElemento(
    "button",
    "modal-close",
    "×"
  );

  fechar.type = "button";

  fechar.addEventListener(
    "click",
    fecharModal
  );

  const titulo = criarElemento(
    "h2",
    "",
    "Editar redação"
  );

  const campoTitulo = criarElemento(
    "input",
    "redacao-input"
  );

  campoTitulo.type = "text";
  campoTitulo.value = redacao.titulo;
  campoTitulo.placeholder =
    "Digite o título da redação";

  const campoTexto = criarElemento(
    "textarea",
    "redacao-textarea"
  );

  campoTexto.value = redacao.texto;
  campoTexto.placeholder =
    "Escreva sua redação completa aqui...";
  campoTexto.rows = 14;

  const salvar = criarElemento(
    "button",
    "redacao-button",
    "Salvar redação"
  );

  salvar.type = "button";

  salvar.addEventListener("click", () => {
    redacao.titulo =
      campoTitulo.value.trim() ||
      redacao.titulo;

    redacao.texto = campoTexto.value;

    redacao.editada = true;

    salvarRedacoes();

    const pesquisa = document.querySelector(
      "#pesquisa, #searchInput, #search, [data-pesquisa]"
    );

    renderizarRedacoes(
      pesquisa ? pesquisa.value : ""
    );

    abrirRedacao(id);
  });

  painel.append(
    fechar,
    titulo,
    campoTitulo,
    campoTexto,
    salvar
  );

  modal.appendChild(painel);

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}

/* ==========================================
   FECHAR JANELA
========================================== */

function fecharModal() {
  const modal = document.querySelector(
    "#legacy-modal"
  );

  if (modal) {
    modal.classList.remove("active");
  }

  document.body.style.overflow = "";
}

/* ==========================================
   ANIMAÇÕES AO ROLAR A PÁGINA
========================================== */

let observer;

function observarAnimacoes() {
  const elementos = document.querySelectorAll(
    ".reveal"
  );

  if (!("IntersectionObserver" in window)) {
    elementos.forEach(elemento => {
      elemento.classList.add("visible");
    });

    return;
  }

  if (!observer) {
    observer = new IntersectionObserver(
      entradas => {
        entradas.forEach(entrada => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entrada.target
            );
          }
        });
      },
      {
        threshold: 0.1
      }
    );
  }

  elementos.forEach(elemento => {
    if (!elemento.classList.contains("visible")) {
      observer.observe(elemento);
    }
  });
}

/* ==========================================
   PESQUISA DE REDAÇÕES
========================================== */

function configurarPesquisa() {
  const pesquisa = document.querySelector(
    "#pesquisa, #searchInput, #search, [data-pesquisa]"
  );

  if (!pesquisa) return;

  pesquisa.addEventListener(
    "input",
    () => {
      renderizarRedacoes(
        pesquisa.value
      );
    }
  );
}

/* ==========================================
   MENU RESPONSIVO
========================================== */

function configurarMenu() {
  const botao = document.querySelector(
    "#menu-toggle, .menu-toggle, [data-menu-toggle]"
  );

  const menu = document.querySelector(
    "#nav-menu, .nav-links, [data-nav-menu]"
  );

  if (!botao || !menu) return;

  botao.addEventListener(
    "click",
    () => {
      const aberto = menu.classList.toggle(
        "active"
      );

      botao.setAttribute(
        "aria-expanded",
        String(aberto)
      );
    }
  );

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");

      botao.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });
}

/* ==========================================
   ROLAGEM SUAVE
========================================== */

function configurarRolagem() {
  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {
      link.addEventListener(
        "click",
        evento => {
          const seletor = link.getAttribute(
            "href"
          );

          if (!seletor || seletor === "#") {
            return;
          }

          const destino = document.getElementById(
            seletor.slice(1)
          );

          if (destino) {
            evento.preventDefault();

            destino.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      );
    });
}

/* ==========================================
   FECHAR COM ESC OU CLICANDO FORA
========================================== */

document.addEventListener(
  "keydown",
  evento => {
    if (evento.key === "Escape") {
      fecharModal();
    }
  }
);

document.addEventListener(
  "click",
  evento => {
    if (evento.target?.id === "legacy-modal") {
      fecharModal();
    }
  }
);

/* ==========================================
   INICIALIZAÇÃO DO SITE
========================================== */

function iniciarSite() {
  carregarRedacoes();

  renderizarEscolas();

  renderizarRedacoes();

  configurarPesquisa();

  configurarMenu();

  configurarRolagem();

  observarAnimacoes();

  console.log(
    "Guilherme Tavares | LEGACY 2026"
  );

  console.log(
    "6 escolas e 12 espaços para redações."
  );
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    iniciarSite
  );
} else {
  iniciarSite();
}

/* ==========================================
   FIM DO JAVASCRIPT
   GUILHERME TAVARES | LEGACY 2026
========================================== */

