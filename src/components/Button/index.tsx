import React from 'react';
import './index.scss';

type Props = {
  theme: 'primary' | 'disabled',
  size: 'lg',
  onClick?: () => any,
  children: React.ReactNode,
};

const Button = ({theme, size, children, onClick}: Props) => (
  <button
  onClick={onClick}
  className={`button button_theme_${theme} button_size_${size}`}>{children}</button>
);

export default Button;