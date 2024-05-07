import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
   const [state, setState] = useState(false);

   return (
      <>
         {state == true ? (
            <Alert onClose={() => setState(false)}>Warningggg</Alert>
         ) : null}

         <Button
            type="btn"
            onBtnClick={() => setState(true)}
         >
            Show alert
         </Button>
      </>
   );
}

export default App;
