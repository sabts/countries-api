import styled from "styled-components";
import { COLORS_LIGHT } from "../../styles/colors";

const StyledCountryContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.background};

  @media screen and (min-width: 768px) {
    padding: 84px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;

const StyledButton = styled.button`
  display: flex;
  width: fit-content;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border: none;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  gap: 8px;
  padding: 24px;

  @media screen and (min-width: 1024px) {
    grid-column: 1;
    grid-template-rows: 1;
  }
`;

const StyledCountryFlag = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: contain;

  @media screen and (min-width: 1024px) {
    grid-column: 1;
    grid-template-rows: 2;
  }
`;

const StyledCountryInfoContainer = styled.section`
  @media screen and (min-width: 678px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    color: ${({ theme }) => theme.secondary};
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

const StyledCountryInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTextDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  height: 35px;
`;
const StyledTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 145%;
`;

const StyledCaption = styled.h6`
  font-size: 0.875rem;
  font-weight: 600;
`;

const Styledtext = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
`;

const StyledBorderCaption = styled.h6`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
`;

const StyledBorderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  ${({ theme }) => theme.secondary};

  @media screen and (min-width: 1024px) {
    grid-column: 1/2;
    grid-template-rows: 3;
    width: 200%;
  }
`;

export {
  StyledCountryContainer,
  StyledButton,
  StyledCountryFlag,
  StyledCountryInfoContainer,
  StyledCountryInfo,
  StyledTextDiv,
  StyledTitle,
  StyledCaption,
  Styledtext,
  StyledBorderCaption,
  StyledBorderDiv,
};
