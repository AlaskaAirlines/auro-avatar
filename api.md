<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-avatar

Custom element for the purpose of displaying an avatar image.

### Properties & Attributes

| Properties  | Attributes  | Modifiers | Type         | Default | Description                                                                                                                                         |
| ----------- | ----------- | --------- | ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| alt         | alt         |           | string       | `""`    | Provide string for element alt text.                                                                                                                |
| ariaVisible | ariaVisible |           | null         | `null`  | True value reveals content to screen reader.                                                                                                        |
| code        | code        |           | string       |         | Provide airport code for requested airport image.                                                                                                   |
| img         | img         |           | string       |         | Provide location or URL for image to be used.                                                                                                       |
| tail        | tail        |           | string       |         | **DEPRECATED**: Provides a tail logo for the requested airline. Use the [auro-tail](https://github.com/AlaskaAirlines/auro-tail) component instead. |
| type        | type        |           | `sm` \| `md` |         | Modifiers for size of avatar.                                                                                                                       |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

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

### Component size options

The auro-avatar component supports a `sm`, `md` and `lg` avatar types that determines the size of the image asset delivered. The assumed default is `lg`.</br>
<small>Note: The previous `sm` and `md` boolean attributes are deprecated.</small>
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

### Custom images

The auro-avatar supports placement of custom images using the `img` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/customImage.html) -->
  <!-- The below content is automatically added from ./../apiExamples/customImage.html -->
  <auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=1" type="md"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=2" type="sm"></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customImage.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/customImage.html -->

```html
<auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
<auro-avatar img="https://picsum.photos/200?random=1" type="md"></auro-avatar>
<auro-avatar img="https://picsum.photos/200?random=2" type="sm"></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Accessibility options

The auro-avatar component is hidden from screen readers by default. The placement of altText using the `alt` attribute in conjunction with the `ariaVisible` attribute will make the avatar visible to screen readers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/accessibility.html) -->
  <!-- The below content is automatically added from ./../apiExamples/accessibility.html -->
  <auro-avatar code="pdx" ariaVisible alt="iconic image of Portland, OR"></auro-avatar>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/accessibility.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/accessibility.html -->

```html
<auro-avatar code="pdx" ariaVisible alt="iconic image of Portland, OR"></auro-avatar>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Fallback Images

The auro-avatar component will use a fallback image if a `code` value results in an avatar image that fails to load.

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

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

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
