import React from 'react';

interface Props {
  title?: string;
}

const Section: React.FC<Props> = ({ title, children }) => (
  <>
    {title && <h2 className="section-title secondary">{title}</h2>}
    <section>{children}</section>
  </>
);

export default Section;
