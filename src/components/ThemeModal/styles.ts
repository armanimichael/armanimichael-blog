import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-content: center;

    & p {
      margin: 0;
      display: inline;
      text-transform: capitalize;
    }
  }

  & input {
    width: 28px;
    height: 28px;
    margin-right: 14px;
  }

  & span:first-child {
    margin-top: 0;
  }

  & span:last-child {
    margin-bottom: 0;
  }
`;

export { Content };
