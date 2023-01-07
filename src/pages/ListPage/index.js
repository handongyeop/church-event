import React from "react";
import styled from "styled-components";

const ListPage = () => {
  return (
    <LPInner>
      <LPTitle>교회 행사의 모든 것</LPTitle>
      <LPSearchRow>
        <LPSearchTitle>대상</LPSearchTitle>
        <LPSearchBtn>
          <LPSearchRadio type="checkbox" name="target" id="kids" />
          <LPSearchLabel htmlFor="kids">유치부</LPSearchLabel>
        </LPSearchBtn>
        <LPSearchBtn>
          <LPSearchRadio type="checkbox" name="target" id="elementary" />
          <LPSearchLabel htmlFor="elementary">초등부</LPSearchLabel>
        </LPSearchBtn>
        <LPSearchBtn>
          <LPSearchRadio type="checkbox" name="target" id="teenager" />
          <LPSearchLabel htmlFor="teenager">중고등부</LPSearchLabel>
        </LPSearchBtn>
        <LPSearchBtn>
          <LPSearchRadio type="checkbox" name="target" id="youth" />
          <LPSearchLabel htmlFor="youth">청년부</LPSearchLabel>
        </LPSearchBtn>
      </LPSearchRow>
    </LPInner>
  );
};

export default ListPage;

const LPInner = styled.div`
  margin: 1rem;
`;

const LPTitle = styled.div`
  background-color: #ffe65c;
  height: 4rem;
  margin-bottom: 1rem;
  border-radius: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  line-height: 46px;
`;

const LPSearchRow = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  line-height: 24px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const LPSearchTitle = styled.div`
  background-color: #ffe65c;
  border-radius: 1.5rem;
  height: 24px;
  flex-grow: 1;
`;

const LPSearchBtn = styled.div`
  flex-grow: 1;

  & > input:checked + label {
    background-color: black;
    color: white;
  }
`;

const LPSearchLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: 24px;
  border-radius: 1.5rem;
  border: 1px solid #333;
`;

const LPSearchRadio = styled.input`
  display: none;
`;
