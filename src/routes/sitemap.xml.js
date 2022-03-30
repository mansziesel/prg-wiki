import { gql } from 'graphql-request';
import client from '$lib/gqlClient';

export async function get() {
	const query = gql`
		{
			posts {
				slug
				updatedAt
			}
			assignments {
				slug
				updatedAt
			}
		}
	`;

	const res = await client.request(query);

	const posts = res.posts;
	const assignments = res.assignments;

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	return {
		headers,
		body: `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${assignments
				.map((item) =>
					`<url>
            <loc>http://localhost:3000/assignemts/${item.slug}/</loc>
            <lastmod>${item.updatedAt}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
          </url>`.trim()
				)
				.join('')}
      ${posts
				.map((item, i) =>
					`<url>
            <loc>http://localhost:3000/wiki/${item.slug}</loc>
            <lastmod>${item.updatedAt}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>`.trim()
				)
				.join('')}
    </urlset>`
	};
}
