import React from 'react';
import './index.scss';

type Props = {
  logo: React.ReactNode,
  actionButton: React.ReactNode,
};

const Header = ({logo, actionButton}: Props) => (
  <header className="header">
    <a href="/" className="header__logo">{logo}</a>
    <div className="header__action-button">{actionButton}</div>
  </header>
);

export default Header;