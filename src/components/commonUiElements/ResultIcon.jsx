import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
export const ResultIcon = ({data}) =>{
   
 const Icon = styled(data)(({ theme }) => ({
    fontSize:'1.2rem'
  }));

  return Icon;
}