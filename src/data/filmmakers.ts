export interface Filmmaker {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const filmmakers: Filmmaker[] = [
  {
    name: 'Sarah Chen',
    role: 'Director',
    bio: 'Award-winning documentary filmmaker specializing in intimate character studies that reveal the quiet dignity in everyday lives.',
    image: '/images/filmmakers/sarah-chen.svg',
  },
  {
    name: 'Marcus Webb',
    role: 'Cinematographer',
    bio: 'Visual storyteller with a passion for capturing authentic human moments through naturalistic light and unhurried frames.',
    image: '/images/filmmakers/marcus-webb.svg',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Producer',
    bio: 'Experienced producer who builds trust with subjects and brings compelling personal narratives to global audiences.',
    image: '/images/filmmakers/elena-rodriguez.svg',
  },
];

export default filmmakers;
