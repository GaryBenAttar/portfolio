import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: inherit;
`;

export const NavigationLogo = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.5rem;
  color: white;
`;
export const NavigationLogoSpan = styled.span`
  color: purple;
`;

export const NavigationLinksContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const NavigationLink = styled.a`
  &:hover {
    color: rgb(250 204 21);
  }
`;
