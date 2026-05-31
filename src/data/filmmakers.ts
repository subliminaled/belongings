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
    bio: 'Bella Brown (she/her) is an arts worker, film producer, and writer born and raised in Seattle. She currently works for the Seattle Art Museum’s Creative Studio leading design, photography, and video projects across their three locations. ',
    image: '/images/filmmakers/bella.jpeg',
  },
  {
    name: 'Ed Castañeda (SubliminalEd Films)',
    role: 'Producer',
    bio: 'Ed is a writer, director and producer behind SubliminalEd Films focusing on bring authentic stories to life on the screen.',
    image: '/images/filmmakers/ed.jpg',
  },
];

export default filmmakers;
