import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";

export const prerender = true;

export async function getStaticPaths() {
	const posts = await getCollection("posts");

	const paths: Array<{
		params: { post: string };
		props: { entry: any };
	}> = [];

	posts
		.filter((post) => !post.data.draft)
		.forEach((post) => {
			paths.push({
				params: { post: post.id },
				props: { entry: post },
			});
		});

	return paths;
}

export const GET: APIRoute = async ({ props }) => {
	const { entry } = props as { entry: any };

	// Clean up the content body
	let body = entry.body || "";

	// Remove MDX imports
	body = body.replace(/import\s+.*\s+from\s+['"].*['"];?\s*/g, "");

	// Remove JSX components
	body = body.replace(/<[A-Z]\w+\s*\/?>/g, "");
	body = body.replace(/<\/[A-Z]\w+>/g, "");
	body = body.replace(/<[A-Z]\w+\s+[^>]*\/>/g, "");

	// Add frontmatter
	let content = `---\n`;
	content += `title: ${entry.data.title}\n`;
	content += `description: ${entry.data.description}\n`;
	content += `createdAt: ${entry.data.createdAt.toISOString()}\n`;
	if (entry.data.updatedAt) {
		content += `updatedAt: ${entry.data.updatedAt.toISOString()}\n`;
	}
	content += `---\n\n`;

	content += body;

	// Return as plain text markdown
	return new Response(content, {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
		},
	});
};

