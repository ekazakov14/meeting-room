import React from 'react';
import Container from '../Container';
import './index.scss';

type Props = {
  logo: React.ReactNode,
  actionButton: React.ReactNode,
};

const Header = ({logo, actionButton}: Props) => (
  <header className="header">
    <Container>
      <div className="header__row">
        <a href="/" className="header__logo">{logo}</a>
        <div className="header__action-button">{actionButton}</div>
      </div>
    </Container>
  </header>
);

export default Header;