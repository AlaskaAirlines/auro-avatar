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