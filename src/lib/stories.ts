import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Story {
  title: string;
  slug: string;
  name: string;
  object: string;
  coverImage: string;
  excerpt: string;
  published: boolean;
  date: string;
}

const storiesDirectory = path.join(process.cwd(), 'content/stories');

function parseStory(data: Record<string, unknown>): Story | null {
  const { title, slug, name, object, coverImage, excerpt, published, date } = data;
  if (
    typeof title !== 'string' ||
    typeof slug !== 'string' ||
    typeof name !== 'string' ||
    typeof object !== 'string' ||
    typeof coverImage !== 'string' ||
    typeof excerpt !== 'string' ||
    typeof published !== 'boolean' ||
    typeof date !== 'string'
  ) {
    return null;
  }
  return { title, slug, name, object, coverImage, excerpt, published, date };
}

export function getAllStories(): Story[] {
  if (!fs.existsSync(storiesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(storiesDirectory);

  const stories = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(storiesDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return parseStory(data as Record<string, unknown>);
    })
    .filter((story): story is Story => story !== null);

  return stories.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPublishedStories(): Story[] {
  return getAllStories().filter((story) => story.published);
}
