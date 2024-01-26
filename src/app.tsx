import React from "react";
import { SearchInput } from "./components/inputs/search-input/search-input";
import { InputField } from "./components/inputs/input-field/input-field";
import { InputFieldAll } from "./components/inputs/input-field/input-field.all";


function App() {

  return (
    <div className="app" style={{display: "grid", gap: "10px"}}>
      <SearchInput onChange={()=>console.log('dkdjd') 
      }/>
      <InputFieldAll/>
    </div>
  );
}
export default App;
