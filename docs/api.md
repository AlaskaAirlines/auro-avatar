# auro-avatar

Custom element for the purpose of displaying an avatar image.

## Properties

| Property      | Attribute     | Type      | Default | Description                                      |
|---------------|---------------|-----------|---------|--------------------------------------------------|
| `alt`         | `alt`         | `String`  | ""      | provide string for element alt text              |
| `ariaVisible` | `ariaVisible` | `Boolean` | null    | true value reveals content to screen reader      |
| `code`        | `code`        | `String`  |         | provide airport code for requested airport image |
| `httpStatus`  | `httpStatus`  | `String`  | null    | provides the http status code for the initially declared airport code |
| `img`         | `img`         | `String`  |         | provide location or URL for image to be used     |
| `tail`        | `tail`        | `String`  |         | provide tail logo for requested airline          |
| `type`        | `type`        | `String`  |         | modifiers for size of avatar (sm \| md)          |
