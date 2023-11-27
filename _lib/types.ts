export interface Params {
  slug: string;
}

export interface PostFrontmatter {
  slug: string;
  title: string;
  date: string;
  category?: string;
}
