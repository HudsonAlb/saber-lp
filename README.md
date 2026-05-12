# Escola Saber — Landing Page

Landing page institucional para captação de pré-matrículas da Escola Saber, localizada em Escada-PE.

**Repositório:** [github.com/HudsonAlb/saber-lp](https://github.com/HudsonAlb/saber-lp)  
**Dev server:** `npm run dev` → http://localhost:5173

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | UI |
| Vite | 8 | Build / dev server |
| Tailwind CSS | 3 | Estilização |
| Framer Motion | 12 | Animações de entrada e transições |
| React Hook Form | 7 | Formulário + validação |
| React Scroll | 1.9 | Navegação suave entre seções |

---

## Identidade visual

- **Primária:** branco `#FFFFFF`
- **Amarelo:** `#FFD43B` — destaques, badges, stats, CTA final
- **Laranja:** `#FF8C42` — botões primários, acentos, borda do formulário
- **Laranja claro:** `#FFF0E6` — fundo da seção "Como funciona"
- **Escuro:** `#2D2D2D` — fundo do rodapé
- **Tipografia:** Nunito (Google Fonts) — pesos 400, 600, 700, 800, 900

---

## Estrutura de arquivos

```
saber-lp/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css            ← utilitários globais (btn-orange, chip, section-title…)
    └── components/
        ├── Navbar.jsx       ← fixa, blur no scroll, menu hamburger mobile
        ├── Hero.jsx         ← fullscreen, imagem Pexels, animações Framer Motion
        ├── StatsBar.jsx     ← fundo amarelo, contagem animada ao entrar na viewport
        ├── About.jsx        ← 2 colunas, badge flutuante, lista de diferenciais
        ├── Grades.jsx       ← 3 cards por faixa etária, hover com elevação
        ├── HowItWorks.jsx   ← 3 passos com linha conectora, fundo laranja claro
        ├── EnrollmentForm.jsx ← formulário completo com chips, máscara, loading, toast
        ├── Testimonials.jsx ← 2 depoimentos com estrelas e avatar
        ├── FinalCTA.jsx     ← urgência + âncora no formulário
        └── Footer.jsx       ← endereço, links, ícones sociais
```

---

## Seções implementadas

### 1. Navbar
- Logo (ícone + nome) à esquerda
- Links: A Escola, Turmas, Galeria, Contato — todos com `react-scroll`
- Botão CTA laranja "Fazer Pré-Matrícula"
- Fixa no topo com `backdrop-blur` e sombra ao rolar
- Menu hamburger responsivo para mobile

### 2. Hero (fullscreen)
- Imagem de fundo: crianças em sala de aula com mãos levantadas (Pexels #8617938)
- Overlay gradiente semitransparente para legibilidade do texto
- Badge de localização "📍 Escada-PE"
- Título, subtítulo e dois CTAs
- Animações de entrada com `framer-motion` (fade + slide-up escalonado)
- Indicador de scroll animado

### 3. Barra de números (StatsBar)
- Fundo amarelo `#FFD43B`
- 4 métricas: 15+ anos, 420+ alunos, 98% aprovação, 32 professores
- Contagem animada disparada pelo `useInView`

### 4. Sobre a escola (About)
- Layout duas colunas (imagem | texto)
- Badge "Referência em Escada-PE" flutuante sobre a imagem
- Lista de 6 diferenciais com ícone de check amarelo

### 5. Turmas (Grades)
- 3 cards: Educação Infantil (amarelo), Pré-escola (laranja), Fundamental (neutro)
- Ícone, nome, faixa etária e descrição em cada card
- Hover com `-translate-y-2` e sombra

### 6. Como fazer a pré-matrícula (HowItWorks)
- Fundo `#FFF0E6`
- 3 passos em lista ordenada com número em círculo laranja
- Linha conectora vertical entre os passos

### 7. Formulário de pré-matrícula (EnrollmentForm) ⭐
- ID `pre-matricula` — âncora de todos os CTAs
- Borda de destaque laranja
- Campos: responsável, WhatsApp (com máscara), nome da criança, data de nascimento
- Seleção de turma por chips clicáveis (`aria-pressed`)
- Textarea de mensagem opcional
- Validação com React Hook Form
- Botão com estado de loading (spinner)
- Tela de sucesso animada com `AnimatePresence`

### 8. Depoimentos (Testimonials)
- 2 cards com estrelas amarelas, citação, avatar circular e identificação
- Animação de entrada escalonada

### 9. CTA final (FinalCTA)
- Fundo amarelo, tom de urgência
- Botão âncora no formulário

### 10. Rodapé (Footer)
- Fundo escuro `#2D2D2D`
- Endereço, telefone e e-mail à esquerda
- Links de navegação no centro
- Ícones de Instagram, Facebook e WhatsApp à direita
- Horário de atendimento em destaque
- Copyright dinâmico com `new Date().getFullYear()`

---

## Comportamentos gerais

- **100% responsivo** — mobile-first, breakpoints `md:` e `lg:` do Tailwind
- **Scroll suave** — `react-scroll` com `offset: -80` para compensar a navbar fixa
- **Animações de entrada** — `useInView` com `once: true` em todas as seções
- **Acessibilidade básica** — `aria-label`, `aria-pressed`, `role="alert"`, `aria-busy`, contraste adequado, foco visível

---

## Melhorias para as próximas sessões

### Prioridade alta

#### Integração real do formulário
O formulário atualmente simula o envio com `setTimeout`. As opções para torná-lo funcional:
- **WhatsApp direto:** ao submeter, abrir `https://wa.me/55NUMERO?text=...` com os dados preenchidos — sem backend, zero custo
- **Formspree:** serviço gratuito que recebe os dados e envia por e-mail, requer só trocar o `action` do form
- **EmailJS:** envio de e-mail direto do frontend com template personalizável

#### Deploy
- **Vercel** (recomendado para Vite/React): `npm i -g vercel && vercel` — domínio grátis, SSL automático, CI/CD no push
- **Netlify:** alternativa com drag-and-drop do `dist/` ou integração com GitHub

#### Botão flutuante do WhatsApp
Componente fixo no canto inferior direito, presente em todas as seções. Alta conversão em mobile.

---

### Prioridade média

#### SEO e meta tags
- `<title>` e `<meta name="description">` específicos por página
- Open Graph (`og:title`, `og:image`, `og:description`) para compartilhamento no WhatsApp/Facebook
- Favicon real com a logo da escola

#### Galeria de fotos real
A seção "Galeria" existe na navbar mas não tem conteúdo ainda. Implementar com:
- Grid de fotos reais da escola (instalações, eventos, aulas)
- Lightbox para visualização ampliada (biblioteca `yet-another-react-lightbox`)

#### Google Maps na seção de contato
Embed do mapa com a localização exata da escola em Escada-PE — aumenta credibilidade e facilita a visita.

#### Conteúdo real
Substituir todos os placeholders por dados reais:
- Telefone e e-mail reais
- Endereço completo
- Fotos reais das instalações (hero, sobre, galeria)
- Número real de alunos e anos de história
- Depoimentos reais de pais

---

### Prioridade baixa / extras

#### Google Analytics / Meta Pixel
Rastreamento de visitas, taxa de conversão do formulário e origem do tráfego. Essencial para medir o ROI da landing page.

#### Micro-animações adicionais
- Efeito parallax sutil na imagem do hero ao rolar
- Animação de hover nos links da navbar
- Transição de cor nos chips do formulário mais suave

#### Acessibilidade avançada
- Teste com leitor de tela (NVDA/VoiceOver)
- Skip-to-content link para usuários de teclado
- Conformidade WCAG 2.1 nível AA completa

#### Performance
- `loading="lazy"` nas imagens abaixo da dobra
- Otimização do bundle com `vite-plugin-compression`
- Substituir imagens do Pexels por imagens hospedadas localmente (evita dependência externa)

#### PWA (Progressive Web App)
- `vite-plugin-pwa` para manifest e service worker
- Permite adicionar à tela inicial no celular dos pais

---

## Scripts disponíveis

```bash
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # build de produção → pasta dist/
npm run preview  # pré-visualizar o build de produção localmente
```

---

## Imagens utilizadas

| Seção | Fonte | ID |
|---|---|---|
| Hero | Pexels (Yan Krukau) | `8617938` |
| Sobre | Unsplash | `photo-1580582932707` |

Todas as imagens são gratuitas para uso comercial sob licença Pexels/Unsplash.
