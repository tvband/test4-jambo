import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		type1: defineCollection({
			type: 'page',
			source: '1.type1/*.md',
			schema: z.object({
				draft: z.boolean().default(false),//真偽値スイッチ
				category: z.enum(['Alps', 'Himalaya', 'Pyrenees']).optional(),//プルダウン
				date: z.date(),//デートピッカー
				image: z.object({
					src: z.string().editor({ input: 'media' }),//メディア選択
					alt: z.string(),
				}),
				//slug: z.string().editor({ hidden: true }),//これを入れるとパースエラーになる
				icon: z.string().optional().editor({ input: 'icon' }),//アイコン選択
				authors: z.array(z.object({//add itemで下記1セットで追加できる
					slug: z.string(),
					username: z.string(),
					name: z.string(),
					to: z.string(),
					avatar: z.object({
						src: z.string(),
						alt: z.string(),
					}),
				})),
				tags: z.array(z.string()),
			}),
		}),
	}
})