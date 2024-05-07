import { useState } from "react";

function ListGroup() {
   const items = ["Ha Noi", "Berlin", "Dortmund", "Köln", "Düsseldorf"];

   const [selectedIndex, setSelectedIndex] = useState(-1);

   return (
      <>
         <h1>List</h1>

         {items.length === 0 && <p> No item found</p>}

         <ul className="list-group">
            {items.map((item, index) => (
               <li
                  key={item}
                  className={
                     "list-group-item " +
                     (selectedIndex === index ? "active" : "")
                  }
                  onClick={() => {
                     setSelectedIndex(index);
                  }}
               >
                  {item}
               </li>
            ))}
         </ul>
      </>
   );
}

export default ListGroup;
