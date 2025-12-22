<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property & Attribute Examples

### Accessibility Options

The `auro-avatar` element is hidden from screen readers by default. The placement of altText using the `alt` attribute in conjunction with the `ariaVisible` attribute will make the avatar visible to screen readers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/accessibility.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/accessibility.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Airport Code

Use the `code` attribute to specify the airport code for the desired avatar image. The component will render the corresponding avatar image based on the provided airport code.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/code.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/code.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Custom Images

The `auro-avatar` element supports placement of custom images using the `img` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom-image.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom-image.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Size Options

The `auro-avatar` element supports a `sm`, `md` avatar types that determines the size of the image asset delivered, using the `type` attribute. The assumed default is `lg`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/size.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/size.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common Usage Patterns & Functional Examples

### Fallback Images

A fallback image will be used in the `auro-avatar` element if a `code` attribute value results in an avatar image that fails to load.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fallback.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fallback.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
