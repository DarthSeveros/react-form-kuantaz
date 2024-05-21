import { useEffect, useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FormControl, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import formList from './functions/functions'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import {defaultRequest} from './functions/data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [formElements, setFormElements] = useState([]);
  const [formContent, setFormContent] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [request, setRequest] = useState(defaultRequest);
  const [jsonText, setJsonText] = useState('');
  const [jsonError, setJsonError] = useState(false);

  useEffect(() => {
    setFormElements(formList(request.data));
  }, [request,])

  function handleSubmit(event) {
    event.preventDefault();
    setSubmited(true);
    const data = new FormData(event.currentTarget);
    setFormContent(() => {
      const array = [];
      for (const pair of data.entries()) {
        array.push(
          <>
            <Typography variant="h5" gutterBottom>
              {pair[0]}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {pair[1]}
            </Typography>
          </>
        )
      }
      array.push(<Button variant="contained" type='button' onClick={() => setSubmited(false)}>Aceptar</Button>);
      return array;
    });
  }

  function handleJsonSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const jsonData = JSON.parse(formData.get('json'));
      setRequest(jsonData)
      setJsonError(false);
      setJsonText('');
    } catch (error) {
      setJsonText('Formato JSON invalido');
      setJsonError(true);
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <h1>Formulario</h1>

      <Box
        width={400}
      >
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          JSON
        </AccordionSummary>
        <AccordionDetails>
        <FormControl component='form' onSubmit={handleJsonSubmit} fullWidth>
          <TextField
                      id="outlined-basic"
                      name='json'
                      label='Json'
                      variant="outlined"
                      type='text'
                      margin='normal'
                      multiline
                      maxRows={20}
                      defaultValue={JSON.stringify(request, null, 2)}
                      error={jsonError}
                      helperText={jsonText}
                  />
          <Button variant='contained' type='submit'>Cargar JSON</Button>
        </FormControl>
        </AccordionDetails>
      </Accordion>
      </Box>

      {!submited &&
        <FormControl component="form" onSubmit={handleSubmit}>
          {formElements}
          <Button variant="contained" type='submit'>Enviar</Button>
        </FormControl>}
      {submited && formContent}
    </ThemeProvider>
  )
}

export default App

