import styled from 'styled-components';
import TextArea from 'components/core/TextArea/TextArea';

export const SectionContainer = styled.div`
  background: ${(props) => props.theme.color.Secondary};
  text-align: center;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const SectionName = styled(TextArea)`
  font-size: 24px;
  margin: 0;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
