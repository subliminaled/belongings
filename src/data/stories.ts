export interface Story {
  title: string;
  person: string;
  excerpt: string;
  youtubeId: string;
  thumbnail: string;
}

const stories: Story[] = [
  {
    title: 'Heart Shaped Stone',
    person: 'Ren Caldwell',
    excerpt:
      'Amethyst holds the energy, good or bad and offers relief.',
    youtubeId: 'zynIiJuOdPc',
    thumbnail: '/images/thumb/stone.png',
  },
  {
    title: "Eastside Hat",
    person: 'Ed Castañeda',
    excerpt:
      'A knit hat from the mean streets of East Toledo does more than keep the head warm.',
    youtubeId: '',
    thumbnail: '/images/thumb/hat.png',

  },
  {
    title: 'Sharp Edges',
    person: 'Nate Fieldson',
    excerpt:
      'Strong, purposeful steel.',
    youtubeId: '',
    thumbnail: '/images/thumb/knife.png',
  },
];

export default stories;