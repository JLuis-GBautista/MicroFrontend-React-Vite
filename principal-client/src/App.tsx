import { Routes } from "react-router-dom"
import Client1 from "client1/Client1"
import Client2 from "client2/Client2"

const c1 = Client1();
const c2 = Client2();
function App() {
  return (
    <Routes>
      {c1}
      {c2}
    </Routes>
  )
}

export default App

// import { Client1, Client2 } from "./imports/microFront";

// function App() {
//   return (
//     <Routes>
//       <Client1></Client1>
//       <Client2></Client2>
//     </Routes>
//   )
// }

// export default App
