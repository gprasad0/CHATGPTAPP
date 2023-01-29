import * as React from 'react';
import { styled } from '@mui/system';

export const FlexDiv = styled('div')(({ theme }) => ({
    display:"flex",
    
  }));

  export const IconDiv = styled('div')(({ theme }) => ({
      display:"flex",
    borderRight: `1px solid ${theme.custom.borderColor}`,
    padding:"2px",
    color:"grey"
  }));
  