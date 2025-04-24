import styled from "styled-components";
import PanelBase from "./StyledCommon.css";

const MyPanel = styled.div`
  ${PanelBase}
  width: 300px;
  border: 1px solid #555;
`;

export default function StyledCommon() {
  return (
    <>
      <MyPanel>
        Styled JSXは、JSX式にスタイル定義を...
      </MyPanel>
    </>
  );
}
