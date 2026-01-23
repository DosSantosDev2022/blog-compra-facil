import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  // 1. Obtém o token de segurança que configuraste no Hygraph
  const secret = request.headers.get('X-Revalidate-Secret');

  // 2. Verifica se o token está correto para evitar que estranhos limpem o teu cache
  if (secret !== process.env.HYGRAPH_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Token Inválido' }, { status: 401 });
  }

  try {
    // 3. Comando que limpa o cache. 
    // Aqui, limpamos a página inicial e a pasta dos posts.
    revalidatePath('/');
    revalidatePath('/artigos');
    revalidatePath('/artigos/[slug]', 'page');

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: 'Erro ao revalidar' }, { status: 500 });
  }
}