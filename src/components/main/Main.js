import Banner from '../banner/Banner';
import Nav from '../nav/Nav';
import './Main.scss';

const Main = () => {
  return (
    <main className="Main">
      <Nav element={<Nav />} path="/" />
      <div className="hero">
        <div className="hero__text">
          <h1>Kroons Cocktails</h1>
          <p>Hemgjorda drinkmixer direkt till din brevlåda</p>
        </div>
      </div>
      <Banner element={<Banner />} path="/" />
    </main>
  );
};

export default Main;
