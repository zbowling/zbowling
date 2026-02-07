import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";

export const prerender = true;

export async function getStaticPaths() {
	const projects = await getCollection("projects");

	const paths: Array<{
		params: { project: string };
		props: { entry: any };
	}> = [];

	projects.forEach((project) => {
		paths.push({
			params: { project: project.id },
			props: { entry: project },
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
	content += `date: ${entry.data.date.toISOString()}\n`;
	if (entry.data.link) {
		content += `link: ${entry.data.link}\n`;
	}
	content += `---\n\n`;

	content += body;

	// Add project info if available
	if (entry.data.info && entry.data.info.length > 0) {
		content += `\n## Project Information\n\n`;
		entry.data.info.forEach((info: any) => {
			content += `- ${info.text}${info.link ? ` (${info.link})` : ""}\n`;
		});
	}

	// Return as plain text markdown
	return new Response(content, {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
		},
	});
};

