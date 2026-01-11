import type { ThemeJson } from '../../../theme.d.js';

const config: Partial<ThemeJson> = {
	"settings": {
		"blocks": {
			"core/paragraph": {
            }
		}
	},
	"styles": {
		"blocks": {
			"core/paragraph": {
                color: {
                    text: 'white'
                },
                css: "& {text-wrap: balance}",
            }
		}
	}
};

export default config;
