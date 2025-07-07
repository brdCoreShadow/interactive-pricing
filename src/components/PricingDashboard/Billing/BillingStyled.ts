import styled from "@emotion/styled";

import checkOffIcon from "../../../assets/images/checkOff.png";
import CheckOnIcon from "../../../assets/images/togglIconOn.png";

type Props = {
  isYearly: boolean;
};

export const BillingCon = styled.div`
padding-bottom: 38px;
padding-left: 24px;
padding-right: 24px;

border-bottom: 1px solid #ECF0FB;
`;

export const BullingTitle = styled.h3`
  margin-bottom: 24px;

  text-transform: uppercase;

  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.71px;

  color: #848ead;
`;

export const RangeSlider = styled.input`
  margin-bottom: 24px;

  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, #a5f3fc 50%, #e0e7ff 50%);
  outline: none;
  transition: background 0.3s ease;

  &::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 4px;
    background: transparent;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 40px;
    background-color: #0ef; /* cyan glow */
    border-radius: 50%;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
    transition: transform 0.2s;
    margin-top: -16px; /* aligns thumb to track */

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='13'%3E%3Cg fill='%2380FFF3' fill-rule='evenodd'%3E%3Cpath d='M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;

    &:hover {
      transform: scale(1.1);
    }
  }

  /* Firefox Track */
  &::-moz-range-track {
    height: 8px;
    border-radius: 4px;
    background: transparent;
  }

  /* Firefox Thumb */
  &::-moz-range-thumb {
    width: 40px;
    height: 40px;
    background-color: #0ef;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const PerBillCon = styled.div`
  margin-bottom: 34px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.8px;

  color: #293356;

  & > span {
    margin-left: 10px;

    font-size: 14px;
    font-weight: 600;

    color: #848ead;
  }
`;

export const CheckBoxCon = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  font-weight: 600;

  color: #848ead;

  & label {
    position: relative;

    &::before {
      position: absolute;
      top: 0;
      left: 0;

      display: inline-block;

      content: "";

      width: 43px;
      height: 22px;
      background-image: ${({ isYearly }) =>
        `url(${isYearly ? CheckOnIcon : checkOffIcon})`};
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
`;

export const DiscountCon = styled.div`
  display: inline-block;

  margin-left: 6px;

  padding-top: 2px;
  padding-bottom: 3px;
  padding-left: 8px;
  padding-right: 8px;

  background-color: rgba(255, 141, 104, 0.3);

  border-radius: 10px;

  & > span {
    font-size: 10px;
    font-weight: 800;

    color: #ff8d68;
  }
`;
