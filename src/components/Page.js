import styled from "styled-components";

export default styled.div`
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 48px;
  background: linear-gradient(38deg, #1390ce, #995889, #43d9ea);
  background-size: 300% 300%;
  animation: gradient-animation 15s ease infinite;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  & > * {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 0;
  }

  @keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;
