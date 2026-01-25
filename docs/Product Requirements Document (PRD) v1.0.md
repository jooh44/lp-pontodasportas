
**Projeto:** Reestruturação Digital Ponto das Portas

**Tipo:** Landing Page de Alta Conversão / Mini-Portal Institucional

**Stakeholders:** Renan Andrade Pereira, Paulo Albuquerque, Marcos Chilloff

**Metodologia:** BMAD (Benchmarking, Market, Audience, Data)

**Link do repositório:** https://github.com/jooh44/lp-pontodasportas

---

## 1. Visão Geral e Escopo

O objetivo deste produto digital não é apenas "ter um site", mas criar um **Hub de Vendas Consultivas** que diferencie a Ponto das Portas de varejistas de preço (como a Prado) e a posicione como a parceira técnica ideal para o público de médio/alto padrão de Valinhos e Vinhedo. A plataforma deve mitigar a desconfiança inerente ao setor de construção civil, transmitindo solidez, capacidade técnica e garantia de entrega.

### 1.1 Objetivos de Negócio (OKRs)

- **Principal:** Gerar 40-80 leads qualificados/mês (MQLs) com intenção de compra para obras ou reformas.
    
- **Secundário:** Aumentar o ticket médio percebido, filtrando curiosos por preço e atraindo clientes que valorizam o "frete grátis regional" e a "instalação técnica".
    
- **Técnico:** Migrar da plataforma Wix para um ambiente escalável e proprietário, garantindo SEO local e performance. (vercel via git)
    

## 2. Personas e Jornada do Usuário (Recorte Tático)

|**Persona**|**Cenário**|**Necessidade Funcional na Página**|
|---|---|---|
|**Ricardo (Obra Nova)**|Está no canteiro de obras, celular na mão, pressionado pelo cronograma.|Precisa de botão "WhatsApp" flutuante imediato e clareza sobre "Pronta Entrega" ou "Prazo Garantido".|
|**Sônia (Reforma)**|Navega à noite no tablet, busca inspiração e tem medo de sujeira/quebra-quebra.|Precisa ver fotos de "Antes e Depois", depoimentos de vizinhos e a promessa de "Instalação Limpa".|
|**Arq. Felipe (B2B)**|Busca especificações técnicas para detalhar projeto executivo.|Precisa de uma área ou seção com catálogo técnico (linhas Gold/Suprema) e fácil contato com vendedor técnico.|

## 3. Requisitos Funcionais (O que o site deve fazer)

### 3.1 Navegação e Estrutura (Sitemap)

A estrutura será híbrida: uma Landing Page longa (One Page) para tráfego pago, mas com páginas internas de apoio para SEO orgânico.

1. **Header (Fixo):** Logo, Menu Simplificado (Produtos, Obras, Quem Somos), Botão CTA de Contraste ("Orçamento Rápido").
    
2. **Hero Section (Dobra 1):**
    
    - **Headline Dinâmica:** "Esquadrias de Alumínio e Portas de Alto Padrão em Valinhos."
        
    - **Subhead:** "20 anos de tradição. Logística própria e Frete Grátis para Valinhos e Vinhedo."
        
    - **Mídia:** Vídeo de background (loop curto) mostrando instalação/acabamento ou Foto Hero de alta qualidade (ambiente clean).
        
3. **Vitrine de Produtos (Grid Interativo):**
    
    - Não usar carrossel automático (baixa conversão). Usar Grid estático.
        
    - Categorias: Janelas de Alumínio (Linha Gold/Suprema), Portas de Entrada (Pivotantes), Kits Porta Pronta, Fechaduras/Acessórios (Cross-sell).
        
4. **Seção de Diferenciais (Ícones + Texto Curto):**
    
    - Ícone Caminhão: "Frota Própria na RMC".
        
    - Ícone Capacete/Régua: "Medição Técnica na Obra".
        
    - Ícone Garantia: "Pós-venda que não te abandona".
        
5. **Prova Social (Local):**
    
    - Widget do Google Reviews (filtrando 5 estrelas).
        
    - Mapa: "Já entregamos nestes condomínios" (Listar: Moinho de Vento, Reserva Colonial, etc.).
        
6. **Rodapé (SEO Local):** Endereço completo, Mapa embedado, Links para cidades vizinhas (SEO), Horário, CNPJ.
    

### 3.2 Funcionalidades de Conversão (CRO)

- **Botão Flutuante WhatsApp:** Deve persistir em todas as páginas. Ao clicar, abrir menu de escolha: "Vendas", "Pós-Venda/Financeiro" (para filtrar a demanda).


## 4. Requisitos Não-Funcionais (Qualidade e Técnica)

### 4.1 Performance e Core Web Vitals

- **Tempo de Carregamento (LCP):** < 2.5 segundos (Crítico para 4G em obras).
    
- **Plataforma:** VERCEL+GIT (cdn global).
    
- **Page Builder:** DIRETO NO CÓDIGO. 
    
- **Otimização de Imagens:** Todas as imagens devem ser convertidas para formato WebP e comprimidas.
    

### 4.2 SEO e Rastreamento

- **SEO On-page:** Tags H1, H2 e H3 estruturadas com palavras-chave locais ("Esquadrias Valinhos", "Portas Vinhedo").
    
- **Schema Markup:** Implementar schema de `LocalBusiness` e `Product` para aparecer nos rich snippets do Google.
    
- **Analytics:**
    
        
    - Google Tag Manager.
        
    - Meta Pixel (API de Conversão).
        
        

### 4.3 Design System (Guia Visual)

- **Paleta de Cores:**
    
    - Primária: Azul Escuro (Confiança, Sofisticação - fugindo do vermelhão de varejo popular).
        
    - Secundária/Ação: Verde WhatsApp (Conversão) ou Laranja Queimado (Construção).
        
    - Fundo: Branco e Cinza Claro (Clean, destaca o produto).
        
- **Tipografia:** Sans-serif moderna (ex: Montserrat, Roboto ou Inter) para legibilidade e modernidade.
    
- **Imagens:** Proibir fotos de banco de imagem genérico com "americanos sorrindo". Usar fotos reais da equipe, da fachada da loja e de obras locais (mesmo que amadoras, passam mais verdade, desde que tratadas).
    

## 5. Integrações

- **CRM (Sugestão):** Conectar formulários ao Kommo (antigo AmoCRM) ou RD Station (se houver budget), ou minimamente enviar para uma planilha Google Sheets via Webhook para controle de leads.
    
- **WhatsApp API:** Link direto com mensagem pré-definida ("Olá, vi o site e quero orçamento de esquadrias...").
    

## 6. Conteúdo e Copywriting (Diretrizes)

- **Tom de Voz:** Consultor Especialista, não Vendedor Chato. "Nós resolvemos seu problema técnico".
    
- **Matadores de Objeção:**
    
    - _Preço:_ Focar em durabilidade e não manutenção ("O barato que sai caro x O investimento definitivo").
        
    - _Prazo:_ Destacar "Logística Própria" como garantia de cumprimento de datas.
        

## 7. Roadmap de Execução (Sprint Sugerido)

| **Fase**       | **Ação**                                                            | **Responsável**    | **Prazo** |
| -------------- | ------------------------------------------------------------------- | ------------------ | --------- |
| **1. Setup**   | Contratação de Domínio/Host, Configuração DNS                       | Tech               | Dia 1-2   |
| **2. Assets**  | Coleta de fotos reais, Tratamento de imagens, Redação final da Copy | Conteúdo/Design    | Dia 3-5   |
| **3. Build**   | Desenvolvimento da Landing Page (Desktop + Mobile)                  | Dev                | Dia 6-10  |
| **4. Review**  | Testes de carga, validação de formulários e pixels                  | Tech + Stakeholder | Dia 11    |
| **5. Go Live** | Publicação, Indexação no Google Search Console e Ativação de Ads    | Growth             | Dia 12+   |

---

### Notas para a Equipe de Desenvolvimento (Antigravity):

- **Atenção Crítica:** O site atual (Wix) não possui redirecionamentos 301 mapeados. Como a relevância orgânica atual é baixa, podemos ignorar a migração de SEO antigo e focar em construir autoridade nova do zero, garantindo que o Google Meu Negócio esteja linkado ao novo domínio imediatamente.
    
- **Mobile First:** 85% do tráfego esperado virá de dispositivos móveis (Instagram/Google em celular). O design desktop é secundário. O menu mobile deve ser "Thumb-friendly" (fácil de clicar com o polegar).