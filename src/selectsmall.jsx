import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import axios from "axios";
import { useState } from 'react';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [templates, setTemplates] = useState([]);
 
const baseURL = "https://countriesnow.space/api/v0.1/countries";
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
    
     setTemplates(response.data.data);
     console.log(templates[0].country)
    });
  }, []);
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {templates.map(function (template, index) {
          return (
            <MenuItem  >
            <p>{template.country}</p>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}