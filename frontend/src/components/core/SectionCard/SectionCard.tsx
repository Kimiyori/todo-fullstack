import styled from 'styled-components';

const SectionCard = () => {
  return <SectionContainer>sectio1n</SectionContainer>;
};
export default SectionCard;

const SectionContainer = styled.div`
  background: ${(props) => props.theme.color.Secondary};
  width:100px;
  height:50px;
`;
