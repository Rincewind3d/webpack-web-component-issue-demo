# Webpack web component css

This demo shows that is currently not possible to add in a Web Component a CSS file reference from webpack when using an extract css plugin and the html plugin.

A imported css file is always added automatically to the body. For web components it is imported that the css file link reference is inside the shadow DOM.

I didn't include any polyfill, so this demo will currently run only in Chrome.

## Result

This is what we get: `myWebComponent.css` is bundeld into the css file of the apps body.

`.myColor` of `myWebComponent.css` overwrites `app.css`.

The text-color of the web component is still black, because the CSS is scoped from the shadow DOM.

![](./doc/current_result.png)

This is how it should look like, when `myWebComponent.css` would be linked inside of `<my-component>`

![](./doc/expected_result.png)

