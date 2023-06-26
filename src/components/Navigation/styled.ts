import styled from "styled-components";

const StyleNav = styled.div`
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

    a {
        color: #fff;
        font-weight: 500;
    }
  }
`;

export default StyleNav;
