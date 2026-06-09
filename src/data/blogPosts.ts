export interface BlogPost {
  id: number
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  featured: boolean
  content: string
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'huishouden-naast-werk',
    category: 'Tips',
    title: 'Huishouden naast werk: zo houd ik het behapbaar',
    excerpt: 'Zo verdeel ik mijn huishouden door de week  zodat ik in het weekend niet alles hoef te doen.',
    date: '25 Mei 2026',
    readTime: '5 min',
    featured: true,
    image: '/images/Huishouden naast werk zo houd ik het behapbaar.png',
    content: `
      <p class="intro">Werk, huishouden, rust… het is soms best een zoektocht om daar een fijne balans in te vinden. Ik merk zelf dat ik veel meer rust in mijn hoofd heb als ik mijn schoonmaakwerk een beetje verdeel over de week. Niet alles op één dag, maar kleine taken per dag. Daardoor hoef ik in het weekend niet nog uren in huis bezig te zijn.</p>

      <p>Ik dacht: laat ik mijn wekelijkse schema eens delen. Misschien heb jij er ook iets aan!</p>

      <h2>Maandag: de keuken</h2>
      <p>Op maandag begin ik in de keuken. Ik neem de kookplaat af, maak de tegels schoon en schrob het aanrecht en de wasbak goed schoon (ja, vaak gewoon met Cif). Zo begin ik de week meteen fris.</p>

      <h2>Dinsdag: stof weg en even bijhouden</h2>
      <p>Dinsdag is bij mij een simpele bijhoud-dag. Ik stofzuig het stof weg waar ik bij kan en neem oppervlakken zoals bureaus en kasten af. Gewoon even de plekken aanpakken die tijdens de week snel stoffig worden. Zo blijft het huis netjes zonder dat het veel werk wordt.</p>

      <h2>Woensdag: badkamer en toilet</h2>
      <p>Halverwege de week pak ik de badkamer en wc aan. Meestal gewoon goed bijhouden: de wastafel, spiegel en natuurlijk het toilet helemaal schoonmaken.</p>

      <h2>Donderdag: wasdag en afval check</h2>
      <p>Donderdag staat in het teken van de was. Wasjes draaien, kijken of er vuilnis weg moet en meteen even checken of er karton of andere rommel weg kan.</p>

      <h2>Vrijdag: de was opvouwen</h2>
      <p>Niet mijn favoriete klus, maar wel fijn om het weekend in te gaan met schone én opgevouwen was.</p>

      <h2>Elke dag: kleine routines</h2>
      <p>Er zijn ook een paar dingen die ik echt elke dag doe:</p>
      <ul>
        <li>De afwas doen voordat ik ga slapen</li>
        <li>Het aanrecht netjes achterlaten</li>
        <li>15 minuten een timer zetten om kleine rommeltjes op te ruimen (denk aan de bank, tafel of losse spullen)</li>
      </ul>
      <p>Dat laatste helpt echt enorm. Kleine beetjes schelen uiteindelijk veel.</p>

      <p>Ik merk zelf dat ik onrustig word als ik met een rommelig aanrecht naar bed ga. Dus hoe moe ik ook ben: even opruimen geeft me daarna juist rust.</p>

      <h2>En het weekend?</h2>
      <p>Doordat ik alles een beetje verspreid, hoef ik in het weekend niet meer zo veel te doen. Natuurlijk zijn er altijd grotere schoonmaakklussen, maar die doe ik meestal om de week. Denk bijvoorbeeld aan de douche wat uitgebreider aanpakken. Dat hoeft echt niet elke keer heel grondig.</p>

      <div class="tip-box">
        <h3>Tot slot</h3>
        <p>Voor mij werkt dit schema goed, omdat het haalbaar blijft naast werk. Het hoeft niet perfect — gewoon een beetje bijhouden maakt al zo'n verschil.</p>
      </div>

      <p>Hoe verdeel jij jouw huishouden door de week? Of ben jij meer van één grote schoonmaakdag?</p>
    `
  },
  {
    id: 2,
    slug: 'we-zijn-allemaal-mens',
    category: 'Verhalen',
    title: 'We zijn allemaal mens',
    excerpt: 'Soms vragen mensen mij hoe het is om bij zoveel verschillende mensen thuis te komen. En eerlijk? Dat is juist wat ik zo mooi vind aan mijn werk.',
    date: '09 Juni 2026',
    readTime: '4 min',
    featured: false,
    image: '/images/We zijn allemaal mens.jpeg',
    content: `
      <p class="intro">Soms vragen mensen mij hoe het is om bij zoveel verschillende mensen thuis te komen.</p>

      <p>En eerlijk? Dat is juist wat ik zo mooi vind aan mijn werk.</p>

      <p>Geen dag is hetzelfde. De ene keer stap ik binnen bij een jong stel dat net samenwoont. De andere keer bij een druk gezin waar de dagen voorbij vliegen. En soms kom ik bij oudere mensen die wat extra hulp kunnen gebruiken omdat het niet meer lukt om alles zelf bij te houden.</p>

      <p>Achter iedere voordeur zit een ander verhaal.</p>

      <p>Sommige mensen vinden het fijn om tijdens het werk even een praatje te maken. Gewoon omdat ze behoefte hebben aan wat gezelschap. Anderen hebben het juist zo druk dat een rustig gesprek en een opgeruimd huis even een moment van ademruimte geven.</p>

      <p>En dat is helemaal oké.</p>

      <p>We hebben allemaal periodes waarin we hulp kunnen gebruiken. Of dat nu is omdat het druk is, omdat we ouder worden of omdat het gewoon fijn is als iemand een handje helpt.</p>

      <p>Ik kom niet om te oordelen. Ik kom om te helpen.</p>

      <p>Een schoon en opgeruimd huis is natuurlijk belangrijk, maar voor mij gaat het ook om iets anders. Om aandacht. Om vertrouwen. Om ervoor zorgen dat iemand zich prettig voelt in zijn of haar eigen thuis.</p>

      <p>Want uiteindelijk zijn we allemaal mens. En soms kan een beetje hulp of een vriendelijk praatje al een groot verschil maken.</p>

      <p class="signature">– Keke, Fleurig Thús 🌷</p>
    `
  },
  // {
  //   id: 3,
  //   slug: 'natuurlijke-schoonmaakmiddelen',
  //   category: 'Tips',
  //   title: 'Natuurlijke schoonmaakmiddelen',
  //   excerpt: 'Maak uw eigen milieuvriendelijke schoonmaakproducten met ingrediënten uit de keuken.',
  //   date: '5 Dec 2024',
  //   readTime: '6 min',
  //   featured: false,
  //   content: '<p>Binnenkort beschikbaar...</p>'
  // },
  // {
  //   id: 4,
  //   slug: 'fleurig-thus-groeit',
  //   category: 'Nieuws',
  //   title: 'Fleurig Thús groeit',
  //   excerpt: 'Een update over onze diensten en de groeiende vraag naar persoonlijke huishoudelijke hulp.',
  //   date: '1 Dec 2024',
  //   readTime: '3 min',
  //   featured: false,
  //   content: '<p>Binnenkort beschikbaar...</p>'
  // },
  //  {
  //   id: 5,
  //   category: 'Verhalen',
  //   slug: 'van-nergens-naar-iets',
  //   title: 'Van nergens naar iets',
  //   excerpt: 'Mijn persoonlijke reis en waarom ik geloof in het helpen van anderen.',
  //   date: '25 Nov 2024',
  //   readTime: '7 min',
  //   featured: true,
  //   content: '<p>Binnenkort beschikbaar...</p>'
  // },
  // {
  //   id: 6,
  //   category: 'Tips',
  //   title: 'De perfecte schoonmaakroutine',
  //   slug: 'de-perfecte-schoonmaakroutine',
  //   excerpt: 'Hoe u een effectieve wekelijkse schoonmaakroutine kunt opzetten.',
  //   date: '20 Nov 2024',
  //   readTime: '5 min',
  //   featured: false,
  //   content: '<p>Binnenkort beschikbaar...</p>'
  // }
]
