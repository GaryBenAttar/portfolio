import {
  NavigationContainer,
  NavigationLogo,
  NavigationLogoSpan,
  NavigationLink,
  NavigationLinksContainer,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationLogo>
        garyba<NavigationLogoSpan>.</NavigationLogoSpan>
      </NavigationLogo>
      <NavigationLinksContainer>
        <NavigationLink href="#home">Home</NavigationLink>
        <NavigationLink href="#projects">Projects</NavigationLink>
        <NavigationLink href="#contact">Contact</NavigationLink>
      </NavigationLinksContainer>
    </NavigationContainer>
  );
};

export default Navigation;
