import type { ThemeJson } from '../../../theme.js';

const config: Partial<ThemeJson> = {
	"settings": {
		"blocks": {
			"core/post-featured-image": {}
		}
	},
	"styles": {
		"blocks": {
			"core/post-featured-image": {
                 border: {
                    radius: '10px',
                },
                shadow: "25px 25px 50px rgba(0, 0, 0, .8)",
            }
		}
	}
};

export default config;
