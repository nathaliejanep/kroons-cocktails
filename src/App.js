import Cocktails from './components/cocktails/Cocktails';
import Cookies from './components/cookies/Cookies';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Cookies element={<Cookies />} path="/" />
      <Main element={<Main />} path="/" />
      <Cocktails element={<Cocktails />} path="/" />
      <Footer element={<Footer />} path="/" />
    </div>
  );
}

export default App;
