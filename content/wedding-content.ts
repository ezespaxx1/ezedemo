export type LinkItem = { label: string; href: string };

export const siteMeta = {
  title: 'Two Paths, One Promise',
  description:
    'A refined wedding website sharing our story, celebration details, RSVP information, and heartfelt messages.',
  url: 'https://example.com',
  ogImage: '/images/hero-placeholder.svg'
};

export const couple = {
  monogram: 'A & E',
  names: 'Amelia & Elias',
  dateText: 'Saturday, September 26, 2026',
  location: 'The Conservatory at Willow House · Charleston, South Carolina'
};

export const navigation: LinkItem[] = [
  { label: 'Welcome', href: '#welcome' },
  { label: 'Story', href: '#our-story' },
  { label: 'Details', href: '#details' },
  { label: 'Travel', href: '#travel-stay' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'FAQ', href: '#faq' }
];

// Replace this object with your final approved wedding copy.
export const sections = {
  hero: {
    title: 'Two Paths, One Promise',
    subtitle:
      'After years of chance meetings, handwritten notes, and shared morning walks, we have found home in one another.',
    ctaPrimary: 'RSVP Now',
    ctaSecondary: 'Explore Our Story'
  },
  welcome: {
    heading: 'Welcome',
    body: 'With joyful hearts, we invite you to celebrate the beginning of our marriage. Your love, wisdom, and presence have shaped our story, and we cannot imagine this day without you.'
  },
  ourStory: {
    heading: 'Our Story',
    timeline: [
      {
        year: '2018',
        title: 'A Quiet Introduction',
        text: 'We met at a rainy autumn exhibition, reached for the same book, and stayed talking until the gallery lights dimmed.'
      },
      {
        year: '2021',
        title: 'Choosing the Same Horizon',
        text: 'Between cross-country flights and Sunday dinners, we learned that love is built in ordinary moments, faithfully kept.'
      },
      {
        year: '2025',
        title: 'The Promise',
        text: 'At sunrise overlooking the coast, we promised to walk forward side by side, with gratitude and courage.'
      }
    ]
  },
  countdown: {
    heading: 'Countdown',
    dateISO: '2026-09-26T16:30:00-04:00'
  },
  weddingDetails: {
    heading: 'Wedding Day Details',
    events: [
      { label: 'Ceremony', detail: '4:30 PM · Rose Glasshouse Garden' },
      { label: 'Cocktail Hour', detail: '5:30 PM · Courtyard Conservatory' },
      { label: 'Dinner & Dancing', detail: '7:00 PM onward · Grand Hall' },
      { label: 'Attire', detail: 'Black Tie Optional · Soft earth-toned accents welcome' }
    ]
  },
  travelStay: {
    heading: 'Travel & Stay',
    intro:
      'For our traveling guests, we reserved room blocks and gathered transport notes to make your visit effortless.',
    stays: [
      { name: 'Willow House Inn', notes: 'Venue-adjacent · Use code: TWOPATHS' },
      { name: 'Harbor Lane Hotel', notes: '10 minutes away · Complimentary shuttle pickup' },
      { name: 'The Linden Suites', notes: 'Historic district option for weekend explorers' }
    ]
  },
  gallery: {
    heading: 'Gallery',
    images: [
      '/images/gallery-01.svg',
      '/images/gallery-02.svg',
      '/images/gallery-03.svg',
      '/images/gallery-04.svg'
    ]
  },
  ourPeople: {
    heading: 'Our People',
    members: [
      { role: 'Maid of Honor', name: 'Sophia Lane' },
      { role: 'Best Man', name: 'Jordan Hale' },
      { role: 'Officiant', name: 'Reverend Claire Bennett' },
      { role: 'Parents', name: 'Families of Amelia Hart & Elias Rowan' }
    ]
  },
  rsvp: {
    heading: 'RSVP',
    note:
      'Please respond by August 20, 2026. We are grateful for your timely reply as we prepare each detail with care.'
  },
  gifts: {
    heading: 'Gifts & Well Wishes',
    body: 'Your presence is our greatest gift. For loved ones who have asked, we have shared a registry and a contribution option for future travels.'
  },
  faq: {
    heading: 'FAQ',
    items: [
      {
        question: 'Are children invited?',
        answer: 'We adore your little ones; however, this celebration will be an adults-only evening.'
      },
      {
        question: 'Will transportation be provided?',
        answer: 'Yes. Shuttles will run between partner hotels and the venue from 3:30 PM to 11:30 PM.'
      },
      {
        question: 'What should I wear?',
        answer: 'Black tie optional. Think formal silhouettes, seasonal fabrics, and comfortable dancing shoes.'
      }
    ]
  },
  guestMessages: {
    heading: 'Guest Messages',
    intro: 'Leave a note, blessing, or cherished memory for us to read after the celebration.'
  },
  marriageMeans: {
    heading: 'What Marriage Means to Us',
    body: 'Marriage, to us, is a daily choosing: to listen first, to forgive quickly, to celebrate deeply, and to build a life that reflects grace, curiosity, and devotion.'
  },
  thankYou: {
    heading: 'Thank You',
    body: 'Thank you for being part of our story. We cannot wait to celebrate this new chapter with you.'
  }
};
