import styled from 'styled-components';

export const hero_content = styled.div`
  background-color: red;
`;

const HeroContent = () => {
  return (
    <hero_content>
      <img src="src/assets/Django Livre.png" alt="" />
    </hero_content>
  );
};

export default HeroContent;
