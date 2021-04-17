import styled from 'styled-components';

export const StyledRectangle = styled.div`
  width: 100px;
  height: 10px;
  animation: rotating 1s ease infinite;
  border-radius: ${({ theme }) => theme.radius.default};
  background-color: ${({ theme }) => theme.color.black};

  @keyframes rotating {
    0% {
      transform: rotate(0deg) scaleY(1);
    }
    50% {
      transform: rotate(180deg) scaleY(10);
    }
    100% {
      transform: rotate(360deg) scaleY(1);
    }
  }
`;
