import { Route, Routes } from "react-router-dom";
import CharacterList from "./features/characters/characterList";
import CharacterDetails from "./features/characterDetails";
import NavBar from "./features/navBar";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="flex items-center justify-center">
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
