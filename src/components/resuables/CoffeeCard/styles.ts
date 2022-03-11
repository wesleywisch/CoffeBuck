import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 22rem;
  height: 25rem;
  background: #262626;
  display: flex;
  flex-direction: column;
  position: relative;

  > div.image {
    position: relative;
    height: 62%;
    display: flex;
    margin-top: 1rem;

    img {
      max-width: 250px;
      max-height: 250px;
      margin: 0 auto;
      object-fit: cover;
    }

    p {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #805536;
      padding: .2rem;
      color: #fff;
    }
  }

  > div.description {
    padding: 0 1.5rem;
    margin-top: 1rem;

    h3 {
      color: #f8f8f8;
      font-weight: bold;
      margin-bottom: .5rem;
    }

    p.ml {
      color: #626262;
      font-weight: 300;
      margin-bottom: .5rem;
    }

    div.stars {
      display: flex;
      flex-direction: row;
      margin-bottom: .5rem;
      
      p.numberOfStars {
        color: #fff;
        margin-left: .5rem;
      }
    }

    p.price {
      color: #707070;
      font-weight: 300;
    }

    button.bag {
      position: absolute;
      border: none;
      width: 2.5rem;
      height: 2.5rem;
      background: #B87A43;
      bottom: 1rem;
      right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      svg {
        width: 60%;
        height: 60%;
        color: #fff;
      }
    }
  }
`;