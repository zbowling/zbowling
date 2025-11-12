import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	const posts = await getCollection("posts");
	const projects = await getCollection("projects");
	const cards = await getCollection("cards");
	const other = await getCollection("other");
	const newsCollection = await getCollection("news");
	const workExperience = await getCollection("workExperience");
	const socials = await getCollection("socials");
	const quickInfo = await getCollection("quickInfo");

	let fullContent = "";

	const processEntry = (entry: any) => {
		let content = `---\n`;
		content += `title: ${entry.data.title}\n`;
		if (entry.data.description) {
			content += `description: ${entry.data.description}\n`;
		}
		if (entry.data.createdAt) {
			content += `createdAt: ${entry.data.createdAt.toISOString()}\n`;
		}
		if (entry.data.updatedAt) {
			content += `updatedAt: ${entry.data.updatedAt.toISOString()}\n`;
		}
		if (entry.data.date) {
			content += `date: ${entry.data.date.toISOString()}\n`;
		}
		if (entry.id) {
			content += `id: ${entry.id}\n`;
		}
		content += `---\n\n`;

		let body = entry.body || "";
		// Remove MDX imports
		body = body.replace(/import\s+.*\s+from\s+['"].*['"];?\s*/g, "");
		// Remove JSX components
		body = body.replace(/<[A-Z]\w+\s*\/?>/g, "");
		body = body.replace(/<\/[A-Z]\w+>/g, "");
		// Remove self-closing JSX tags
		body = body.replace(/<[A-Z]\w+\s+[^>]*\/>/g, "");

		content += body;
		return content;
	};

	// Blog Posts
	if (posts.length > 0) {
		fullContent += `# Blog Posts\n\n`;
		posts
			.filter((post) => !post.data.draft)
			.sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime())
			.forEach((post) => {
				fullContent += processEntry(post);
				fullContent += `\n\n---\n\n`;
			});
	}

	// Projects
	if (projects.length > 0) {
		fullContent += `# Projects\n\n`;
		projects
			.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
			.forEach((project) => {
				fullContent += processEntry(project);
				if (project.data.link) {
					fullContent += `\n\nProject URL: ${project.data.link}\n\n`;
				}
				if (project.data.info && project.data.info.length > 0) {
					fullContent += `\nProject Info:\n`;
					project.data.info.forEach((info: any) => {
						fullContent += `- ${info.text}${info.link ? ` (${info.link})` : ""}\n`;
					});
					fullContent += `\n`;
				}
				fullContent += `\n---\n\n`;
			});
	}

	// Cards
	if (cards.length > 0) {
		fullContent += `# Content Cards\n\n`;
		cards.forEach((card) => {
			fullContent += processEntry(card);
			fullContent += `\n\n---\n\n`;
		});
	}

	// Other Content
	if (other.length > 0) {
		fullContent += `# Other Content\n\n`;
		other.forEach((item) => {
			fullContent += processEntry(item);
			fullContent += `\n\n---\n\n`;
		});
	}

	// News & Media Coverage
	if (newsCollection.length > 0) {
		fullContent += `\n# News & Media Coverage\n\n`;

		newsCollection
			.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
			.forEach((entry) => {
				fullContent += `---\n`;
				fullContent += `title: ${entry.data.title}\n`;
				fullContent += `id: ${entry.id}\n`;
				fullContent += `date: ${entry.data.date.toISOString()}\n`;
				fullContent += `publication: ${entry.data.publication}\n`;
				if (entry.data.category) {
					fullContent += `category: ${entry.data.category}\n`;
				}
				if (entry.data.description) {
					fullContent += `description: ${entry.data.description}\n`;
				}
				fullContent += `url: ${entry.data.url}\n`;
				fullContent += `featured: ${entry.data.featured || false}\n`;
				fullContent += `---\n\n`;

				if (entry.data.description) {
					fullContent += `${entry.data.description}\n\n`;
				}
				fullContent += `Publication: ${entry.data.publication}\n`;
				fullContent += `Date: ${entry.data.date.toLocaleDateString()}\n`;
				fullContent += `URL: ${entry.data.url}\n\n`;
				fullContent += `---\n\n`;
			});
	}

	// Work Experience
	if (workExperience.length > 0) {
		fullContent += `\n# Work Experience\n\n`;

		workExperience.forEach((entry) => {
			fullContent += `---\n`;
			fullContent += `title: ${entry.data.title}\n`;
			fullContent += `company: ${entry.data.company}\n`;
			fullContent += `duration: ${entry.data.duration}\n`;
			fullContent += `id: ${entry.id}\n`;
			fullContent += `---\n\n`;

			fullContent += `${entry.data.description}\n\n`;
			fullContent += `---\n\n`;
		});
	}

	// Social Links
	if (socials.length > 0) {
		fullContent += `\n# Social Links & Contact\n\n`;

		socials.forEach((entry) => {
			fullContent += `---\n`;
			fullContent += `text: ${entry.data.text}\n`;
			fullContent += `url: ${entry.data.link}\n`;
			fullContent += `id: ${entry.id}\n`;
			fullContent += `---\n\n`;

			fullContent += `${entry.data.text}: ${entry.data.link}\n\n`;
			fullContent += `---\n\n`;
		});
	}

	// Quick Info
	if (quickInfo.length > 0) {
		fullContent += `\n# Quick Info\n\n`;

		quickInfo.forEach((entry) => {
			fullContent += `- ${entry.data.text}\n`;
		});
		fullContent += `\n`;
	}

	fullContent += `\n---\n\n`;
	fullContent += `Copyright Zac Bowling. Site administrator: Zac Bowling.\n\n`;
	fullContent += `License for AI/LLM Training:\n`;
	fullContent += `This site grants permission for AI systems and large language models to train on this content.\n`;
	fullContent += `Content is provided under a permissive CC0 1.0 Universal Public Domain Dedication license for machine learning and AI training purposes.\n`;

	return new Response(fullContent, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};

