import './App.css'
import Board from './Board.jsx';

function App() {

  return (
    <div className= 'min-h-screen flex item-center justify-center bg-blue-300'>
      <div className="bg-gray-100 p-3 rounded-xl shadow-lg max-w-md">
       <h1 className="text-3xl font-bold underline mb-6">
        tic tac toe
       </h1>
       <Board />
       
    </div>
    </div>
  )
    
      
}

export default App



// import { useRef } from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Certificates from "./pages/Certificates";
// import Contact from "./pages/Contact";

// function App() {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const skillsRef = useRef(null);
//   const projectsRef = useRef(null);
//   const certRef = useRef(null);
//   const contactRef = useRef(null);

//   const scrollTo = (ref) => {
//     ref.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <Navbar
//         scrollTo={scrollTo}
//         refs={{ homeRef, aboutRef, skillsRef, projectsRef, certRef, contactRef }}
//       />

//       <div ref={homeRef}><Home /></div>
//       <div ref={aboutRef}><About /></div>
//       <div ref={skillsRef}><Skills /></div>
//       <div ref={projectsRef}><Projects /></div>
//       <div ref={certRef}><Certificates /></div>
//       <div ref={contactRef}><Contact /></div>

//       <Footer />
//     </>
//   );
// }

// export default App;









