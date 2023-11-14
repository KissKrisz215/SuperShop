import React from "react";
import {
  Container,
  NavbarLinksContainer,
  NavbarLinkContainer,
  NavbarLinkTitle,
  CustomFontAwesome,
} from "./UserNavbar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGear,
  faFileLines,
  faBarsProgress,
} from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    title: "DashBoard",
    icon: faBarsProgress,
    link: "/user/dashboard",
  },
  {
    title: "My Orders",
    icon: faBars,
    link: "/user/my-orders",
  },
  {
    title: "Update Profile",
    icon: faGear,
    link: "/user/update-profile",
  },
  {
    title: "Change Password",
    icon: faFileLines,
    link: "/user/change-password",
  },
];

const UserNavbar = () => {
  return (
    <Container>
      <NavbarLinksContainer>
        {links &&
          links.map((link) => (
            <NavbarLinkContainer to={link.link}>
              <CustomFontAwesome icon={link.icon} />
              <NavbarLinkTitle>{link.title}</NavbarLinkTitle>
            </NavbarLinkContainer>
          ))}
      </NavbarLinksContainer>
    </Container>
  );
};

export default UserNavbar;
