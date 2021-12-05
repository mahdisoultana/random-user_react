import styled from "styled-components";
export const StyledRandomUser = styled.section`
  border-radius: 0.9em;
  overflow: hidden;
  width: 70%;
  max-width: 930px;
  margin: auto;
  background-color: #f7f6e5;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
  margin-top: 12vh;
  padding: 1rem;
  height: 510px;
  position: relative;
  .img-container {
    width: 200px;
    height: 200px;
    position: relative;
    z-index: 2;
    border-radius: 50%;
    margin: auto;
    padding: 1rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    background-color: white;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      backface-visibility: hidden;
    }
  }
  .back-img {
    position: absolute;
    width: 100%;
    height: 150px;
    background-color: #a4e2ff9d;
    top: 0;
    left: 0;
  }
  .info,
  .action-container {
    margin: auto;
    display: flex;
    justify-content: space-around;
    width: 80%;
    align-items: center;
    button {
      width: auto;
    }
  }
  .info {
    flex-direction: column;
  }
  button {
    width: 100%;
    display: inline-block;
  }
  .rnd-user-btn {
    width: 60%;
    max-width: 400px;
    margin: 2rem auto;
    text-align: center;
    padding: 1rem 2rem;
  }
  h1 {
    margin: 0;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  h2 {
    margin: 0;
    margin-top: 2rem;
    font-size: 1rem;
  }
  text-align: center;
`;
