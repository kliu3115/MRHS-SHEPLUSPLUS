import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import FAQ from './FAQ'
import Footer from './Footer'
import AnnualBookDrive from './AnnualBookDrive'
import MVMSStemFair from './MVMSStemFair'
import Workshop1 from './Workshop1'
import Workshop2 from './Workshop2'
import CTEVideo from './CTEVideo'
import BHM from './BlackHistoryMonth'
import PeerMentoring from './PeerMentoring'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className = 'App'>
        <Navbar />
        <div className = "content">
          <Routes>
            <Route path="/projects/black-history-month" element={<BHM/>} />
            <Route path="/projects/peer-mentoring" element={<PeerMentoring/>} />
            <Route path="/projects/mvms-stem-fair" element={<MVMSStemFair/>} />
            <Route path="/projects/cte-video" element={<CTEVideo/>} />
            <Route path="/projects/c++-workshop" element={<Workshop1/>} />
            <Route path="/projects/java-workshop" element={<Workshop2/>} />
            <Route path="/projects/annual-book-drive" element={<AnnualBookDrive/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
