import styled from "styled-components";

const CategoryBox = ({ title, children }) => {
  // props : title, children
  return (
    <>
      <CategoryWrapper>
        <TitleBox>
          <span>{title}</span>
        </TitleBox>
        <ContentBox>{children}</ContentBox>
      </CategoryWrapper>
    </>
  );
};

const CategoryWrapper = styled.div`
  display: flex;
  width: 500px;
`;
const TitleBox = styled.div`
  border: 1px solid black;
  width: 30%;
  color: red;
  padding: 2px;
`;
const ContentBox = styled.div`
  border: 1px solid black;
  width: 70%;
  padding: 2px;
`;

export default CategoryBox;
