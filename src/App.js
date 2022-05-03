import React, {useState, useEffect } from "react";
import grapesjs from "grapesjs";
import './App.css';
import gjsPresetWebpage from "grapesjs-preset-webpage";

function App() {
  const [editor, setEditor] = useState(null);

  useEffect(()=>{
    const editor= grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebpage],
      pluginsOpts:{

        gjsPresetWebpage:{},

    }
    });
    setEditor(editor);
  }, []);
  return (
    <div className="App">
      <div style={{backgroundColor:"lightblue", width:"100%", height:"30px"}}>
        <form>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <submit>Send</submit>
          <input type="text"></input>
          <submit>Test Email</submit>
        </form>
      </div>
      <div id="editor"></div>
    </div>
  );
}

export default App;
