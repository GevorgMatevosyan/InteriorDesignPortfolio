import Header from "./components/Header";
import styled from "styled-components"

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  background: aquamarine;
`

function App() {
    return (
        <AppWrapper className="App">
            <Header/>
        </AppWrapper>
    );
}

export default App;
