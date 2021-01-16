import React from 'react';
import './index.scss';

type Props = {
  children: React.ReactNode,
  name: string,
};

const Label = ({children, name}: Props) => (
  <label className="label">
    <div className="label__name">{name}</div>
    <div className="label__content">{children}</div>
  </label>
);

export default Label;