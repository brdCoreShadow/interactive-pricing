import * as SC from "./BenefitsStyled"

const Benefits:React.FC = () => {
  return (
    <SC.BenefitsCon>
      <SC.BenefitsList>
        <SC.BenefitsItem>Unlimited websites</SC.BenefitsItem>
        <SC.BenefitsItem>100% data ownership </SC.BenefitsItem>
        <SC.BenefitsItem>Email reports</SC.BenefitsItem>
      </SC.BenefitsList>
      <SC.BenefitsBtn>Start my trial</SC.BenefitsBtn>
    </SC.BenefitsCon>
  );
};

export default Benefits;
