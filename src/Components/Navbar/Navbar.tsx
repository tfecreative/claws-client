import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Navbar.scss";

export type NavbarProps = {
  title: string;
};

export const AppNavbar = ({ title }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="primary" light expand="md">
      <NavbarBrand href="/">
        <h1 className="title text-accent">{title}</h1>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/submission/">Submit a Claw Machine</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
