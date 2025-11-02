✈️ Jornada Milhas

Aplicação desenvolvida para aprendizado sobre Angular e boas práticas de front-end moderno.
O projeto simula uma plataforma de viagens, com busca de promoções, exibição de depoimentos e banners dinâmicos — tudo estruturado com componentes standalone e Angular Material.

🚀 Tecnologias utilizadas

Angular 17+ (com Standalone Components)

Angular Material (design system e UI components)

TypeScript

HTML5 / SCSS

Node.js + npm (para ambiente de desenvolvimento)

🧱 Estrutura do projeto
src/
├── app/
│   ├── pages/
│   │   └── home/              # Página principal
│   └── shared/
│       ├── banner/            # Componente de banner principal
│       ├── banner-rodape/     # Banner inferior (rodapé)
│       ├── card/              # Card Coringa
│       ├── card-busca/        # Card de promoções
│       ├── card-depoimento/   # Card de depoimentos
│       ├── container/         # Container para organização dos componentes
│       ├── footer/            # Rodapé
│       ├── form-busca/        # Form para futuras buscas de viagens
│       ├── header/            # Cabeçalho
│       └── modal/             # Modal para filtrar passagens
├── assets/
│   └── imagens/
└── main.ts

⚙️ Como executar localmente

Clone o repositório:

git clone https://github.com/FelixDev01/jornada-milhas.git


Instale as dependências:

npm install


Inicie o servidor de desenvolvimento:

ng serve


Acesse no navegador:

http://localhost:4200/

🧭 Funcionalidades principais

✅ Página inicial com banners dinâmicos
✅ Seção de promoções com cards reutilizáveis
✅ Exibição de depoimentos de clientes
✅ Estrutura de componentes standalone
✅ Design responsivo com Angular Material

🧩 Comandos úteis
Ação	Comando
Criar novo componente	ng generate component nome
Rodar servidor local	ng serve
Fazer build de produção	ng build
Rodar testes unitários	ng test
💡 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos fundamentais do ecossistema Angular, como:

Organização por componentes reutilizáveis

Uso de standalone components (sem módulos)

Data binding, diretivas estruturais e de atributo

Estruturação de rotas com o RouterOutlet

Estilização modular com SCSS

Integração com Angular Material

👨‍💻 Autor
Felix Eduardo Villanueva Condori
Projeto desenvolvido para aquisição de experiencia com o Angular e entendendo SCSS
