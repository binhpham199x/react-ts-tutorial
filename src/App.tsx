import Button from "./components/Button";

function App() {
   const clickHandler = () => {
      console.log("clicked");
   };

   return (
      <>
         <Button onBtnClick={clickHandler}>My Button</Button>
      </>
   );
}

export default App;
