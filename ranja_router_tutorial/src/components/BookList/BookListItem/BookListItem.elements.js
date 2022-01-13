import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 32%;
  height: 550px;
  border: 1px solid #ccc;

  & h2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    line-height: 1.2;
    text-align: center;
  }
`;

export const BookThumbnail = styled.div`
  height: 200px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BookInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 0 15px;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;
`;

export const BookContents = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 1.2;
  padding: 0px 15px;
  margin: 0;
`;
