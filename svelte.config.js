import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			trailingSlash: 'always',
			pages: 'public',
		}),
	}
};

export default config;
