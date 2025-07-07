import * as SC from "./PricingDashboardStyled"

const PricingDashboard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <SC.PricingDashboardCon>{children}</SC.PricingDashboardCon>;
};

export default PricingDashboard;
