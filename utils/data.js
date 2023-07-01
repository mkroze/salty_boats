import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  items: [
    {
      id: 0,
      name: "Captain's Compass",
      slug: 'captains-compass',
      category: 'Accessories',
      image: '/shirt1.png',
      price: 29.99,
      brand: 'Maritime Gear',
      rating: 4.7,
      numReviews: 15,
      countInStock: 25,
      description:
        'A reliable compass to guide you through your seafaring adventures.',
      isFeatured: true,
    },
    {
      id: 1,
      name: 'Ocean Explorer Binoculars',
      slug: 'ocean-explorer-binoculars',
      category: 'Equipment',
      price: 59.99,
      image: '/shirt1shirt1.png',
      brand: 'Voyager Supplies',
      rating: 4.9,
      numReviews: 20,
      countInStock: 10,
      description:
        'High-quality binoculars for spotting distant shores and wildlife.',
      isFeatured: true,
    },
    {
      id: 2,
      name: "Sailor's Journal",
      slug: 'sailors-journal',
      category: 'Books',
      image: '/shirt1.png',
      price: 14.99,
      brand: 'Maritime Publications',
      rating: 4.5,
      numReviews: 8,
      countInStock: 40,
      description:
        'Record your thrilling maritime experiences and memories in this beautiful journal.',
      isFeatured: false,
    },
    {
      id: 3,
      name: 'Anchors Away Keychain',
      slug: 'anchors-away-keychain',
      category: 'Accessories',
      image: '/shirt1.png',
      price: 9.99,
      brand: 'Nautical Treasures',
      rating: 4.2,
      numReviews: 5,
      countInStock: 100,
      description:
        'A stylish keychain featuring a miniature anchor, perfect for sailors and sea lovers.',
      isFeatured: true,
    },
    {
      id: 4,
      name: 'Sea Breeze Scented Candle',
      slug: 'sea-breeze-scented-candle',
      category: 'Home Decor',
      image: '/shirt1.png',
      price: 12.99,
      brand: 'Coastal Fragrances',
      rating: 4.8,
      numReviews: 12,
      countInStock: 30,
      description:
        'Fill your space with the refreshing scent of a sea breeze with this delightful candle.',
      isFeatured: false,
    },
    {
      id: 5,
      name: "Mariner's Knot Bracelet",
      slug: 'mariners-knot-bracelet',
      category: 'Jewelry',
      image: '/shirt1.png',
      price: 34.99,
      brand: 'Nautical Charms',
      rating: 4.6,
      numReviews: 18,
      countInStock: 20,
      description:
        "Adorn your wrist with this elegant bracelet featuring a symbolic mariner's knot.",
      isFeatured: true,
    },
    {
      id: 6,
      name: "Sailor's Duffle Bag",
      slug: 'sailors-duffle-bag',
      category: 'Bags',
      image: '/shirt1.png',
      price: 49.99,
      brand: 'Seafarer Supplies',
      rating: 4.4,
      numReviews: 10,
      countInStock: 15,
      description:
        'A durable and spacious duffle bag for carrying your essentials on sea voyages.',
      isFeatured: false,
    },
    {
      id: 7,
      name: 'Nautical Star Pendant',
      slug: 'nautical-star-pendant',
      category: 'Jewelry',
      image: '/shirt1.png',
      price: 24.99,
      brand: 'Oceanic Gems',
      rating: 4.3,
      numReviews: 7,
      countInStock: 35,
      description:
        'Wear this stunning nautical star pendant as a symbol of guidance and adventure.',
      isFeatured: true,
    },
    {
      id: 8,
      name: "Sailor's Hat",
      slug: 'sailors-hat',
      category: 'Apparel',
      image: '/shirt1.png',
      price: 19.99,
      brand: 'Nautical Outfitters',
      rating: 4.1,
      numReviews: 6,
      countInStock: 50,
      description:
        "Protect yourself from the sun in style with this classic sailor's hat.",
      isFeatured: false,
    },
    {
      id: 9,
      name: 'Sea Voyage Art Print',
      slug: 'sea-voyage-art-print',
      category: 'Art',
      image: '/shirt1.png',
      price: 39.99,
      brand: 'Maritime Artistry',
      rating: 4.7,
      numReviews: 14,
      countInStock: 5,
      description:
        'Admire the beauty of a sea voyage with this captivating art print for your walls.',
      isFeatured: true,
    },
    {
      id: 10,
      name: "Sailor's Knot Keyring",
      slug: 'sailors-knot-keyring',
      category: 'Accessories',
      image: '/shirt1.png',
      price: 7.99,
      brand: 'Nautical Treasures',
      rating: 4.2,
      numReviews: 9,
      countInStock: 80,
      description:
        "Keep your keys secure with this stylish sailor's knot keyring.",
      isFeatured: false,
    },
    {
      id: 11,
      name: 'Ahoy Matey Mug',
      slug: 'ahoy-matey-mug',
      category: 'Kitchen',
      image: '/shirt1.png',
      price: 9.99,
      brand: 'Seafarer Essentials',
      rating: 4.6,
      numReviews: 11,
      countInStock: 25,
      description:
        'Start your day with a cup of cheer using this charming Ahoy Matey mug.',
      isFeatured: true,
    },
  ],

  articles: [
    {
      title: "The Sailing Crew's Journal: A Voyage of Discovery",
      image: 'https://example.com/image1.jpg',
      summary:
        "Embark on a journey of self-discovery as the sailing crew explores uncharted territories, battles mighty waves, and finds solace in the vastness of the ocean. The crew's journal becomes a chronicle of their triumphs, challenges, and profound moments of reflection. It captures the essence of their maritime adventures and serves as a testament to the indomitable spirit of sailors who dare to follow the call of the sea.",
      description: [
        "The Sailing Crew's Journal: A Voyage of Discovery",
        'Embark on a journey of self-discovery as the sailing crew explores uncharted territories, battles mighty waves, and finds solace in the vastness of the ocean.',
        "The crew's journal becomes a chronicle of their triumphs, challenges, and profound moments of reflection.",
        'It captures the essence of their maritime adventures and serves as a testament to the indomitable spirit of sailors who dare to follow the call of the sea.',
      ],
    },
    {
      title: 'Sailing Crew Logbook: Navigating the Tides of Imagination',
      image: 'https://example.com/image2.jpg',
      summary:
        "The Sailing Crew Logbook unveils a world where imagination and reality converge. Within its pages, sailors record their encounters with mythical creatures, distant lands, and the enchantment that only the open sea can bestow. As the crew's journey unfolds, the logbook becomes a portal to their wildest dreams and boldest aspirations. It inspires future generations to set sail on their own extraordinary voyages, guided by the unyielding spirit of adventure.",
      description: [
        'Sailing Crew Logbook: Navigating the Tides of Imagination',
        'The Sailing Crew Logbook unveils a world where imagination and reality converge.',
        'Within its pages, sailors record their encounters with mythical creatures, distant lands, and the enchantment that only the open sea can bestow.',
        "As the crew's journey unfolds, the logbook becomes a portal to their wildest dreams and boldest aspirations.",
        'It inspires future generations to set sail on their own extraordinary voyages, guided by the unyielding spirit of adventure.',
      ],
    },
    {
      title: 'Sailing Crew Diaries: A Passage Through Time',
      image: 'https://example.com/image3.jpg',
      summary:
        "The Sailing Crew Diaries offer a glimpse into the timeless world of seafaring. Each diary entry carries the weight of the crew's experiences, their triumphs, and their contemplations amidst the ebb and flow of the tides. Through the passage of time, these diaries become cherished treasures, connecting sailors across generations and preserving the essence of life at sea. They are windows into the past, guiding future sailors on their own journeys of discovery.",
      description: [
        'Sailing Crew Diaries: A Passage Through Time',
        'The Sailing Crew Diaries offer a glimpse into the timeless world of seafaring.',
        "Each diary entry carries the weight of the crew's experiences, their triumphs, and their contemplations amidst the ebb and flow of the tides.",
        'Through the passage of time, these diaries become cherished treasures, connecting sailors across generations and preserving the essence of life at sea.',
        'They are windows into the past, guiding future sailors on their own journeys of discovery.',
      ],
    },
    {
      title: "The Seafarer's Journal: Tales from the Seven Seas",
      image: 'https://example.com/image4.jpg',
      summary:
        "The Seafarer's Journal is a compilation of extraordinary stories born from the depths of the seven seas. It carries tales of daring escapades, encounters with legendary creatures, and the camaraderie forged by sailors bound by a shared love for the ocean. Each page unravels a new chapter in the seafaring saga, leaving readers in awe of the vastness and mysteries that lie beyond the horizon.",
      description: [
        "The Seafarer's Journal: Tales from the Seven Seas",
        "The Seafarer's Journal is a compilation of extraordinary stories born from the depths of the seven seas.",
        'It carries tales of daring escapades, encounters with legendary creatures, and the camaraderie forged by sailors bound by a shared love for the ocean.',
        'Each page unravels a new chapter in the seafaring saga, leaving readers in awe of the vastness and mysteries that lie beyond the horizon.',
      ],
    },
    {
      title: 'Sailing Chronicles: A Symphony of Wind and Waves',
      image: 'https://example.com/image5.jpg',
      summary:
        'Sailing Chronicles is a melodic symphony composed by the wind and waves. Each entry dances with the rhythm of the ocean, capturing the harmonious interplay between the crew and their seafaring vessel. Through these chronicles, readers are transported to a world where the whispers of the sea orchestrate tales of adventure, resilience, and the unbreakable bond between sailors and their beloved ships.',
      description: [
        'Sailing Chronicles: A Symphony of Wind and Waves',
        'Sailing Chronicles is a melodic symphony composed by the wind and waves.',
        'Each entry dances with the rhythm of the ocean, capturing the harmonious interplay between the crew and their seafaring vessel.',
        'Through these chronicles, readers are transported to a world where the whispers of the sea orchestrate tales of adventure, resilience, and the unbreakable bond between sailors and their beloved ships.',
      ],
    },
    {
      title: 'The Maritime Memoirs: Stories of Endless Horizons',
      image: 'https://example.com/image6.jpg',
      summary:
        'The Maritime Memoirs encapsulate the boundless spirit of exploration that propels sailors across endless horizons. Within its pages, each memoir narrates the exhilaration of navigating uncharted waters, the camaraderie forged amidst rolling waves, and the profound connection between sailors and the vast blue expanse. These memoirs inspire readers to venture beyond their own shores, embracing the allure of the unknown and embarking on their own extraordinary quests.',
      description: [
        'The Maritime Memoirs: Stories of Endless Horizons',
        'The Maritime Memoirs encapsulate the boundless spirit of exploration that propels sailors across endless horizons.',
        'Within its pages, each memoir narrates the exhilaration of navigating uncharted waters, the camaraderie forged amidst rolling waves, and the profound connection between sailors and the vast blue expanse.',
        'These memoirs inspire readers to venture beyond their own shores, embracing the allure of the unknown and embarking on their own extraordinary quests.',
      ],
    },
    {
      title: 'Sailing Tales: Legends of the Sea',
      image: 'https://example.com/image7.jpg',
      summary:
        'Sailing Tales are woven with threads of ancient legends and timeless lore. They transport readers to a realm where mermaids sing enchanting melodies, ghost ships materialize on foggy nights, and the spirit of adventure ignites the hearts of sailors. Each tale is a portal to a realm where the extraordinary becomes reality, captivating readers and awakening the yearning for their own maritime odyssey.',
      description: [
        'Sailing Tales: Legends of the Sea',
        'Sailing Tales are woven with threads of ancient legends and timeless lore.',
        'They transport readers to a realm where mermaids sing enchanting melodies, ghost ships materialize on foggy nights, and the spirit of adventure ignites the hearts of sailors.',
        'Each tale is a portal to a realm where the extraordinary becomes reality, captivating readers and awakening the yearning for their own maritime odyssey.',
      ],
    },
    {
      title: "Mariners' Journeys: A Tapestry of Courage",
      image: 'https://example.com/image8.jpg',
      summary:
        "Mariners' Journeys is a tapestry interwoven with threads of courage, resilience, and unwavering determination. It chronicles the voyages of sailors who braved treacherous waters, battled tempests, and discovered uncharted territories. Each entry is a testament to the unyielding human spirit and the triumph of the human will in the face of the mighty ocean. Mariners' Journeys inspires readers to embark on their own odyssey, embracing the unknown with unwavering courage.",
      description: [
        "Mariners' Journeys: A Tapestry of Courage",
        "Mariners' Journeys is a tapestry interwoven with threads of courage, resilience, and unwavering determination.",
        'It chronicles the voyages of sailors who braved treacherous waters, battled tempests, and discovered uncharted territories.',
        'Each entry is a testament to the unyielding human spirit and the triumph of the human will in the face of the mighty ocean.',
        "Mariners' Journeys inspires readers to embark on their own odyssey, embracing the unknown with unwavering courage.",
      ],
    },
    {
      title: "Tales from the Captain's Log: Chronicles of Leadership",
      image: 'https://example.com/image9.jpg',
      summary:
        "Tales from the Captain's Log unveils the trials and triumphs of leadership on the high seas. Each log entry shares the captain's insights, challenges faced, and decisions made in the pursuit of safe passage and the welfare of the crew. These chronicles illuminate the profound responsibility shouldered by captains and their unwavering commitment to the welfare of their crew. Readers gain a newfound appreciation for the art of leadership and the complex dynamics of life at sea.",
      description: [
        "Tales from the Captain's Log: Chronicles of Leadership",
        "Tales from the Captain's Log unveils the trials and triumphs of leadership on the high seas.",
        "Each log entry shares the captain's insights, challenges faced, and decisions made in the pursuit of safe passage and the welfare of the crew.",
        'These chronicles illuminate the profound responsibility shouldered by captains and their unwavering commitment to the welfare of their crew.',
        'Readers gain a newfound appreciation for the art of leadership and the complex dynamics of life at sea.',
      ],
    },
    {
      title: 'Sailing Reflections: Meditations on the Horizon',
      image: 'https://example.com/image10.jpg',
      summary:
        "Sailing Reflections invites readers to embark on a contemplative journey across the open sea. Through poetic musings and introspective passages, it explores the interplay of light and shadow on the water's surface, the ever-changing hues of the sky, and the profound silence that envelops sailors as they sail towards the horizon. These reflections provide solace and inspiration, reminding readers of the beauty that lies both within and beyond the vast expanse of the ocean.",
      description: [
        'Sailing Reflections: Meditations on the Horizon',
        'Sailing Reflections invites readers to embark on a contemplative journey across the open sea.',
        "Through poetic musings and introspective passages, it explores the interplay of light and shadow on the water's surface, the ever-changing hues of the sky, and the profound silence that envelops sailors as they sail towards the horizon.",
        'These reflections provide solace and inspiration, reminding readers of the beauty that lies both within and beyond the vast expanse of the ocean.',
      ],
    },
  ],
  donations: [
    {
      title: 'Emergency Sail Repair',
      image: 'sail-repair.jpg',
      bio: 'Our sail has suffered damage during the treacherous storm that struck us unexpectedly. The torn fabric threatens to disrupt our journey and compromise our ability to harness the wind. Your support will enable us to swiftly repair the sail, ensuring our safe passage and allowing us to continue exploring the vast seas.',
      urgency: 'Urgent',
    },
    {
      title: 'Navigation Equipment Upgrade',
      image: 'navigation-equipment.jpg',
      bio: 'Navigating uncharted waters demands the utmost precision and accuracy. Unfortunately, our current navigation equipment is outdated and unreliable, putting us at risk of getting lost or encountering hazards. Your contribution will enable us to upgrade our navigation tools, ensuring we can safely chart our course and explore new horizons with confidence.',
      urgency: 'High',
    },
    {
      title: 'Safety Gear Renewal',
      image: 'safety-gear.jpg',
      bio: 'Safety is our utmost priority as we brave the unpredictable seas. However, our safety gear has endured wear and tear over time, compromising its effectiveness. Your support will help us replace essential safety equipment such as life jackets, harnesses, and emergency beacons, ensuring the well-being of our crew throughout this extraordinary journey.',
      urgency: 'High',
    },
    {
      title: 'Engine Maintenance',
      image: 'engine-maintenance.jpg',
      bio: 'Our trusty engine, the lifeline of our vessel, requires immediate maintenance to ensure its reliable operation. Without it, we would be at the mercy of winds and currents, limiting our ability to reach distant destinations or navigate challenging passages. Your contribution will help us service the engine, allowing us to continue our voyage with the peace of mind that comes with a well-functioning power source.',
      urgency: 'Medium',
    },
    {
      title: 'Fresh Water Filtration System',
      image: 'water-filtration.jpg',
      bio: 'Access to safe drinking water is crucial for our survival at sea. However, our current filtration system is outdated and no longer effectively removes impurities from the water we collect. Your support will enable us to install a modern water filtration system, ensuring a continuous supply of clean, potable water, and safeguarding our health during this incredible maritime odyssey.',
      urgency: 'Medium',
    },
    {
      title: 'Electrical System Upgrade',
      image: 'electrical-system.jpg',
      bio: 'Our electrical system, responsible for powering essential equipment and providing lighting onboard, is in dire need of an upgrade. Outdated wiring and unreliable connections pose a risk to our safety and limit our ability to document and share our extraordinary experiences with the world. Your contribution will help us enhance our electrical system, enabling us to capture and share the magic of our voyage.',
      urgency: 'High',
    },
    {
      title: 'Gallery Supplies and Provisions',
      image: 'Gallery-supplies.jpg',
      bio: 'The heart of our floating home is the gallery, where we gather to nourish our bodies and share moments of camaraderie. However, our supplies have dwindled, and our cooking utensils have seen better days. Your support will enable us to restock our gallery with fresh ingredients, replenish cookware, and ensure we have the provisions needed to sustain our crew during this extraordinary journey.',
      urgency: 'Medium',
    },
  ],
};

export default data;
