import DirFolders from "./scripts/dirTree";
import DirPanel from "./components/DirPanel/DirPanel";
import DirAsciiPanel from "./components/DirAsciiPanel";
import "./index.css";

const root = new DirFolders("root");
const folders = [];

function App() {
  return (
    <div className="container mx-auto p-2">
      <h1 className="mt-5 text-center text-2xl font-semibold uppercase text-blue-950">
        Ascii Tree Generator
      </h1>
      <DirPanel root={root} folders={folders} />
      <DirAsciiPanel root={root} />
    </div>
  );
}
export default App;
