import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../../libs/sfms-ui-components/src/lib/components/styles/theme';
import {
  CustomRadioButton,
  CustomCheckbox,
} from '@sfms-workspace/sfms-ui-components';

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
      setIsChecked(checked);
      console.log(checked)
  };
  return (
    <ThemeProvider theme={theme}>
      <h1>Custom-Radio and Checkbox</h1>
      <CustomRadioButton />
      <hr />
      
      <CustomCheckbox
                label="Checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
    </ThemeProvider>
  );
};

export default App;
