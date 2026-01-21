import { hygraphFetch } from "@/lib/hygraph";
import type { Product, ProductsConnection } from "@/types/product";

/**
 * Interface para o retorno padronizado da listagem de produtos
 */
interface GetProductsResponse {
  products: Product[];
  total: number;
  totalPages: number;
}

/**
 * Busca produtos recomendados com suporte a paginação
 */
export async function getProducts({ 
  page = 1 
}: { 
  page?: number 
}): Promise<GetProductsResponse> {
  const pageSize = 10; // Conforme sua regra de negócio
  const skip = (page - 1) * pageSize;

  const query = `
    query GetProducts($first: Int, $skip: Int) {
      recommendedProducts(first: $first, skip: $skip, orderBy: createdAt_DESC) {
        id
        name
        affiliateLink
        image {
          url
        }
        description
        createdAt
      }
      recommendedProductsConnection {
        aggregate {
          count
        }
      }
    }
  `;

  const data = await hygraphFetch<ProductsConnection>({
    query,
    variables: { first: pageSize, skip },
    tags: ["products"]
  });

  // Verificação de segurança para evitar erros de runtime
  if (!data || !data.recommendedProducts) {
    return { products: [], total: 0, totalPages: 0 };
  }

  const totalCount = data.recommendedProductsConnection.aggregate.count;

  return {
    products: data.recommendedProducts,
    total: totalCount,
    totalPages: Math.ceil(totalCount / pageSize)
  };
}