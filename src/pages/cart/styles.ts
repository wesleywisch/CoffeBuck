import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  border-radius: 4px;
  
  div.Finalizar {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      
      &:hover {
        background: #7159c1;
      }
    }
  }

  @media screen and (max-width: 540px){
    width: 280px;
    margin: 0 auto;

    div.Finalizar {
      flex-direction: column-reverse;

      button {
        margin-top: 1rem;
      }
    }
  }

  @media screen and (max-width: 460px) {
    padding: 10px;
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    
    strong {
      color: #f5f5f5;
    }

    span {
      color: #ccc;
    }
  }

  img {
    width: 100px;
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #7159c1;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: #7159c1;
      }
    }

    &:disabled {
      svg {
        color: #7159c1;
        cursor: not-allowed;
      }
    }
  }

  @media screen and (max-width: 640px) {
    img {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (max-width: 540px) {
    thead tr{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    tbody tr {
      background: #363636;
      margin-top: 1rem;

      td{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border-bottom: none;

        button.buttonBottom {
          border-bottom: 1px solid #eee;
        }
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    color: #f2f2f2;
    margin-left: 5px;
  }
`;