import styled from "@emotion/styled";

export const HeaderCon = styled.header`
  padding-top: 88px;
  padding-bottom: 64px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='146' height='145'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23CFD8EF'%3E%3Ccircle cx='63' cy='82' r='62.5'/%3E%3Ccircle cx='105' cy='41' r='40.5'/%3E%3C/g%3E%3C/svg%3E");

background-repeat: no-repeat;
background-position: center;

@media (min-width: 1280px){
    padding-top: 68px;
    padding-bottom: 54px;
}
`;

export const HeaderContentCon = styled.div`
  width: 86%;

  margin-left: auto;
  margin-right: auto;

  text-align: center;

  & > h3 {
    margin-bottom: 8px;

    font-size: 20px;
    font-weight: 800;

    color: #293356;

    @media (min-width: 1280px){
        margin-bottom: 12px;

        font-size: 28px;
    }
  }

  & > p {

    font-size: 13px;
    line-height: 1.8;
    font-weight: 600;

    color: #848ead;

    @media (min-width: 1280px){
        font-size: 15px;
    }
  }
`;
