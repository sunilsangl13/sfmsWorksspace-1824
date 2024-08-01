import * as React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div>
      <RadioGroup>
     
      <FormControlLabel value="female" control={ <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        required
      />} label="A" />

      <FormControlLabel value="female" control={ <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
        required
      />} label="B" />

      <FormControlLabel value="female" control={ <Radio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'C' }}
        required
      />} label="C" />

       
      </RadioGroup>
    </div>
  );
}
