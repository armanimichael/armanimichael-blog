import React from 'react';

import { AddressStyled } from './styles';

import { Button } from '../';

interface Props {
  showMapLink?: boolean;
  mapLinkText?: string;
  mapLink?: string;
}

const Address: React.FC<Props> = ({
  children,
  showMapLink = true,
  mapLink = 'https://www.google.com/maps',
  mapLinkText = 'Come visit us!',
}) => (
  <AddressStyled>
    {children}
    {children && <div style={{ marginBottom: '12px' }}></div>}
    {showMapLink && <Button anchorTo={mapLink}>{mapLinkText}</Button>}
  </AddressStyled>
);

export default Address;
