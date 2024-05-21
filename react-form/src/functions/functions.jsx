import TextField from '@mui/material/TextField';
import { defaultRequest } from './data';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import { Checkbox } from '@mui/material';

/**
 * Generates a list of inputs from a json
 * @param {Object[]} [data] - request that contains a list of form fields
 * @returns {JSXElement[]} Returns an JSXElement array
 */
export default function formList(data = defaultRequest.data) {
    const list = [];
    for (let i = 0; i < data.length; i++) {
        list.push(generateJSXElement(i, data[i]));
    }
    return list;
}

/**
 * @param {integer} key
 * @param {Object} data - object that contains all data of a field
 * @param {string} data.label - label of the field
 * @param {string} data.name - name of the field
 * @param {boolean} [data.isRequired] - if field is required
 * @param {string} data.type - type of the field that determines the input used
 * @param {string | null} [data.value] - default value of the field
 * @param {boolean} [data.checked] - default checked checkbox
 * @param {string[]} [data.options] - list of radio options
 * @returns 
 */
export function generateJSXElement(key, data) {
    switch (data.type) {
        case 'TextInput':
            return <div key={key}>
                <TextField
                    id="outlined-basic"
                    name={data.name}
                    label={data.label}
                    variant="outlined"
                    type='text'
                    margin='normal'
                    disabled={data.disabled}
                    {...data.value === null ? { defaultValue: '' } : { defaultValue: data.value }}
                    {...data.isRequired && { required: true }}
                />
            </div>

        case 'Textarea':
            return <div key={key}>
                <TextField
                    id="outlined-basic"
                    name={data.name}
                    label={data.label}
                    variant="outlined"
                    type='text'
                    margin='normal'
                    multiline rows={2}
                    disabled={data.disabled}
                    {...data.value === null ? { defaultValue: '' } : { defaultValue: data.value }}
                    {...data.isRequired && { required: true }}
                />
            </div>

        case 'TextEmail':
            return <div key={key}>
                <TextField
                    id="outlined-basic"
                    name={data.name}
                    label={data.label}
                    variant="outlined"
                    type='email'
                    margin='normal'
                    disabled={data.disabled}
                    {...data.value === null ? { defaultValue: '' } : { defaultValue: data.value }}
                    {...data.isRequired && { required: true }}
                />
            </div>

        case 'Radio':
            {
                const optionsArray = radioArray(data.options)
                return <div key={key}>
                    <FormLabel id={`radio${key}`}>{data.label}</FormLabel>
                    <RadioGroup
                        aria-labelledby={`radio${key}`}
                        {...data.value === null ? { defaultValue: '' } : { defaultValue: data.value }}
                        name={data.name}
                    >
                        {optionsArray}
                    </RadioGroup>
                </div>
            }

        case 'Checkbox':
            return <div key={key}>
                <FormGroup>
                    <FormControlLabel 
                    control={<Checkbox
                        name={data.name}
                        disabled={data.disabled}
                        {...data.isRequired && { required: true }}
                        {...data.checked && {defaultChecked: true}} 
                        />} 
                    label={data.label} />
                </FormGroup>
            </div>

        default:
            break;
    }
}


/**
 * Generates a list of FormControlLabel of Radio
 * @param {string[]} options - List of radio values 
 * @returns {JSXElement[]} Returns an FormControlLabel array
 */
function radioArray(options) {
    const optionsArray = [];
    for (let option of options) {
        optionsArray.push(
            <FormControlLabel value={option} control={<Radio />} label={option} />
        )
    }
    return optionsArray;
}