import css from '../../styles/giscus.css?raw';

export async function GET() {
  return new Response(css, {
    headers: {
      'Content-Type': 'text/css',
    },
  });
}