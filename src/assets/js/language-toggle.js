// Language toggle functionality - Comprehensive translation system
(function() {
  'use strict';

  // Translations object - comprehensive translations for home page
  const translations = {
    bg: {
      // Navigation
      'nav.home': 'Начало',
      'nav.about': 'За нас',
      'nav.services': 'Услуги',
      'nav.transport': 'Транспорт',
      'nav.contacts': 'Контакти',
      'nav.callUs': 'Обади ни се',
      'nav.allServices': 'Всички услуги',
      'nav.allVehicles': 'Всички превозни средства',
      
      // Home Hero
      'home.hero.line1': 'Нашият бизнес',
      'home.hero.line2a': 'движи',
      'home.hero.line2b': 'вашият',
      'home.hero.line2c': 'бизнес',
      'home.hero.subtitle': 'Хладилен транспорт за храни, лекарства и мостри по европейските маршрути',
      'home.hero.cta': 'Обадете ни се',
      
      // Why Choose
      'home.whyChoose.title': 'Защо да изберете Frigo Express BG',
      'home.whyChoose.description': 'Frigo Express BG е специализирана фирма за хладилен транспорт между България и Европа, предлагаща бързи, надеждни и напълно контролирани превози на стоки, изискващи поддържане на точна температура от -20°C до +20°C.',
      'home.whyChoose.p1': 'Ако търсите сигурността на контролирана температура, точност до минута и гарантирано качество при доставката, вие сте на правилното място.',
      'home.whyChoose.p2': 'Ние предлагаме хладилен транспорт от България до всяка точка в Европа и обратно – с модерни, надеждни и сертифицирани хладилни бусове, които поддържат идеалните условия за вашите продукти през целия път.',
      'home.whyChoose.gpsTitle': 'GPS проследяване',
      'home.whyChoose.gpsText': 'Всички наши превозни средства са оборудвани с GPS тракери. Вие можете да проследявате вашата пратка в реално време.',
      'home.whyChoose.cta': 'Вижте повече за нас',
      
      // Services
      'home.services.title': 'Нашите услуги',
      'home.services.description': 'Предлагаме надежден хладилен транспорт за български фирми в цяла Европа — с постоянна температура, бързи маршрути и максимална сигурност за вашите стоки.',
      'home.services.viewService': 'Вижте услугата',
      'home.services.prevService': 'Предишна услуга',
      'home.services.nextService': 'Следваща услуга',
      
      // Transport
      'home.transport.title': 'Нашият транспорт',
      'home.transport.description': 'Сертифицирани хладилни превозни средства с валидирани агрегати и 24/7 температурен мониторинг за доставки из цяла Европа.',
      'home.transport.viewMore': 'Вижте повече',
      'home.transport.prevVehicle': 'Предишен транспорт',
      'home.transport.nextVehicle': 'Следващ транспорт',
      'home.transport.temperature': 'Температура',
      'home.transport.capacity': 'Капацитет',
      
      // FAQ
      'home.faq.title': 'Често задавани въпроси',
      
      // CTA
      'home.cta.title': 'Хладилен транспорт?',
      'home.cta.description': 'Свържете се с нас и получите индивидуално предложение за вашата пратка. Работим 24/7 и гарантираме пълна сигурност.',
      'home.cta.subtitle': 'Запазете час или получете предложение',
      'home.cta.callUs': 'Обадете ни се',
      'home.cta.contacts': 'Контакти',
      
      // About Page
      'about.mission': 'Нашата мисия е да осигурим бързо, сигурно и контролирано транспортиране на стоки, изискващи прецизна температура. Работим със съвременни хладилни бусове, подходящи за всякакъв тип стоки - от хранителни продукти до фармацевтични изделия. С нас получавате спокойствие, качество и партньор, на който можете да се доверите.',
      'about.feature1.title': 'Хладилен транспорт в Европа',
      'about.feature1.text': 'Бързи и сигурни доставки между България и Европа с контролирана температура през целия маршрут.',
      'about.feature2.title': 'Пълен контрол и сигурност',
      'about.feature2.text': 'Следим товара в реално време и гарантираме надеждност, точност и професионално обслужване.',
      'about.p1': 'Нашият фокус е върху сигурността, точността и коректно обслужване. Поддържаме постоянно проследяване на всяка пратка, за да осигурим максимална защита на товара.',
      'about.p2': 'Разполагаме със съвременен автопарк и екип, ориентъран към високи стандарти и детайлно планиране. Frigo Express BG е изборът за клиенти, които ценят качество, надежност и премиум логистични решения.',
      'about.specialization.title': 'Нашата специализация',
      'about.specialization.description': 'Превозваме свежи, замразени и чувствителни стоки – от хранителни продукти и фармацевтични товари до деликатни материали.',
      'about.specialization.feature1': 'Постоянен температурен контрол',
      'about.specialization.feature2': 'Международни курсове всеки ден',
      'about.specialization.feature3': 'Бърза реакция и индивидуални решения',
      'about.specialization.feature4': 'Проследяване в реално време',
      
      // Contact Page
      'contact.title': 'Контакти',
      'contact.subtitle': 'Имате въпроси или желаете да запазите час? Свържете се с нас.',
      'contact.info.title': 'Информация',
      'contact.location.title': 'Локация',
      'contact.form.title': 'Форма за контакт',
      'contact.form.name': 'Име и фамилия',
      'contact.form.email': 'Имейл',
      'contact.form.message': 'Вашето запитване',
      'contact.form.consent': 'Не съм робот',
      'contact.form.submit': 'Изпрати',
      'contact.call24': 'Приемаме обаждания по всяко време на денонощието.',
      
      // Services Index
      'services.title': 'Услуги',
      'services.description': 'Специализирани хладилни транспортни услуги за храни и лекарства с температурен контрол от -25°C до +30°C, GPS проследяване. Международни маршрути из цяла Европа.',
      'services.viewService': 'Вижте услугата',
      
      // Service Detail
      'service.description': 'Описание',
      'service.benefits': 'Предимства',
      'service.faq': 'Често задавани въпроси',
      
      // Transport Index
      'transport.title': 'Нашият хладилен автопарк',
      'transport.description': 'Изберете подходящото превозно средство според товара, температурния диапазон и дестинацията. Всички камиони и бусове са оборудвани със системи за мониторинг и документиране на студената верига.',
      'transport.viewMore': 'Вижте повече',
      'transport.temperature': 'Температура',
      'transport.capacity': 'Капацитет',
      'transport.payload': 'Товароподемност',
      
      // Transport Detail
      'transportDetail.gpsText': 'Този бус е оборудван с GPS тракер. Можете да проследявате вашата пратка в реално време.',
      'transportDetail.requestTransport': 'Заяви транспорт',
      'transportDetail.description': 'Описание и предназначение',
      'transportDetail.monitoring': 'Мониторинг и проследяване',
      'transportDetail.suitableFor': 'Подходящо за',
      'transportDetail.otherVehicles': 'Други превозни средства',
      
      // Footer
      'footer.description': 'Професионален хладилен транспорт от България до цяла Европа. Контролирана температура и гарантирано качество за вашите стоки.',
      'footer.quickNav': 'Бърза навигация',
      'footer.contacts': 'Контакти',
      'footer.call24': 'Приемаме обаждания по всяко време на денонощието.',
      'footer.copyright': 'Всички права запазени.',
      
      // Thank You Page
      'thankYou.title': 'Запитването е изпратено успешно!',
      'thankYou.message': 'Благодаря Ви за доверието. Ще се свържа с Вас възможно най-скоро.',
      'thankYou.home': 'Към начална страница',
      'thankYou.back': 'Обратно към контакти'
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.services': 'Services',
      'nav.transport': 'Fleet',
      'nav.contacts': 'Contact',
      'nav.callUs': 'Call Us',
      'nav.allServices': 'All Services',
      'nav.allVehicles': 'All Vehicles',
      
      // Home Hero
      'home.hero.line1': 'Our business',
      'home.hero.line2a': 'drives',
      'home.hero.line2b': 'your',
      'home.hero.line2c': 'business',
      'home.hero.subtitle': 'Refrigerated transport for food, medicines and samples across European routes',
      'home.hero.cta': 'Contact Us',
      
      // Why Choose
      'home.whyChoose.title': 'Why Choose Frigo Express BG',
      'home.whyChoose.description': 'Frigo Express BG is a specialized company for refrigerated transport between Bulgaria and Europe, offering fast, reliable and fully controlled transport of goods requiring maintenance of precise temperature from -20°C to +20°C.',
      'home.whyChoose.p1': 'If you are looking for the security of controlled temperature, precision to the minute and guaranteed quality in delivery, you are in the right place.',
      'home.whyChoose.p2': 'We offer refrigerated transport from Bulgaria to every point in Europe and back – with modern, reliable and certified refrigerated buses that maintain ideal conditions for your products throughout the journey.',
      'home.whyChoose.gpsTitle': 'GPS Tracking',
      'home.whyChoose.gpsText': 'All our vehicles are equipped with GPS trackers. You can track your shipment in real time.',
      'home.whyChoose.cta': 'Learn More About Us',
      
      // Services
      'home.services.title': 'Our Services',
      'home.services.description': 'We offer reliable refrigerated transport for Bulgarian companies throughout Europe — with constant temperature, fast routes and maximum security for your goods.',
      'home.services.viewService': 'View Service',
      'home.services.prevService': 'Previous Service',
      'home.services.nextService': 'Next Service',
      
      // Transport
      'home.transport.title': 'Our Fleet',
      'home.transport.description': 'Certified refrigerated vehicles with validated units and 24/7 temperature monitoring for deliveries across Europe.',
      'home.transport.viewMore': 'View More',
      'home.transport.prevVehicle': 'Previous Vehicle',
      'home.transport.nextVehicle': 'Next Vehicle',
      'home.transport.temperature': 'Temperature',
      'home.transport.capacity': 'Capacity',
      
      // FAQ
      'home.faq.title': 'Frequently Asked Questions',
      
      // CTA
      'home.cta.title': 'Refrigerated Transport?',
      'home.cta.description': 'Contact us and get a personalized quote for your shipment. We work 24/7 and guarantee complete security.',
      'home.cta.subtitle': 'Book an appointment or get a quote',
      'home.cta.callUs': 'Contact Us',
      'home.cta.contacts': 'Contact',
      
      // About Page
      'about.mission': 'Our mission is to provide fast, secure and controlled transportation of goods requiring precise temperature. We work with modern refrigerated buses, suitable for all types of goods - from food products to pharmaceutical items. With us you get peace of mind, quality and a partner you can trust.',
      'about.feature1.title': 'Refrigerated Transport in Europe',
      'about.feature1.text': 'Fast and secure deliveries between Bulgaria and Europe with controlled temperature throughout the route.',
      'about.feature2.title': 'Full Control and Security',
      'about.feature2.text': 'We track cargo in real time and guarantee reliability, accuracy and professional service.',
      'about.p1': 'Our focus is on security, accuracy and proper service. We maintain constant tracking of every shipment to ensure maximum cargo protection.',
      'about.p2': 'We have a modern fleet and team, oriented towards high standards and detailed planning. Frigo Express BG is the choice for clients who value quality, reliability and premium logistics solutions.',
      'about.specialization.title': 'Our Specialization',
      'about.specialization.description': 'We transport fresh, frozen and sensitive goods – from food products and pharmaceutical cargo to delicate materials.',
      'about.specialization.feature1': 'Constant Temperature Control',
      'about.specialization.feature2': 'International Routes Every Day',
      'about.specialization.feature3': 'Quick Response and Individual Solutions',
      'about.specialization.feature4': 'Real-Time Tracking',
      
      // Contact Page
      'contact.title': 'Contact',
      'contact.subtitle': 'Have questions or want to schedule an appointment? Contact us.',
      'contact.info.title': 'Information',
      'contact.location.title': 'Location',
      'contact.form.title': 'Contact Form',
      'contact.form.name': 'Full Name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Your Inquiry',
      'contact.form.consent': 'I am not a robot',
      'contact.form.submit': 'Submit',
      'contact.call24': 'We accept calls 24/7.',
      
      // Services Index
      'services.title': 'Services',
      'services.description': 'Specialized refrigerated transport services for food and medicines with temperature control from -25°C to +30°C, GPS tracking. International routes across Europe.',
      'services.viewService': 'View Service',
      
      // Service Detail
      'service.description': 'Description',
      'service.benefits': 'Benefits',
      'service.faq': 'Frequently Asked Questions',
      
      // Transport Index
      'transport.title': 'Our Refrigerated Fleet',
      'transport.description': 'Choose the appropriate vehicle according to cargo, temperature range and destination. All trucks and buses are equipped with monitoring and cold chain documentation systems.',
      'transport.viewMore': 'View More',
      'transport.temperature': 'Temperature',
      'transport.capacity': 'Capacity',
      'transport.payload': 'Payload',
      
      // Transport Detail
      'transportDetail.gpsText': 'This bus is equipped with a GPS tracker. You can track your shipment in real time.',
      'transportDetail.requestTransport': 'Request Transport',
      'transportDetail.description': 'Description and Purpose',
      'transportDetail.monitoring': 'Monitoring and Tracking',
      'transportDetail.suitableFor': 'Suitable For',
      'transportDetail.otherVehicles': 'Other Vehicles',
      
      // Footer
      'footer.description': 'Professional refrigerated transport from Bulgaria to all of Europe. Controlled temperature and guaranteed quality for your goods.',
      'footer.quickNav': 'Quick Navigation',
      'footer.contacts': 'Contact',
      'footer.call24': 'We accept calls 24/7.',
      'footer.copyright': 'All rights reserved.',
      
      // Thank You Page
      'thankYou.title': 'Inquiry Sent Successfully!',
      'thankYou.message': 'Thank you for your trust. I will contact you as soon as possible.',
      'thankYou.home': 'To Homepage',
      'thankYou.back': 'Back to Contact'
    }
  };

  // Service content translations
  const serviceTranslations = {
    'kontrolirana-temperatura': {
      bg: {
        title: 'Контролирана температура',
        description: 'Нашите бусове поддържат оптимални условия за хранителни продукти, медикаменти и други чувствителни товари. Оборудвани със системи за контрол на температурата. Гарантираме точни стойности от -20°C до +20°C през целия транспортен маршрут.',
        longDescription: [
          'Всяка доставка се следи внимателно, за да се гарантира, че температурата остава стабилна през целия маршрут.',
          'Вашите продукти пристигат в идеално състояние, независимо от разстоянието или условията по пътя, без компромиси в качеството.',
          'Курсовете се изпълняват максимално бързо, без компромис с безопасността и качеството на товара.'
        ],
        keyPoints: [
          'Температурен контрол - точни и стабилни температури от -20°C до +20°C',
          'Сигурност - безопасен транспорт на всяка стока',
          'Модерен автопарк - съвременни хладилни бусове за всякакви товари',
          'Гъвкавост - индивидуални решения според нуждите на клиента',
          'Професионализъм - опитен екип, гарантиращ надежност и спокойствие'
        ],
        faq: [
          { question: 'Какъв температурен диапазон поддържат бусовете?', answer: 'От -20°C до +20°C, за безопасен товар на всякакви чувствителни стоки.' },
          { question: 'Колко бързо се изпълняват курсовете?', answer: 'Извършват се максимално бързо, без компромис с безопасността или качеството на товара.' },
          { question: 'Мога ли да следя пратката си?', answer: 'Да, всяка пратка се следи през целия маршрут, за пълна прозрачност и спокойствие.' },
          { question: 'Какви стоки могат да се транспортират?', answer: 'Храни, медикаменти, цветя и други температурно чувствителни продукти.' }
        ]
      },
      en: {
        title: 'Controlled Temperature',
        description: 'Our buses maintain optimal conditions for food products, medicines and other sensitive goods. Equipped with temperature control systems. We guarantee precise values from -20°C to +20°C throughout the entire transport route.',
        longDescription: [
          'Every delivery is carefully monitored to ensure the temperature remains stable throughout the route.',
          'Your products arrive in ideal condition, regardless of distance or road conditions, without compromising quality.',
          'Routes are executed as quickly as possible, without compromising the safety and quality of the cargo.'
        ],
        keyPoints: [
          'Temperature Control - precise and stable temperatures from -20°C to +20°C',
          'Security - safe transport of any goods',
          'Modern Fleet - modern refrigerated buses for all types of cargo',
          'Flexibility - individual solutions according to customer needs',
          'Professionalism - experienced team ensuring reliability and peace of mind'
        ],
        faq: [
          { question: 'What temperature range do the buses maintain?', answer: 'From -20°C to +20°C for safe transport of any sensitive goods.' },
          { question: 'How fast are the routes executed?', answer: 'They are executed as quickly as possible, without compromising safety or cargo quality.' },
          { question: 'Can I track my shipment?', answer: 'Yes, every shipment is tracked throughout the route for full transparency and peace of mind.' },
          { question: 'What goods can be transported?', answer: 'Food, medicines, flowers and other temperature-sensitive products.' }
        ]
      }
    },
    'prevoz-na-lekarstva': {
      bg: {
        title: 'Превоз на лекарства',
        description: 'Frigo Express BG осигурява специализиран хладилен транспорт на медикаменти с внимание към безопасността, точност и спазване на всички изисквания за съхранение.',
        longDescription: [
          'Нашият екип се грижи лекарствата да бъдат транспортирани при строго контролирани условия, за да запазят своята ефективност и качество.',
          'Доставките се извършват бързо и надеждно с постоянна координация с клиента.'
        ],
        keyPoints: [
          'Строг температурен контрол',
          'Бързи доставки',
          'Сигурност на стоката',
          'Индивидуални решения',
          'Професионално обслужване'
        ],
        faq: [
          { question: 'Какво покрива услугата за превоз на лекарства?', answer: 'Транспортът включва безопасен хладилен превоз, поддържане на точната температура и проследяване на пратката през целия маршрут.' },
          { question: 'Работите ли с малки спешни поръчки?', answer: 'Да, Frigo Express осигурява експресни курсове и индивидуални решения за малки или спешни доставки на медикаменти.' },
          { question: 'Могат ли лекарствата да се транспортират до различни европейски държави?', answer: 'Да, извършваме доставки между България и Европа, от Европа до България и между европейски държави.' },
          { question: 'Какво се случва при непредвидени забавяния?', answer: 'Нашият екип реагира незабавно, като предлага алтернативни маршрути и информира клиента за статуса на пратката, за да се минимизират рисковете за качеството.' }
        ]
      },
      en: {
        title: 'Medicine Transport',
        description: 'Frigo Express BG provides specialized refrigerated transport of medicines with attention to safety, accuracy and compliance with all storage requirements.',
        longDescription: [
          'Our team ensures medicines are transported under strictly controlled conditions to maintain their effectiveness and quality.',
          'Deliveries are made quickly and reliably with constant coordination with the client.'
        ],
        keyPoints: [
          'Strict Temperature Control',
          'Fast Deliveries',
          'Cargo Security',
          'Individual Solutions',
          'Professional Service'
        ],
        faq: [
          { question: 'What does the medicine transport service cover?', answer: 'Transport includes safe refrigerated transport, maintaining precise temperature and tracking the shipment throughout the route.' },
          { question: 'Do you work with small urgent orders?', answer: 'Yes, Frigo Express provides express routes and individual solutions for small or urgent medicine deliveries.' },
          { question: 'Can medicines be transported to different European countries?', answer: 'Yes, we perform deliveries between Bulgaria and Europe, from Europe to Bulgaria and between European countries.' },
          { question: 'What happens in case of unexpected delays?', answer: 'Our team reacts immediately by offering alternative routes and informing the client about the shipment status to minimize quality risks.' }
        ]
      }
    },
    'prevoz-na-hrani': {
      bg: {
        title: 'Превоз на храни',
        description: 'С Frigo Express BG Вашите хранителни продукти пристигат свежи и с гарантирано качество.',
        longDescription: [
          'Нашите хладилни бусове са оборудвани за транспорт на различни видове хранителни продукти – от свежи охладени или замразени храни до деликатеси със специални температурни условия.',
          'Курсовете се извършват бързо и надеждно, като гарантираме че храните достигат до крайния получател навреме и в отлично състояние.'
        ],
        keyPoints: [],
        faq: [
          { question: 'Какви храни могат да се транспортират?', answer: 'Подходящо е за пресни, замразени и деликатесни продукти.' },
          { question: 'Как се гарантира свежестта на храните?', answer: 'Всички пратки се транспортират при прецизно поддържана температура, с постоянен контрол.' }
        ]
      },
      en: {
        title: 'Food Transport',
        description: 'With Frigo Express BG your food products arrive fresh and with guaranteed quality.',
        longDescription: [
          'Our refrigerated buses are equipped to transport various types of food products – from fresh chilled or frozen foods to delicacies with special temperature conditions.',
          'Routes are executed quickly and reliably, ensuring food reaches the end recipient on time and in excellent condition.'
        ],
        keyPoints: [],
        faq: [
          { question: 'What foods can be transported?', answer: 'Suitable for fresh, frozen and delicatessen products.' },
          { question: 'How is food freshness guaranteed?', answer: 'All shipments are transported at precisely maintained temperature, with constant monitoring.' }
        ]
      }
    },
    'ekspresni-dostavki': {
      bg: {
        title: 'Експресни доставки',
        description: 'Експресен хладилен транспорт с приоритетни курсове и съкратени срокове на доставка в България и Европа.',
        longDescription: [
          'Услугата за експресни доставки на Frigo Express BG е създадена за ситуации, в които времето е критичен фактор. Планираме приоритетни курсове с директни маршрути и минимални междинни спирания, за да осигурим възможно най-кратки срокове за доставка на вашите температурно чувствителни стоки.',
          'По време на целия маршрут поддържаме постоянен контрол върху температурата и местоположението на пратката. Екипът ни следи курсовете в реално време, координира се с шофьорите и ви информира при всяка ключова промяна, така че винаги да знаете къде се намира вашият товар.',
          'Експресните доставки са подходящи за спешни поръчки, кратки срокове към клиенти или кампании, при които няма място за компромиси. Предлагаме гъвкави решения според обема, вида стока и дестинацията, за да получите оптимален баланс между скорост, сигурност и цена.'
        ],
        keyPoints: [
          'Приоритетно планиране и директни маршрути без излишни спирания',
          'Съкратени срокове за доставка в България и Европа',
          'Постоянен контрол върху температурата и статуса на пратката по време на маршрута',
          'Гъвкави решения за спешни, малки и специални пратки'
        ],
        faq: []
      },
      en: {
        title: 'Express Deliveries',
        description: 'Express refrigerated transport with priority routes and shortened delivery times in Bulgaria and Europe.',
        longDescription: [
          'Frigo Express BG\'s express delivery service is designed for situations where time is a critical factor. We plan priority routes with direct routes and minimal intermediate stops to ensure the shortest possible delivery times for your temperature-sensitive goods.',
          'Throughout the route we maintain constant control over temperature and shipment location. Our team tracks routes in real time, coordinates with drivers and informs you of every key change, so you always know where your cargo is.',
          'Express deliveries are suitable for urgent orders, short deadlines to customers or campaigns where there is no room for compromise. We offer flexible solutions according to volume, type of goods and destination to get optimal balance between speed, security and price.'
        ],
        keyPoints: [
          'Priority planning and direct routes without unnecessary stops',
          'Shortened delivery times in Bulgaria and Europe',
          'Constant control over temperature and shipment status during the route',
          'Flexible solutions for urgent, small and special shipments'
        ],
        faq: []
      }
    },
    'mezhdunarodni-marshruti': {
      bg: {
        title: 'Международни маршрути',
        description: 'Нашите международни маршрути обхващат всички ключови точки в Европа, осигурявайки бързи и сигурни доставки.',
        longDescription: [
          'Frigo Express BG организира хладилен транспорт по утвърдени международни маршрути между България и основните европейски пазари. Работим с внимателно планирани графици и партньорска мрежа, за да осигурим надеждни и предвидими доставки на вашите температурно чувствителни товари.',
          'Нашият екип познава спецификите на вносно-износните процеси и стандартите за транспорт на храни и фармацевтични продукти, което помага за по-плавна и предвидима организация на международните курсове.',
          'Услугата за международни маршрути е подходяща за компании, които търсят дългосрочен логистичен партньор за износ, внос или транзитни доставки. Предлагаме комбинация от регулярни линии и индивидуални решения според обемите, дестинациите и честотата на вашите пратки.'
        ],
        keyPoints: [
          'Покритие на основните европейски дестинации с хладилен транспорт',
          'Опит с митнически процедури и вносно-износна документация',
          'Регулярни графици с възможност за индивидуални маршрути',
          'Пълна проследимост и температурен контрол по целия международен маршрут'
        ],
        faq: []
      },
      en: {
        title: 'International Routes',
        description: 'Our international routes cover all key points in Europe, ensuring fast and secure deliveries.',
        longDescription: [
          'Frigo Express BG organizes refrigerated transport on established international routes between Bulgaria and major European markets. We work with carefully planned schedules and a partner network to ensure reliable and predictable deliveries of your temperature-sensitive goods.',
          'Our team knows the specifics of import-export processes and standards for transport of food and pharmaceutical products, which helps for smoother and more predictable organization of international routes.',
          'The international routes service is suitable for companies looking for a long-term logistics partner for export, import or transit deliveries. We offer a combination of regular lines and individual solutions according to volumes, destinations and frequency of your shipments.'
        ],
        keyPoints: [
          'Coverage of major European destinations with refrigerated transport',
          'Experience with customs procedures and import-export documentation',
          'Regular schedules with possibility for individual routes',
          'Full traceability and temperature control throughout the international route'
        ],
        faq: []
      }
    },
    'prosledyavane-v-realno-vreme': {
      bg: {
        title: 'Проследяване в реално време',
        description: 'Получавате навременна информация за статуса на вашите пратки по време на целия транспортен процес.',
        longDescription: [
          'Всяко едно от нашите превозни средства е оборудвано с GPS тракер, което означава, че вие можете да проследявате вашата пратка в реално време по всяко време. Тази технология ви дава пълна видимост върху местоположението на товара ви през целия транспортен процес.',
          'Нашият екип следи движението на пратките в оперативния график и при необходимост ви предоставя актуална информация за статуса им. При промени в плана, забавяния по пътя или важни събития, свързани с вашата пратка, получавате навременна обратна връзка.',
          'Това ниво на проследяване е особено полезно за фирми, които искат да планират по-точно своите вътрешни процеси и комуникация с крайни клиенти. Ясните статуси и редовните ъпдейти помагат да се взимат информирани решения и да се намалят изненадите по веригата на доставка.'
        ],
        keyPoints: [
          'Навременна информация за статуса на пратките по време на транспорта',
          'Ясна комуникация при промени в графика или маршрута',
          'Подкрепа при планиране на вътрешни процеси и доставки към крайни клиенти',
          'Фокус върху прозрачност и спокойствие за бизнеса по време на целия курс'
        ],
        faq: []
      },
      en: {
        title: 'Real-Time Tracking',
        description: 'You receive timely information about the status of your shipments throughout the entire transport process.',
        longDescription: [
          'Each of our vehicles is equipped with a GPS tracker, which means you can track your shipment in real time at any time. This technology gives you full visibility into the location of your cargo throughout the transport process.',
          'Our team monitors the movement of shipments in the operational schedule and provides you with current information about their status when necessary. In case of plan changes, delays on the road or important events related to your shipment, you receive timely feedback.',
          'This level of tracking is particularly useful for companies that want to plan their internal processes and communication with end customers more accurately. Clear statuses and regular updates help make informed decisions and reduce surprises in the delivery chain.'
        ],
        keyPoints: [
          'Timely information about shipment status during transport',
          'Clear communication in case of schedule or route changes',
          'Support in planning internal processes and deliveries to end customers',
          'Focus on transparency and peace of mind for the business during the entire route'
        ],
        faq: []
      }
    }
  };

  // Get language from URL parameter or localStorage, default to 'bg'
  function getCurrentLang() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam === 'en' || langParam === 'bg') {
      localStorage.setItem('preferredLang', langParam);
      return langParam;
    }
    // If no URL param, default to 'bg' (don't use localStorage on first visit)
    return 'bg';
  }

  // Translate a single element
  function translateElement(element, key, lang) {
    if (element && translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  }

  // Update all internal navigation links to preserve language parameter
  function updateNavigationLinks(lang) {
    // Get all internal links (not external URLs, not anchors, not tel/mailto)
    const internalLinks = document.querySelectorAll('a[href]:not([href^="http"]):not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"])');
    
    internalLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      try {
        const url = new URL(href, window.location.origin);
        
        // Only update if it's an internal link (same origin or relative)
        if (url.origin === window.location.origin || href.startsWith('/')) {
          if (lang === 'en') {
            url.searchParams.set('lang', 'en');
          } else {
            url.searchParams.delete('lang');
          }
          
          // Update the href (for relative URLs, use pathname + search)
          if (href.startsWith('/')) {
            link.setAttribute('href', url.pathname + (url.search ? url.search : ''));
          } else {
            link.setAttribute('href', url.toString());
          }
        }
      } catch (e) {
        // If URL parsing fails, skip this link
        console.debug('Skipping link update for:', href);
      }
    });
  }

  // Translate service content
  function translateServiceContent(lang) {
    // Translate service titles
    document.querySelectorAll('[data-service-title]').forEach(el => {
      const slug = el.getAttribute('data-service-slug');
      if (slug && serviceTranslations[slug] && serviceTranslations[slug][lang]) {
        el.textContent = serviceTranslations[slug][lang].title;
      }
    });

    // Translate service descriptions
    document.querySelectorAll('[data-service-description]').forEach(el => {
      const slug = el.getAttribute('data-service-slug');
      if (slug && serviceTranslations[slug] && serviceTranslations[slug][lang]) {
        el.textContent = serviceTranslations[slug][lang].description;
      }
    });

    // Translate service long descriptions
    document.querySelectorAll('[data-service-longdescription]').forEach(el => {
      const slug = el.getAttribute('data-service-slug');
      const index = parseInt(el.getAttribute('data-service-index') || '0');
      if (slug && serviceTranslations[slug] && serviceTranslations[slug][lang]) {
        const longDesc = serviceTranslations[slug][lang].longDescription;
        if (longDesc && longDesc[index]) {
          if (el.tagName === 'DIV' || el.tagName === 'P') {
            el.textContent = longDesc[index];
          } else {
            el.innerHTML = longDesc[index];
          }
        }
      }
    });

    // Translate service key points
    document.querySelectorAll('[data-service-keypoint]').forEach(el => {
      const slug = el.getAttribute('data-service-slug');
      const index = parseInt(el.getAttribute('data-service-index') || '0');
      if (slug && serviceTranslations[slug] && serviceTranslations[slug][lang]) {
        const keyPoints = serviceTranslations[slug][lang].keyPoints;
        if (keyPoints && keyPoints[index]) {
          el.textContent = keyPoints[index];
        }
      }
    });

    // Translate service FAQ questions and answers
    document.querySelectorAll('[data-service-faq-question]').forEach(el => {
      const slug = el.getAttribute('data-service-slug');
      const index = parseInt(el.getAttribute('data-service-index') || '0');
      if (slug && serviceTranslations[slug] && serviceTranslations[slug][lang]) {
        const faq = serviceTranslations[slug][lang].faq;
        if (faq && faq[index]) {
          // Find the SVG element to preserve it
          const svg = el.querySelector('svg');
          const questionText = faq[index].question;
          // Clear content and add question text
          el.innerHTML = questionText;
          if (svg) el.appendChild(svg);
        }
      }
    });

    document.querySelectorAll('[data-service-faq-answer]').forEach(el => {
      const slug = el.getAttribute('data-service-slug');
      const index = parseInt(el.getAttribute('data-service-index') || '0');
      if (slug && serviceTranslations[slug] && serviceTranslations[slug][lang]) {
        const faq = serviceTranslations[slug][lang].faq;
        if (faq && faq[index]) {
          el.textContent = faq[index].answer;
        }
      }
    });
  }

  // Translate all elements
  function translatePage(lang) {
    // Update html lang attribute
    document.documentElement.lang = lang;

    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      translateElement(el, key, lang);
    });

    // Translate service content
    translateServiceContent(lang);

    // Update language toggle buttons
    const langButtons = document.querySelectorAll('[data-lang-toggle]');
    langButtons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang-toggle');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.classList.remove('text-white/70');
        btn.classList.add('text-white');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.classList.remove('text-white');
        btn.classList.add('text-white/70');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
    
    // Update all navigation links to preserve language
    updateNavigationLinks(lang);
  }

  // Switch language
  function switchLanguage(lang) {
    const currentUrl = new URL(window.location.href);
    // Always update localStorage when switching
    localStorage.setItem('preferredLang', lang);
    if (lang === 'bg') {
      currentUrl.searchParams.delete('lang');
    } else {
      currentUrl.searchParams.set('lang', lang);
    }
    window.location.href = currentUrl.toString();
  }

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLang();
    translatePage(currentLang);

    // Add click handlers to language toggle buttons
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const targetLang = this.getAttribute('data-lang-toggle');
        const currentLang = getCurrentLang();
        if (targetLang !== currentLang) {
          switchLanguage(targetLang);
        }
      });
    });
  });

})();
