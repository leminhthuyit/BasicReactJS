import { styled } from "styled-components";

const StyleHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(149, 64, 207, 1) 0%,
    rgba(230, 67, 67, 1) 50%,
    rgba(230, 162, 66, 1) 100%
  );

  h1 {
    padding: 20px;
    color: #f2f3f4;
    margin: 0;
  }
`;

export default StyleHeader;
