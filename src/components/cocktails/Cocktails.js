import './Cocktails.scss';
import veryBerry from '../../assets/images/very-berry.jpg';
import meadowFix from '../../assets/images/meadowfix.jpg';
import summerSerum from '../../assets/images/summer-serum.jpg';
import pBackground from '../../assets/images/p-background.png';

const Cocktails = () => {
  return (
    <div className="Cocktails">
      <div className="container">
        <div className="header">
          <h2>Cocktails</h2>
        </div>
        <div className="cocktail-list">
          <div className="cocktail-list__card">
            <img src={veryBerry} alt="Berries cocktail" />
            <h4>"En massa bär"</h4>
            <h5>89 SEK</h5>
          </div>

          <div className="cocktail-list__card">
            <img src={meadowFix} alt="Summer cocktail" />
            <h4>Meadowfix</h4>
            <h5>89 SEK</h5>
          </div>

          <div className="cocktail-list__card">
            <img src={summerSerum} alt="Summer cocktail" />
            <h4>Summer serum</h4>
            <h5>89 SEK</h5>
          </div>
        </div>
      </div>

      <div className="cocktail-info">
        <div className="cocktail-info__text">
          <p>
            “Idén till Kroons Cocktails föddes under pandemitiden då bar- och
            restaurangvärlden behövde komma på nya sätt att nå ut till sina
            kunder. Det resulterade i alkoholfria cocktailblandningar som
            levereras direkt till din postlåda”
          </p>
        </div>
        <img src={pBackground} alt="Background form" />
      </div>
    </div>
  );
};

export default Cocktails;
