import { Button } from '@mui/material'
import AnswersForm from './AnswersForm'

/**
 * @param {Object} props
 * @param {FormData} props.data - contains the form's answers
 * @param {(value: React.SetStateAction<boolean>) => void} props.handleClick 
 */
export default function Answers({data, handleClick}) {
    
    return (<>
        <AnswersForm data={data} /> 
        <div>
            <Button variant="contained" type='button' onClick={handleClick}>Aceptar</Button>
        </div>
    </>)
}