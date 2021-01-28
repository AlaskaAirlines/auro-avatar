# Avatar

The auro-avatar web component is used to represent an image.

## Default component

The default component presents itself as a circle and default image placement.

<div class="exampleWrapper">
  <auro-avatar></auro-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-avatar></auro-avatar>
  ```

</auro-accordion>

## Component size option

The auro-avatar component supports a sm avatar size.

<div class="exampleWrapper">
  <auro-avatar sm></auro-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-avatar sm></auro-avatar>
  ```

</auro-accordion>

## Airport Codes

The auro-avatar supports auto generation of pre-defined images using the `code` attribute.

<div class="exampleWrapper">
  <auro-avatar code="anc"></auro-avatar>
  <auro-avatar code="mke" sm></auro-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-avatar code="anc"></auro-avatar>
  <auro-avatar code="mke" sm></auro-avatar>
  ```

</auro-accordion>

## Custom images

The auro-avatar supports placement of custom images using the `img` attribute.

<div class="exampleWrapper">
  <auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=1" sm></auro-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=1" sm></auro-avatar>
  ```

</auro-accordion>

## Accessibility options

The auro-avatar component is hidden from screen readers by default. The placement of altText using the `alt` attribute in conjunction with the `ariaVisible` attribute will make the avatar visible to screen readers.

<div class="exampleWrapper">
  <auro-avatar code="pdx" ariaVisible alt="iconic image of Portland, OR"></auro-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-avatar code="pdx" ariaVisible alt="iconic image of Portland, OR"></auro-avatar>
  ```

</auro-accordion>
