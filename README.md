# Tailwind Modern Scrollbars
This plugin provides dynamic directives that allow you to format scrollbars and scroll thumbs in your projects that use the tailwind framework.

### installation
First, you have to download the plugin to your project.

`npm i tailwind-modern-scroll -D`

### configuration
You need to add the plugin to the main tailwind configuration file.

`your-project/tailwind.config.js`
```js
const  modernScroll  =  require( "tailwind-modern-scroll" );

module.exports  =
{
	// other configs...
	
	plugins:
	[
		modernScroll,
		// ...other plugins
	],
	
	// ...other configs
}
```

## Usage
If you prefer to use VS Code and installed [tailwind intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension our directives will suggest to you in it.

### base class
First of all you have to add `modern-scroll` base class to your items that have scroll bars. This provides the basic features that meet the minimum requirements for the scrollbar to look modern. 

```html
<div class="h-96 w-full overflow-auto modern-scroll"></div>
```

### coloring
You can change both the scroll bar background and the scroll thumb background colors with theme colors or direct colors.

```html
<div class="... modern-scroll scroll-sky-100 thumb-[#fc0]"></div>
```

You can even use opacity modifiers too.

```html
<div class="... scroll-[#000]/20 thumb-[#000]/20"></div>
```

### width
You can only change scroll wrapper width and not thumb's.

```html
<div class="... scroll-w-10"></div>
```

### thumb height limiting
You can specify the minimum and maximum height of the slider.

```html
<div class="... thumb-min-h-10 thumb-max-h-20"></div>
```

### rounding
You can round the edges both of the scroll wrapper and the thumb.

```html
<div class="... scroll-round-full thumb-round-full"></div>
```
