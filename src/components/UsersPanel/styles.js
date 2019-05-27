import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20px;
  margin-top: 2.5vh;
  padding: 20px;
  width: 20vw;
  height: 95vh;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    margin: 10px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
  }

  .information {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  button {
    margin: 5px;
    border: 0;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    color: #ffffff;
    background: #cc3737;

    &:hover {
      background: #f22e41;
    }
  }
`;
