import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const SelectComponent = ({ data, handleSelect, type }) => {
  const { t, i18n } = useTranslation();

  const [inputData, setInputData] = useState('');

  const handleChange = (e) => {
    handleSelect(e.target.value,type);
    setInputData(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 390, width: 390 }}>
      <Select
        value={inputData}
        onChange={(e) => handleChange(e)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{ borderRadius: '30px', height: 40, background: 'white' }}
      >
        {data.map((selectData, i) => {
          return (
            <MenuItem key={`${selectData}+${i}`} value={selectData}>
              {t(selectData)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
