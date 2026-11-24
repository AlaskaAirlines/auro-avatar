<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-avatar

Displays a round image that represents a city, an airport, or a user profile.

**Key capabilities**
- **Airport images**: Set `code` to an airport code to show that airport's image, or a default partner image when it has none.
- **Custom images**: Set `img` to the URL of your own image.
- **Sizes**: Set `type` to `sm` or `md` for a smaller avatar; it's large by default.
- **Accessibility**: Set `ariaVisible` and `alt` to make the image visible to screen readers, which skip it by default.

### Properties and attributes

| Properties  | Attributes  | Modifiers | Type         | Default | Description                                                                                                                                                                                                       |
| ----------- | ----------- | --------- | ------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alt         | alt         |           | string       | `""`    | Sets the text that screen readers announce for the image, such as "Sunrise over Seattle" (the image's `alt`). Screen readers use it only when `ariaVisible` is set.                                               |
| ariaVisible | ariavisible |           | boolean      |         | Makes the image visible to screen readers, which skip it by default. Set `alt` as well, so screen readers have text to announce.                                                                                  |
| code        | code        |           | string       |         | Sets the airport whose image the avatar shows, using its airport code, such as `sea`. When the airport has no image, the avatar shows a default partner image. Takes priority over `img`.                         |
| img         | img         |           | string       |         | Sets the URL of the image to show, such as `https://example.com/photo.jpg` (the image's `src`). When `code` is set, the avatar ignores `img`.                                                                     |
| type        | type        |           | `sm` \| `md` |         | Sets the size of the avatar. Use `sm` for the smallest, `md` for medium, or leave it unset for the largest. A smaller size also loads a smaller airport image when you use `code`.                                |
| tail        | tail        |           | string       |         | Deprecated: Use the [auro-tail](https://github.com/AlaskaAirlines/auro-tail) component instead.<br>Sets the airline code, such as `JL`, of the tail logo to show. The `display` slot text appears below the logo. |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name    | Description                                                                                                                                                                         |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| display | Deprecated: Use the [auro-tail](https://github.com/AlaskaAirlines/auro-tail) component instead. Text displayed below the tail logo. Only rendered when the `tail` attribute is set. |
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

<pre class="language-html"><code class="language-html">&lt;auro-avatar&gt;&lt;/auro-avatar&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Accessibility options

The `auro-avatar` element is hidden from screen readers by default. To make the avatar visible to screen readers, set the `ariaVisible` attribute and add `alt` text that describes the image.

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

<pre class="language-html"><code class="language-html">&lt;auro-avatar ariaVisible alt="beautiful image of the sky"&gt;&lt;/auro-avatar&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Airport code

Use the `code` attribute to show the image for an airport, such as `sea`. When the airport has no image, the avatar shows the default partner image.

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

<pre class="language-html"><code class="language-html">&lt;auro-avatar code="sea"&gt;&lt;/auro-avatar&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom images

Use the `img` attribute to show your own image. When `code` is set, the avatar ignores `img`.

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

<pre class="language-html"><code class="language-html">&lt;auro-avatar img="https://picsum.photos/200?random=0"&gt;&lt;/auro-avatar&gt;
&lt;auro-avatar img="https://picsum.photos/200?random=1" type="md"&gt;&lt;/auro-avatar&gt;
&lt;auro-avatar img="https://picsum.photos/200?random=2" type="sm"&gt;&lt;/auro-avatar&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Size options

Use the `type` attribute to set the size of the avatar: `sm`, `md`, or the default large size. When you use `code`, a smaller size also loads a smaller image file.

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

<pre class="language-html"><code class="language-html">&lt;auro-avatar code="boi"&gt;&lt;/auro-avatar&gt;
&lt;auro-avatar type="md" code="anc"&gt;&lt;/auro-avatar&gt;
&lt;auro-avatar type="sm" code="mke"&gt;&lt;/auro-avatar&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Fallback images

When the airport image for a `code` isn't available, the avatar shows a default partner image instead.

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

<pre class="language-html"><code class="language-html">&lt;auro-avatar code="INVALID"&gt;&lt;/auro-avatar&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use '@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables' as vac;
@use '@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska' as v;
&#10;:host {
  --ds-auro-avatar-tail-container-gradient-color-one: var(--ds-advanced-color-avatar-gradient-top, #{v.$ds-advanced-color-avatar-gradient-top});
  --ds-auro-avatar-tail-container-gradient-color-two: var(--ds-advanced-color-avatar-gradient-bottom, #{v.$ds-advanced-color-avatar-gradient-bottom});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
