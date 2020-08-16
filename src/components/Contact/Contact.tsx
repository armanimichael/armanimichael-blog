import React from 'react';
import { IoIosContact, IoIosMail, IoMdPhonePortrait } from 'react-icons/io';

import { ContactStyled, IconContainer } from './styles';

interface Props {
  type: 'phone' | 'mail' | 'social';
  value: string | number;
  name?: string;
}

const Contact: React.FC<Props> = ({ type, value, name }) => {
  const contactsLinks = {
    phone: `tel:${value}`,
    mail: `mailto:${value}`,
    social: value,
  };

  const contactIcons = {
    phone: <IoMdPhonePortrait />,
    mail: <IoIosMail />,
    social: <IoIosContact />,
  };

  return (
    <ContactStyled
      href={contactsLinks[type] as string}
      rel="nofollow noopener noreferrer"
      target={type === 'social' ? '_blank' : '_self'}
    >
      <IconContainer>{contactIcons[type]}</IconContainer>
      <h3>{name || value}</h3>
    </ContactStyled>
  );
};

export default Contact;
