export interface Story {
  title: string;
  person: string;
  excerpt: string;
  youtubeId: string;
}

const stories: Story[] = [
  {
    title: 'Heart Shaped Stone',
    person: 'Ren Caldwell',
    excerpt:
      'Amethyst holds the energy, good or bad and offers relief.',
    youtubeId: 'EmAeLfi2dGk',
  },
  {
    title: "Eastside Hat",
    person: 'Ed Castañeda',
    excerpt:
      'A knit hat from the mean streets of East Toledo does more than keep the head warm.',
    youtubeId: 'FsFGhe_oHNs',
  },
  {
    title: 'Sharp Edges',
    person: 'Nate Fieldson',
    excerpt:
      'Strong, purposeful steel.',
    youtubeId: 'aicg1Ba4DJ0',
  },
];

export default stories;