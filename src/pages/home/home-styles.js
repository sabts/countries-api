import styled from "styled-components";
import { COLORS_LIGHT } from "../../styles/colors";

const StyledMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS_LIGHT.background};

  @media screen and (min-width: 768px) {
    padding: 84px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    width: 95%;
  }
`;

const StyledSearch = styled.input`
  display: flex;
  width: 343px;
  height: 48px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 5px;
  background-color: ${COLORS_LIGHT.primary};
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 135%;
  border: none;
  padding-inline: 16px;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 56px;
  }
`;

const StyledSelection = styled.select`
  display: flex;
  height: 48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${COLORS_LIGHT.primary};
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  align-self: stretch;
  padding: 16px;
  position: relative;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 135%;
  border: none;

  @media screen and (min-width: 768px) {
    height: 56px;
  }
`;

const StyledOptions = styled.option`
  position: absolute;
  top: 100%;
`;

const StyledCountriesDataSheetContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export {
  StyledMainContainer,
  StyledForm,
  StyledSearch,
  StyledSelection,
  StyledCountriesDataSheetContainer,
};
