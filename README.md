# js-create-element-buider
A builder for create elements in js that needs to be created by 'createElement' and a chainable DOM Element Creator.

## Overview

The `create` function is a lightweight utility for dynamically creating HTML and SVG elements with a **fluent, chainable API**. It allows you to set attributes, add event listeners, and append child elements efficiently.

## Features

- **Chainable API** for concise element creation
- **Supports all common HTML & SVG attributes**
- **Event listeners included** (e.g., `click`, `input`, `keydown`)
- **Automatic attribute handling** using `setAttribute`
- **Works with both HTML and SVG elements**

## Installation

No installation required! Simply include the function in your JavaScript project.

```js
import { create } from 'js-create-element-buider';
```

## Usage

### Create a Button

```js
const button = create('button')
    .id('my-button')
    .class('btn btn-primary')
    .innerText('Click Me')
    .click(() => alert('Button Clicked!'))
    .getElement();

document.body.appendChild(button);
```

### Create an Input Field

```js
const input = create('input')
    .type('text')
    .placeholder('Enter your name')
    .style('border: 1px solid #ccc; padding: 5px;')
    .input(event => console.log(event.target.value))
    .getElement();

document.body.appendChild(input);
```

### Create an SVG Element

```js
const svg = create('svg')
    .xmlns('http://www.w3.org/2000/svg')
    .viewBox('0 0 100 100')
    .width(100)
    .height(100)
    .append(
        create('circle')
            .cx(50).cy(50).r(40)
            .fill('red')
            .getElement()
    )
    .getElement();

document.body.appendChild(svg);
```

## License

This project is licensed under the **MIT License**. Feel free to use and modify it!

