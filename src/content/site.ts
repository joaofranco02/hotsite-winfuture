/**
 * FONTE ÚNICA DA VERDADE — todos os textos e configurações do hot-site.
 *
 * Regras:
 * - Informações ainda não fornecidas pelo cliente ficam como `null`
 *   (nunca inventadas). Os componentes já sabem lidar com `null`.
 * - Para atualizar copy, imagens, links de CTA ou redes sociais,
 *   basta editar este arquivo — sem tocar nos componentes visuais.
 */

// ---------------------------------------------------------------------------
// Tipos
// ---------------------------------------------------------------------------

export type NavItem = {
  label: string;
  href: string;
  /** Quando `false`, o item existe na config mas não é renderizado no menu. */
  enabled: boolean;
};

export type InfoChip = {
  label: string;
  value: string;
};

export type FeatureCard = {
  /** Nome do ícone em lucide-react (PascalCase). */
  icon: string;
  title: string;
  description: string;
};

export type ToolCard = {
  number: string;
  name: string;
  tags: string[];
  /** Caminho do logo oficial em /public/logos (ou null enquanto não houver). */
  logo: string | null;
  /**
   * Fundo do selo do logo. Marcas escuras (Perplexity, NotebookLM) precisam
   * de fundo claro para ficarem visíveis; marcas claras/coloridas ficam no
   * fundo escuro padrão.
   */
  logoTheme?: "light" | "dark";
};

export type ScheduleItem = {
  time: string;
  title: string;
  /** null = conteúdo ainda não definido pelo cliente (placeholder discreto). */
  description: string | null;
};

export type IconCard = {
  /** Nome do ícone em lucide-react (ver src/lib/icons.ts). */
  icon: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

// ---------------------------------------------------------------------------
// Conteúdo
// ---------------------------------------------------------------------------

export const siteContent = {
  meta: {
    name: "WIN Future Universitário",
    title:
      "WIN Future Universitário | Imersão de IA para universitários · Belém, 03/10",
    description:
      "Um dia presencial para descobrir como a Inteligência Artificial pode transformar sua rotina acadêmica. Vagas limitadas.",
    /** Definido via NEXT_PUBLIC_SITE_URL; fallback seguro para build/preview. */
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    ogImage: "/images/hero.webp",
    signature: "Pessoas. Ideias. Um futuro mais real.",
  },

  /** Dados do evento. Campos `null` = ainda não informados no briefing. */
  event: {
    date: "03/10",
    dateLong: "03 DE OUTUBRO",
    year: null as string | null,
    time: "09H — 18H",
    timeStartISO: "09:00",
    timeEndISO: "18:00",
    location: "BELÉM - PA",
    venue: null as string | null,
    address: null as string | null,
    format: "PRESENCIAL",
  },

  /**
   * Destino de TODOS os CTAs "GARANTIR MINHA VAGA".
   * Se `url` for null, os botões ficam desabilitados de forma acessível.
   */
  registration: {
    url: process.env.NEXT_PUBLIC_REGISTRATION_URL || null,
    /** Evento de tracking disparado ao clicar em qualquer CTA. */
    trackingEvent: "registration_cta_click",
    ctaLabel: "GARANTIR MINHA VAGA",
  },

  /** Links de redes sociais — null enquanto não fornecidos. */
  social: {
    instagram: null as string | null,
    linkedin: null as string | null,
  },

  nav: {
    items: [
      // Âncoras da home com prefixo "/" para funcionarem a partir de /faq também.
      { label: "O EVENTO", href: "/#o-evento", enabled: true },
      { label: "EXPERIÊNCIA", href: "/#experiencia", enabled: true },
      { label: "PROGRAMAÇÃO", href: "/#programacao", enabled: true },
      // Páginas dedicadas (exibidas só ao clicar no menu).
      { label: "PARA QUEM É", href: "/para-quem-e", enabled: true },
      { label: "BENEFÍCIOS", href: "/beneficios", enabled: true },
      { label: "FAQ", href: "/faq", enabled: true },
    ] as NavItem[],
  },

  hero: {
    eyebrow: ["IMERSÃO PRESENCIAL", "1 DIA", "UNIVERSITÁRIOS"],
    titleTop: "UMA NOVA FORMA DE ESTUDAR",
    titleHighlight: "COMEÇA AQUI.",
    subtitle:
      "Um dia para descobrir como a Inteligência Artificial pode transformar sua rotina acadêmica.",
    chips: [
      { label: "DATA", value: "03/10" },
      { label: "HORÁRIO", value: "09H — 18H" },
      { label: "LOCAL", value: "BELÉM - PA" },
      { label: "FORMATO", value: "PRESENCIAL" },
    ] as InfoChip[],
    secondaryCta: { label: "VER O QUE VOU APRENDER", href: "#experiencia" },
    sideWords: ["IDEIAS", "PESSOAS", "SOLUÇÕES", "IMPACTO"],
    badge: "AQUI TALENTOS ENCONTRAM OPORTUNIDADES.",
    image: {
      src: "/images/img1.png" as string | null,
      alt: "Estudantes em uma sala de aula da WIN acompanhando uma apresentação, com notebooks sobre as mesas.",
    },
  },

  concept: {
    words: ["UNIVERSITÁRIOS", "IDEIAS", "NEGÓCIOS", "UM FUTURO MAIS REAL"],
    triad: ["CONHECIMENTO", "CONEXÃO", "AÇÃO"],
  },

  whyItMatters: {
    label: "POR QUE ISSO IMPORTA?",
    number: "01",
    titleTop: "A IA NÃO SUBSTITUI A SUA FORMAÇÃO.",
    titleHighlight: "ELA AMPLIA O QUE VOCÊ CONSEGUE FAZER.",
    paragraphs: [
      "A universidade ensina a profissão.",
      "O WIN Future Universitário te mostra como usar a Inteligência Artificial para multiplicar o valor dela.",
    ],
    highlight: ["MAIS CONHECIMENTO.", "MAIS POSSIBILIDADES.", "MAIS FUTURO."],
    image: {
      src: "/images/img2.png" as string | null,
      alt: "Três estudantes estudando juntos ao ar livre, com notebooks e tablet, em frente ao prédio da WIN.",
    },
  },

  practice: {
    label: "O QUE MUDA NA PRÁTICA?",
    number: "02",
    title: "FERRAMENTAS PARA UM DIA A DIA MAIS INTELIGENTE.",
    cards: [
      {
        icon: "Search",
        title: "PESQUISAR",
        description: "Encontre informações melhores em menos tempo.",
      },
      {
        icon: "BookOpen",
        title: "APRENDER",
        description: "Transforme conteúdos complexos em materiais mais claros.",
      },
      {
        icon: "FolderOpen",
        title: "ORGANIZAR",
        description: "Estruture estudos, tarefas e projetos.",
      },
      {
        icon: "Zap",
        title: "PRODUZIR",
        description: "Acelere trabalhos e apresentações.",
      },
      {
        icon: "PenLine",
        title: "CRIAR",
        description: "Explore novas possibilidades para seus projetos.",
      },
      {
        icon: "Settings",
        title: "AUTOMATIZAR",
        description: "Reduza tarefas repetitivas da rotina acadêmica.",
      },
    ] as FeatureCard[],
  },

  tools: {
    label: "03",
    title: "AS FERRAMENTAS QUE VÃO ENTRAR NA SUA ROTINA.",
    description:
      "Na prática, com exemplos reais e aplicações da vida universitária.",
    cards: [
      {
        number: "01",
        name: "ChatGPT",
        tags: ["ESCRITA", "IDEIAS", "PLANEJAMENTO"],
        logo: "/logos/chatgpt-icon.svg",
        logoTheme: "dark",
      },
      {
        number: "02",
        name: "Perplexity",
        tags: ["PESQUISA", "FONTES", "REFERÊNCIAS"],
        logo: "/logos/perplexity-ai-icon.svg",
        logoTheme: "light",
      },
      {
        number: "03",
        name: "Claude",
        tags: ["ANÁLISE", "LEITURA", "SÍNTESE"],
        logo: "/logos/claude-ai-icon.svg",
        logoTheme: "dark",
      },
      {
        number: "04",
        name: "NotebookLM",
        tags: ["ORGANIZAÇÃO", "DOCUMENTOS", "ESTUDOS"],
        logo: "/logos/notebooklm-icon.svg",
        logoTheme: "light",
      },
      {
        number: "05",
        name: "Replit",
        tags: ["DESENVOLVIMENTO", "PROJETOS", "AUTOMAÇÕES"],
        logo: "/logos/replit-icon.svg",
        logoTheme: "dark",
      },
    ] as ToolCard[],
    highlightCard: {
      lines: ["+ FERRAMENTAS", "+ RESULTADOS"],
    },
  },

  comparison: {
    withoutTitle: "SEM IA",
    withTitle: "COM UM BOM USO DE IA",
    // "4 horas procurando referências" está marcado como "confirmar" no briefing.
    without: [
      "4 horas procurando referências",
      "20 abas abertas",
      "Anotações espalhadas",
      "Dificuldade para organizar ideias",
    ],
    with: [
      "Pesquisa estruturada",
      "Informação organizada",
      "Fluxo de estudo mais eficiente",
      "Mais tempo para pensar",
    ],
    imageLeft: {
      src: "/images/sem-ia.jpg" as string | null,
      alt: "Estudante sobrecarregado, cabeça entre as mãos, diante do computador à noite.",
    },
    imageRight: {
      src: "/images/com-ia.jpg" as string | null,
      alt: "Duas estudantes tranquilas e sorridentes estudando juntas em um notebook.",
    },
  },

  schedule: {
    label: "04",
    title: "PROGRAMAÇÃO DO DIA",
    subtitle: "Um dia intenso, prático e transformador.",
    fullScheduleLabel: "VER PROGRAMAÇÃO COMPLETA",
    /** null = destino do link ainda não definido no briefing. */
    fullScheduleHref: null as string | null,
    items: [
      { time: "09:00", title: "ABERTURA", description: "Boas-vindas e visão do dia" },
      { time: "10:00", title: "MÓDULO 01", description: null },
      { time: "11:30", title: "MÓDULO 02", description: null },
      { time: "14:00", title: "MÓDULO 03", description: null },
      { time: "16:00", title: "PRÁTICA", description: null },
      { time: "18:00", title: "ENCERRAMENTO", description: "—" },
    ] as ScheduleItem[],
  },

  /**
   * PARA QUEM É — conteúdo PLACEHOLDER e editável.
   * Não constava no briefing; ajuste títulos/descrições e os perfis abaixo
   * conforme o público real do evento.
   */
  audience: {
    label: "PARA QUEM É",
    number: "05",
    title: "FEITO PARA QUEM ESTUDA E QUER IR ALÉM.",
    subtitle: "O WIN Future Universitário foi pensado para diferentes perfis de universitários.",
    profiles: [
      {
        icon: "GraduationCap",
        title: "GRADUANDOS",
        description: "Estudantes que querem usar IA para aprender mais rápido e se destacar.",
      },
      {
        icon: "FlaskConical",
        title: "PESQUISADORES",
        description: "Quem precisa organizar leituras, fontes e produção acadêmica com eficiência.",
      },
      {
        icon: "Rocket",
        title: "EMPREENDEDORES",
        description: "Universitários tocando projetos e ideias que querem acelerar resultados.",
      },
      {
        icon: "Briefcase",
        title: "INÍCIO DE CARREIRA",
        description: "Quem está entrando no mercado e quer levar IA para a rotina profissional.",
      },
    ] as IconCard[],
  },

  /**
   * BENEFÍCIOS — conteúdo PLACEHOLDER e editável.
   * Não constava no briefing; confirme os benefícios reais do evento
   * (ex.: se haverá certificado, material de apoio, etc.).
   */
  benefits: {
    label: "BENEFÍCIOS",
    number: "06",
    title: "O QUE VOCÊ LEVA DESSE DIA.",
    subtitle: "Uma imersão prática pensada para gerar resultado na sua rotina.",
    items: [
      {
        icon: "Wrench",
        title: "FERRAMENTAS NA PRÁTICA",
        description: "Aplicações reais de IA para pesquisa, estudo e produção.",
      },
      {
        icon: "Users",
        title: "NETWORKING",
        description: "Conexão com outros universitários, mentores e pessoas do ecossistema.",
      },
      {
        icon: "Lightbulb",
        title: "NOVAS IDEIAS",
        description: "Repertório para pensar projetos e possibilidades além da sala de aula.",
      },
      {
        icon: "Clock",
        title: "MAIS PRODUTIVIDADE",
        description: "Métodos para economizar tempo e organizar a rotina acadêmica.",
      },
      {
        icon: "Target",
        title: "APLICAÇÃO IMEDIATA",
        description: "Conteúdo prático para começar a usar já no dia seguinte.",
      },
      {
        icon: "BadgeCheck",
        title: "CERTIFICADO",
        description: "Confirme se haverá certificado de participação e edite aqui.",
      },
    ] as IconCard[],
  },

  /**
   * FAQ — perguntas e respostas PLACEHOLDER e editáveis.
   * Onde havia informação no briefing (formato, data, horário, vagas),
   * ela já foi usada; os pontos em aberto estão marcados para edição.
   */
  faq: {
    label: "FAQ",
    number: "07",
    title: "PERGUNTAS FREQUENTES.",
    subtitle: "Tudo o que você precisa saber antes de garantir sua vaga.",
    items: [
      {
        question: "O evento é presencial ou online?",
        answer:
          "Presencial, em Belém - PA. O nome do espaço e o endereço completo serão divulgados em breve.",
      },
      {
        question: "Quando acontece?",
        answer: "No dia 03/10, das 09h às 18h — um dia inteiro de imersão.",
      },
      {
        question: "Preciso saber alguma coisa de IA antes?",
        answer:
          "Não é necessário conhecimento prévio. O conteúdo foi pensado para começar do zero. (Edite se quiser detalhar.)",
      },
      {
        question: "As vagas são limitadas?",
        answer:
          "Sim, as vagas são limitadas. O número exato de vagas será informado em breve.",
      },
      {
        question: "Como faço minha inscrição?",
        answer:
          'Pelo botão "Garantir minha vaga". O link oficial de inscrição será configurado em breve.',
      },
      {
        question: "O evento é gratuito ou pago?",
        answer: "A definir — edite esta resposta em src/content/site.ts quando confirmado.",
      },
    ] as FaqItem[],
  },

  finalCta: {
    sealDate: "03 DE OUTUBRO",
    sealLocation: "BELÉM - PA",
    title: "É SOBRE CRIAR VALOR NA PROFISSÃO QUE VOCÊ ESCOLHER.",
    phraseTop: "O FUTURO PERTENCE A QUEM",
    phraseHighlight: "CRIA VALOR.",
    microcopy: ["VAGAS LIMITADAS", "INSCRIÇÃO ONLINE"],
    image: {
      src: "/images/img5.png" as string | null,
      alt: "Quatro estudantes caminhando e conversando em frente ao prédio da WIN Business School.",
    },
  },

  footer: {
    signature: "PESSOAS. IDEIAS. UM FUTURO MAIS REAL.",
  },
} as const;

export type SiteContent = typeof siteContent;
