// Contenido de la web. Todo lo que hay aquí son DATOS DE EJEMPLO:
// sustituir por la información real del pediatra antes de publicar.

export type Lang = 'es' | 'en';
type T = Record<Lang, string>;

export const site = {
  // Mientras sea true, la web muestra avisos de "demo" y el selector de citas de ejemplo.
  demo: true,

  doctor: {
    name: 'Dr. Vicente Mori',
    shortName: 'Vicente Mori',
    role: { es: 'Pediatra', en: 'Pediatrician' } as T,
    yearsExperience: 5,
    collegiate: 'Col. 29/00000 (ejemplo)',
    languages: { es: 'Español e inglés', en: 'Spanish and English' } as T,
    bio: {
      es: 'Soy pediatra en Málaga y llevo cinco años acompañando a familias desde el primer día de vida del bebé hasta la adolescencia. Me interesa especialmente la alimentación: cómo empezar con los sólidos, qué hacer cuando un niño no quiere comer y cómo construir hábitos que duren. En consulta me tomo el tiempo de explicar, sin prisas y sin juicios.',
      en: 'I am a pediatrician in Málaga and for five years I have been looking after families from a baby’s first day to the teenage years. Feeding is my particular interest: how to start solids, what to do when a child won’t eat, and how to build habits that last. In clinic I take the time to explain, without rush and without judgement.',
    } as T,
    training: {
      es: ['Licenciatura en Medicina (ejemplo)', 'Especialidad en Pediatría vía MIR (ejemplo)', 'Formación en nutrición infantil (ejemplo)'],
      en: ['Medical degree (example)', 'Pediatrics residency, MIR (example)', 'Training in child nutrition (example)'],
    },
  },

  contact: {
    address: 'Calle de Ejemplo 12, 29005 Málaga',
    phone: '+34 600 000 000',
    phoneHref: 'tel:+34600000000',
    whatsappHref: 'https://wa.me/34600000000',
    email: 'consulta@ejemplo.es',
    hours: { es: 'Lunes a viernes, 9:30–14:00 y 16:30–19:30', en: 'Monday to Friday, 9:30–14:00 and 16:30–19:30' } as T,
    mapsHref: 'https://maps.google.com/?q=M%C3%A1laga%20centro',
  },

  booking: {
    // URL de Cal.com del pediatra, p. ej. 'https://cal.com/vicente-mori'.
    // Vacía = se muestra el selector de demostración.
    calUrl: '',
    consultations: [
      {
        id: 'primera',
        calSlug: 'primera-consulta',
        minutes: 45,
        price: 70,
        name: { es: 'Primera consulta', en: 'First visit' } as T,
        desc: { es: 'Historia completa, exploración y plan para tu hijo.', en: 'Full history, examination and a plan for your child.' } as T,
      },
      {
        id: 'revision',
        calSlug: 'revision',
        minutes: 30,
        price: 55,
        name: { es: 'Revisión / niño sano', en: 'Check-up / well child' } as T,
        desc: { es: 'Peso, talla, desarrollo y dudas del día a día.', en: 'Weight, height, development and everyday questions.' } as T,
      },
      {
        id: 'alimentacion',
        calSlug: 'consulta-alimentacion',
        minutes: 45,
        price: 60,
        name: { es: 'Consulta de alimentación', en: 'Feeding consultation' } as T,
        desc: { es: 'Sólidos, BLW, rechazo de comida o bajo peso.', en: 'Solids, BLW, food refusal or low weight.' } as T,
      },
    ],
  },

  // Etapas: cada especialidad se asocia a una franja de edad del niño.
  specialties: [
    {
      age: { es: '0–1 mes', en: '0–1 month' } as T,
      name: { es: 'Recién nacido y lactancia', en: 'Newborn and breastfeeding' } as T,
      desc: { es: 'Primera revisión, ictericia, cólicos, lactancia materna o artificial.', en: 'First check, jaundice, colic, breast or formula feeding.' } as T,
    },
    {
      age: { es: '0–14 años', en: '0–14 years' } as T,
      name: { es: 'Pediatría general y niño sano', en: 'General pediatrics and well-child care' } as T,
      desc: { es: 'Revisiones periódicas, fiebre, infecciones y enfermedades comunes.', en: 'Regular check-ups, fever, infections and common illnesses.' } as T,
    },
    {
      age: { es: '4–24 meses', en: '4–24 months' } as T,
      name: { es: 'Alimentación complementaria', en: 'Complementary feeding' } as T,
      desc: { es: 'Cuándo y cómo empezar los sólidos, purés o BLW, alérgenos.', en: 'When and how to start solids, purées or BLW, allergens.' } as T,
    },
    {
      age: { es: '0–14 años', en: '0–14 years' } as T,
      name: { es: 'Crecimiento y desarrollo', en: 'Growth and development' } as T,
      desc: { es: 'Curvas de peso y talla, hitos del desarrollo, sueño.', en: 'Weight and height curves, milestones, sleep.' } as T,
    },
    {
      age: { es: '6 meses–14 años', en: '6 months–14 years' } as T,
      name: { es: 'Alergias e intolerancias alimentarias', en: 'Food allergies and intolerances' } as T,
      desc: { es: 'Orientación, introducción segura de alimentos y seguimiento.', en: 'Guidance, safe introduction of foods and follow-up.' } as T,
    },
    {
      age: { es: '2–14 años', en: '2–14 years' } as T,
      name: { es: 'Nutrición infantil', en: 'Child nutrition' } as T,
      desc: { es: 'Niños selectivos con la comida, bajo peso, sobrepeso y menús.', en: 'Picky eaters, low weight, overweight and meal planning.' } as T,
    },
  ],

  // ageMonths sitúa el curso como un punto sobre la curva del gráfico.
  courses: [
    {
      id: 'primeros-solidos',
      ageMonths: 6,
      price: 49,
      // Enlace de pago de Stripe (Payment Link). Vacío = botón de demostración.
      stripeLink: '',
      format: { es: 'Vídeos grabados + guía PDF', en: 'Recorded videos + PDF guide' } as T,
      stage: { es: '6 meses', en: '6 months' } as T,
      name: { es: 'Primeros sólidos', en: 'First solids' } as T,
      desc: {
        es: 'Cómo empezar la alimentación complementaria con calma: señales de que tu bebé está listo, primeros alimentos, texturas y cómo introducir alérgenos.',
        en: 'How to start complementary feeding calmly: signs your baby is ready, first foods, textures and how to introduce allergens.',
      } as T,
      includes: {
        es: ['Qué ofrecer y cuánto', 'Calendario de alérgenos', 'Qué hacer ante una arcada'],
        en: ['What to offer and how much', 'Allergen schedule', 'Gagging vs. choking'],
      },
    },
    {
      id: 'blw',
      ageMonths: 8,
      price: 39,
      stripeLink: '',
      format: { es: 'Taller en directo online (2 h)', en: 'Live online workshop (2 h)' } as T,
      stage: { es: '6–12 meses', en: '6–12 months' } as T,
      name: { es: 'BLW sin miedo', en: 'BLW without fear' } as T,
      desc: {
        es: 'Baby-led weaning seguro: cortes por edad, posición, prevención del atragantamiento y cómo combinarlo con purés si lo prefieres.',
        en: 'Safe baby-led weaning: cuts by age, positioning, choking prevention and how to combine it with purées if you prefer.',
      } as T,
      includes: {
        es: ['Cortes y texturas por edad', 'Prevención de atragantamiento', 'Preguntas en directo'],
        en: ['Cuts and textures by age', 'Choking prevention', 'Live Q&A'],
      },
    },
    {
      id: 'no-come',
      ageMonths: 24,
      price: 45,
      stripeLink: '',
      format: { es: 'Vídeos grabados + plan semanal', en: 'Recorded videos + weekly plan' } as T,
      stage: { es: '1–6 años', en: '1–6 years' } as T,
      name: { es: 'Mi hijo no come', en: 'My child won’t eat' } as T,
      desc: {
        es: 'Estrategias para niños selectivos: qué es normal, cuándo consultar y cómo acabar con las peleas en la mesa sin premios ni castigos.',
        en: 'Strategies for picky eaters: what is normal, when to see a doctor and how to end mealtime battles without rewards or punishments.',
      } as T,
      includes: {
        es: ['Qué es normal por edad', 'Menú semanal de ejemplo', 'Guion para las comidas'],
        en: ['What is normal by age', 'Sample weekly menu', 'Mealtime script'],
      },
    },
  ],

  faq: [
    {
      q: { es: '¿Cómo se paga la cita?', en: 'How do I pay for the appointment?' } as T,
      a: { es: 'Con tarjeta al reservar, en una pasarela segura. Recibirás la confirmación y el recibo por correo.', en: 'By card when you book, through a secure payment page. You will receive the confirmation and receipt by email.' } as T,
    },
    {
      q: { es: '¿Puedo cambiar o cancelar?', en: 'Can I change or cancel?' } as T,
      a: { es: 'Sí, desde el enlace del correo de confirmación hasta 24 h antes de la cita (política de ejemplo).', en: 'Yes, from the link in your confirmation email up to 24 h before the visit (example policy).' } as T,
    },
    {
      q: { es: '¿Cómo accedo a un curso después de comprarlo?', en: 'How do I access a course after buying it?' } as T,
      a: { es: 'El doctor te envía el acceso por correo en menos de 24 h laborables.', en: 'The doctor sends you access by email within one working day.' } as T,
    },
    {
      q: { es: '¿Atiende en inglés?', en: 'Do you see patients in English?' } as T,
      a: { es: 'Sí, la consulta puede ser en español o en inglés.', en: 'Yes, visits can be in Spanish or English.' } as T,
    },
  ],
};

export const money = (n: number, lang: Lang) =>
  new Intl.NumberFormat(lang === 'es' ? 'es-ES' : 'en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
