import DirFolders from "./scripts/dirTree";
import DirPanel from "./components/DirPanel";
import DirAsciiPanel from "./components/DirAsciiPanel";
import "./index.css";

const root = new DirFolders("root");
const folders = [];

function App() {

  return (
    <div className="container mx-auto p-2">
      
      <DirPanel root={root} folders={folders} />
      <DirAsciiPanel root={root} />
      
    </div>
  );
}

export default App;
