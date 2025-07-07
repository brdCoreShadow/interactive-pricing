import * as SC from "./SharedLayoutStyled";

const SharedLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <SC.SharedLayoutCon>{children}</SC.SharedLayoutCon>;
};

export default SharedLayout;
