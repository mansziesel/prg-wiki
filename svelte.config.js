// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

export default {
	kit: {
		prerender: {
			default: true
		},
		adapter: adapter({
			// prerender: true
			edge: true
			// split: true
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
