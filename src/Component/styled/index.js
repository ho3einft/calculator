import styled from "styled-components";

export const Screen = styled.div`
  grid-column: 1/-1;
  text-align: right;
  background-color: rgb(113, 149, 226);
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-all;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  justify-content: space-around;
  padding: 10px;
`;

export const Previous = styled.div`
  color: white;
  font-size: 1.5rem;
`;
export const Current = styled.div`
  color: white;
  font-siaze: 2.5rem;
`;
export const Button = styled.button`
  border: 1px outset white;
  cursor: pointer;
  background-color: rgb(187, 243, 243);
  &:hover {
    background-color: rgba(91, 248, 253, 0.5);
  }
  ${({ gray }) => gray && "background-color: gray"}
  ${({ extend }) => extend && "grid-column: span 2;"}
  ${({ skyblue }) =>
    skyblue &&
    "background-color: rgb(60, 241, 241); border-bottom-left-radius: 10px;"}
    ${({ equal }) =>
    equal &&
    "background-color: gray;grid-column: span 2;border-bottom-right-radius: 10px;"}
`;
