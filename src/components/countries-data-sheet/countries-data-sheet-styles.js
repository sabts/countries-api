import styled from "styled-components";
import { COLORS_LIGHT } from "../../styles/colors";

const StyledCountryContainer = styled.div`
  display: flex;
  width: 264px;
  height: 360px;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow-x: clip;
`;

const StyledCountryFlag = styled.img`
  width: 267px;
  height: 160px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const StyledCountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 24px;
`;

const StyledTextDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  height: 35px;
`;
const StyledTitle = styled.h2`
  font-size: 1.125rem;
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
export {
  StyledCountryContainer,
  StyledCountryFlag,
  StyledCountryInfo,
  StyledTextDiv,
  StyledTitle,
  StyledCaption,
  Styledtext,
};
