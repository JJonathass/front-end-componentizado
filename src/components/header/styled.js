import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
  background-color: ${(props) => (props.darkMode ? "#333" : "#fff")};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    background-color: ${(props) => (props.darkMode ? "#444" : "#225ed8")};

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;

export const DarkModeButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  cursor: pointer;
  font-size: 16px;
  transition: color 0.3s ease;
`;