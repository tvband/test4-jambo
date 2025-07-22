import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		type1: defineCollection({
			type: 'page',
			source: '1.type1/*.md',
			schema: z.object({
				draft: z.boolean().default(false),
				category: z.enum(['Alps', 'Himalaya', 'Pyrenees']).optional(),
				date: z.date(),
				image: z.object({
					src: z.string().editor({ input: 'media' }),
					alt: z.string(),
				}),
				icon: z.string().optional().editor({ input: 'icon' }),
				
			}),
		}),
	}
})