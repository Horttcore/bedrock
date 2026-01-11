import type { ThemeJson } from '../../../theme.d.js';

const config: Partial<ThemeJson> = {
	"settings": {
		"blocks": {
			"core/heading": {

            }
		}
	},
	"styles": {
		"blocks": {
			"core/heading":
                color: {
                    text: 'white',
                },
                spacing: {
                    margin: {
                        top: '0',
                        bottom: '0',
                    },
                },

		}
	}
};

export default config;
