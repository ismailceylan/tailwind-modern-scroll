const plugin = require( "tailwindcss/plugin" );
const { default: flattenColorPalette } = require( "tailwindcss/lib/util/flattenColorPalette" );

module.exports = plugin(({ addComponents, matchUtilities, theme }) =>
{
	addComponents(
	{
		".modern-scroll::-webkit-scrollbar":
		{
			backgroundColor: "var(--tw-scroll-bg,rgb(0 0 0 / 0.2))",
			width: `var(--tw-scroll-w,${ theme( "width.3" )})`,
			height: `var(--tw-scroll-h,${ theme( "height.3" )})`,
			borderRadius: `var(--tw-scroll-radius,${ theme( "borderRadius.lg" )})`,
		},

		".modern-scroll::-webkit-scrollbar-thumb":
		{
			backgroundColor: "var(--tw-thumb-bg,rgb(0 0 0 / 0.3))",
			borderRadius: `var(--tw-thumb-radius,${ theme( "borderRadius.lg" )})`,
		}
	});

	matchUtilities(
	{
		"scroll": value =>
		({
			"&::-webkit-scrollbar":
			{
				"--tw-scroll-bg": value
			}
		}),

		"thumb": value =>
		({
			"&::-webkit-scrollbar-thumb":
			{
				"--tw-thumb-bg": value
			}
		})
	},
	{
		values: flattenColorPalette( theme( "colors" )),
	});

	matchUtilities(
	{
		"scroll-w": value =>
		({
			"&::-webkit-scrollbar":
			{
				"--tw-scroll-w": value
			}
		})
	},
	{
		values: theme( "width" )
	});

	matchUtilities(
	{
		"scroll-h": value =>
		({
			"&::-webkit-scrollbar":
			{
				"--tw-scroll-h": value
			}
		})
	},
	{
		values: theme( "height" )
	});
	
	matchUtilities(
	{
		"thumb-min-h": value =>
		({
			"&::-webkit-scrollbar-thumb":
			{
				minHeight: value
			}
		}),
		
		"thumb-max-h": value =>
		({
			"&::-webkit-scrollbar-thumb":
			{
				maxHeight: value
			}
		})
	},
	{
		values: theme( "height" )
	});

	matchUtilities(
	{
		"scroll-rounded": value =>
		({
			"&::-webkit-scrollbar":
			{
				"--tw-scroll-radius": value
			}
		}),

		"thumb-rounded": value =>
		({
			"&::-webkit-scrollbar-thumb":
			{
				"--tw-thumb-radius": value
			}
		})
	},
	{
		values: theme( "borderRadius" )
	});
});
