const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'index.html');
let html = fs.readFileSync(file, 'utf8');

// Order matters: longer/more specific strings first to avoid partial collisions.
const replacements = [
  // Meta / head
  ['<html lang="en-US">', '<html lang="pt-BR">'],
  ['<title>OneArc</title>', '<title>Charlie Ibirapuera</title>'],
  [
    '<meta name="description" content="OneArc is a modern and powerful website template built for real estate agencies, developers, and property managers. It’s designed to showcase properties, attract leads, and offer a seamless user experience across all devices.">',
    '<meta name="description" content="Estudio completo em hotel boutique no Ibirapuera, Moema - Sao Paulo. Piscina, academia e self check-in. Demo do anuncio do Allan.">',
  ],

  // Brand
  ['OneArc Residence', 'Charlie Ibirapuera'],
  ['OnePack Property', 'Charlie Ibirapuera'],
  ['OneArc', 'Charlie'],

  // Nav
  ['Home.', 'Inicio.'],
  ['About.', 'Sobre.'],
  ['Essentials.', 'Comodidades.'],
  ['Contact.', 'Contato.'],
  ['Properties', 'Hospedagem'],
  ['about us', 'sobre o anfitriao'],

  // Hero / top copy
  ['Next-Gen Living', 'Hospedagem de Alto Padrao'],
  ['Intelligent living solutions', 'Estudio completo no coracao do Ibirapuera'],
  ['Modern living upgrades', 'Piscina, academia e self check-in inclusos'],
  ['Cutting-Edge Architecture', 'Charme hoteleiro em Moema'],
  ['Quality Living', 'Conforto e praticidade'],
  ['One of the best development', 'Um dos anuncios preferidos dos hospedes'],
  ['Smart home innovations', 'Praticidade de hotel, aconchego de lar'],
  ['Discover the story behind this beautiful and dope property.', 'Conheca a historia por tras desse estudio incrivel no Ibirapuera.'],
  ['From bustling urban condos to peaceful...', 'Do agito de Moema a tranquilidade do seu quarto...'],
  ['Discover More', 'Saiba mais'],

  // Property overview
  ['Take a detailed look at this stunning property', 'Conheca cada detalhe desse estudio deslumbrante'],
  ['Property overview', 'Visao geral do imovel'],
  ['Room overview with dope look', 'Ambientes com acabamento premium'],
  ['gallery overview', 'galeria de fotos'],

  // Floor plan
  ['Explore every level with our detailed floor planning', 'Veja o layout completo do estudio'],
  ['Floor planning', 'Planta baixa'],
  ['Planning', 'Planta'],
  ['Appartment', 'Estudio'],
  ['Duplex', 'Quarto'],
  ['Simplex', 'Cozinha'],
  ['Studio', 'Banheiro'],
  ['Basement', 'Lavanderia'],
  ['Bed Room', 'Quarto'],
  ['Bath Room', 'Banheiro'],
  ['Bath tab', 'Banheiro completo'],
  ['Beds', 'Camas'],
  ['Living room', 'Sala de estar'],
  ['Dining room', 'Cozinha'],
  ['Kitchen', 'Cozinha completa'],
  ['Playground', 'Lazer'],
  ['Swimming pool', 'Piscina'],
  ['Property deliver', 'Disponibilidade imediata'],
  ['Property review', 'Avaliacao do imovel'],
  ['Property size', 'Metragem'],
  ['Property', 'Imovel'],

  // Essentials section
  ['Why choose our property?', 'Por que ficar nesse estudio?'],
  ['Quality house solutions', 'Tudo incluso, sem complicacao'],
  ['Quality design', 'Design premium'],
  ['Customization Service', 'Self check-in'],
  ['Daily quote msg.', 'Suporte direto com o anfitriao'],
  ['Some more fun facts about company', 'Numeros que mostram por que os hospedes amam'],
  ['Clients served  worldwide', 'Hospedes muito bem avaliados'],
  ['On average for home owner cost savings.', 'Taxa de resposta do anfitriao'],
  ['Have awards more', 'Selo Preferido dos Hospedes'],
  [
    'The living room is the heart of the home—a space designed for comfort, relaxation, &amp; gathering.',
    'O estudio foi pensado para hospedar com conforto: ambiente integrado para descansar depois de um dia na cidade.',
  ],
  ['Unbelievable &amp; next-gen design team', 'Um espaco com a cara de hotel boutique'],
  ['Better quality design, communication uI &amp; uX', 'Decoracao premium e check-in 100% sem contato'],

  // Testimonials (real reviews from the Airbnb listing, translated already in PT by the guests)
  ['Alonso D. - ', 'Dayse - '],
  ['Alonso D. Dowson', 'Dayse'],
  ['Alvon B. - ', 'Carlos Cesar - '],
  ['Miranda - ', 'Ricardo - '],
  ['Nelson M. - ', 'Cleber - '],
  ['Ratings out of 5.0', 'Nota 5,0 de 5'],

  // Contact section
  ['Get in touch', 'Fale com o anfitriao'],
  ['Any inquiry', 'Duvidas sobre o check-in?'],
  ['Call Us Now', 'Fale pelo WhatsApp'],
  ['Catch us here', 'Onde estamos'],
  ['Follow Us.', 'Siga no Instagram.'],
  ['Message', 'Mensagem'],
  ['Subject', 'Assunto'],
  ['Name', 'Nome'],
  ['Email', 'E-mail'],
  ['get a free quote', 'ver disponibilidade'],
  ['schedule a visit', 'reservar agora'],
  ['book a visit', 'reservar estadia'],

  // Footer
  ['Copyright and design by ', 'Demo criada pela Stay Brasil para '],
  ['See More Templates', 'Ver anuncio original'],
  ['Download For Free', 'Compartilhar no WhatsApp'],

  // Addresses
  ['14960 Florence Trail', 'Rua Jesuino Arruda, Ibirapuera'],
  ['320 40th Street B4, New York, NY 10019', 'Moema, Sao Paulo - SP'],
  ['Apple Valley, MN 55124', 'Sao Paulo, Brasil'],

  // Color swatches
  ['Brown', 'Marrom'],
  ['Cream', 'Creme'],
  ['Green', 'Verde'],
  ['White', 'Branco'],
  ['Wood', 'Madeira'],

  // Form
  ['Budget', 'Datas'],
  ['placeholder="$5000 - $10,000"', 'placeholder="Check-in e Checkout"'],
  ['placeholder="Email address"', 'placeholder="Seu e-mail"'],
  ['placeholder="Message"', 'placeholder="Sua mensagem"'],
  ['placeholder="Your name"', 'placeholder="Seu nome"'],
  ['placeholder="Your Subject"', 'placeholder="Assunto"'],
];

let notFound = [];
for (const [search, repl] of replacements) {
  if (!html.includes(search)) {
    notFound.push(search);
    continue;
  }
  html = html.split(search).join(repl);
}

fs.writeFileSync(file, html, 'utf8');
console.log('Replacements applied:', replacements.length - notFound.length, '/', replacements.length);
if (notFound.length) {
  console.log('NOT FOUND (skipped):');
  notFound.forEach((s) => console.log(' -', JSON.stringify(s)));
}
