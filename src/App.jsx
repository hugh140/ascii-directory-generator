import Folder from "./components/Folder";
import "./index.css";

function App() {
  return (
    <>
      <Folder folderName="Hola" />
      <div className="border-l-2">
        <div className="ms-auto w-11/12">
          <Folder />
          <Folder />
          <Folder />
          <div className="border-l-2">
            <div className="ms-auto w-11/12">
              <Folder />
              <Folder />
              <Folder />
            </div>
          </div>
        </div>
      </div>
      <Folder />
      <Folder />
    </>
  );
}

export default App;
