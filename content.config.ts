import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: 'page',
			source: '**/*.md'
		}),
		type1: defineCollection({
			type: 'page',
			source: '1.type1/*.md'
		}),
	}
})