import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label={label}
        />
    );
};

export default CustomCheckbox