import { hygraphFetch } from "@/lib/hygraph";
import type { Article, ArticlesConnection } from "@/types/articles";

/** * Interface para o retorno padronizado da listagem de artigos 
 */
interface GetArticlesResponse {
  articles: Article[];
  total: number;
  totalPages: number;
}

/**
 * Busca todos os artigos com suporte a filtros e paginação
 */
export async function getArticles({ 
  search = "", 
  category = "", 
  page = 1 
}: { 
  search?: string, 
  category?: string, 
  page?: number 
}): Promise<GetArticlesResponse> {
  const pageSize = 6;
  const skip = (page - 1) * pageSize;

  // Tipagem do filtro para evitar erros de 'any'
  const whereClause: Record<string, any> = {};
  
  if (search) {
    whereClause.title_contains = search;
  }
  
  if (category && category !== "all") {
    whereClause.category = { slug: category.toLowerCase() };
  }

  const query = `
    query GetArticles($where: ArticleWhereInput, $first: Int, $skip: Int) {
      articles(where: $where, first: $first, skip: $skip, orderBy: publishedAt_DESC) {
        id
        title
        slug
        publishedAt
        category {
          name
          slug
        }
        coverImage {
          url
        }
        content {
          raw
          html
        }
      }
      articlesConnection(where: $where) {
        aggregate {
          count
        }
      }
    }
  `;

  const data = await hygraphFetch<ArticlesConnection>({
    query,
    variables: { where: whereClause, first: pageSize, skip },
    tags: ["articles"]
  });

  if (!data) return { articles: [], total: 0, totalPages: 0 };

  return {
    articles: data.articles,
    total: data.articlesConnection.aggregate.count,
    totalPages: Math.ceil(data.articlesConnection.aggregate.count / pageSize)
  };
}

/**
 * Busca um único artigo pelo Slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const query = `
    query GetArticleBySlug($slug: String!) {
      article(where: { slug: $slug }) {
        id
        title
        slug
        publishedAt
        category {
          name
          slug
        }
        coverImage {
          url
        }
        content {
          raw
          html
        }
      }
    }
  `;

  // Tipamos o retorno do fetch como um objeto que contém 'article' ou null
  const data = await hygraphFetch<{ article: Article | null }>({
    query,
    variables: { slug },
    tags: [`article:${slug}`]
  });

  return data?.article || null;
}

/**
 * Busca artigos em destaque para a Home
 */
export async function getFeaturedArticles(): Promise<Article[]> {
  const query = `
    query GetFeaturedArticles {
      articles(first: 3, orderBy: publishedAt_DESC) {
        id
        title
        slug
        publishedAt
        category {
          name
          slug
        }
        coverImage {
          url
        }
        content {
          raw
          html
        }
      }
    }
  `;

  const data = await hygraphFetch<{ articles: Article[] }>({
    query,
    tags: ["articles", "featured"]
  });

  return data?.articles || [];
}