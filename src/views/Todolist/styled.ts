import styled from "styled-components";

const StyleTodolist = styled.div`
  width: 100%;
  .title {
    background-color: #00dbde;
    background-image: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);

    h2 {
      padding: 20px;
      margin: 0;
      color: #fff;
      text-align: center;
    }
  }

  .content {
    padding: 20px;

    table {
      width: 100%;
      box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.2);
    }

    table,
    th,
    td {
      border: 1px solid #d7dbdd;
      border-collapse: collapse;
    }
  }
`;

export default StyleTodolist;
