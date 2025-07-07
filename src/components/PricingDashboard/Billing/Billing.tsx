import { useState } from "react";
import * as SC from "./BillingStyled";

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

    return yearly ? (base * 0.75).toFixed(2) : base.toFixed(2);
  };

  return (
    <SC.BillingCon>
      <h2>{getPageviews(value)} pageviews</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <div className="text-3xl font-bold mt-4">
        ${getPrice(value, isYearly)}{" "}
        <span >/ month</span>
      </div>

      {/* Billing Toggle */}
      <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-600">
        <span>Monthly Billing</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-cyan-400 transition-all"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
        </label>
        <span>
          Yearly Billing <span className="text-rose-400">-25%</span>
        </span>
      </div>
    </SC.BillingCon>
  );
};

export default Billing;
