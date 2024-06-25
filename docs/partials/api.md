<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Component size options

The auro-avatar component supports a `sm`, `md` and `lg` avatar types that determines the size of the image asset delivered. The assumed default is `lg`.</br>
<small>Note: The previous `sm` and `md` boolean attributes are deprecated.</small>

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/size.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/size.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Custom images

The auro-avatar supports placement of custom images using the `img` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customImage.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customImage.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Tail icon options

The tail options allow for a default and a `md` avatar type option. The `tail` property accepts the two letter code per the airline. See the [Github repo](https://github.com/AlaskaAirlines/Icons/tree/master/src/icons/logos) for a list of currently available logos.</br>
<small>Note: The previous `md` boolean attributes are deprecated.</small>

For the airline title, simply add content to the `display` slot. See the example code for the HTML API.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/tail.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/tail.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Accessibility options

The auro-avatar component is hidden from screen readers by default. The placement of altText using the `alt` attribute in conjunction with the `ariaVisible` attribute will make the avatar visible to screen readers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/accessibility.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/accessibility.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Fallback Images

The auro-avatar component will use a fallback image if a `code` value results in an avatar image that fails to load.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/fallback.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/fallback.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../src/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
