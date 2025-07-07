import * as SC from "./HeaderStyled"

const Header:React.FC = () => {
  return (
    <SC.HeaderCon>
      <SC.HeaderContentCon>
        <h3>Simple, traffic-based pricing</h3>
        <p>Sign-up for our 30-day trial. <br/> No credit card required. </p>
      </SC.HeaderContentCon>
    </SC.HeaderCon>
  );
};

export default Header;
