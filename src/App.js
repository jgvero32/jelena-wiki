import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from "./pages/Home/Home";
import { Experience } from './pages/Experience/Experience';
import { Interests } from './pages/Interests/Interests';
import { WhichCatAreYou } from './pages/WhichCatAreYou/WhichCatAreYou';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
  <>      

    <BrowserRouter>
    <div className="parent-container">
        <div className="rectangle">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={ <Home />} />
            <Route path="experience" element={ <Experience />} />
            <Route path="interests" element={ <Interests />} />
            <Route path="which-cat-are-you" element={ <WhichCatAreYou />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

      {/* green vector 1 */}
      <svg className="vector1" width="380" height="179" viewBox="0 0 380 179" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.21631 170.5C3.21631 133 3.21631 43.3421 3.21631 3.05245C36.1111 3.05245 4.80321 3.05243 40.7164 3.05243C78.8032 3.05243 91.1795 3.05247 129.216 3.05247C170.68 3.05247 174.375 3.05246 213.216 3.05246C236.375 3.05246 270.03 3.05251 354.216 3.05251C422.216 3.05251 318.36 92.1649 274.787 116.785C232.688 126.827 198.411 77.9356 155.43 66.9005C121.339 38.2985 3.21631 208 3.21631 170.5Z" fill="#2A4747" stroke="white" strokeWidth="5"/>
      </svg>

      {/* gray vector 2 */}
      <svg className="vector2" width="345" height="117" viewBox="0 0 345 117" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M47.4692 3.24269C96.5902 3.24268 55.4692 3.2427 99.9692 3.24269C140.969 3.24268 134.47 3.24274 169.969 3.2427C210.97 3.24265 206.072 3.24265 241.072 3.2427C280.072 3.24265 267.508 3.24266 310.469 3.24266C353.43 3.24266 371.469 -1.25729 241.072 21.8638C174.116 33.7358 125.974 119.087 76.1757 114.099C35.9821 98.0478 -6.5 3.24269 4.96924 3.24269C48.0652 3.24268 13.0903 3.24271 47.4692 3.24269Z" fill="#6E8282" stroke="white" strokeWidth="5"/>
      </svg>

      {/* gray vector 3 */}
      <svg className="vector3" width="273" height="363" viewBox="0 0 273 363" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.68812 190.904C26.0338 153.732 52.8126 2.99995 96.0003 2.99995C132.313 2.99995 270 2.99994 270 2.99994C270 2.99994 270 152.096 270 189.5C270 233.096 270 217.616 270 262C270 299.116 270 213 270 278.884C270 346.884 210.367 372.556 163.5 355C128.748 329.203 141.36 318.904 122.188 278.884C122.188 234.384 2.68812 243.904 2.68812 190.904Z" fill="#2A4747" stroke="white" strokeWidth="5"/>
      </svg>

      {/* gray vector 4 */}
      <svg className="vector4" width="320" height="261" viewBox="0 0 320 261" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M127.502 257.584C85.4498 257.584 152.952 257.584 99.0025 257.584C55.4513 257.585 60.5466 257.584 4.00247 257.584C20.5418 223.278 188.669 206.868 223.024 188.335C260.24 168.259 317.002 -36.2977 317.002 9.08413C317.002 54.466 317.002 75.0858 317.002 188.335C317.003 260.086 317.002 225.585 317.003 257.584C245.379 257.584 200.532 257.584 158.002 257.584C115.473 257.584 180.502 257.585 127.502 257.584Z" fill="#6E8282" stroke="white" strokeWidth="5"/>
      </svg>

      {/* gray vector 5 */}
      <svg className="vector5" width="426" height="114" viewBox="0 0 426 114" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M305.5 111.5C256.379 111.487 297.5 111.512 253 111.5C212 111.489 218.5 111.509 183 111.5C142 111.489 146.5 111.509 111.5 111.5C72.4998 111.49 85.9608 111.511 43 111.5C0.0392271 111.489 -36.4042 87.2337 93.9996 64.1474C160.958 52.2933 227.342 -1.81342 277.14 3.18709C525.5 44.6474 390.184 105.937 349 111.5C305.904 111.488 339.879 111.509 305.5 111.5Z" fill="#2A4747" stroke="white" strokeWidth="5"/>
      </svg>

      {/* gray vector 6 */}
      <svg className="vector6" width="408" height="483" viewBox="0 0 408 483" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.00007 267C3.00012 228.096 2.99996 94.1158 3.00003 20.4999C3.00008 -31.8842 104.985 50.7513 137.688 67.3841C171.634 84.6496 185.89 254.163 203.688 288.904C222.968 326.539 417.772 359.945 404.188 402.384C387.754 430.166 304.188 487.884 190.688 453.384C125.627 433.608 49.3124 480 3 480C3 445.616 3.00006 418.616 3.00006 377.5C3.00007 333.116 3.00001 321.096 3.00007 267Z" fill="#6E8282" stroke="white" strokeWidth="5"/>
      </svg>

  </>  
);
}

export default App;
