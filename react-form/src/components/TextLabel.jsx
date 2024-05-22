import { FormLabel } from "@mui/material";

/**
 * Styled FormLabel component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} props.isRequired 
 * @param {boolean} props.disabled
 * @returns 
 */
export default function TextLabel({children, isRequired, disabled}) {
    return (
    <FormLabel
    disabled={disabled}
    sx={{ marginTop: 1, display: 'inline-flex', alignItems: 'center' }}>
        {children}: {isRequired && '*'}
    </FormLabel>
    )
}