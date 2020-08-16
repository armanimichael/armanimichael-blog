import React from 'react';

import { OpeningHoursStyled, Day, Time, Separator } from './styles';

import { useOpeningHours } from '../../queries/useOpeningHours';

interface Props {
  title?: string;
}

const OpeningHours: React.FC<Props> = ({ title = 'Opening Hours' }) => {
  const openingHours = useOpeningHours();

  const generateTimeTable = () =>
    React.Children.toArray(
      openingHours.map(({ day, hours, id }) => (
        <>
          <Day key={id + '-day'}>
            <p>{day}</p>
            <Time>
              {hours.map(hour => (
                <p key={id + hour}>{hour}</p>
              ))}
            </Time>
          </Day>
          <Separator key={id + '-separator'} />
        </>
      ))
    );

  return (
    <>
      <h2 className="section-title">{title}</h2>
      <OpeningHoursStyled className="transparent">
        {generateTimeTable()}
      </OpeningHoursStyled>
    </>
  );
};

export default OpeningHours;
