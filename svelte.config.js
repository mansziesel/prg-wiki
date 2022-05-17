import preprocess from 'svelte-preprocess';
// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter({
			prerender: true,
			edge: true
		}),
		vite: {
			optimizeDeps: {
				include: ['highlight.js', 'highlight.js/lib/core']
			},

			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		},
		prerender: {
			default: true
		}
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	]
};
