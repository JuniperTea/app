import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import AddBook from "./pages/bookshelf/AddBook";
import BookView from "./pages/bookshelf/BookView";
function App() {
  return (
    <div className="App body">
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/add-books" element={<AddBook />} />
        <Route path="/book-view" element={<BookView />} />
        <Route path="/" element={<Navigate to={"/landing"} />} />
      </Routes>
    </div>
  );
}

export default App;
