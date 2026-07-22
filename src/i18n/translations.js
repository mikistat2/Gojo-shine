/**
 * All site copy lives here, in English (en) and Amharic (am).
 * Access strings via the useTranslation() hook — never hardcode copy in components.
 */
export const translations = {
  en: {
    brand: 'Gojo Shine Cleaning Service',
    brandShort: 'Gojo Shine',

    nav: {
      services: 'Services',
      why: 'Why Us',
      process: 'How It Works',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },

    cta: {
      quote: 'Get a Free Quote',
      book: 'Book Now',
      services: 'Our Services',
    },

    hero: {
      title: 'A Spotless Space, Every Single Time',
      subtitle:
        'Professional cleaning for homes and offices in Addis Ababa — trusted staff, eco-friendly products, guaranteed results.',
    },

    stats: {
      clients: 'Happy Clients',
      clientsValue: '500+',
      years: 'Years of Experience',
      yearsValue: '5',
      satisfaction: 'Satisfaction Guaranteed',
      satisfactionValue: '100%',
    },

    services: {
      title: 'Our Services',
      subtitle: 'From everyday tidying to heavy-duty deep cleans — we handle it all with care.',
      home: {
        title: 'Home Cleaning',
        desc: 'Regular or one-time cleaning that keeps every room of your home fresh, tidy, and welcoming.',
      },
      office: {
        title: 'Office Cleaning',
        desc: 'A clean workspace your team and clients will notice — scheduled around your business hours.',
      },
      deep: {
        title: 'Deep Cleaning',
        desc: 'A top-to-bottom scrub of kitchens, bathrooms, and hidden corners that everyday cleaning misses.',
      },
      carpet: {
        title: 'Carpet & Sofa Cleaning',
        desc: 'Professional shampooing and stain removal that revives your carpets, rugs, and upholstery.',
      },
      construction: {
        title: 'Post-Construction Cleaning',
        desc: 'We clear away dust, paint spots, and debris so your new space is ready to move into.',
      },
      window: {
        title: 'Window & Glass Cleaning',
        desc: 'Streak-free windows, mirrors, and glass partitions that let the light shine through.',
      },
    },

    why: {
      title: 'Why Choose Gojo Shine?',
      subtitle: 'We treat your space like our own — that is our promise.',
      staff: {
        title: 'Trained & Vetted Staff',
        desc: 'Every cleaner is background-checked, professionally trained, and respectful of your space.',
      },
      eco: {
        title: 'Eco-Friendly Products',
        desc: 'Safe for children, pets, and the planet — without compromising on cleaning power.',
      },
      schedule: {
        title: 'Flexible Scheduling',
        desc: 'Mornings, evenings, or weekends — we work around your schedule, not the other way round.',
      },
      pricing: {
        title: 'Transparent Pricing',
        desc: 'Clear, fair quotes before we start. No hidden fees, no surprises on the bill.',
      },
    },

    process: {
      title: 'How It Works',
      subtitle: 'Three simple steps to a sparkling clean space.',
      step1: {
        title: 'Book Your Service',
        desc: 'Call us or send a request — tell us what you need and pick a time that suits you.',
      },
      step2: {
        title: 'We Clean Thoroughly',
        desc: 'Our trained team arrives on time with all equipment and gets to work, corner to corner.',
      },
      step3: {
        title: 'You Relax & Enjoy',
        desc: 'Walk into a fresh, spotless space — and if anything is not perfect, we will make it right.',
      },
    },

    beforeAfter: {
      title: 'From Messy to Sparkling',
      subtitle:
        'Real spaces, real results — watch each room flip from before to after, just like we transform it.',
      before: 'Before',
      after: 'After',
      hint: 'Tap any card to flip it',
      rooms: {
        carpet: 'Carpet',
        kitchen: 'Kitchen',
        Couch: 'Couch',
      },
    },

    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Real words from homes and offices across Addis Ababa.',
      prev: 'Previous testimonial',
      next: 'Next testimonial',
      items: [
        {
          name: 'Hanna T.',
          role: 'Homeowner, Bole',
          quote:
            'The Gojo Shine team transformed my apartment. They were punctual, polite, and every surface was gleaming when they finished. I book them every two weeks now.',
        },
        {
          name: 'Dawit M.',
          role: 'Office Manager, Kazanchis',
          quote:
            'Our office has never looked better. They clean after hours so nothing disrupts our work, and the results are consistently excellent.',
        },
        {
          name: 'Selamawit K.',
          role: 'Homeowner, CMC',
          quote:
            'After our renovation the house was covered in dust. Gojo Shine made it move-in ready in one day — I honestly did not expect it to look this good.',
        },
        {
          name: 'Yonas B.',
          role: 'Villa Owner, Summit',
          quote:
            'Our sofas looked ten years older than they were. After one visit they look brand new — the stains are completely gone.',
        },
        {
          name: 'Meron A.',
          role: 'Restaurant Owner, Piassa',
          quote:
            'They deep-cleaned our kitchen down to the last corner. Even the inspector was impressed — truly professional work.',
        },
      ],
    },

    banner: {
      title: 'Ready for a spotless space?',
      subtitle: 'Book today and see the Gojo Shine difference for yourself.',
    },

    contact: {
      title: 'Get In Touch',
      subtitle: 'Send us a request and we will get back to you within the hour.',
      infoTitle: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      locationValue: 'Addis Ababa, Ethiopia',
      hours: 'Working Hours',
      hoursValue: 'Mon–Sat, 8:00 AM – 7:00 PM',
      follow: 'Follow Us',
    },

    form: {
      name: 'Your Name',
      namePlaceholder: 'e.g. Abebe Kebede',
      phone: 'Phone Number',
      phonePlaceholder: '+251 9XX XXX XXX',
      service: 'Select a Service',
      message: 'Your Message',
      messagePlaceholder: 'Tell us about your space and what you need…',
      submit: 'Send Request',
      success: "Thank you! We'll contact you shortly.",
      errors: {
        name: 'Please enter your name.',
        phone: 'Please enter a valid phone number.',
        service: 'Please select a service.',
      },
    },

    footer: {
      blurb:
        'Premium home and office cleaning in Addis Ababa. Trusted staff, eco-friendly products, guaranteed results.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Services',
      rights: 'All rights reserved.',
    },
  },

  am: {
    brand: 'ጎጆ ሻይን የጽዳት አገልግሎት',
    brandShort: 'ጎጆ ሻይን',

    nav: {
      services: 'አገልግሎቶች',
      why: 'ለምን እኛ',
      process: 'እንዴት እንሰራለን',
      testimonials: 'የደንበኞች አስተያየት',
      contact: 'ያግኙን',
    },

    cta: {
      quote: 'ነጻ የዋጋ ግምት ያግኙ',
      book: 'አሁን ይያዙ',
      services: 'አገልግሎቶቻችን',
    },

    hero: {
      title: 'ንጹህና የሚያብረቀርቅ ቦታ፣ በእያንዳንዱ ጊዜ',
      subtitle:
        'በአዲስ አበባ ለቤትና ለቢሮ ሙያዊ የጽዳት አገልግሎት — የታመኑ ሰራተኞች፣ ለአካባቢ ተስማሚ ምርቶች፣ የተረጋገጠ ውጤት።',
    },

    stats: {
      clients: 'ደስተኛ ደንበኞች',
      clientsValue: '500+',
      years: 'ዓመታት ልምድ',
      yearsValue: '5',
      satisfaction: 'እርካታ የተረጋገጠ',
      satisfactionValue: '100%',
    },

    services: {
      title: 'አገልግሎቶቻችን',
      subtitle: 'ከዕለታዊ ጽዳት እስከ ጥልቅ ጽዳት — ሁሉንም በጥንቃቄ እንሰራለን።',
      home: {
        title: 'የቤት ጽዳት',
        desc: 'ቤትዎን ንጹህ፣ የተስተካከለና ማራኪ የሚያደርግ መደበኛ ወይም የአንድ ጊዜ ጽዳት።',
      },
      office: {
        title: 'የቢሮ ጽዳት',
        desc: 'ሰራተኞችዎና ደንበኞችዎ የሚያስተውሉት ንጹህ የስራ ቦታ — በስራ ሰዓትዎ መሰረት የሚስተካከል።',
      },
      deep: {
        title: 'ጥልቅ ጽዳት',
        desc: 'ወጥ ቤት፣ መታጠቢያ ቤትና የተደበቁ ቦታዎችን ጨምሮ ከላይ እስከ ታች የሚደረግ ጥልቅ ጽዳት።',
      },
      carpet: {
        title: 'የምንጣፍና ሶፋ ጽዳት',
        desc: 'ምንጣፎችዎንና ሶፋዎችዎን እንደ አዲስ የሚያድስ ሙያዊ እጥበትና የቆሻሻ ማስወገጃ አገልግሎት።',
      },
      construction: {
        title: 'ከግንባታ በኋላ ጽዳት',
        desc: 'አቧራ፣ የቀለም ነጠብጣብና ቆሻሻ አጽድተን አዲሱን ቦታዎን ለመግባት ዝግጁ እናደርጋለን።',
      },
      window: {
        title: 'የመስኮትና መስታወት ጽዳት',
        desc: 'ብርሃን በደንብ የሚያሳልፉ ያለ ምንም ነጠብጣብ የጸዱ መስኮቶችና መስታወቶች።',
      },
    },

    why: {
      title: 'ለምን ጎጆ ሻይንን ይመርጣሉ?',
      subtitle: 'ቦታዎን እንደ ራሳችን እንይዛለን — ይህ ቃላችን ነው።',
      staff: {
        title: 'የሰለጠኑና የተመረመሩ ሰራተኞች',
        desc: 'እያንዳንዱ ሰራተኛ የተመረመረ፣ በሙያ የሰለጠነና ቦታዎን የሚያከብር ነው።',
      },
      eco: {
        title: 'ለአካባቢ ተስማሚ ምርቶች',
        desc: 'ለልጆች፣ ለቤት እንስሳትና ለአካባቢ ደህንነታቸው የተጠበቀ — ጥራት ሳይቀንስ።',
      },
      schedule: {
        title: 'ተለዋዋጭ የጊዜ ሰሌዳ',
        desc: 'ጠዋት፣ ማታ ወይም ቅዳሜና እሁድ — በእርስዎ ጊዜ መሰረት እንሰራለን።',
      },
      pricing: {
        title: 'ግልጽ ዋጋ',
        desc: 'ከመጀመራችን በፊት ግልጽና ተገቢ ዋጋ እናቀርባለን። ምንም የተደበቀ ክፍያ የለም።',
      },
    },

    process: {
      title: 'እንዴት እንሰራለን',
      subtitle: 'ንጹህ ቦታ ለማግኘት ሶስት ቀላል ደረጃዎች።',
      step1: {
        title: 'አገልግሎትዎን ይያዙ',
        desc: 'ይደውሉልን ወይም ጥያቄ ይላኩ — የሚፈልጉትን ነግረውን የሚመችዎትን ጊዜ ይምረጡ።',
      },
      step2: {
        title: 'በደንብ እናጸዳለን',
        desc: 'የሰለጠነው ቡድናችን ሙሉ መሳሪያ ይዞ በሰዓቱ ደርሶ ከጥግ እስከ ጥግ ያጸዳል።',
      },
      step3: {
        title: 'እርስዎ ይረፉ፣ ይደሰቱ',
        desc: 'ንጹህና የሚያብረቀርቅ ቦታዎ ይግቡ — የሆነ ነገር ካልተሟላ እናስተካክለዋለን።',
      },
    },

    beforeAfter: {
      title: 'ከተመሰቃቀለ ወደ የሚያብረቀርቅ',
      subtitle:
        'እውነተኛ ቦታዎች፣ እውነተኛ ውጤቶች — እያንዳንዱ ክፍል ከበፊት ወደ በኋላ ሲገለበጥ ይመልከቱ።',
      before: 'በፊት',
      after: 'በኋላ',
      hint: 'ለመገልበጥ ማንኛውንም ካርድ ይንኩ',
      rooms: {
        carpet: 'ምንጣፍ',
        kitchen: 'ወጥ ቤት',
        Couch: 'ሶፋ',
      },
    },

    testimonials: {
      title: 'ደንበኞቻችን ምን ይላሉ',
      subtitle: 'በአዲስ አበባ ከሚገኙ ቤቶችና ቢሮዎች እውነተኛ አስተያየቶች።',
      prev: 'የቀደመ አስተያየት',
      next: 'ቀጣይ አስተያየት',
      items: [
        {
          name: 'ሃና ተ.',
          role: 'የቤት ባለቤት፣ ቦሌ',
          quote:
            'የጎጆ ሻይን ቡድን ቤቴን ሙሉ በሙሉ ለውጦታል። በሰዓቱ ደርሰው በትህትና ሰርተው ሁሉም ነገር ያብረቀርቅ ነበር። አሁን በየሁለት ሳምንቱ አስመጣቸዋለሁ።',
        },
        {
          name: 'ዳዊት መ.',
          role: 'የቢሮ ሃላፊ፣ ካዛንቺስ',
          quote:
            'ቢሯችን ከዚህ በፊት እንዲህ ንጹህ ሆኖ አያውቅም። ከስራ ሰዓት ውጭ ስለሚያጸዱ ስራችን አይስተጓጎልም፣ ውጤቱም ሁልጊዜ ምርጥ ነው።',
        },
        {
          name: 'ሰላማዊት ከ.',
          role: 'የቤት ባለቤት፣ ሲኤምሲ',
          quote:
            'ከቤት እድሳት በኋላ ሁሉም ነገር በአቧራ ተሸፍኖ ነበር። ጎጆ ሻይን በአንድ ቀን ለመኖሪያ ዝግጁ አደረገው — እንዲህ ያምራል ብዬ አልጠበቅኩም ነበር።',
        },
        {
          name: 'ዮናስ በ.',
          role: 'የቤት ባለቤት፣ ሰሚት',
          quote:
            'ሶፋዎቻችን በጣም አርጅተው ይታዩ ነበር። በአንድ ጉብኝት እንደ አዲስ ሆነዋል — እድፎቹ ሙሉ በሙሉ ጠፍተዋል።',
        },
        {
          name: 'ሜሮን አ.',
          role: 'የምግብ ቤት ባለቤት፣ ፒያሳ',
          quote:
            'ወጥ ቤታችንን እስከ መጨረሻው ጥግ ድረስ አጽድተውታል። ተቆጣጣሪው እንኳን ተደንቋል — በእውነት ሙያዊ ስራ ነው።',
        },
      ],
    },

    banner: {
      title: 'ንጹህ ቦታ ለማግኘት ዝግጁ ነዎት?',
      subtitle: 'ዛሬ ይያዙና የጎጆ ሻይንን ልዩነት በራስዎ ይመልከቱ።',
    },

    contact: {
      title: 'ያግኙን',
      subtitle: 'ጥያቄዎን ይላኩልን — በአንድ ሰዓት ውስጥ እንመልስልዎታለን።',
      infoTitle: 'የመገኛ መረጃ',
      phone: 'ስልክ',
      email: 'ኢሜይል',
      location: 'አድራሻ',
      locationValue: 'አዲስ አበባ፣ ኢትዮጵያ',
      hours: 'የስራ ሰዓት',
      hoursValue: 'ሰኞ–ቅዳሜ፣ ከጠዋቱ 8:00 – ከምሽቱ 7:00',
      follow: 'ይከተሉን',
    },

    form: {
      name: 'ስምዎ',
      namePlaceholder: 'ለምሳሌ፦ አበበ ከበደ',
      phone: 'ስልክ ቁጥር',
      phonePlaceholder: '+251 9XX XXX XXX',
      service: 'አገልግሎት ይምረጡ',
      message: 'መልዕክትዎ',
      messagePlaceholder: 'ስለ ቦታዎና ስለሚፈልጉት አገልግሎት ይንገሩን…',
      submit: 'ጥያቄ ይላኩ',
      success: 'እናመሰግናለን! በቅርቡ እናገኝዎታለን።',
      errors: {
        name: 'እባክዎ ስምዎን ያስገቡ።',
        phone: 'እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ።',
        service: 'እባክዎ አገልግሎት ይምረጡ።',
      },
    },

    footer: {
      blurb:
        'በአዲስ አበባ ከፍተኛ ጥራት ያለው የቤትና የቢሮ ጽዳት። የታመኑ ሰራተኞች፣ ለአካባቢ ተስማሚ ምርቶች፣ የተረጋገጠ ውጤት።',
      quickLinks: 'ፈጣን አገናኞች',
      servicesTitle: 'አገልግሎቶች',
      rights: 'መብቱ በህግ የተጠበቀ ነው።',
    },
  },
}
