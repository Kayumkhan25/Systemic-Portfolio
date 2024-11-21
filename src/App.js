import './App.css';
import Background from './components/Background';
import Drives from './components/Drives';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Ventures from './components/Ventures';
import Philosophies from './components/Philosophies';
import Quote from './components/Quote';

function App() {

  return (
    <div className="w-4/5 p-2 mx-auto grid gap-20">
      
        <Intro/>
        
        <Drives />

        <Background />

        <Ventures />

        <Projects />

        <Philosophies />

        <Quote />
           
    </div>
  );
}

export default App;
