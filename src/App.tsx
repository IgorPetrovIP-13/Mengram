import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
