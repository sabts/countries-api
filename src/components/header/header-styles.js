import styled from "styled-components";
import { COLORS_LIGHT } from "../../styles/colors";

const StyledHeaderContainer = styled.section`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  color: ${COLORS_LIGHT.primary};

  @media screen and (min-width: 768px) {
    padding-inline: 58px;
  }
`;

const StyledH1 = styled.h1`
  font-size: 0.875rem;
  font-weight: 800;
  line-height: 20px;
  color: ${COLORS_LIGHT.secondary};
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 135%;
  color: ${COLORS_LIGHT.secondary};
  border: none;
  background-color: transparent;
`;

export { StyledHeaderContainer, StyledH1, StyledButton };
