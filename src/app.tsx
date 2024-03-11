import React from "react";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import { Page } from "./components/pages/page";

function App() {
  return (
    <Provider store={store}>
      <div >
        <Page/>
      </div>
    </Provider>
  );
}
export default App;
