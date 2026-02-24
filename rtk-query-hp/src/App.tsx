import { Route, Routes } from "react-router-dom";
import CharacterList from "./features/characters/characterList";
import CharacterDetails from "./features/characterDetails";

function App() {
  return (
    <div className="flex items-center justify-center">
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
