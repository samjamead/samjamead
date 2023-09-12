import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { PostFrontmatter } from '@/lib/types';

export async function getBlogPostList(): Promise<PostFrontmatter[]> {
  const fileNames = await readDirectory('/posts');

  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/posts/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace('.md', ''),
      ...frontmatter,
    } as PostFrontmatter);
  }

  return blogPosts.sort((p1, p2) => (p1.date < p2.date ? 1 : -1));
}

export async function loadBlogPost(slug: string) {
  let rawContent;

  try {
    rawContent = await readFile(`/posts/${slug}.md`);
  } catch (err) {
    return null;
  }

  const { data: frontmatter, content } = matter(rawContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { frontmatter, contentHtml };
}

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
