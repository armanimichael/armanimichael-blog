import styled from 'styled-components';

const OpeningHoursStyled = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media all and (max-width: 800px) {
    align-self: center;
    width: 100%;
  }
`;

const Day = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20%;

  & > p {
    font-weight: bold;
    margin-right: 20px;
  }

  @media all and (max-width: 800px) {
    width: calc(100% - 20%);
    margin: 15px 10%;
    flex-direction: column;
    justify-content: space-between;

    & > p {
      margin-bottom: 30px;
      margin-right: 0px;
    }
  }
`;

const Time = styled.div`
  & p {
    text-align: right;
  }

  & p:first-child {
    margin-bottom: 0;
  }

  & p:last-child {
    margin-top: 0;
  }

  & p:not(:last-child):not(:first-child) {
    margin: 0;
  }

  @media all and (max-width: 800px) {
    & p:first-child {
      margin-top: 0;
    }

    & p {
      text-align: center;
      margin-bottom: 10px !important;
    }
  }
`;

const Separator = styled.hr`
  width: 90%;
  height: 1px;
  margin: 0;
  background: ${props => props.theme.headline.primary};
  opacity: 0.4;
  align-self: center;

  &:last-child {
    display: none;
  }
`;

export { OpeningHoursStyled, Day, Time, Separator };
