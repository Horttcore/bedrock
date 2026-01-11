import type { ThemeJson } from '../../../theme.d.js';

const config: Partial<ThemeJson> = {
	"settings": {
		"blocks": {
			"core/post-title": {}
		}
	},
	"styles": {
		"blocks": {
			"core/post-title": {
                color: {
                    text: 'white',
                },
            }
		}
	}
};

export default config;
