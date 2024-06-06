<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-avatar

Custom element for the purpose of displaying an avatar image.

## Properties

| Property      | Attribute     | Type      | Default | Description                                      |
|---------------|---------------|-----------|---------|--------------------------------------------------|
| [alt](#alt)         | `alt`         | `String`  | ""      | provide string for element alt text              |
| [ariaVisible](#ariaVisible) | `ariaVisible` | `Boolean` | null    | true value reveals content to screen reader      |
| [code](#code)        | `code`        | `String`  |         | provide airport code for requested airport image |
| [img](#img)         | `img`         | `String`  |         | provide location or URL for image to be used     |
| [tail](#tail)        | `tail`        | `String`  |         | provide tail logo for requested airline          |
| [type](#type)        | `type`        | `String`  |         | modifiers for size of avatar (sm \| md)          |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-avatar></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-avatar></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Component size options

The auro-avatar component supports a `sm`, `md` and `lg` avatar types that determines the size of the image asset delivered. The assumed default is `lg`.</br>
<small>Note: The previous `sm` and `md` boolean attributes are deprecated.</small>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/size.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/size.html -->
  <auro-avatar code="boi"></auro-avatar>
  <auro-avatar type="md" code="anc"></auro-avatar>
  <auro-avatar type="sm" code="mke"></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/size.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/size.html -->

```html
<auro-avatar code="boi"></auro-avatar>
<auro-avatar type="md" code="anc"></auro-avatar>
<auro-avatar type="sm" code="mke"></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom images

The auro-avatar supports placement of custom images using the `img` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customImage.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/customImage.html -->
  <auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=1" type="md"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=2" type="sm"></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customImage.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/customImage.html -->

```html
<auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
<auro-avatar img="https://picsum.photos/200?random=1" type="md"></auro-avatar>
<auro-avatar img="https://picsum.photos/200?random=2" type="sm"></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Tail icon options

The tail options allow for a default and a `md` avatar type option. The `tail` property accepts the two letter code per the airline. See the [Github repo](https://github.com/AlaskaAirlines/Icons/tree/master/src/icons/logos) for a list of currently available logos.</br>
<small>Note: The previous `md` boolean attributes are deprecated.</small>
For the airline title, simply add content to the `display` slot. See the example code for the HTML API.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/tail.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/tail.html -->
  <auro-avatar tail="AS">
    <span slot="display">Alaska Airlines</span>
  </auro-avatar>
  <auro-avatar tail="AA">
    <span slot="display">American Airlines</span>
  </auro-avatar>
  <auro-avatar type="md" tail="QF">
    <span slot="display">Quantas</span>
  </auro-avatar>
  <auro-avatar type="md" tail="JL">
    <span slot="display">Japan Airlines</span>
  </auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/tail.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/tail.html -->

```html
<auro-avatar tail="AS">
  <span slot="display">Alaska Airlines</span>
</auro-avatar>
<auro-avatar tail="AA">
  <span slot="display">American Airlines</span>
</auro-avatar>
<auro-avatar type="md" tail="QF">
  <span slot="display">Quantas</span>
</auro-avatar>
<auro-avatar type="md" tail="JL">
  <span slot="display">Japan Airlines</span>
</auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Accessibility options

The auro-avatar component is hidden from screen readers by default. The placement of altText using the `alt` attribute in conjunction with the `ariaVisible` attribute will make the avatar visible to screen readers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/accessibility.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/accessibility.html -->
  <auro-avatar code="pdx" ariaVisible alt="iconic image of Portland, OR"></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/accessibility.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/accessibility.html -->

```html
<auro-avatar code="pdx" ariaVisible alt="iconic image of Portland, OR"></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Fallback Images

The auro-avatar component will use a fallback image if a `code` value results in an avatar image that fails to load.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/fallback.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/fallback.html -->
  <auro-avatar code="INVALID"></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/fallback.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/fallback.html -->

```html
<auro-avatar code="INVALID"></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../../src/tokens.scss -->

```scss
@import './../node_modules/@aurodesignsystem/design-tokens/dist/tokens/SCSSVariables';

:host {
  --ds-auro-avatar-tail-container-gradient-one-color: var(--ds-color-brand-navy-500, #{$ds-color-brand-navy-500});
  --ds-auro-avatar-tail-container-gradient-two-color: rgba(255 255 255 / .9);
}
```
<!-- AURO-GENERATED-CONTENT:END -->
