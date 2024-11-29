import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppContainer, RouteContainer } from "./App.styles";
import Home from "../home/home.component";
import Project from "../project/project.component";

function App() {
  return (
    <AppContainer>
      <RouteContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Router>
      </RouteContainer>
    </AppContainer>
  );
}

export default App;
