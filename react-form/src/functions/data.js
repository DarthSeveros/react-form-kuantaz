
export const defaultRequest = {
    "data": [
      {
        label: 'Nombres',
        name: 'apellidos',
        isRequired: true,
        disabled: true,
        type: 'TextInput',
        value: null,
  
      },
      {
        label: 'Apellidos',
        name: 'apellidos',
        isRequired: true,
        disabled: true,
        type: 'TextInput',
        value: null,
  
      },
      {
        label: 'email',
        name: 'email',
        isRequired: true,
        disabled: true,
        type: 'TextEmail',
        value: null,
  
      },
      {
        label: 'Descripcion',
        name: 'descripcion',
        isRequired: true,
        disabled: true,
        type: 'Textarea',
        value: null,
      },
      {
        label: "Fecha de nacimiento",
        name: 'birthdate',
        disabled: false,
        isRequired: true,
        type: 'Date',
      },
      {
        label: "Genero",
        name: 'genero',
        disabled: true,
        isRequired: true,
        type: 'Radio',
        options: [
            "Maculino",
            "Femenino",
            "Otro"
        ]
    },
      {
        label: "Acepto términos y condiciones",
        name: 'terminos',
        disabled: false,
        isRequired: true,
        type: 'Checkbox',
        checked: true,
    }
    ]
  }
