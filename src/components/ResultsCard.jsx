import Card from '@mui/material/Card';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { IconDiv, FlexDiv } from './commonComponents';
export const ResultsCard = ({marketContent}) => {
  return (
    <div style={{ width: '70%', border: '1px solid grey' ,margin:"auto",marginTop:"40px",borderRadius:"4px"}}>
      <div
        style={{
          borderBottom: '1px solid grey',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <FlexDiv>
          <IconDiv>
            <ContentCopyIcon></ContentCopyIcon>
          </IconDiv>
          <IconDiv>
            <StarBorderIcon></StarBorderIcon>
          </IconDiv>
          <IconDiv>
            <ThumbUpIcon></ThumbUpIcon>
          </IconDiv>
          <IconDiv>
            <ThumbDownAltIcon></ThumbDownAltIcon>
          </IconDiv>
        </FlexDiv>
        <FlexDiv >
          <IconDiv>
            {' '}
            <div>Characters:</div>
            <div>8</div>
          </IconDiv>
          <FlexDiv style={{color:"grey",alignItems:"center"}}>
          <div>Words:</div>
          <div>14</div>
          </FlexDiv>
        </FlexDiv>
      </div>
      <div style={{minHeight:"10vh"}}>{marketContent}</div>
    </div>
  );
};
