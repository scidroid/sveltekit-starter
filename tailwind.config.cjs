const config = {
	mode: 'jit',
	important: true,
	darkMode: 'class',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {},
	variants: {
		extend: {
			backgroundColor: ['checked'],
			borderColor: ['checked'],
			inset: ['checked'],
			zIndex: ['hover', 'active']
		}
	},
	plugins: [],
	future: {
		purgeLayersByDefault: true
	}
};

module.exports = config;
