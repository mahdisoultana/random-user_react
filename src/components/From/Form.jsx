import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import data from "../data.js";
function Form() {
  let [dataU, setDataU] = useState(() => data);
  const [count, setCount] = useState(0);
  const handelSubmit = (e) => {
    e.preventDefault();
    setDataU((prevD) => [
      ...prevD.sort((a, b) => {
        let rnd = Math.random();
        if (rnd > 0.5) {
          return 1;
        } else {
          return -1;
        }
      }),
    ]);
  };
  return (
    <AnimateSharedLayout>
      <Container layout>
        <motion.h1 layout>Lorem ipsum Generator</motion.h1>
        <FormStyled onSubmit={handelSubmit} layout>
          <motion.div layout>
            <motion.input
              layout
              value={count}
              onChange={(e) => {
                setCount((pervC) => {
                  if (pervC < 1) {
                    return 1;
                  } else if (pervC >= dataU.length) {
                    return dataU.length - 1;
                  } else {
                    return +e.target.value;
                  }
                });
              }}
              type="number"
              id="amount"
            />
            <motion.button layout type="submit">
              Generate
            </motion.button>
          </motion.div>
        </FormStyled>
        <motion.section layout>
          <motion.ul layout>
            <AnimatePresence>
              {dataU.slice(0, count).map((info, i) => (
                <motion.li
                  layout
                  key={info.slice(0, 10)}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                  initial={{
                    x: -100,
                    opacity: 0,
                    transition: { duration: 0.4 },
                  }}
                  exit={{ y: -100, opacity: 0, transition: { duration: 0.4 } }}
                >
                  <motion.p key={info.slice(0, 10)} layout>
                    {info}
                  </motion.p>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </motion.section>
      </Container>
    </AnimateSharedLayout>
  );
}

export default Form;

const FormStyled = styled(motion.form)`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    display: inline-block;
    height: 100%;
    width: 50px;
    font-size: 2rem;
    padding: 0.5rem 1.4rem;
  }
  button,
  input {
    border: 1px #333 solid;
  }
  button {
    display: inline-block;
    padding: 0.5rem 1.4rem;
    cursor: pointer;
    font-size: 2rem;
    &:hover {
      color: white;
      background-color: tomato;
    }
    &:active {
      color: white;
      background-color: red;
    }
  }
`;
const Container = styled(motion.div)`
  h1 {
    color: tomato;
    text-shadow: 0px 0 1px #333;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0 1rem;
  background-color: whitesmoke;
  box-shadow: 0 0 6px #33333365;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 1rem;
  ul {
    list-style: decimal;
  }
  p {
    padding: 1rem;
    font-size: 1rem;
    font-weight: 500;
  }
`;
