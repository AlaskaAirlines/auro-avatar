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

## Component size options

The auro-avatar component supports a `sm`, `md` and `lg` avatar types that determines the size of the image asset delivered. The assumed default is `lg`.</br>
<small>Note: The previous `sm` and `md` boolean attributes are deprecated.</small>

<div class="exampleWrapper">
  <auro-avatar code="boi"></auro-avatar>
  <auro-avatar type="md" code="anc"></auro-avatar>
  <auro-avatar type="sm" code="mke"></auro-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-avatar code="boi"></auro-avatar>
  <auro-avatar type="md" code="anc"></auro-avatar>
  <auro-avatar type="sm" code="mke"></auro-avatar>
  ```

</auro-accordion>

## Custom images

The auro-avatar supports placement of custom images using the `img` attribute.

<div class="exampleWrapper">
  <auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=1" type="md"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=2" type="sm"></auro-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=1" type="md"></auro-avatar>
  <auro-avatar img="https://picsum.photos/200?random=2" type="sm"></auro-avatar>
  ```

</auro-accordion>

## Tail icon options

The tail options allow for a default and a `md` avatar type option. The `tail` property accepts the two letter code per the airline. See the [Github repo](https://github.com/AlaskaAirlines/Icons/tree/master/src/icons/logos) for a list of currently available logos.</br>
<small>Note: The previous `md` boolean attributes are deprecated.</small>

For the airline title, simply add content to the `display` slot. See the example code for the HTML API.

<div class="exampleWrapper">
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
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

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
