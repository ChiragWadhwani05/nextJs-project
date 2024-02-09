import React from 'react';
import './button.scss';

function Button({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>;
}

export default Button;
