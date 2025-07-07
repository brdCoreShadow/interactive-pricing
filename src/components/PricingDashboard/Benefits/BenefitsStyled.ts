import styled from "@emotion/styled";

export const BenefitsCon = styled.div`
  padding-top: 24px;

  text-align: center;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: 32px;
    padding-left: 48px;
    padding-right: 48px;

    text-align: left;
  }
`;

export const BenefitsList = styled.ul`
  margin-bottom: 32px;

  @media (min-width: 1280px) {
    margin-bottom: 0;

  }
`;

export const BenefitsItem = styled.li`
  font-size: 12px;
  font-weight: 600;

  color: #848ead;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  &::before {
    display: inline-block;

    content: "";

    width: 7px;
    height: 5px;

    margin-right: 20px;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='8'%3E%3Cpath fill='none' stroke='%2310D8C4' stroke-width='2' d='M1 4.134l1.907 1.908L7.949 1'/%3E%3C/svg%3E");
    background-size: contain;
  }
`;

export const BenefitsBtn = styled.button`
  width: 170px;

  margin-left: auto;
  margin-right: auto;

  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 12px;
  font-weight: 800;

  background-color: #293356;

  color: #becdff;

  border-radius: 20px;

  @media (min-width: 1280px){
    margin: 0;

    &:hover, &:focus, &:active{
        cursor: pointer;
    }
  }
`;
