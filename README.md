
<img src="https://i.imgur.com/Hd9hIsT.jpg">

# DOM "Menu" Lab - Part 1

## Intro

In the _Intro to the DOM_ lesson we selected, manipulated and created DOM elements - this lab provides practice doing the same.

This is the first of a two-part lab that builds a menu bar with a slide-down submenu.

> 👀 Note:  Several of the tasks in this lab would be better done upfront in the markup or CSS instead of using JS, however the goal of this lab is to provide practice modifying the DOM using JS. In your projects, if the HTML or CSS is known in advance and/or static (unchanging), be sure to code it in HTML and CSS, not JS!

### This lab, combined with Part 2, is a DELIVERABLE

## Setup

1. Create `index.html`, `script.js`, and `style.css` files in a folder named "DOM Lab".

2. Update the `<body>` element in the **index.html** to this:

	```html
	    <link rel="stylesheet" href="style.css">
	    <script src="script.js" defer></script>
	</head>
	<body>
	   <header>
		<nav id="top-menu"></nav>
	   </header>
	   <main></main>
	</body>
	```

	> ❗️ Note: The HTML is complete - **DO NOT** modify it in any way, do not add any classes, ids or anything.

3. Add the following CSS within **style.css**:

	```css
	* {
	  box-sizing: border-box;
	}
	
	/* CSS Custom Properties */
	:root {
	  --main-bg: #4a4e4d;
	  --top-menu-bg: #0e9aa7;
	  --sub-menu-bg: #3da4ab;
	}
	
	body {
	  font-family: Tahoma, Geneva, sans-serif;
	  height: 100vh;
	  margin: 0;
	  display: grid;
	  grid-template-rows: 3rem auto;
	  color: white;
	}
	
	.flex-ctr {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	
	.flex-around {
	  display: flex;
	  justify-content: space-around;
	  align-items: center;
	}
	
	nav a {
	  line-height: 3rem;
	  padding: 0 1rem;
	  text-transform: uppercase;
	  text-decoration: none;
	  color: white;
	}
	
	#top-menu a:hover {
	  background-color: var(--sub-menu-bg);
	}
	```

	> ❗️ Note: The CSS is complete - **DO NOT** modify it in any way.
	
	Take five minutes to familiarize yourself with [CSS Custom Properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - they are an amazing new addition to CSS. If you're familiar with using variables with SASS/LESS pre-processors, CSS Custom Properties are similar, but far more powerful because they are dynamic (their values can be changed during runtime) - and they are built into the CSS language!

## Tasks

#### Task 1.0

Select and cache the `<main>` element in a variable named `mainEl`.

#### Task 1.1

Set the background color of `mainEl` using the `--main-bg` CSS custom property.

**Hint:** Assign a string that uses the CSS `var()` function like this:<br>`'var(--main-bg)'`

#### Task 1.2

Set the content of `mainEl` to `<h1>SEI Rocks!</h1>`.

#### Task 1.3

Add a class of `flex-ctr` to `mainEl`.

**Hint:** [Element.classList API](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

#### Progress Check:

<img src="https://i.imgur.com/6y10M6X.png">

#### Task 2.0

Select and cache the `<nav id="top-menu">` element in a variable named `topMenuEl`.

#### Task 2.1

Set the height `topMenuEl` element to be `100%`.

#### Task 2.2

Set the background color of `topMenuEl` using the `--top-menu-bg` CSS custom property.

#### Task 2.3

Add a class of `flex-around` to `topMenuEl`.

#### Progress Check:

<img src="https://i.imgur.com/tzYjw8n.png">

#### Task 3.0

Copy the following data structure to the top of **script.js**:

```js
// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];
```

#### Task 3.1

Iterate over the entire `menuLinks` array and for each "link" object:

- Create an `<a>` element.

- On the new element, add an `href` attribute with its value set to the `href` property of the "link" object.

- Set the new element's content to the value of the `text` property of the "link" object.

- Append the new element to the `topMenuEl` element.

#### Congrats!

<img src="https://i.imgur.com/pWu6yHO.png">

# DOM "Menu" Lab - Part 2

## Intro

In the _DOM Events_ lesson we saw how to run a function, i.e., an event listener, when an event, such as `'click'`, was dispatched.

This lab continues where Part 1 left off and provides practice defining event listeners used to manipulate the DOM in response to user interaction.

It also provides additional practice styling DOM elements dynamically using JavaScript.


## Setup

1. Continue to use the files you made in Part 1.  This is what you should have thus far:

<img src="https://i.imgur.com/pWu6yHO.png">

2. Insert an additional `<nav>` element within the `<header>` element in **index.html**:

	```html
	<header>
	  <nav id="top-menu"></nav>
	  <!-- Add the <nav> element below -->
	  <nav id="sub-menu"></nav>
	</header>
	```

	> ❗️ Note: Other than the above changes, **DO NOT** modify **index.html** in any way.

3. Add the following CSS to the bottom of **style.css**:

	```css
	header, #top-menu {
	  position: relative;
	}
	
	#top-menu {
	  z-index: 20;
	}
	
	#sub-menu {
	  width: 100%;
	  z-index: 10;
	  transition: top 0.5s ease-out;
	}
	
	#sub-menu a:hover {
	  background-color: var(--top-menu-bg);
	}
	
	nav a.active {
	  background-color: var(--sub-menu-bg);
	  color: var(--main-bg);
	}
	```

	> ❗️ Note: Other than the above changes, **DO NOT** modify **style.css** in any way.

## Tasks

> Tasks 1.0 thru 3.1 were completed in Part 1.

#### Task 4.0

Select and cache the `<nav id="sub-menu">` element in a variable named `subMenuEl`.

#### Task 4.1

Set the height `subMenuEl` element to be `100%`.

#### Task 4.2

Set the background color of `subMenuEl` using the `--sub-menu-bg` CSS custom property.

#### Task 4.3

Add the class of `flex-around` to the `subMenuEl` element.

#### Progress Check:

<img src="https://i.imgur.com/qkhBnoY.png">

#### Task 4.4

Set the CSS `position` property of `subMenuEl` to the value of `absolute`.

#### Task 4.5

Set the CSS `top` property of `subMenuEl` to the value of `0`.

#### Task 5.0

**Replace** the `menuLinks` array in **script.js** with this version that adds sub-menu data:

```js
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
```

#### Task 5.1

Select and cache all of the `<a>` elements inside of `topMenuEl` in a variable named `topMenuLinks`.

Declare a global `showingSubMenu` variable and initialize it to `false`;

#### Task 5.2

Attach a delegated `'click'` event listener to `topMenuEl`.

The first line of code of the event listener function should call the event object's `preventDefault()` method.

The second line of code function should immediately return if the element clicked was not an `<a>` element.

> 👀 Hint: DOM elements have a [tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName) property.

`console.log` the content of the `<a>` to verify the handler is working.

#### Progress Check

Ensure that clicking **ABOUT**, **CATALOG**, etc. logs out **about**, **catalog**, etc. when a link is clicked. 

Clicking anywhere other than on a link should do nothing thanks to the second line of code written in Task 5.2!

#### Task 5.3

This feature "deselects" the menu item if it's clicked when it's currently active, resulting in the sub-menu sliding up as well.

Next in the event listener, **if** the clicked `<a>` link has a class of `active`:

1. Remove the `active` class from the clicked `<a>` element.
2. Set the `showingSubMenu` to `false`.
3. Set the CSS `top` property of `subMenuEl` to `0`.
4. `return;` from the event listener function.

#### Task 5.4

At this point, a new menu item has been clicked and it's time to "reset" any currently active menu item...

Add code to the bottom of the the event listener that iterates over each `<a>` element in `topMenuLinks` and **removes** the class name of `active`, regardless of whether the `<a>` element has a class of `active` or not.

**Hint:** Removing a non-existent class from an element does not cause an error, so just remove it!

#### Task 5.5

Next, the event listener should **add** a class name of `active` to the `<a>` element that was clicked.

#### Task 5.6

Next, add code in the event listener that sets `showingSubMenu` to `true` if the clicked `<a>` element's "link" object within `menuLinks` has a `subLinks` property (all do, except for the "link" object for **ABOUT**), otherwise, set it to `false`.

**Hint:** Saving the "link" object in a variable will come in handy for passing its `subLinks` array in Task 5.7

#### Progress Check

Clicking any of the links should make that link "active" and clear the others:

<img src="https://i.imgur.com/k1yDkaq.png">

Clicking an "active" link should clear that link.

#### Task 5.7

Next in the event listener...

If `showingSubMenu` is `true`:

1. Call a `buildSubMenu` function passing to it the `subLinks` array for the clicked `<a>` element.
2. Set the CSS `top` property of `subMenuEl` to `100%`.

Otherwise (`showingSubMenu` is `false`):

1. Set the CSS `top` property of `subMenuEl` to `0`.
2. Since the **About** link has been clicked, set `mainEl.innerHTML` to `'<h1>about</h1>'`.

#### Task 5.8

Code the `buildSubMenu` function so that it:

1. Clears the contents of `subMenuEl`.
2. Iterates over the `subLinks` array passed as an argument; and for each "link" object:
	- Create an `<a>` element.
	- On the new element, add an `href` attribute with its value set to the `href` property of the "link" object.
	- Set the new element's content to the value of the `text` property of the "link" object.
	- Append the new element to the `subMenuEl` element.


#### Progress Check

Take the menu for a test drive!

<img src="https://i.imgur.com/5p0uTk6.png">

#### Task 6.0

Attach a delegated 'click' event listener to `subMenuEl`.

The first line of code of the event listener function should call the event object's `preventDefault()` method.

The second line of code function should immediately return if the element clicked was not an `<a>` element.

`console.log` the content of the `<a>` to verify the handler is working.

#### Task 6.1

Next, `subMenuEl`'s event listener should:

1. Set `showingSubMenu` to `false`.
2. Set the CSS `top` property of `subMenuEl` to `0`.

#### Task 6.2

Next, `subMenuEl`'s event listener should remove the class name of `active` from each `<a>` element in `topMenuLinks` - whether the `active` class exists or not.

#### Task 6.3

Next, `subMenuEl`'s event listener should update the contents of `mainEl` to the contents of the `<a>` element, within an `<h1>`, clicked within `subMenuEl`.

#### Congrats!

<img src="https://i.imgur.com/6SFmHl0.png">


