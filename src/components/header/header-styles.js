import styled from "styled-components";

const StyledHeaderContainer = styled.section`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.6);
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};

  @media screen and (min-width: 768px) {
    padding-inline: 58px;
  }
`;

const StyledH1 = styled.h1`
  font-size: 0.875rem;
  font-weight: 800;
  line-height: 20px;
  color: ${({ theme }) => theme.secondary};
`;

const StyledButton = styled.input`
  appearance: none;
  pointer-events: none;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 135%;
  color: ${({ theme }) => theme.secondary};
`;

export { StyledHeaderContainer, StyledH1, StyledButton, StyledLabel };
