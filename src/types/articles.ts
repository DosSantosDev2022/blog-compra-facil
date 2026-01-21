import type { RichTextContent } from '@graphcms/rich-text-types'


export interface HygraphImage {
  url: string;
  width?: number;
  height?: number;
}

export interface Category {
  name: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  content: {
    html: string;
    raw?: RichTextContent; // Para uso com o RichText Renderer
  };
  category: Category | null;
  coverImage: HygraphImage;
}

export interface ArticlesConnection {
  articles: Article[];
  articlesConnection: {
    aggregate: {
      count: number;
    };
  };
}