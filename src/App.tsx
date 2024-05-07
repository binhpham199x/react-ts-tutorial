import ListGroup from "./components/ListGroup";

function App() {
   const items = ["Ha Noi", "Berlin", "Dortmund", "Köln", "Düsseldorf"];

   return (
      <ListGroup
         items={items}
         heading="Listtt"
      />
   );
}

export default App;
