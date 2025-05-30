import styled from "styled-components";
import { COLORS_LIGHT } from "../../styles/colors";

const StyledCountryContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${COLORS_LIGHT.background};

  @media screen and (min-width: 768px) {
    padding: 84px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border: none;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
  background-color: ${COLORS_LIGHT.primary};
  color: ${COLORS_LIGHT.secondary};
  gap: 8px;
  padding: 16px;
`;

const StyledCountryFlag = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: contain;
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
  color: ${COLORS_LIGHT.secondary};
  font-weight: 800;
  line-height: 145%;
`;

const StyledCaption = styled.h6`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${COLORS_LIGHT.secondary};
`;

const Styledtext = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
  color: ${COLORS_LIGHT.secondary};
`;

const StyledBorderCaption = styled.h6`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${COLORS_LIGHT.secondary};
`;

const StyledBorderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
`;

export {
  StyledCountryContainer,
  StyledButton,
  StyledCountryFlag,
  StyledCountryInfo,
  StyledTextDiv,
  StyledTitle,
  StyledCaption,
  Styledtext,
  StyledBorderCaption,
  StyledBorderDiv,
};
