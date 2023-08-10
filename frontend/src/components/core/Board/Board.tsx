import { FC } from 'react';
import { styled } from 'styled-components';

type BoardProps = { title: string };

const Board: FC<BoardProps> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default Board;

const Title = styled.h1`
  font-size: 2em;
  color: ${(props) => props.theme.color.OnBackground};
`;
