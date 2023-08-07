import { FC } from 'react';
import { styled } from 'styled-components';

type BoardProps = { title: string };

const Board: FC<BoardProps> = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h1`
  font-size: 2em;
  color: ${(props) => props.theme.color.OnBackground};
`;

export default Board;
