import styled from "styled-components";

const StyledHome = styled.div`
  .title_home {
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
  }

  .nav_home {
    color: #fff;
    background: linear-gradient(
      90deg,
      rgba(94, 92, 111, 1) 0%,
      rgba(73, 73, 186, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    

    ul {
      height: 36px;
      margin: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      align-items: center;
    }

    li {
      list-style-type: none;
    }
  }
`;

export default StyledHome;
