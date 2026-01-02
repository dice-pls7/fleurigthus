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
    slug: '5-schoonmaak-tips',
    category: 'Tips',
    title: '5 Praktische schoonmaaktips voor een fris huis',
    excerpt: 'Ontdek eenvoudige manieren om uw huis georganiseerd en schoon te houden, ook met een druk leven.',
    date: '15 Dec 2025',
    readTime: '5 min',
    featured: true,
    image: '/images/5 Praktische schoonmaaktips voor een fris huis.png',
    
    content: `
      <p class="intro">Een schoon huis hoeft niet veel tijd te kosten. Met deze 5 praktische tips houd je je huis fris en opgeruimd, zelfs met een drukke agenda.</p>

      <h2>1. Begin klein: de 5-minuten regel</h2>
      <p>Elke ochtend besteed je slechts 5 minuten aan opruimen. Leg spullen terug op hun plek, ruim de keuken op en maak het aanrecht schoon. Dit voorkomt dat rommel zich ophoopt en maakt het grote schoonmaken veel makkelijker.</p>

      <h2>2. Werk van boven naar beneden</h2>
      <p>Bij het schoonmaken altijd beginnen bij het hoogste punt (zoals planken en lampen) en werk naar beneden toe. Zo valt stof en vuil naar beneden en hoeft u niet dubbel te poetsen. Eindig altijd met de vloer.</p>

      <h2>3. Gebruik natuurlijke schoonmaakmiddelen</h2>
      <p>Een mix van azijn en water is uitstekend voor ramen en spiegels. Baking soda werkt wonderlijk voor hardnekkige vlekken in de keuken en badkamer. Deze middelen zijn goedkoop, effectief en vriendelijk voor het milieu.</p>
      
      <ul>
        <li><strong>Allesreiniger:</strong> 1 deel azijn op 1 deel water</li>
        <li><strong>Raamreiniger:</strong> 2 eetlepels azijn in 1 liter water</li>
        <li><strong>Schrobpasta:</strong> Baking soda met een beetje water tot een pasta</li>
      </ul>

      <h2>4. De one-touch regel</h2>
      <p>Pak iets maar één keer op. In plaats van iets neer te leggen met het plan om het "later" op te ruimen, leg het meteen op de juiste plek. Dit bespaart tijd en voorkomt opeenhoping van spullen.</p>

      <h2>5. Maak een schoonmaakschema</h2>
      <p>Verdeel grote taken over de week. Bijvoorbeeld: maandag stofzuigen, dinsdag badkamer, woensdag keuken, etc. Zo wordt schoonmaken minder overweldigend en blijft uw huis constant netjes.</p>

      <div class="tip-box">
        <h3>💡 Extra tip</h3>
        <p>Zet een timer voor 15 minuten en doe zoveel mogelijk in die tijd. Je zult versteld staan hoeveel je kunt bereiken met gefocust werken!</p>
      </div>

      <h2>Hulp nodig?</h2>
      <p>Lukt het niet om alles zelf bij te houden? Dat is helemaal oké. Soms is het fijn om hulp te hebben bij het huishouden, zodat je meer tijd overhoudt voor de dingen die echt belangrijk zijn.</p>
      
      <p>Bij Fleurig Thús help ik graag met een schoon en opgeruimd huis, zodat je je kunt focussen op wat voor jou telt.</p>
    `
  },
  {
    id: 2,
    slug: 'van-schoon-naar-rust',
    category: 'Tips',
    title: 'Van schoon naar rust: zo creëer je een huis dat écht fijn voelt',
    excerpt: 'Een schoon huis is fijn, maar een huis dat ook rust uitstraalt is goud waard. Ontdek hoe je met kleine aanpassingen een rustgevend thuis creëert.',
    date: '2 Jan 2026',
    readTime: '6 min',
    featured: false,
    image: '/images/Van schoon naar rust zo creëer je een huis dat écht fijn voelt.png',
    content: `
      <p class="intro">Een schoon huis is fijn, maar een huis dat ook rust uitstraalt is goud waard. Zeker met een druk leven kan je woning snel aanvoelen als "nog een taak" in plaats van een plek om op te laden. In deze blog lees je hoe je met kleine aanpassingen niet alleen een schoon, maar ook een rustgevend en fijn thuis creëert.</p>

      <h2>1. Minder spullen = minder onrust</h2>
      <p>Hoe meer spullen, hoe sneller rommel zich opstapelt. Kies per ruimte een vaste plek voor je dagelijkse spullen en wees eerlijk: Gebruik ik dit écht?</p>
      <p><strong>Tip:</strong> begin met één lade of plank per week. Dat voelt haalbaar én geeft meteen overzicht.</p>

      <h2>2. Werk met vaste routines (niet met perfecte schema's)</h2>
      <p>Je huis hoeft niet altijd perfect schoon te zijn. Kleine routines maken het verschil:</p>
      <ul>
        <li>Elke avond even de keuken resetten</li>
        <li>10 minuten opruimen voor het slapengaan</li>
        <li>Eén vaste dag voor grotere taken</li>
      </ul>
      <p>Zo voorkom je dat alles zich opstapelt.</p>

      <h2>3. Geur doet meer dan je denkt</h2>
      <p>Een fris huis gaat niet alleen over schoonmaken, maar ook over geur. Ventileer dagelijks en kies één geur die je fijn vindt, zoals:</p>
      <ul>
        <li><strong>Lavendel</strong> (rustgevend)</li>
        <li><strong>Citroen</strong> (fris en energiek)</li>
        <li><strong>Eucalyptus</strong> (schoon gevoel)</li>
      </ul>
      <p>Een subtiele geur zorgt ervoor dat je huis meteen prettiger aanvoelt.</p>

      <h2>4. Licht en lucht: onderschat ze niet</h2>
      <p>Daglicht en frisse lucht maken een enorm verschil.</p>
      <ul>
        <li>Open elke dag even alle ramen</li>
        <li>Houd vensterbanken en ramen schoon</li>
        <li>Gebruik lichte kleuren en materialen waar mogelijk</li>
      </ul>
      <p>Je huis voelt direct ruimer en lichter.</p>

      <h2>5. Wees niet te hard voor jezelf</h2>
      <p>Een huis is om in te leven. Soms is "goed genoeg" echt goed genoeg. Rust in huis begint vaak bij rust in je hoofd.</p>

      <div class="tip-box">
        <h3> Tot slot</h3>
        <p>Een fijn thuis zit niet in perfectie, maar in aandacht. Met kleine stappen maak je van je huis een plek waar je graag bent, elke dag weer.</p>
      </div>

      <h2>Hulp nodig?</h2>
      <p>Wil je meer tijd voor de dingen die écht tellen? Bij Fleurig Thús help ik graag met een schoon en rustgevend huis, zodat jij kunt genieten van wat belangrijk is.</p>
    `
  },
  // {
  //   id: 3,
  //   slug: 'de-kracht-van-verbinding',
  //   category: 'Verhalen',
  //   title: 'De kracht van verbinding',
  //   excerpt: 'Waarom persoonlijk contact zo belangrijk is in huishoudelijke hulp.',
  //   date: '10 Dec 2024',
  //   readTime: '4 min',
  //   featured: false,
  //   content: '<p>Binnenkort beschikbaar...</p>'
  // },
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
