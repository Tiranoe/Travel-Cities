import { Routes, Route } from "react-router-dom"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/countries/:id" element={<Show />} />
      </Routes>
    </main>
  )
}

export default Main