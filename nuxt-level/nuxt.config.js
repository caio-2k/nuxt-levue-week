export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'movue-it-nuxt',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap' },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/css/global.css',
		'~/assets/css/components.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// Utilizando sintaxe de array, passando uma configuração
		// para o modulo de cookie, objeto com alias cookiz, vai servir
		// para gerar dentro da aplicação um objeto chamado cookiz que
		// possui todos os metodos e props que o pacote tem para o
		// gerenciamento de cookies
		['cookie-universal-nuxt', { alias: 'cookiz' }],
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},

	tailwindcss: {
		// O que o tailwind gerou pra mim, deixa desabilitado
		viewer: false,
	},
};
