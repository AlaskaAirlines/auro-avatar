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