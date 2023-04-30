import { Route ,Router } from "react-router-dom";
import Main from "./mainpage/main";
import NavBar from "./navbar/nav";
import Header from "./headerpage/header"
import Fotter from "./fotter/fotter"

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <Main></Main>
      <Fotter></Fotter>
    
    </div>
  );
}

export default App;
