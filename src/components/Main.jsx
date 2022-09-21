import { Routes, Route } from "react-router-dom"
import Country from '../pages/Country';
import Show from '../pages/Show';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/country/:id" element={<Show />} />
      </Routes>
    </main>
  )
}

export default Main