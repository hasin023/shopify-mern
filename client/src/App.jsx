import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";

function App() {

  return (
    <>
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
    </>
  )
}

export default App
