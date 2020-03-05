import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    rgba(250, 224, 66, 0.8) ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 10px;
  left: 0;
  margin: 0;
  top: 0;
  z-index: 3;
`;

export default Progress;
