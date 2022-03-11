import styled from "styled-components";

export const NewsletterContainer = styled.section`
  width: 100%;
  height: 10rem;
  margin: 2rem 0;
  background: #161715;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div.image {
    img {
      max-width: 100%;
      max-height: 10rem;
      object-fit: cover;
    }
  }

  > div.description {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      text-align: right;
      color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
    }

    p {
      text-align: right;
      color: #f8f8f8;
      font-weight: 300;
      font-size: .9rem;
    }
  }

  > div.inputs {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    input {
      width: 45%;
      height: 30%;
      background: #2F2F2E;
      border: none;
      outline: none;
      padding: .5rem 1rem;
      color: #f5f5f5;
    }

    button {
      width: 45%;
      height: 30%;
      border: none;
      color: #fff;
      padding: .5rem 1rem;
      font-size: 1.1rem;
      background: #B67841;
    }
  }

  @media screen and (max-width: 1240px) {
    grid-template-columns: 1fr;
    height: 100%;

    > div.description {
      justify-content: center;
      align-items: center;
      margin: 1rem 2rem;

      h2 {
        text-align: center;
      }

      p {
        text-align: center;
      }
    }

    > div.inputs {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      input {
        width: 50%;
        height: 60%;
      }

      button {
        width: 50%;
        height: 60%;
      }
    }
  }

  @media screen and (max-width: 650px) {
    > div.inputs {
      input {
        width: 80%;
      }

      button {
        width: 80%;
      }
    }
  }
`;