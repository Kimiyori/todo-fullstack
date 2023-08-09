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
        <SectionCard key={section.id} data={section} />
      ))}
    </CategoriesWrapper>
  );
};

export default SectionContainer;

const CategoriesWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2em 2em;
  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: row;
  }
`;
