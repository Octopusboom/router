import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFount from "./pages/404"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


// Relative paths imports
import Blog from "./pages/Blog";
import PostDetails from "./pages/PostDetails";

// What is React Router Dom
// 1. A library for handling routing in React applications.
// 2. Enables Single Page Applications (SPAs) with multiple views:
//      Dynamically rendering components based on the URL.
//      Managing the URL without reloading the page.
//      Ensuring a smooth, fast, and consistent user experience compared to traditional multi-page websites.

// Install : npm install react-router-dom
// Go to Index.js, import and use BrowserRouter

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFount />} />


          {/* Relative paths from V6 */}
          <Route path="/blog" element={<Blog />}>
          {/* Nested route for post details */}
          <Route path=":postId" element={<PostDetails />} />
        </Route>
        </Routes>
    </div>
  );
}

export default App;
