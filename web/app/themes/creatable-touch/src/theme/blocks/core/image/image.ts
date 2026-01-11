import type { ThemeJson } from '../../../theme.d.js';

const config: Partial<ThemeJson> = {
	"settings": {
		"blocks": {
			"core/image": {}
		}
	},
	"styles": {
		"blocks": {
			"core/image": {
                border: {
                    radius: '10px',
                },
                shadow: "25px 25px 50px rgba(0, 0, 0, .8)",
            }
		}
	}
};

export default config;
