import { useEffect, useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FormControl, TextField } from '@mui/material';
import formList from './functions/functions'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import { defaultRequest } from './functions/data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Answers from './components/Answers'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [formElements, setFormElements] = useState([]);
  const [formContent, setFormContent] = useState(<></>);
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
    setFormContent(<Answers data={data} handleClick={() => setSubmited(false)} />);
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
      
      <Box maxWidth={700}>
        <Accordion>
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
                id='inputjson'
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
        <Box sx={{width: '100%'}}>
          <h1>Formulario</h1>
          <FormControl sx={{width: '100%'}} component="form" onSubmit={handleSubmit}>
            {formElements}
            <Button sx={{width: 3, paddingX: 5, marginY: 2}} variant="contained" type='submit'>Enviar</Button>
          </FormControl>
        </Box>

      }
      {submited && formContent}
    </ThemeProvider>
  )
}

export default App

