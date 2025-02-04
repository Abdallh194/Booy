"use client";
import { HeaderLinks } from "@/constants/constants";
import useHeader from "@/hooks/useHeader";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  const { expanded, setExpanded } = useHeader();
  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Link href="/" className="logo">
          <span className="pt_01">مكتــ</span>
          <span className="pt_02">ــبتي</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            {HeaderLinks.map((link, index) => (
              <Nav.Link as={Link} href={link.to} key={index}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
