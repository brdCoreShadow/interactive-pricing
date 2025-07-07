import { useState } from "react";
import * as SC from "./BillingStyled";

// import checkOffIcon from "../../../assets/images/checkOff.png"

const Billing: React.FC = () => {
  const [value, setValue] = useState(50);
  const [isYearly, setIsYearly] = useState(false);

  const getPageviews = (val: number) => {
    if (val <= 20) return "10K";
    if (val <= 40) return "50K";
    if (val <= 60) return "100K";
    if (val <= 80) return "500K";
    return "1M";
  };

  const getPrice = (val: number, yearly: boolean) => {
    let base;
    if (val <= 20) base = 8;
    else if (val <= 40) base = 12;
    else if (val <= 60) base = 16;
    else if (val <= 80) base = 24;
    else base = 36;

    return !yearly ? (base * 0.75).toFixed(2) : base.toFixed(2);
  };

  return (
    <SC.BillingCon>
      <SC.BullingTitle>{getPageviews(value)} pageviews</SC.BullingTitle>
      <SC.RangeSlider
        type="range"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, #0ef ${value}%, #e0e7ff ${value}%)`,
        }}
      />
      <SC.PerBillCon >
        ${getPrice(value, isYearly)} <span>{isYearly ? "/ month" : "/ year"}</span>
      </SC.PerBillCon>

      {/* Billing Toggle */}
      <SC.CheckBoxCon isYearly={isYearly}>
        <span>Monthly Billing</span>
        <label >
            {/* <SC.CheckIcon src={checkOffIcon} alt="checkOff" />   */}
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div></div>
          <div ></div>
        </label>
        <span>
          Yearly Billing <SC.DiscountCon><span>-25%</span></SC.DiscountCon>
        </span>
      </SC.CheckBoxCon>
    </SC.BillingCon>
  );
};

export default Billing;
