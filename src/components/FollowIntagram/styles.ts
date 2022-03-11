import styled from "styled-components";

export const FollowInstagramContainer = styled.section`
  width: 100%;
  height: 100%;
  background: #1B1B1B;
  padding: 0 1rem;

  h2 {
    color: #fff;
    text-align: center;
    margin: 3rem 0;
    font-size: 2.5rem;
  }

  > div.container {
    max-width: 1600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    gap: .5rem;

    img {
      max-width: 360px;
      max-height: 360px;
    }
  }
`;