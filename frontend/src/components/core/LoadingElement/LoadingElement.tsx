import { keyframes, styled } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerElement = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const SpinnerWrapperOuter = styled.div`
  position: relative;
`;

const SpinnerWrapperInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;
const Spinner = () => {
  return (
    <SpinnerWrapperOuter>
      <SpinnerWrapperInner>
        <SpinnerElement />
      </SpinnerWrapperInner>
    </SpinnerWrapperOuter>
  );
};
export default Spinner;
