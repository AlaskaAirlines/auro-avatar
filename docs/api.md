# auro-avatar

Custom element for the purpose of displaying an avatar image.

## Properties

| Property      | Attribute     | Type      | Default | Description                                      |
|---------------|---------------|-----------|---------|--------------------------------------------------|
| `alt`         | `alt`         | `String`  | ""      | provide string for element alt text              |
| `ariaVisible` | `ariaVisible` | `Boolean` | null    | true value reveals content to screen reader      |
| `code`        | `code`        | `String`  |         | provide airport code for requested airport image |
| `img`         | `img`         | `String`  |         | provide location or URL for image to be used     |
| `tail`        | `tail`        | `String`  |         | **DEPRECATED**: provides a tail logo for the requested airline. Use the [auro-tail](https://github.com/AlaskaAirlines/auro-tail) component instead. |
| `type`        | `type`        | `String`  |         | modifiers for size of avatar (sm \| md)          |
