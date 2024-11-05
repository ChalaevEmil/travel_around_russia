
import './App.css';
import Header from '../Header/Header'
import Lead from '../Lead/Lead'
import Intro from '../Intro/Intro'
import Photo from '../Photo-grid/Photo-grid'
import Places from '../Places/Places'
import Cover from '../Cover/Cover'
import Footer from '../Footer/Footer'

function App() {
  return (
    <main className="App">
      <Header/>
      <Lead/>
      <Intro/>
      <Photo/>
      <Places/>
      <Cover/>
      <Footer/>
    </main>
  );
}

export default App;
