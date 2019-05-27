import styled from 'styled-components';

export const MainContainer = styled.div`
  position: absolute;
  top: 0;
  margin-top: 2.5vh;
  margin-left: 40vw;
  padding: 20px;
  width: 500px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);

  form {
    display: flex;
    flex-direction: column;

    input {
      margin: 5px;
      padding: 10px 20px;
      color: rgba(0, 142, 198, 1);
      background: rgba(252, 252, 252, 1);
      min-width: 120px;
      border: 1px solid ${props => (props.error ? 'red' : '#b7b7b7')};
    }

    .error {
      margin: 5px;
      color: red;
      font-weight: bold;
    }

    .actions {
      display: flex;
      justify-content: space-between;

      button {
        flex-grow: 1;
        margin: 5px;
        border: 0;
        font-size: 20px;
        padding: 10px 20px 10px 20px;
        text-decoration: none;
      }

      button.primary {
        color: #ffffff;
        background: #3498db;

        &:hover {
          background: #3cb0fd;
        }
      }

      button.danger {
        color: #ffffff;
        background: #cc3737;

        &:hover {
          background: #f22e41;
        }
      }
    }
  }
`;
