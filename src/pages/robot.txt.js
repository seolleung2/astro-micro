export async function GET({ params, request }) {
  return new Response(
    `User-agent: *
Disallow:
Sitemap: https://blog.teddyjung.com/sitemap-index.xml`,
    {
      headers: {
        "content-type": "text/plain",
      },
    },
  );
}
