import type { ThemeJson } from './theme.d.js';

const config: ThemeJson = {
	"$schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 3,
	"settings": {
		"appearanceTools": true,
		"useRootPaddingAwareAlignments": true,
		"border": {
			"color": true,
			"radius": true,
			"style": true,
			"width": true
		},
		"color": {
			"defaultDuotone": true,
			"custom": true,
			"customDuotone": true,
			"customGradient": true,
			"defaultGradients": true,
			"defaultPalette": true,
			"link": true,
			"palette": [],
			"text": true,
			"heading": true
		},
		"custom": {
			"color": {}
		},
		"dimensions": {
			"aspectRatios": [],
			"aspectRatio": true,
			"defaultAspectRatios": true
		},
		"layout": {
			"allowEditing": true,
			"contentSize": "960px",
			"wideSize": "var:custom|layout|max-width|feature"
		},
		"position": {
			"sticky": false
		},
		"shadow": {
			"defaultPresets": true
		},
		"spacing": {
			"blockGap": true,
			"customSpacingSize": true,
			"defaultSpacingSizes": true,
			"units": [
				"rem",
				"%",
				"px",
                "vh",
                "vw",
			],
			"spacingSizes": []
		},
		"typography": {
			"writingMode": true,
			"customFontSize": true,
			"defaultFontSizes": true,
			"dropCap": true,
			"fluid": true,
			"fontFamilies": [
				{
					"fontFace": [
						{
							"fontFamily": "Roboto Flex",
							"fontStretch": "normal",
							"fontStyle": "normal",
							"src": [
								"file:./src/fonts/roboto-flex-v27-latin-regular.woff2"
							]
						}
					],
					"fontFamily": "'Roboto Flex', Roboto, 'Helvetica Neue', 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, sans-serif",
					"name": "Roboto Flex",
					"slug": "default"
				}
			],
			"fontSizes": [],
			"fontStyle": true,
			"fontWeight": true,
			"letterSpacing": true,
			"lineHeight": true,
			"textDecoration": true,
			"textTransform": true
		}
	},
	"styles": {
		"typography": {
			"fontFamily": "var:preset|font-family|default",
			"lineHeight": "normal"
		},
		"spacing": {
			"padding": {
				"right": "2rem",
				"left": "2rem"
			}
		},
		"elements": {
			"link": {
				"color": {
					"text": "inherit"
				},
				"typography": {
					"textDecoration": "underline"
				},
				":hover": {
					"typography": {
						"textDecoration": "none"
					}
				},
				":active": {
					"color": {
						"text": "inherit"
					}
				},
				":visited": {
					"color": {
						"text": "inherit"
					}
				}
			}
		}
	}
};

export default config;
