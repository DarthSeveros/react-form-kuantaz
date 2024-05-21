# React Form Kuantaz

### Usage

```bash
cd react-form
npm run dev
```

## Field types

Supported field types
- [TextInput](#textinput)
- Textarea
- TextEmail
- [Radio](#radio)
- [Checkbox](#checkbox) 

### TextInput

```
label: string,
name: string,
isRequired: boolean,
disabled: boolean,
type: "TextInput",
value: string || null
```
Example of TextInput field

```
{
    label: "Nombres",
    name: "nombre",
    isRequired: true,
    disabled: true,
    type: "TextInput",
    value: null,
}
```

### Radio

```
label: string,
name: string,
isRequired: boolean,
disabled: boolean
type: "Radio",
value: string || null,
options: string[]
```
Example of Radio field

```
{
    label: "Genero",
    name: 'genero',
    disabled: true,
    isRequired: true,
    type: 'Radio',
    value: null,
    options: [
        "Maculino",
        "Femenino",
        "Otro"
    ]
}
```

### Checkbox

```
label: string,
name: string,
isRequired: boolean,
disabled: boolean
type: "Checkbox",
checked: boolean
```
Example of Checkbox field

```
{
    label: "Acepto términos y condiciones",
    name: 'terminos',
    disabled: true,
    isRequired: true,
    type: 'Checkbox',
    checked: true,
}
```
