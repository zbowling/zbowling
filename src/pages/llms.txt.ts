import { getCollection, getEntry } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
	let posts: Awaited<ReturnType<typeof getCollection>> = [];
	try { posts = await getCollection("posts"); } catch {}
	const projects = await getCollection("projects");
	const newsCollection = await getCollection("news");
	const workExperience = await getCollection("workExperience");
	const socials = await getCollection("socials");
	const cards = await getCollection("cards");
	const about = await getEntry("other", "about");

	const siteUrl = site?.toString() || "https://zacbowling.com";

	let content = `# Zac Bowling\n\n`;
	content += `Software engineer, political activist, affordable housing advocate. Alameda, CA. ${siteUrl}\n\n`;

	content += `## Site Pages\n\n`;
	content += `- [Home](${siteUrl})\n`;
	content += `- [Engineering](${siteUrl}engineering) - Tech career, work experience, patents\n`;
	content += `- [Advocacy](${siteUrl}advocacy) - Housing advocacy, civic leadership, political engagement\n`;
	content += `- [Media & Content](${siteUrl}media) - Content creation, press coverage, public appearances\n`;
	content += `- [Blog](https://sub.zacbowling.com/) - Substack blog\n`;
	content += `- [Projects](https://zbowling.github.io) - Open source projects\n`;
	content += `\n`;

	// About
	if (about) {
		content += `## About\n\n`;
		let aboutBody = about.body || "";
		// Remove MDX imports and JSX components
		aboutBody = aboutBody.replace(/import\s+.*\s+from\s+['"].*['"];?\s*/g, "");
		aboutBody = aboutBody.replace(/<[A-Z]\w+\s*\/?>/g, "");
		aboutBody = aboutBody.replace(/<\/[A-Z]\w+>/g, "");
		content += `${aboutBody}\n\n`;
	}

	// Cards
	if (cards.length > 0) {
		content += `## Content Cards\n\n`;
		cards
			.sort((a, b) => (a.data.index || 999) - (b.data.index || 999))
			.forEach((card) => {
				let cardBody = card.body || "";
				// Remove MDX imports and JSX components
				cardBody = cardBody.replace(/import\s+.*\s+from\s+['"].*['"];?\s*/g, "");
				cardBody = cardBody.replace(/<[A-Z]\w+\s*\/?>/g, "");
				cardBody = cardBody.replace(/<\/[A-Z]\w+>/g, "");
				content += `### ${card.data.title}\n\n${cardBody}\n\n`;
			});
	}

	// Blog Posts
	if (posts.length > 0) {
		content += `## Blog Posts\n\n`;
		content += `Blog is hosted on Substack: https://sub.zacbowling.com/\n\n`;
		posts
			.filter((post) => !post.data.draft)
			.sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime())
			.forEach((post) => {
				content += `- ${post.data.title} - ${post.data.description} (${post.data.createdAt.toLocaleDateString()})\n`;
			});
		content += `\n`;
	}

	// Projects
	if (projects.length > 0) {
		content += `## Projects\n\n`;
		content += `Projects are hosted at: https://zbowling.github.io\n\n`;
		projects
			.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
			.forEach((project) => {
				const link = project.data.link ? ` [${project.data.link}](${project.data.link})` : "";
				content += `- ${project.data.title} - ${project.data.description}${link} (${project.data.date.toLocaleDateString()})\n`;
			});
		content += `\n`;
	}

	// News & Media Coverage
	if (newsCollection.length > 0) {
		content += `## News & Media Coverage\n\n`;
		const byCategory = newsCollection.reduce(
			(acc, entry) => {
				const category = entry.data.category || "Other";
				if (!acc[category]) {
					acc[category] = [];
				}
				acc[category].push(entry);
				return acc;
			},
			{} as Record<string, typeof newsCollection>,
		);

		Object.entries(byCategory)
			.sort(([a], [b]) => a.localeCompare(b))
			.forEach(([category, items]) => {
				content += `### ${category}\n\n`;
				items
					.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
					.forEach((entry) => {
						const desc = entry.data.description ? ` - ${entry.data.description}` : "";
						content += `- [${entry.data.title}](${entry.data.url}) - ${entry.data.publication} (${entry.data.date.toLocaleDateString()})${desc}\n`;
					});
				content += `\n`;
			});
	}

	// Work Experience
	if (workExperience.length > 0) {
		content += `## Work Experience\n\n`;
		workExperience.forEach((entry) => {
			content += `- **${entry.data.title}** at ${entry.data.company} (${entry.data.duration}) - ${entry.data.description}\n`;
		});
		content += `\n`;
	}

	// Social Links
	if (socials.length > 0) {
		content += `## Social Links\n\n`;
		socials.forEach((entry) => {
			content += `- [${entry.data.text}](${entry.data.link})\n`;
		});
		content += `\n`;
	}

	content += `---\n\n`;
	content += `Copyright Zac Bowling. CC0 1.0 Universal Public Domain Dedication for AI/LLM training.\n`;

	return new Response(content, {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
};

