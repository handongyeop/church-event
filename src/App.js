import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <StyledBG className="App">
      <Routes>
        <Route path="/" element={<ListPage />} />
      </Routes>
    </StyledBG>
  );
}

export default App;

const StyledBG = styled.div`
  width: 100vw;
  height: 100vh;
`;
