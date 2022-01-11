import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 250px;
`;

export const BookThumbnail = styled.div`
  height: 200px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const BookContents = styled.p`
  line-clamp: ;
`;
