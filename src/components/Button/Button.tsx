import React from 'react';
import { Link } from 'gatsby';

import { ButtonStyled } from './styles';

interface Styles {
  color: string;
  background: string;
}
interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  anchorTo?: string;
  styles?: Styles;
  title?: string;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  anchorTo = '/',
  styles,
  title,
}) => {
  // Check external links
  const isInternal: boolean = /^\/(?!\/)/.test(anchorTo);

  if (onClick) {
    return (
      <ButtonStyled onClick={onClick} styles={styles}>
        <p>{children}</p>
      </ButtonStyled>
    );
  }

  if (isInternal) {
    return (
      <Link to={anchorTo} title={title}>
        <ButtonStyled styles={styles}>
          <p>{children}</p>
        </ButtonStyled>
      </Link>
    );
  }

  return (
    <a
      href={anchorTo}
      target="_blank"
      rel="nofollow noopener noreferrer"
      title={title}
    >
      <ButtonStyled styles={styles}>
        <p>{children}</p>
      </ButtonStyled>
    </a>
  );
};

export default Button;
