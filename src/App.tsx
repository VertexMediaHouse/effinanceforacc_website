import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import EngagementModel from './pages/EngagementModel';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/engagement-model" element={<EngagementModel />} />
      </Routes>
        <Chatbot />
    </BrowserRouter>
  );
}

export default App;
