import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { ResultsCard } from '../components/ResultsCard';
import { generateMarketingContentAction } from '../redux/apiActions';
export const MarketingContent = () => {
  const dispatch = useDispatch();
  const marketData = useSelector((state) => state.marketContent.marketContentData);
console.log("marketData==>",marketData)
  return (
    <Box
      component='main'
      sx={{ flexGrow: 1, marginTop: '56px', marginLeft: '68px' }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ width: '40vw', background: '#cbc7c7' }}>
          <div>GENERATE MARKETING CONTENT</div>
          <div>Description</div>
          <TextField
            // disabled={textFieldDisable}
            id='outlined-basic'
            // label='Citation'
            // value={citation}
            variant='outlined'
            multiline
            // rows={10}
            sx={{ width: '70%' }}
            // focused
            inputProps={{
              // minlength: 250,
              //   maxLength: 500,
              height: '70px',
            }}
            // onChange={handleCitation}
            // placeholder='Minimum of 50 characters and Maximum of 500 characters'
          />
          <div>Advanced Settings</div>
          <select name='cars' id='cars'>
            <option value='volvo'>Volvo</option>
            <option value='saab'>Saab</option>
            <option value='mercedes'>Mercedes</option>
            <option value='audi'>Audi</option>
          </select>
          <div>Creativity</div>

          <div>Outputs</div>
          <Button onClick={() => dispatch(generateMarketingContentAction())}>
            Generate Now
          </Button>
        </div>
        <div style={{ width: '60vw',height:"60vh" }}>
          <div>Choose from the results</div>
          <div style={{ }}>
              
            {marketData.map((data) => (
              <ResultsCard marketContent={data} />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};
