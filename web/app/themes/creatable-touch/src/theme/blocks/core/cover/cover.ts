import type { ThemeJson } from '../../../theme.d.js';

const config: Partial<ThemeJson> = {
	"settings": {
		"blocks": {
			"core/cover": {}
		}
	},
	"styles": {
		"blocks": {
			"core/cover": {
                border: {
                    radius: '10px',
                },
                                shadow: "25px 25px 50px rgba(0, 0, 0, .5)",

            }
		}
	}
};

export default config;
