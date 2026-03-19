export interface Filmmaker {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const filmmakers: Filmmaker[] = [
  {
    name: 'Nate Fieldson',
    role: 'Director/Producer',
    bio: 'Nate is a Seattle-based filmmaker with a focus on making the small moments in everyday life feel big. He likes old things that are built well and last a long time.',
    image: '/images/filmmakers/nate.jpg',
  },
  {
    name: 'Bella Brown',
    role: 'Producer',
    bio: 'Bella Brown (she/her) is an arts worker, film producer, and writer born and raised in Seattle. She currently works for the Seattle Art Museum’s Creative Studio leading design, photography, and video projects across their three locations. Beyond her 9-5, you can find her in the pit at a concert, reading on the roof, running, practicing backbends, or hosting her next semi-elaborate dinner party.',
    image: '/images/filmmakers/bella.jpeg',
  },
  {
    name: 'Ed Castañeda (SubliminalEd Films)',
    role: 'Producer',
    bio: 'Coolbreeze.',
    image: '/images/filmmakers/ed.jpg',
  },
];

export default filmmakers;
