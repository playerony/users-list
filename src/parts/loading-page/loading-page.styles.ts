import styled from 'styled-components';

export const StyledRectangle = styled.div`
  width: 200px;
  height: 30px;
  animation: rotating 1s linear infinite;
  background-color: ${({ theme }) => theme.color.black};

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
