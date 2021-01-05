import React from 'react';
import Container from '../Container';
import './index.scss';

type Props = {
  logo: React.ReactNode,
  actionButton: React.ReactNode,
};

const Header = ({logo, actionButton}: Props) => (
  <Container>
    <header className="header">
      <a href="/" className="header__logo">{logo}</a>
      <div className="header__action-button">{actionButton}</div>
    </header>
  </Container>
);

export default Header;