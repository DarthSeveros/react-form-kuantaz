import TextField from '@mui/material/TextField';
import { defaultRequest } from './data';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Checkbox, FormGroup, FormLabel, FormControlLabel, Box } from '@mui/material';
import TextLabel from '../components/TextLabel';

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
            return <Box key={key} sx={{display: 'flex', flexDirection: 'column'}}>
                <TextLabel isRequired={data.isRequired} disabled={data.disabled}>{data.label}</TextLabel>
                <TextField
                    id={`inputtext${key}`}
                    name={data.name}
                    variant="outlined"
                    type='text'
                    margin='normal'
                    disabled={data.disabled}
                    {...data.value === null ? { defaultValue: '' } : { defaultValue: data.value }}
                    {...data.isRequired && { required: true }}
                />
            </Box>

        case 'Textarea':
            return <Box key={key} sx={{display: 'flex', flexDirection: 'column'}}>
                <TextLabel isRequired={data.isRequired} disabled={data.disabled}>{data.label}</TextLabel>
                <TextField
                    sx={{width: '100%'}}
                    id={`inputtextarea${key}`}
                    name={data.name}
                    variant="outlined"
                    type='text'
                    margin='normal'
                    multiline rows={2}
                    disabled={data.disabled}
                    {...data.value === null ? { defaultValue: '' } : { defaultValue: data.value }}
                    {...data.isRequired && { required: true }}
                />
            </Box>

        case 'TextEmail':
            return <Box key={key} sx={{display: 'flex', flexDirection: 'column'}}>
                <TextLabel isRequired={data.isRequired} disabled={data.disabled}>{data.label}</TextLabel>
                <TextField
                    id={`inputemail${key}`}
                    name={data.name}
                    variant="outlined"
                    type='email'
                    margin='normal'
                    disabled={data.disabled}
                    {...data.value === null ? { defaultValue: '' } : { defaultValue: data.value }}
                    {...data.isRequired && { required: true }}
                />
            </Box>

        case 'Date':
            return <Box key={key} sx={{display: 'flex', flexDirection: 'column'}}>
                <TextLabel isRequired={data.isRequired} disabled={data.disabled}>{data.label}</TextLabel>
                <TextField
                    id={`inputdate${key}`}
                    name={data.name}
                    type='date'
                    variant='outlined'
                    {...data.isRequired && { required: true }}
                    disabled={data.disabled}
                    margin='normal'
                />
            </Box>

        case 'Radio':
            {
                const optionsArray = radioArray(data.options, data.isRequired)
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
                            {...data.checked && { defaultChecked: true }}
                        />}
                        label={data.label} />
                </FormGroup>
            </div>




        default:
            break;
    }
}


/**
 * Generates an array of FormControlLabel of Radio
 * @param {string[]} options - List of radio values
 * @param {boolean} isRequired - radio required or not
 * @returns {JSXElement[]} Returns an FormControlLabel array
 */
function radioArray(options, isRequired) {
    const optionsArray = [];
    for (let option of options) {
        optionsArray.push(
            <FormControlLabel value={option} control={<Radio required={isRequired}/>} label={option} />
        )
    }
    return optionsArray;
}

