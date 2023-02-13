import { mainCardsButton } from '../helperFunctions/commonHelperFunctions';
import { MainTopicCard } from './commonStyledComponents';

export const TopicCard = ({ card }) => {
  return (
    <div style={{width:"30%"}}>
      <MainTopicCard>{card}</MainTopicCard>
      <div style={{width:"100%"}}>
          {mainCardsButton().map(button=>{
              return <div></div>
          })}
      </div>

    </div>
  );
};
