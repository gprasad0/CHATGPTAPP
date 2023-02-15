import { mainCardsButton } from '../helperFunctions/commonHelperFunctions';
import { MainTopicCard, SecondaryTopicCard } from './commonStyledComponents';

export const TopicCard = ({ card }) => {
  return (
    <div style={{width:"28%",margin:"50px 30px 20px"}}>
      <MainTopicCard>{card}</MainTopicCard>
      <div style={{width:"100%",display:"flex",marginTop:"10px",flexWrap:"wrap",justifyContent:"center"}}>
          {mainCardsButton()[card].map(button=>{
              return <SecondaryTopicCard >{button}</SecondaryTopicCard>
          })}
      </div>

    </div>
  );
};
