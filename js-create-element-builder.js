/**
 * Creates a new DOM element dynamically with chainable property and event methods.
 * Supports HTML and SVG attributes, as well as event handlers with both `onEvent` and `.event()` formats.
 *
 * @param {string} tag - The HTML or SVG tag name to create.
 * @returns {{
 *   class: (className: string) => returningObj,
 *   append: (child: HTMLElement) => returningObj,
 *   getElement: () => HTMLElement,
 *   id: (value: string) => returningObj,
 *   className: (value: string) => returningObj,
 *   style: (value: string) => returningObj,
 *   type: (value: string) => returningObj,
 *   placeholder: (value: string) => returningObj,
 *   innerText: (value: string) => returningObj,
 *   innerHTML: (value: string) => returningObj,
 *   title: (value: string) => returningObj,
 *   name: (value: string) => returningObj,
 *   value: (value: string) => returningObj,
 *   disabled: (value: boolean) => returningObj,
 *   readonly: (value: boolean) => returningObj,
 *   checked: (value: boolean) => returningObj,
 *   selected: (value: boolean) => returningObj,
 *   maxLength: (value: number) => returningObj,
 *   minLength: (value: number) => returningObj,
 *   src: (value: string) => returningObj,
 *   alt: (value: string) => returningObj,
 *   href: (value: string) => returningObj,
 *   target: (value: string) => returningObj,
 *   width: (value: string | number) => returningObj,
 *   height: (value: string | number) => returningObj,
 *   role: (value: string) => returningObj,
 *   tabIndex: (value: number) => returningObj,
 *   draggable: (value: boolean) => returningObj,
 *   contentEditable: (value: boolean) => returningObj,
 *   spellcheck: (value: boolean) => returningObj,
 *   wrap: (value: string) => returningObj,
 *   cols: (value: number) => returningObj,
 *   rows: (value: number) => returningObj,
 *   accept: (value: string) => returningObj,
 *   multiple: (value: boolean) => returningObj,
 *   pattern: (value: string) => returningObj,
 *   step: (value: string | number) => returningObj,
 *   min: (value: string | number) => returningObj,
 *   max: (value: string | number) => returningObj,
 *   autocomplete: (value: string) => returningObj,
 *   autofocus: (value: boolean) => returningObj,
 *   required: (value: boolean) => returningObj,
 *   ariaLabel: (value: string) => returningObj,
 *   ariaHidden: (value: boolean) => returningObj,
 *   ariaExpanded: (value: boolean) => returningObj,
 *   dataTest: (value: string) => returningObj,
 *   dataValue: (value: string) => returningObj,
 *   dataIndex: (value: string) => returningObj,
 *   dataType: (value: string) => returningObj,
 *   xmlns: (value: string) => returningObj,
 *   viewBox: (value: string) => returningObj,
 *   fill: (value: string) => returningObj,
 *   stroke: (value: string) => returningObj,
 *   strokeWidth: (value: string | number) => returningObj,
 *   transform: (value: string) => returningObj,
 *   x: (value: string | number) => returningObj,
 *   y: (value: string | number) => returningObj,
 *   cx: (value: string | number) => returningObj,
 *   cy: (value: string | number) => returningObj,
 *   r: (value: string | number) => returningObj,
 *   rx: (value: string | number) => returningObj,
 *   ry: (value: string | number) => returningObj,
 *   d: (value: string) => returningObj,
 *   points: (value: string) => returningObj,
 *   textAnchor: (value: string) => returningObj,
 *   dominantBaseline: (value: string) => returningObj,
 *   fontSize: (value: string | number) => returningObj,
 *   fontFamily: (value: string) => returningObj,
 *   letterSpacing: (value: string) => returningObj,
 *   wordSpacing: (value: string) => returningObj,
 *   alignmentBaseline: (value: string) => returningObj,
 *   clipPath: (value: string) => returningObj,
 *   clipRule: (value: string) => returningObj,
 *   mask: (value: string) => returningObj,
 *   vectorEffect: (value: string) => returningObj,
 *   fillRule: (value: string) => returningObj,
 *   fillOpacity: (value: string | number) => returningObj,
 *   strokeOpacity: (value: string | number) => returningObj,
 *   strokeMiterlimit: (value: string | number) => returningObj,
 *   click: (handler: (event: Event) => void) => returningObj,
 *   dblclick: (handler: (event: Event) => void) => returningObj,
 *   mousedown: (handler: (event: Event) => void) => returningObj,
 *   mouseup: (handler: (event: Event) => void) => returningObj,
 *   mousemove: (handler: (event: Event) => void) => returningObj,
 *   mouseover: (handler: (event: Event) => void) => returningObj,
 *   mouseout: (handler: (event: Event) => void) => returningObj,
 *   keydown: (handler: (event: KeyboardEvent) => void) => returningObj,
 *   keyup: (handler: (event: KeyboardEvent) => void) => returningObj,
 *   keypress: (handler: (event: KeyboardEvent) => void) => returningObj,
 *   change: (handler: (event: Event) => void) => returningObj,
 *   input: (handler: (event: Event) => void) => returningObj,
 *   focus: (handler: (event: FocusEvent) => void) => returningObj,
 *   blur: (handler: (event: FocusEvent) => void) => returningObj,
 *   submit: (handler: (event: Event) => void) => returningObj,
 *   reset: (handler: (event: Event) => void) => returningObj,
 *   drag: (handler: (event: DragEvent) => void) => returningObj,
 *   dragstart: (handler: (event: DragEvent) => void) => returningObj,
 *   dragend: (handler: (event: DragEvent) => void) => returningObj,
 *   dragover: (handler: (event: DragEvent) => void) => returningObj,
 *   dragenter: (handler: (event: DragEvent) => void) => returningObj,
 *   dragleave: (handler: (event: DragEvent) => void) => returningObj,
 *   drop: (handler: (event: DragEvent) => void) => returningObj,
 *   scroll: (handler: (event: Event) => void) => returningObj,
 *   wheel: (handler: (event: WheelEvent) => void) => returningObj,
 *   resize: (handler: (event: UIEvent) => void) => returningObj,
 *   contextmenu: (handler: (event: MouseEvent) => void) => returningObj,
 *   touchstart: (handler: (event: TouchEvent) => void) => returningObj,
 *   touchend: (handler: (event: TouchEvent) => void) => returningObj,
 *   touchmove: (handler: (event: TouchEvent) => void) => returningObj,
 *   touchcancel: (handler: (event: TouchEvent) => void) => returningObj
 * }: returningObj}
 */
function create(tag) {
    if (!tag) return;
    const elm = document.createElement(tag);
    const returningObj = {
        'class': className => {
            elm.classList.add(...className.split(' '));
            return returningObj;
        },
        append: child => { elm.appendChild(child); return returningObj; },
        getElement: () => elm
    };

    // Common attributes for all HTML elements
    let properties = [
        'id', 'className', 'style', 'type', 'placeholder', 'innerText', 'innerHTML', 'title', 'name',
        'value', 'disabled', 'readonly', 'checked', 'selected', 'maxLength', 'minLength', 'src',
        'alt', 'href', 'target', 'width', 'height', 'role', 'tabIndex', 'draggable', 'contentEditable',
        'spellcheck', 'wrap', 'cols', 'rows', 'accept', 'multiple', 'pattern', 'step', 'min', 'max',
        'autocomplete', 'autofocus', 'required', 'aria-label', 'aria-hidden', 'aria-expanded',
        'data-test', 'data-value', 'data-index', 'data-type'
    ];

    // SVG-Specific attributes
    const svgProperties = [
        'xmlns', 'viewBox', 'preserveAspectRatio', 'fill', 'stroke', 'stroke-width', 'stroke-linecap',
        'stroke-linejoin', 'stroke-dasharray', 'stroke-dashoffset', 'opacity', 'transform', 'x', 'y',
        'dx', 'dy', 'cx', 'cy', 'r', 'rx', 'ry', 'width', 'height', 'd', 'points', 'x1', 'y1', 'x2', 'y2',
        'pathLength', 'markerStart', 'markerMid', 'markerEnd', 'text-anchor', 'dominant-baseline',
        'font-size', 'font-family', 'letter-spacing', 'word-spacing', 'alignment-baseline', 'clip-path',
        'clip-rule', 'mask', 'shape-rendering', 'vector-effect', 'fill-rule', 'fill-opacity',
        'stroke-opacity', 'stroke-miterlimit'
    ];

    // If the tag is an SVG element, extend properties with SVG-specific attributes
    if (['svg', 'use', 'path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon', 'text', 'tspan', 'g', 'defs', 'marker', 'mask', 'pattern'].includes(tag)) {
        properties.push(...svgProperties);
    }

    // Assign properties dynamically
    properties.forEach(property => returningObj[property] = value => {
        elm[property] = value;
        return returningObj;
    });

    // List of event names
    const eventNames = [
        'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave',
        'keydown', 'keyup', 'keypress', 'change', 'input', 'focus', 'blur', 'submit', 'reset',
        'drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop',
        'scroll', 'wheel', 'resize', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'
    ];

    // Assign event handlers using both addEventListener and on-prefixed properties
    eventNames.forEach(event => {
        returningObj[event] = handler => {
            elm.addEventListener(event, handler);
            return returningObj;
        };
        returningObj[`on${event}`] = handler => {
            elm[`on${event}`] = handler;
            return returningObj;
        };
    });

    return returningObj;
}
