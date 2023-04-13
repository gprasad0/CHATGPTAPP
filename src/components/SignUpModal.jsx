import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
// import { modifyMemberUserAction } from '../../redux/getTeamMembersSlice';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ColorButton, FlexDivColumn, InputMarginTopDiv,  } from './commonStyledComponents';
import { signUpAction } from '../redux/apiActions';

export default function SignUpModal({ openDialog, closeDialog, modifyInput }) {
  const [open, setOpen] = React.useState(openDialog);
  const [signUpData,setSignUpData] = React.useState({firstName:"",lastName:"",email:"",password:""})
  const dispatch = useDispatch();

  const handleClose = () => {
    closeDialog();
  };

  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    width: '30vw',
    height: '60vh',
    '&$focusVisible': {
      outline: 'none',
    },
  };

  const handleChange = (e) => {
    if (e) {
      setMemberValue(e);
    } else {
      setMemberValue('');
    }
  };

  const handleMultiInput = (type,e) =>{
    setSignUpData(prevState=>{return {...prevState,[type]:e.target.value}})
  }

  const handleSignUp = () =>{
    dispatch(signUpAction(signUpData))
    closeDialog();

  }

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <FlexDivColumn>
            <div style={{ fontSize: '22px', fontWeight: 700, padding: '10px' }}>
              STORYSCAPE SIGNUP
            </div>
            <InputMarginTopDiv>
              <h4>First Name</h4>
              <TextField
                id='outlined-basic'
                  value={signUpData["firstName"]}
                  onChange={(value) => handleMultiInput("firstName", value)}
                placeholder='Name'
                sx={{
                  width: '20vw',

                  '& .MuiOutlinedInput-root': {
                    // borderRadius: '10px',
                    //   fontSize: '12px',
                    //   height: '30px',
                  },
                }}
              />
            </InputMarginTopDiv>

            <InputMarginTopDiv>
              <h4>Last Name</h4>
              <TextField
                id='outlined-basic'
                  value={signUpData["lastName"]}
                  onChange={(value) => handleMultiInput("lastName", value)}
                placeholder='Name'
                sx={{
                  width: '20vw',

                  '& .MuiOutlinedInput-root': {
                    // borderRadius: '10px',
                    //   fontSize: '12px',
                    //   height: '30px',
                  },
                }}
              />
            </InputMarginTopDiv>


            <InputMarginTopDiv>
              <h4>Email</h4>
              <TextField
                id='outlined-basic'
                  value={signUpData["email"]}
                  onChange={(value) => handleMultiInput("email", value)}
                placeholder='Name'
                sx={{
                  width: '20vw',

                  '& .MuiOutlinedInput-root': {
                    // borderRadius: '10px',
                    //   fontSize: '12px',
                    //   height: '30px',
                  },
                }}
              />
            </InputMarginTopDiv>


            <InputMarginTopDiv>
              <h4>Password</h4>
              <TextField
                id='outlined-basic'
                  value={signUpData["password"]}
                  onChange={(value) => handleMultiInput("password", value)}
                placeholder='Name'
                sx={{
                  width: '20vw',

                  '& .MuiOutlinedInput-root': {
                    // borderRadius: '10px',
                    //   fontSize: '12px',
                    //   height: '30px',
                  },
                }}
              />
            </InputMarginTopDiv>

            <ColorButton
            width={200}
            marginTop={20}
              onClick={handleSignUp}
            >
             Create an Account
            </ColorButton>
          </FlexDivColumn>
        </Box>
      </Modal>
    </>
  );
}
