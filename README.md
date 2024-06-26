﻿# React Form

Formulario dinamico con formato json en react con vite

### Usage

To modify base json change src/functions/data.js

```bash
cd react-form
npm install
npm run dev
```

## Field types

Supported field types
- [TextInput](#textinput)
- [Textarea](#textinput)
- [TextEmail](#textinput)
- [Radio](#radio)
- [Date](#date)
- [Checkbox](#checkbox) 

### TextInput

```
"label": string,
"name": string,
"isRequired": boolean,
"disabled": boolean,
"type": "TextInput" || "Textarea" || "TextEmail",
"value": string || null
```
Example of TextInput field

```
{
    "label": "Nombres",
    "name": "nombre",
    "isRequired": true,
    "disabled": true,
    "type": "TextInput",
    "value": null,
}
```

### Radio

```
"label": string,
"name": string,
"isRequired": boolean,
"disabled": boolean
"type": "Radio",
"value": string || null,
options: string[]
```
Example of Radio field

```
{
    "label": "Genero",
    "name": 'genero',
    "disabled": true,
    "isRequired": true,
    "type": 'Radio',
    "value": null,
    options: [
        "Maculino",
        "Femenino",
        "Otro"
    ]
}
```

### Date

```
"label": string,
"name": string,
"isRequired": boolean,
"disabled": boolean
"type": "Date",
```
Example of Date field

```
{
    "label": "Fecha de nacimiento",
    "name": 'birthdate',
    "disabled": false,
    "isRequired": true,
    "type": 'Date',
}
```

### Checkbox

```
"label": string,
"name": string,
"isRequired": boolean,
"disabled": boolean
"type": "Checkbox",
checked: boolean
```
Example of Checkbox field

```
{
    "label": "Acepto términos y condiciones",
    "name": 'terminos',
    "disabled": true,
    "isRequired": true,
    "type": 'Checkbox',
    checked: true,
}
```
