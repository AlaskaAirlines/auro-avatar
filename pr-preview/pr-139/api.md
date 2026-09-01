<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-avatar

The `auro-avatar` element provides a container to display an avatar image.

### Properties & Attributes

| Properties  | Attributes  | Modifiers | Type         | Default | Description                                                                                                                                         |
| ----------- | ----------- | --------- | ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| alt         | alt         |           | string       |         | Provide string for element alt text.                                                                                                                |
| ariaVisible | ariaVisible |           | boolean      |         | If true, reveals content to screen reader.                                                                                                          |
| code        | code        |           | string       |         | Provide airport code for requested airport image.                                                                                                   |
| img         | img         |           | string       |         | Provide location or URL for image to be used.                                                                                                       |
| tail        | tail        |           | string       |         | **DEPRECATED**: Provides a tail logo for the requested airline. Use the [auro-tail](https://github.com/AlaskaAirlines/auro-tail) component instead. |
| type        | type        |           | `sm` \| `md` |         | Modifiers for size of avatar.                                                                                                                       |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-avatar></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-avatar></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Accessibility Options

The `auro-avatar` element is hidden from screen readers by default. The placement of altText using the `alt` attribute in conjunction with the `ariaVisible` attribute will make the avatar visible to screen readers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/accessibility.html) -->
  <!-- The below content is automatically added from ./../apiExamples/accessibility.html -->
  <auro-avatar ariaVisible alt="beautiful image of the sky"></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/accessibility.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/accessibility.html -->

```html
<auro-avatar ariaVisible alt="beautiful image of the sky"></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Airport Code

Use the `code` attribute to specify the airport code for the desired avatar image. The component will render the corresponding avatar image based on the provided airport code.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/code.html) -->
  <!-- The below content is automatically added from ./../apiExamples/code.html -->
  <auro-avatar code="sea"></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/code.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/code.html -->

```html
<auro-avatar code="sea"></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom Images

The `auro-avatar` element supports placement of custom images using the `img` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom-image.html) -->
  <!-- The below content is automatically added from ./../apiExamples/custom-image.html -->
  <auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=1" type="md"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=2" type="sm"></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom-image.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/custom-image.html -->

```html
<auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
<auro-avatar img="https://picsum.photos/200?random=1" type="md"></auro-avatar>
<auro-avatar img="https://picsum.photos/200?random=2" type="sm"></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Size Options

The `auro-avatar` element supports a `sm`, `md` avatar types that determines the size of the image asset delivered, using the `type` attribute. The assumed default is `lg`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/size.html) -->
  <!-- The below content is automatically added from ./../apiExamples/size.html -->
  <auro-avatar code="boi"></auro-avatar>
  <auro-avatar type="md" code="anc"></auro-avatar>
  <auro-avatar type="sm" code="mke"></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/size.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/size.html -->

```html
<auro-avatar code="boi"></auro-avatar>
<auro-avatar type="md" code="anc"></auro-avatar>
<auro-avatar type="sm" code="mke"></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Fallback Images

A fallback image will be used in the `auro-avatar` element if a `code` attribute value results in an avatar image that fails to load.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fallback.html) -->
  <!-- The below content is automatically added from ./../apiExamples/fallback.html -->
  <auro-avatar code="INVALID"></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fallback.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/fallback.html -->

```html
<auro-avatar code="INVALID"></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use '@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables' as vac;
@use '@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska' as v;

:host {
  --ds-auro-avatar-tail-container-gradient-color-one: var(--ds-advanced-color-avatar-gradient-top, #{v.$ds-advanced-color-avatar-gradient-top});
  --ds-auro-avatar-tail-container-gradient-color-two: var(--ds-advanced-color-avatar-gradient-bottom, #{v.$ds-advanced-color-avatar-gradient-bottom});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
