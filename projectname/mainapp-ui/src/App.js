import { Route, Routes,Navigate } from "react-router-dom";
import NavbarHome from "./components/Navbar/NavbarHome"

import { 
  Home, 
  Revision, 
  Additions, 
  Transfer,
  Whoops404,
  RevisionList
} from './pages/pages';

function App() {
  return (
    <div>
        <Routes>
          <div>
            <NavbarHome/>
          </div>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="revision" element={<Revision />}/>
          <Route exact path="revision/:id" element={<RevisionList/>}/>
          <Route exact path="additions" element={<Additions />}/>
          <Route exact path="transfer" element={<Transfer />}/>
          <Route/>
          <Route  path="*" element={<Whoops404 />}/>
        </Routes>
        
    </div>
  );
}

export default App;
