// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		browser: {
			// hydrate: false,
			// router: false
		},
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		vite: {
			optimizeDeps: {
				include: ['highlight.js', 'highlight.js/lib/core']
			}
		},
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};
