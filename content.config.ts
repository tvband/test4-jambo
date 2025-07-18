import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		type1: defineCollection({
			type: 'page',
			source: '1.type1/*.md',
			// メタデータの追加
			schema: z.object({
				date: z.string()
			})
		}),
	}
})