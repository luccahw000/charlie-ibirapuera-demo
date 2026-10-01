const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'index.html');
let html = fs.readFileSync(file, 'utf8');

const fixes = [
  ['House Owner', 'Anfitrião'],
  ['Charlie Ibirapuera', 'Charlie Ibirapuera'], // ok as-is
  ['sobre o anfitriao', 'sobre o anfitrião'],
  ['Hospedagem de Alto Padrao', 'Hospedagem de Alto Padrão'],
  ['Estudio completo no coracao do Ibirapuera', 'Estúdio completo no coração do Ibirapuera'],
  ['Charme hoteleiro em Moema', 'Charme hoteleiro em Moema'],
  ['Um dos anuncios preferidos dos hospedes', 'Um dos anúncios preferidos dos hóspedes'],
  ['Praticidade de hotel, aconchego de lar', 'Praticidade de hotel, aconchego de lar'],
  ['Conheca a historia por tras desse estudio incrivel no Ibirapuera.', 'Conheça a história por trás desse estúdio incrível no Ibirapuera.'],
  ['Do agito de Moema a tranquilidade do seu quarto...', 'Do agito de Moema à tranquilidade do seu quarto...'],
  ['Conheca cada detalhe desse estudio deslumbrante', 'Conheça cada detalhe desse estúdio deslumbrante'],
  ['Visao geral do imovel', 'Visão geral do imóvel'],
  ['galeria de fotos', 'galeria de fotos'],
  ['Veja o layout completo do estudio', 'Veja o layout completo do estúdio'],
  ['Planta baixa', 'Planta baixa'],
  ['Estudio', 'Estúdio'],
  ['Banheiro completo', 'Banheiro completo'],
  ['Cozinha completa', 'Cozinha completa'],
  ['Disponibilidade imediata', 'Disponibilidade imediata'],
  ['Avaliacao do imovel', 'Avaliação do imóvel'],
  ['Imovel', 'Imóvel'],
  ['Por que ficar nesse estudio?', 'Por que ficar nesse estúdio?'],
  ['Tudo incluso, sem complicacao', 'Tudo incluso, sem complicação'],
  ['Suporte direto com o anfitriao', 'Suporte direto com o anfitrião'],
  ['Numeros que mostram por que os hospedes amam', 'Números que mostram por que os hóspedes amam'],
  ['Hospedes muito bem avaliados', 'Hóspedes muito bem avaliados'],
  ['Taxa de resposta do anfitriao', 'Taxa de resposta do anfitrião'],
  ['Selo Preferido dos Hospedes', 'Selo Preferido dos Hóspedes'],
  ['O estudio foi pensado para hospedar com conforto: ambiente integrado para descansar depois de um dia na cidade.', 'O estúdio foi pensado para hospedar com conforto: ambiente integrado para descansar depois de um dia na cidade.'],
  ['Um espaco com a cara de hotel boutique', 'Um espaço com a cara de hotel boutique'],
  ['Decoracao premium e check-in 100% sem contato', 'Decoração premium e check-in 100% sem contato'],
  ['Nota 5,0 de 5', 'Nota 5,0 de 5'],
  ['Fale com o anfitriao', 'Fale com o anfitrião'],
  ['Duvidas sobre o check-in?', 'Dúvidas sobre o check-in?'],
  ['Onde estamos', 'Onde estamos'],
  ['ver disponibilidade', 'ver disponibilidade'],
  ['reservar agora', 'reservar agora'],
  ['reservar estadia', 'reservar estadia'],
  ['Demo criada pela Stay Brasil para ', 'Demo criada pela Stay Brasil para '],
  ['Ver anuncio original', 'Ver anúncio original'],
  ['Rua Jesuino Arruda, Ibirapuera', 'Rua Jesuíno Arruda, Ibirapuera'],
  ['Moema, Sao Paulo - SP', 'Moema, São Paulo - SP'],
  ['Sao Paulo, Brasil', 'São Paulo, Brasil'],
  ['Check-in e Checkout', 'Check-in e Checkout'],
  ['<meta name="description" content="Estudio completo em hotel boutique no Ibirapuera, Moema - Sao Paulo. Piscina, academia e self check-in. Demo do anuncio do Allan.">',
   '<meta name="description" content="Estúdio completo em hotel boutique no Ibirapuera, Moema - São Paulo. Piscina, academia e self check-in. Demo do anúncio do Allan.">'],
];

let notFound = [];
for (const [search, repl] of fixes) {
  if (search === repl) continue;
  if (!html.includes(search)) { notFound.push(search); continue; }
  html = html.split(search).join(repl);
}

fs.writeFileSync(file, html, 'utf8');
console.log('done. not found:', notFound.length);
notFound.forEach(s => console.log(' -', s));
