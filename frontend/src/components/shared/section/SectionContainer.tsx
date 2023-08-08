import { styled } from 'styled-components';
import { FC } from 'react';
import { useAtomValue } from 'jotai';
import SectionCard from 'components/core/SectionCard/SectionCard';
import { filteredSectionList } from 'store/section';
const SectionContainer: FC = () => {
  const data = useAtomValue(filteredSectionList);
  return (
    <CategoriesWrapper>
      {data.map((section) => (
        <SectionCard key={section.id} id={section.id} name={section.name} itemsCount={section._count.items} />
      ))}
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2em 2em;
  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: row;
  }
`;

export default SectionContainer;
