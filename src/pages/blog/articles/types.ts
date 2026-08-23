export type Article = {
  slug: string;
  image: string;
  tags: string[];
  title: string;
  date: string;
  author: string;
  content: JSX.Element | null;
};
