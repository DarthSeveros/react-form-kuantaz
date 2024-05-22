import { Box, Typography } from '@mui/material'
import { useId } from 'react';

/**
 * Generates an jsx elements array that contains the form's anwers and a button
 * @param {FormData} data - contains the answers of the form
 * @returns 
 */
export default function AnswersForm({ data }) {
  const array = [];
  const id = useId();
  for (const pair of data.entries()) {
    array.push(
      <Box key={id}
        sx={{
          border: 0,
          borderColor: "",
          borderRadius: 1,
          marginY: 2,
          padding: 2,
          backgroundColor: '#202020'
        }}
      >
        <div>
          <Typography variant="h5" gutterBottom>
            {pair[0]}
          </Typography>
        </div>
        <div>
          <Typography maxWidth={400} sx={{ mb: 0, borderBottom: 1, borderColor: "#595959" }} variant="subtitle1" gutterBottom>
            {pair[1]}
          </Typography>
        </div>

      </Box>
    )
  }

  return <>{array}</>;
}