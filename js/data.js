const projects = [
  {
    id: 'fuori-brief',
    category: { it: 'Podcast', en: 'Podcast' },
    year: 2025,
    featured: true,
    client: 'Flatmates Agency',
    thumb: 'img/fuori-brief.jpg',
    videoEmbed: 'l5sq8JAxzps',
    title: { it: 'Fuori Brief', en: 'Fuori Brief' },
    projectDesc: {
      it: 'Fuori Brief è il podcast originale di Flatmates Agency nato per dare voce ai migliori marketing manager italiani. Condotto dai CEO Michele Pagani e Marcello Ascani, il format esplora il dietro le quinte del lavoro di marketing e di business, allontanandosi dalle solite narrazioni per concentrarsi sulle sfide reali di chi fa questo mestiere tutti i giorni.',
      en: 'Fuori Brief is the original podcast by Flatmates Agency, created to give a voice to top Italian marketing managers. Hosted by CEOs Michele Pagani and Marcello Ascani, the format explores the behind-the-scenes of marketing and business, focusing on the real challenges of industry professionals.'
    },
    clientDesc: {
      it: 'Flatmates è un\'agenzia creativa e di influencer marketing nata dall\'unione tra il content creator e imprenditore Marcello Ascani e l\'agenzia digitale Gummy Industries.',
      en: 'Flatmates is a creative and influencer marketing agency born from the partnership between content creator Marcello Ascani and the digital agency Gummy Industries.'
    },
    whatIDid: {
      it: 'Ho gestito l\'intero flusso di produzione del video-podcast: dall\'allestimento del set alla direzione della fotografia, dalle riprese in studio fino a tutto il processo di montaggio video finale.',
      en: 'I managed the entire production workflow of the video-podcast: from set design and cinematography to studio filming and the complete final video editing process.'
    }
  },
  {
    id: 'better-than-perfect',
    category: { it: 'Podcast', en: 'Podcast' },
    year: 2025,
    featured: false,
    client: 'Alessandro Mininno & Giacomo Scandolara',
    thumb: 'img/better-than-perfect.jpg',
    videoEmbed: '40tLUC_Aq4A',
    title: { it: 'Better Than Perfect', en: 'Better Than Perfect' },
    projectDesc: {
      it: 'Un podcast dedicato al mondo, sempre più articolato e complesso, delle agenzie di comunicazione. I due host affrontano le dinamiche del settore condividendo storie, successi e difficoltà legati alla gestione di un\'agenzia creativa oggi.',
      en: 'A podcast dedicated to the increasingly complex world of communication agencies. The two hosts discuss industry dynamics, sharing stories, successes, and the real challenges of running a creative agency today.'
    },
    clientDesc: {
      it: 'Il format è ideato e condotto da Alessandro Mininno e Giacomo Scandolara, imprenditori digitali e fondatori di agenzie creative con una profonda esperienza nel mercato della comunicazione.',
      en: 'The format is created and hosted by Alessandro Mininno and Giacomo Scandolara, digital entrepreneurs and founders of creative agencies with deep expertise in the communication market.'
    },
    whatIDid: {
      it: 'Mi sono occupato della produzione completa a 360° per le puntate del format: ho curato le riprese sul set, la gestione tecnica e il montaggio finale di ogni episodio.',
      en: 'I handled the complete 360-degree production for the format\'s episodes: from on-set filming and technical management to the final editing of each episode.'
    }
  },
  {
    id: 'morning-good',
    category: { it: 'Podcast', en: 'Podcast' },
    year: 2025,
    featured: false,
    client: 'Michele Pagani & Alessandro Mininno',
    thumb: 'img/morning-good.jpg',
    videoEmbed: '6P0uMffemr0',
    title: { it: 'Morning Good', en: 'Morning Good' },
    projectDesc: {
      it: 'Un format agile e dal taglio mattutino in cui gli host commentano l\'attualità, le news, la politica e i trend del momento. Una chiacchierata informale ma ricca di spunti per leggere i cambiamenti della società e del mondo della comunicazione.',
      en: 'A fast-paced, morning-style format where the hosts comment on current events, news, politics, and trends. An informal yet insightful chat to interpret changes in society and the communication landscape.'
    },
    clientDesc: {
      it: 'Podcast indipendente condotto da Michele Pagani (CEO Flatmates) e Alessandro Mininno (CEO Gummy Industries), professionisti del mondo digital che portano il loro punto di vista manageriale sulle notizie del giorno.',
      en: 'An independent podcast hosted by Michele Pagani (CEO of Flatmates) and Alessandro Mininno (CEO of Gummy Industries), digital professionals bringing their managerial perspective to the news of the day.'
    },
    whatIDid: {
      it: 'Ho curato l\'intera realizzazione tecnica del format video: dalla preparazione del set e le riprese in studio, fino al montaggio video e alla finalizzazione di ogni puntata.',
      en: 'I managed the entire technical execution of the video format: from set preparation and studio filming to the video editing and finalization of each episode.'
    }
  },
  {
    id: 'generali-semplice-come',
    category: { it: 'Podcast', en: 'Podcast' },
    year: 2025,
    featured: true,
    client: 'Generali Italia',
    thumb: 'img/generali-semplice-come.avif',
    videoEmbed: 'PAPmDAGuitM',
    title: { it: 'Generali — Semplice Come', en: 'Generali — Semplice Come' },
    projectDesc: {
      it: '"Semplice Come" è il video-podcast ideato per dare risposte chiare e concrete a domande complesse su temi come salute, intelligenza artificiale, welfare e finanza. L\'obiettivo è rendere accessibili argomenti difficili partendo dal punto di vista delle persone comuni.',
      en: '"Semplice Come" is a video-podcast designed to provide clear answers to complex questions regarding health, AI, welfare, and finance. The goal is to make difficult topics accessible from the perspective of everyday people.'
    },
    clientDesc: {
      it: 'Generali Italia è leader nel mercato assicurativo italiano. Il podcast vede la conduzione del talent Marcello Ascani affiancato di volta in volta da esperti e manager del Gruppo Generali.',
      en: 'Generali Italia is the leading insurance company in Italy. The podcast is hosted by talent Marcello Ascani, joined by various experts and managers from the Generali Group.'
    },
    whatIDid: {
      it: 'Supporto tecnico sul set e riprese in esterna. Mi sono occupato della registrazione audio per le interviste, garantendo uno standard qualitativo perfetto, e ho realizzato in prima persona le riprese dei vox pop in strada.',
      en: 'On-set technical support and outdoor filming. I handled the audio recording for the interviews, ensuring a perfect quality standard, and personally shot the street vox pops.'
    }
  },
  {
    id: 'zucchetti-changing-business',
    category: { it: 'Podcast', en: 'Podcast' },
    year: 2025,
    featured: true,
    client: 'Zucchetti',
    thumb: 'img/zucchetti-changing-business.avif',
    videoEmbed: '73AFFldZcZc',
    title: { it: 'Zucchetti — Changing Business', en: 'Zucchetti — Changing Business' },
    projectDesc: {
      it: 'Un format podcast dal taglio corporate e B2B che esplora l\'evoluzione del mondo del lavoro, della digitalizzazione e delle risorse umane, raccontando le storie di trasformazione delle imprese.',
      en: 'A corporate and B2B podcast format that explores the evolution of the workplace, digitalization, and human resources, telling stories of business transformation.'
    },
    clientDesc: {
      it: 'Zucchetti è la prima software house italiana, leader in Europa per soluzioni software, hardware e servizi IT per aziende e professionisti. Il podcast è condotto dall\'esperto e giornalista Filippo Poletti.',
      en: 'Zucchetti is the top Italian software house and a European leader in software, hardware, and IT services for businesses and professionals. The podcast is hosted by expert and journalist Filippo Poletti.'
    },
    whatIDid: {
      it: 'Ho gestito in autonomia tutta la catena produttiva audiovisiva del progetto: regia, allestimento degli spazi, riprese video e montaggio post-produzione per il rilascio finale.',
      en: 'I independently managed the entire audiovisual production chain for the project: directing, set design, video recording, and post-production editing for the final release.'
    }
  },
  {
    id: 'fastbook-podcast',
    category: { it: 'Podcast', en: 'Podcast' },
    year: 2025,
    featured: false,
    client: 'Fastbook (Gruppo Messaggerie)',
    thumb: 'img/fastbook-podcast.webp',
    videoEmbed: 'OXV5XuHo-4E',
    title: { it: 'Fastbook Podcast', en: 'Fastbook Podcast' },
    projectDesc: {
      it: 'Un format editoriale che celebra la lettura e il mercato librario intervistando direttamente gli scrittori in occasione dell\'uscita dei loro nuovi libri, svelandone aneddoti e processi creativi.',
      en: 'An editorial format that celebrates reading and the book market by directly interviewing authors upon the release of their new books, revealing anecdotes and creative processes.'
    },
    clientDesc: {
      it: 'Fastbook (società del Gruppo Messaggerie) è l\'azienda leader in Italia nella distribuzione all\'ingrosso di prodotti editoriali e libri per le librerie.',
      en: 'Fastbook (a company of the Messaggerie Group) is the leading wholesale distributor of editorial products and books for bookstores in Italy.'
    },
    whatIDid: {
      it: 'Ho supportato le sessioni di registrazione fornendo la mia competenza tecnica per la microfonazione e l\'acquisizione dell\'audio, assicurando un risultato pulito e di alta qualità.',
      en: 'I supported the recording sessions by providing my technical expertise for miking and audio capture, ensuring a clean and high-quality sound output.'
    }
  },
  {
    id: 'raffaele-gaito-youtube',
    category: { it: 'YouTube', en: 'YouTube' },
    year: 2025,
    featured: false,
    client: 'Raffaele Gaito / Flatmates Agency',
    thumb: 'img/raffaele-gaito-youtube.avif',
    videoEmbed: 'ne4d_TSXXpo',
    title: { it: 'Produzione YouTube — Raffaele Gaito', en: 'YouTube Production — Raffaele Gaito' },
    projectDesc: {
      it: 'Produzione di un format YouTube in cui Raffaele Gaito intervista diversi ospiti ed esperti sul tema dell\'Intelligenza Artificiale.',
      en: 'Production of a YouTube format where Raffaele Gaito interviews various guests and experts about Artificial Intelligence.'
    },
    clientDesc: {
      it: 'Raffaele Gaito è uno dei divulgatori, autori e formatori più noti in Italia sui temi della crescita personale, del business e dell\'innovazione. È parte del roster talent di Flatmates Agency.',
      en: 'Raffaele Gaito is one of the most well-known educators, authors, and trainers in Italy on topics of personal growth, business, and innovation. He is part of the Flatmates Agency talent roster.'
    },
    whatIDid: {
      it: 'Il mio contributo si è concentrato specificamente sulla fase di shooting: ho lavorato sul set come operatore video, curando le riprese per diversi episodi della serie.',
      en: 'My contribution focused specifically on the shooting phase: I worked on set as a camera operator, handling the filming for several episodes of the series.'
    }
  },
  {
    id: 'adrian-fartade-youtube',
    category: { it: 'YouTube', en: 'YouTube' },
    year: 2025,
    featured: false,
    client: 'Adrian Fartade (Link4Universe) / Flatmates Agency',
    title: { it: 'Produzione YouTube — Adrian Fartade', en: 'YouTube Production — Adrian Fartade' },
    projectDesc: {
      it: 'Supporto produttivo per la realizzazione di video educational e divulgativi ad alto impatto visivo, destinati a un vasto pubblico di appassionati di spazio e scienza.',
      en: 'Production support for the creation of high-impact educational videos intended for a vast audience of space and science enthusiasts.'
    },
    clientDesc: {
      it: 'Adrian Fartade (Link4Universe) è il più celebre divulgatore scientifico, youtuber e attore teatrale in Italia specializzato in astronomia e astronautica. Fa parte del roster di Flatmates Agency.',
      en: 'Adrian Fartade (Link4Universe) is the most famous science communicator, YouTuber, and theatrical actor in Italy specializing in astronomy and astronautics. He is part of the Flatmates Agency roster.'
    },
    whatIDid: {
      it: 'Ho curato l\'impostazione tecnica e visiva per le riprese, costruendo e illuminando set ad hoc capaci di valorizzare lo stile comunicativo, dinamico ed entusiasta, tipico del creator.',
      en: 'I managed the technical and visual setup for the shoots, building and lighting custom sets capable of enhancing the creator\'s typically dynamic and enthusiastic communication style.'
    }
  },
  {
    id: 'just-etf-youtube',
    category: { it: 'YouTube', en: 'YouTube' },
    year: 2025,
    featured: false,
    client: 'Just ETF',
    thumb: 'img/just-etf-youtube.avif',
    videoEmbed: '7M5vZRApYTI',
    title: { it: 'Produzione YouTube — Just ETF', en: 'YouTube Production — Just ETF' },
    projectDesc: {
      it: 'Produzione di format video per YouTube rivolti a risparmiatori e investitori, con lo scopo di spiegare il mondo degli Exchange Traded Funds (ETF) in maniera chiara e autorevole.',
      en: 'Production of YouTube video formats aimed at savers and investors, with the goal of explaining the world of Exchange Traded Funds (ETFs) in a clear and authoritative manner.'
    },
    clientDesc: {
      it: 'Just ETF è la piattaforma leader in Europa per la ricerca e la creazione di portafogli di investimento basati su ETF, offrendo strumenti e guide per investitori autonomi.',
      en: 'Just ETF is the leading platform in Europe for researching and building ETF-based investment portfolios, offering tools and guides for self-directed investors.'
    },
    whatIDid: {
      it: 'Come operatore e direttore della fotografia, ho progettato i set e curato tutte le sessioni di ripresa, garantendo un\'immagine "premium" in linea con la credibilità del settore finanziario.',
      en: 'As a camera operator and director of photography, I designed the sets and managed all shooting sessions, ensuring a "premium" image consistent with the credibility of the financial sector.'
    }
  },
  {
    id: 'investiamo-banca-profilo',
    category: { it: 'YouTube', en: 'YouTube' },
    year: 2025,
    featured: true,
    client: 'Tinaba / Banca Profilo / Flatmates Agency',
    thumb: 'img/investiamo-banca-profilo.webp',
    videoEmbed: 'rRc5d-VWR74',
    title: { it: 'Investiamo — Il Canale YouTube', en: 'Investiamo — YouTube Channel' },
    projectDesc: {
      it: 'Un innovativo canale YouTube di "edutainment" finanziario ideato per spiegare l\'economia, i mercati e il risparmio ai Millennial e alla Gen Z, unendo autorevolezza bancaria e linguaggio digital.',
      en: 'An innovative financial "edutainment" YouTube channel designed to explain economics, markets, and savings to Millennials and Gen Z, blending banking authority with digital language.'
    },
    clientDesc: {
      it: '"Investiamo" è il progetto di educazione finanziaria lanciato dall\'app fintech Tinaba in collaborazione con Banca Profilo e sviluppato insieme a Flatmates Agency.',
      en: '"Investiamo" is the financial education project launched by the fintech app Tinaba in collaboration with Banca Profilo and developed together with Flatmates Agency.'
    },
    whatIDid: {
      it: 'Mi sono occupato della direzione della fotografia e delle riprese video. Ho creato e gestito le luci e i set ad hoc in cui vengono registrati i video del format, assicurando uno standard visivo elevato e accattivante per YouTube.',
      en: 'I was responsible for the cinematography and video recording. I created and managed the lighting and custom sets where the format\'s videos are filmed, ensuring a high and engaging visual standard for YouTube.'
    }
  },
  {
    id: 'satispay-social',
    category: { it: 'Video Verticali', en: 'Vertical Video' },
    year: 2025,
    featured: true,
    client: 'Satispay',
    thumb: 'img/satispay-social.png',
    thumbFit: 'cover',
    dualBanner: {
      linkedin: {
        url: 'https://www.linkedin.com/posts/satispay_sometimes-you-have-to-leave-to-know-where-activity-7431973631762677760-n2db?utm_source=share&utm_medium=member_desktop&rcm=ACoAADz4f2wBZ0ddR-RJ--Ud01aBNw3m12Nh42g',
        profile: 'https://www.linkedin.com/company/satispay/posts/?feedView=all',
        handle: 'Satispay'
      },
      instagram: {
        url: 'https://www.instagram.com/satispay/',
        handle: '@satispay'
      }
    },
    title: { it: 'Satispay — Social Media Video', en: 'Satispay — Social Media Video' },
    projectDesc: {
      it: 'Produzione continuativa di contenuti video short-form per presidiare i canali social del brand, con una doppia anima: Employer Branding (B2B) per LinkedIn e format consumer (B2C) per Instagram.',
      en: 'Continuous production of short-form video content to manage the brand\'s social channels, with a dual focus: Employer Branding (B2B) for LinkedIn and consumer formats (B2C) for Instagram.'
    },
    clientDesc: {
      it: 'Satispay è l\'innovativa scale-up e "unicorno" italiano diventata leader nei sistemi di pagamento mobile indipendenti dalle carte di credito.',
      en: 'Satispay is the innovative Italian scale-up and "unicorn" that has become a leader in mobile payment systems independent of credit cards.'
    },
    whatIDid: {
      it: 'Ho co-creato, insieme a un autore, una rubrica video per LinkedIn dedicata alle interviste dei dipendenti. Parallelamente, curo il montaggio della stragrande maggioranza dei Reels pubblicati sul profilo Instagram ufficiale del brand.',
      en: 'I co-created, alongside a copywriter, a video column for LinkedIn dedicated to employee interviews. Simultaneously, I handle the editing of the vast majority of Reels published on the brand\'s official Instagram profile.'
    }
  },
  {
    id: 'flatmates-social',
    category: { it: 'Video Verticali', en: 'Vertical Video' },
    year: 2025,
    featured: false,
    client: 'Flatmates Agency',
    thumb: 'img/flatmates-social.png',
    thumbFit: 'cover',
    instagramUrl: 'https://www.instagram.com/flatmatesagency/',
    title: { it: 'Flatmates — Content & Reels', en: 'Flatmates — Content & Reels' },
    projectDesc: {
      it: 'Una content strategy dinamica per i canali social dell\'agenzia, basata sulla pubblicazione frequente di Reels verticali che raccontano la vita in ufficio, i trend di marketing e i momenti salienti estratti dai podcast proprietari.',
      en: 'A dynamic content strategy for the agency\'s social channels, based on the frequent publishing of vertical Reels showcasing office life, marketing trends, and highlights extracted from proprietary podcasts.'
    },
    clientDesc: {
      it: 'Flatmates è l\'agenzia creativa specializzata in Influencer Marketing e Content Production con sede a Milano, fondata da Marcello Ascani e Michele Pagani.',
      en: 'Flatmates is a creative agency specializing in Influencer Marketing and Content Production based in Milan, founded by Marcello Ascani and Michele Pagani.'
    },
    whatIDid: {
      it: 'Sono il responsabile tecnico per la produzione del 90% dei contenuti video pubblicati sui canali social dell\'agenzia. Dalle riprese veloci in studio al montaggio frenetico e ritmato tipico di TikTok e Instagram Reels.',
      en: 'I am the technical lead for the production of 90% of the video content published on the agency\'s social channels. My work spans from quick studio shoots to the fast-paced, rhythmic editing typical of TikTok and Instagram Reels.'
    }
  },
  {
    id: 'cosmico-work-after',
    category: { it: 'Podcast', en: 'Podcast' },
    year: 2025,
    featured: false,
    client: 'Cosmico',
    thumb: 'img/cosmico-work-after.webp',
    videoEmbed: 'JQUCyPPAymo',
    title: { it: 'Cosmico — The Work After', en: 'Cosmico — The Work After' },
    projectDesc: {
      it: 'Un format audio/video in cui si discute del futuro del lavoro, delle carriere digitali e dei nuovi modelli professionali in un mercato in continua evoluzione.',
      en: 'An audio/video format discussing the future of work, digital careers, and new professional models in a constantly evolving market.'
    },
    clientDesc: {
      it: 'Cosmico è una piattaforma e un network che connette i migliori talenti del mondo digitale (developer, designer, marketer) con aziende e agenzie. Il format è hostato da Matteo Rovesi.',
      en: 'Cosmico is a platform and network connecting the best digital talents (developers, designers, marketers) with companies and agencies. The format is hosted by Matteo Rovesi.'
    },
    whatIDid: {
      it: 'Ho fatto parte della crew sul set fornendo un supporto tecnico mirato alla microfonazione e al controllo della traccia audio durante tutte le fasi di registrazione delle puntate.',
      en: 'I was part of the on-set crew, providing targeted technical support for miking and monitoring the audio track during all recording phases of the episodes.'
    }
  },
  {
    id: 'trade-republic-pitch',
    category: { it: 'Motion Graphics', en: 'Motion Graphics' },
    year: 2025,
    featured: false,
    client: 'Flatmates Agency / Trade Republic',
    thumb: 'img/trade-republic-pitch.png',
    thumbFit: 'cover',
    videoEmbed: 'kImRFoM2cqQ',
    title: { it: 'Bando Creativo — Trade Republic', en: 'Creative Pitch — Trade Republic' },
    projectDesc: {
      it: 'Creazione di un asset visivo dinamico e di grande impatto per supportare il pitch dell\'agenzia all\'interno di una gara creativa di alto livello.',
      en: 'Creation of a dynamic and high-impact visual asset to support the agency\'s pitch during a high-level creative tender.'
    },
    clientDesc: {
      it: 'Progetto realizzato da Flatmates Agency in occasione di un bando per Trade Republic, la piattaforma di brokeraggio e risparmio digitale leader in Europa.',
      en: 'A project carried out by Flatmates Agency for a pitch to Trade Republic, Europe\'s leading digital brokerage and savings platform.'
    },
    whatIDid: {
      it: 'Per questo progetto specifico sono uscito dal ruolo di videomaker per occuparmi di Motion Graphics. Ho interamente animato e montato un video in motion design in grado di spiegare e valorizzare l\'idea creativa presentata al cliente.',
      en: 'For this specific project, I stepped out of my videomaker role to focus on Motion Graphics. I fully animated and edited a motion design video to explain and highlight the creative idea presented to the client.'
    }
  }
];
