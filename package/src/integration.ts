import type { AstroIntegration } from 'astro';
import { viteVirtualModulePluginBuilder } from './utils/virtual-module-plugin-builder';
import { z } from 'astro/zod'; 

const openGraphOptionsSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});

export const optionsSchema = z.object({
  name: z.string(),
  themeColor: z.string().optional(),
  twitterHandle: z.string().optional(),
  openGraph: z.object({
    home: openGraphOptionsSchema,
  }),
});

export default function integration(options: z.infer<typeof optionsSchema>): AstroIntegration {
  const validatedOptions = optionsSchema.parse(options);

	const globals = viteVirtualModulePluginBuilder('spectre:globals', 'spectre-theme-globals', `
    export const name = ${JSON.stringify(validatedOptions.name)};
    export const themeColor = ${JSON.stringify(validatedOptions.themeColor ?? '#1B4332')};
    export const twitterHandle = ${JSON.stringify(validatedOptions.twitterHandle)};
    export const openGraph = {
      home: ${JSON.stringify(validatedOptions.openGraph.home)},
    };
  `);

	return {
		name: 'spectre-theme',
		hooks: {
			'astro:config:setup': ({ updateConfig }) => {
				updateConfig({
					vite: {
						plugins: [
              globals(),
            ],
					},
				});
			},
		},
	};
}
