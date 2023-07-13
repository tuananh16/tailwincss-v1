import './App.css';
import Nav from "./components/Nav/index"
import AuthButtons  from "./components/AuthButtons/index"
import Header  from "./components/Header/index"
import Trending  from "./components/Trending/index"


function App() {
  return (
    <div className='grid md:grid-cols-5' >
      <Nav />
      <main className='px-12 py-6 md:col-span-4 bg-cyan-50'>
        <AuthButtons />
        <Header />
        <Trending/>
      </main>
    </div>
  );
}

export default App;
