
export const content = {
    hero: {
        badges: ["Esquadrias e Portas em Valinhos"],
        headline: "Esquadrias de <strong>Alumínio, Madeira e Ferro</strong> que Transformam sua Casa.",
        subheadline: "<strong>20 anos</strong> de excelência em Valinhos e região. Unimos a robustez do alumínio à nobreza da madeira para quem não abre mão de <strong>qualidade e valorização do imóvel.</strong>",
        cta: "Solicitar Orçamento",
        link: "https://wa.me/5519993337602?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
    },
    authority: {
        title: "Qualidade e Confiança",
        items: [
            {
                id: 1,
                title: "Tradição desde 2004",
                description: "Fundada há duas décadas, somamos experiência e excelência em Valinhos.",
                icon: "FaHistory" // Icon name reference
            },
            {
                id: 2,
                title: "Logística Própria",
                description: "Entrega garantida e frete grátis para Valinhos, Vinhedo e Campinas.",
                icon: "FaTruck"
            },
            {
                id: 3,
                title: "Consultoria Técnica",
                description: "Não vendemos apenas produtos. Ajudamos você a especificar a solução perfeita para o seu vão.",
                icon: "FaRulerCombined"
            },
            {
                id: 4,
                title: "Pronta Entrega",
                description: "Grande estoque de portas, janelas e acessórios para você levar na hora.",
                icon: "FaBoxOpen"
            }
        ]
    },
    products: {
        title: "Nossas Soluções",
        subtitle: "Do projeto à entrega",
        categories: [
            {
                id: "aluminio",
                title: "Esquadrias de Alumínio",
                description: "Perfis robustos e tecnologia de ponta para vãos modernos.",
                items: [
                    {
                        id: "esquadrias-l25",
                        title: "Linha 25 (L-25)",
                        description: "O equilíbrio perfeito entre custo e benefício. Perfis robustos para projetos residenciais.",
                        image: "/products/window-l30-white.webp",
                        imageHover: "/products/window-sliding-open-white.png", // New Hover
                        tag: "Mais Vendido"
                    },
                    {
                        id: "janelas-integradas",
                        title: "Janelas Integradas",
                        description: "Persiana integrada manual ou motorizada. Conforto térmico e acústico superior.",
                        image: "/products/window-integrated-white.webp",
                        imageHover: "/products/window-shutter-detail-white.png", // New Hover
                        tag: "Conforto"
                    },
                    {
                        id: "porta-balcao",
                        title: "Porta Balcão",
                        description: "Integração total entre ambientes internos e externos. Ideal para varandas.",
                        target: "blank",
                        image: "/products/door-balcony-white-isolated.png",
                        imageHover: "/products/door-balcony-white-isolated.png",
                        tag: "Premium"
                    }
                ]
            },
            {
                id: "madeira",
                title: "Portas de Madeira",
                description: "A nobreza da madeira maciça com design exclusivo.",
                items: [
                    {
                        id: "portas-entrada",
                        title: "Madeira Maciça",
                        description: "Portas pivotantes e realeza. Batentes sólidos para estabilidade total.",
                        image: "/products/door-solid-wood-v2.png",
                        imageHover: "/products/door-wood-pivot-angled.png", // New Hover
                        tag: "Design"
                    },
                    {
                        id: "kits-prontos",
                        title: "Portas e Batentes",
                        description: "Kits de portas frisadas ou lisas, prontas para verniz ou pintura.",
                        image: "/products/door-internal-white.webp",
                        tag: "Praticidade"
                    },
                    {
                        id: "puxadores",
                        title: "Puxadores Inox",
                        description: "Acessórios de alto padrão que valorizam sua porta.",
                        tag: "Acessório",
                        image: "/products/handle-stainless-isolated.png",
                        imageHover: "/products/handle-stainless-isolated.png" // Remove context image
                    }
                ]
            },
            {
                id: "ferro",
                title: "Esquadrias de Ferro",
                description: "Estilo Industrial (Serralheria Fina) para projetos contemporâneos.",
                items: [
                    {
                        id: "porta-ferro-estilo",
                        title: "Porta Estilo Industrial",
                        description: "Perfis finos de ferro com vidro, trazendo modernidade e amplitude.",
                        image: "/products/door-iron-industrial-white.png", // New Pure White Isolated
                        imageHover: "/products/door-iron-industrial-white.png",
                        tag: "Tendência"
                    },
                    {
                        id: "divisoria-ferro",
                        title: "Divisórias de Ambiente",
                        description: "Separe ambientes sem perder a luz natural com nossas divisórias em ferro.",
                        image: "/products/partition-iron-white.png", // New Pure White Isolated
                        imageHover: "/products/partition-iron-white.png",
                        tag: "Novo"
                    },
                    {
                        id: "corrimao-ferro",
                        title: "Guarda-Corpo",
                        description: "Segurança com design minimalista para escadas e sacadas.",
                        tag: "Sob Medida",
                        image: "/products/railing-iron-black-isolated.png",
                        imageHover: "/products/railing-iron-black-isolated.png"
                    }
                ]
            }
        ]
    },
    stats: {
        background: "var(--color-primary)",
        items: [
            {
                id: 1,
                number: 20,
                suffix: "+",
                label: "Anos de Mercado",
                icon: "FaCalendarCheck"
            },
            {
                id: 2,
                number: 20,
                suffix: "mil+",
                label: "Projetos Entregues",
                icon: "FaHome"
            },
            {
                id: 3,
                number: 100,
                suffix: "%",
                label: "Clientes Satisfeitos",
                icon: "FaSmile"
            },
            {
                id: 4,
                number: 15,
                suffix: "mil+",
                label: "Portas e Janelas Instaladas",
                icon: "FaDoorOpen"
            }
        ]
    },
    testimonials: {
        title: "O que dizem nossos clientes",
        subtitle: "Avaliações reais no Google Maps ⭐⭐⭐⭐⭐",
        items: [
            {
                id: 1,
                name: "Alexandre Bressan",
                location: "Valinhos/Vinhedo",
                text: "Se você está precisando de portas e janelas, em madeira/ferro ou alumínio pode ir no Ponto das Portas. Excelente atendimento, muitas opções e grande estoque a pronta entrega. Facilitam o pagamento e a entrega é mega rápida! Parabéns equipe!",
                role: "Cliente",
                avatar: "",
                date: "Há 3 dias"
            },
            {
                id: 2,
                name: "Leda Parodi",
                location: "Condomínio",
                text: "Comprei 46 portas para o Condomínio, entrega dentro do prazo. Sr. Paulo excelente pessoa! Recomendo para os demais síndicos!",
                role: "Síndica",
                avatar: "",
                date: "Há 1 mês"
            },
            {
                id: 3,
                name: "Neto Filho",
                location: "Valinhos",
                text: "Muita responsabilidade e preço justo, encontrei aqui. Quero agradecer o Sr. Paulo pela sua simpatia e honestidade.",
                role: "Cliente",
                avatar: "",
                date: "Há 2 semanas"
            },
            {
                id: 4,
                name: "Diogo Pires",
                location: "Campinas",
                text: "Preço excelente, entrega no prazo, e material de qualidade.",
                role: "Cliente",
                avatar: "",
                date: "Há 2 meses"
            },
            {
                id: 5,
                name: "Antonio Carlos Souza",
                location: "Valinhos",
                text: "Bom atendimento e batentes de qualidade! Recomendo.",
                role: "Cliente",
                avatar: "",
                date: "Há 5 dias"
            },
            {
                id: 6,
                name: "Dionísio Dionízio",
                location: "Valinhos",
                text: "Ótima localização para comprar materiais em geral, preço bom, atendimento especializado.",
                role: "Cliente",
                avatar: "",
                date: "Há 3 semanas"
            }
        ]
    },
    ctaSection: {
        title: "Sua obra não pode parar.",
        subtitle: "Garanta esquadrias de qualidade com quem entende de obra. Agenda de medições da semana preenchendo rapidamente.",
        buttonText: "Falar com Consultor Agora",
        backgroundImage: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&q=80&w=1920" // Construction bg
    },
    faq: {
        title: "Perguntas Frequentes",
        items: [
            {
                question: "Vocês cobram visita para orçamento?",
                answer: "Não. Realizamos a visita técnica e medição fina gratuitamente em Valinhos e Vinhedo para garantir o orçamento correto."
            },
            {
                question: "Qual o prazo de entrega?",
                answer: "O prazo de entrega é sob consulta, variando conforme a linha escolhida e a especificidade do projeto. Todos os prazos são firmados em contrato."
            },
            {
                question: "Vocês fazem instalação?",
                answer: "Não realizamos instalação. Somos especializados na venda de esquadrias e portas de alta qualidade. Podemos indicar profissionais parceiros de confiança se precisar."
            },
            {
                question: "Vocês trabalham com Madeira ou só Alumínio?",
                answer: "Trabalhamos com Alumínio, Madeira e Ferro. Somos especialistas em Esquadrias de Alumínio (L-25) e também em Portas de Madeira Maciça Selecionada (Realeza, Frisadas), oferecendo a solução completa para sua obra."
            },
            {
                question: "O que é a Linha 25 (L-25)?",
                answer: "É uma linha de alumínio de alto desempenho, superior às linhas de mercado comuns. Oferece perfis robustos, excelente vedação e suporte para vidros panorâmicos."
            },
            {
                question: "Alumínio é melhor que madeira?",
                answer: "Para áreas externas, sem dúvida. O alumínio não exige manutenção, não empena com o sol e a pintura eletrostática dura décadas. Para áreas internas, a madeira ainda traz muito conforto."
            }
        ]
    },
    footer: {
        address: "R. Dom Nery, Valinhos - SP",
        phone: "(19) 99333-7602",
        instagram: "@pontodasportasvalinhos",
        copyright: "© 2026 Ponto das Portas. Todos os direitos reservados."
    }
}
