import ListGroup from "./components/ListGroup";

function App() {
   const items = ["Ha Noi", "Berlin", "Dortmund", "Köln", "Düsseldorf"];

   const handleSelectItem = (item: string) => {
      console.log(item);
   };

   return (
      <ListGroup
         items={items}
         heading="Listtt"
         onSelectItem={handleSelectItem}
      />
   );
}

export default App;
