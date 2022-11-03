import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

/*
function createNotes(notes){
  return (
    <Note 
    llave={notes.key}
    titulo={notes.title}
    contenido={notes.content}
    />
  );
}
*/
function App() {
  return <div>
        <Header />
        {notes.map (notes => ( //Using Arrow .-when you only use one component (Note) like this example you could quit "return"
            <Note 
            llave={notes.key}
            titulo={notes.title}
            contenido={notes.content}
            />
          ))} 
        <Footer />
        
        </div>

}

export default App;

