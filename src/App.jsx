import { createContext, useState } from "react";
import DirFolders from "./scripts/dirTree";
import DirPanel from "./components/DirPanel/DirPanel";
import DirAsciiPanel from "./components/DirAsciiPanel";
import "./index.css";

export const dirStateContext = createContext();
const root = new DirFolders("root");
const folders = [];

function App() {
  const [directory, setDirectory] = useState({ root });

  return (
    <div className="container mx-auto p-2">
      <dirStateContext.Provider value={{ directory, setDirectory, root }}>
        <DirPanel folders={folders} />
        <DirAsciiPanel root={root} />
      </dirStateContext.Provider>
    </div>
  );
}
export default App;
