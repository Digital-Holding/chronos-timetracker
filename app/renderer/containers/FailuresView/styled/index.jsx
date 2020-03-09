import styled from 'styled-components';


export const FailuresViewStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  position: relative;
  width: 100%;
  text-align: center;
  '& td': {
    border: 1px solid #000;
  }
`;

export const FailuresViewHeader = styled.div`
  display: block;
  background: #6c51a4;
  color: #fff;
  height:85px;
  margin-bottom:15px;
  padding-top:15px;
  box-sizing: border-box;
`;

export const ActionIcon = styled.img`
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  height: 20px;
  cursor: pointer;
  // transition: transform .5s ease-in-out;
  transition: transform .3s ease-in;
  -webkit-app-region: drag;
  user-select: none;
  margin-top: 1px;
  margin-right: 8px;
  :hover {
    transform: rotate(270deg);
  }
  ${props => (props.isFetching ? `
    animation: rotating 0.8s linear infinite;
  ` : '')}
`;
