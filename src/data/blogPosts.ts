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
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: '5-schoonmaak-tips',
    category: 'Tips',
    title: '5 Praktische schoonmaaktips voor een fris huis',
    excerpt: 'Ontdek eenvoudige manieren om uw huis georganiseerd en schoon te houden, ook met een druk leven.',
    date: '15 Dec 2024',
    readTime: '5 min',
    featured: true,
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
    slug: 'de-kracht-van-verbinding',
    category: 'Verhalen',
    title: 'De kracht van verbinding',
    excerpt: 'Waarom persoonlijk contact zo belangrijk is in huishoudelijke hulp.',
    date: '10 Dec 2024',
    readTime: '4 min',
    featured: false,
    content: '<p>Binnenkort beschikbaar...</p>'
  },
  {
    id: 3,
    slug: 'natuurlijke-schoonmaakmiddelen',
    category: 'Tips',
    title: 'Natuurlijke schoonmaakmiddelen',
    excerpt: 'Maak uw eigen milieuvriendelijke schoonmaakproducten met ingrediënten uit de keuken.',
    date: '5 Dec 2024',
    readTime: '6 min',
    featured: false,
    content: '<p>Binnenkort beschikbaar...</p>'
  },
  {
    id: 4,
    slug: 'fleurig-thus-groeit',
    category: 'Nieuws',
    title: 'Fleurig Thús groeit',
    excerpt: 'Een update over onze diensten en de groeiende vraag naar persoonlijke huishoudelijke hulp.',
    date: '1 Dec 2024',
    readTime: '3 min',
    featured: false,
    content: '<p>Binnenkort beschikbaar...</p>'
  },
   {
    id: 5,
    category: 'Verhalen',
    slug: 'van-nergens-naar-iets',
    title: 'Van nergens naar iets',
    excerpt: 'Mijn persoonlijke reis en waarom ik geloof in het helpen van anderen.',
    date: '25 Nov 2024',
    readTime: '7 min',
    featured: true,
    content: '<p>Binnenkort beschikbaar...</p>'
  },
  {
    id: 6,
    category: 'Tips',
    title: 'De perfecte schoonmaakroutine',
    slug: 'de-perfecte-schoonmaakroutine',
    excerpt: 'Hoe u een effectieve wekelijkse schoonmaakroutine kunt opzetten.',
    date: '20 Nov 2024',
    readTime: '5 min',
    featured: false,
    content: '<p>Binnenkort beschikbaar...</p>'
  }
]
