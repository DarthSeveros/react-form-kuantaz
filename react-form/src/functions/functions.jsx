import TextField from '@mui/material/TextField';
import {defaultRequest} from './data';

/**
 * Generates a list of inputs from a json
 * @returns {JSXElement[]} Returns an JSXElement array
 */
export default function formList(request = defaultRequest) {
    const list = [];
    const data = request.data;
    for (let i = 0; i < data.length; i++) {
        list.push(generateJSXElement(i, data[i].label, data[i].name, data[i].isRequired, data[i].disabled, data[i].type, data[i].value));
    }
    return list;
}

export function generateJSXElement(key, label, name, isRequired, disabled, type, defaultValue) {
    switch (type) {
        case 'TextInput':
            return <div key={key}>
                <TextField
                    id="outlined-basic"
                    name={name}
                    label={label}
                    variant="outlined"
                    type='text'
                    margin='normal'
                    disabled={disabled}
                    {...defaultValue === null ? {value: ''} : { value: defaultValue }}
                    {...isRequired && { required: true }}
                />
            </div>

        case 'Textarea':
            return <div key={key}>
                <TextField
                    id="outlined-basic"
                    name={name}
                    label={label}
                    variant="outlined"
                    type='text'
                    margin='normal'
                    multiline rows={2}
                    disabled={disabled}
                    {...defaultValue === null ? {value: ''} : { value: defaultValue }}
                    {...isRequired && { required: true }}
                />
            </div>

        case 'TextEmail':
            return <div key={key}>
                <TextField
                    id="outlined-basic"
                    name={name}
                    label={label}
                    variant="outlined"
                    type='email'
                    margin='normal'
                    disabled={disabled}
                    {...defaultValue === null ? {value: ''} : { value: defaultValue }}
                    {...isRequired && { required: true }}
                />
            </div>

        default:
            break;
    }
}