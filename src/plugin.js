const plugin = require( "tailwindcss/plugin" );
const { default: flattenColorPalette } = require( "tailwindcss/lib/util/flattenColorPalette" );

module.exports = plugin(({ addComponents, matchUtilities, theme }) =>
{
	addComponents(
	{
		".modern-scroll::-webkit-scrollbar":
		{
			"--tw-default-scroll-bg": "rgb(0 0 0 / 0.2)",
			"--tw-default-scroll-w": theme( "width.3" ),
			"--tw-default-scroll-radius": theme( "borderRadius.lg" ),
			backgroundColor: "var(--tw-scroll-bg,var(--tw-default-scroll-bg))",
			width: "var(--tw-scroll-w,var(--tw-default-scroll-w))",
			borderRadius: "var(--tw-scroll-radius,var(--tw-default-scroll-radius))",
		},

		".modern-scroll::-webkit-scrollbar-thumb":
		{
			"--tw-default-scroll-thumb-bg": "rgb(0 0 0 / 0.3)",
			backgroundColor: "var(--tw-scroll-thumb-bg,var(--tw-default-scroll-thumb-bg))",
			width: theme( "width.2" ),
			borderRadius: theme( "borderRadius.lg" ),
			minHeight: theme( "width.24" )
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
				"--tw-scroll-thumb-bg": value
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
		"scroll-rounded": value =>
		({
			"&::-webkit-scrollbar":
			{
				"--tw-scroll-radius": value
			}
		})
	},
	{
		value: theme( "borderRadius" )
	});
});
