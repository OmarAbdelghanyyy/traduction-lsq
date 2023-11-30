import '../styles/aboutUs.css'
import logo from '../styles/signecreatif.jpeg'
import Footer from '../Footer.js'
import "@fontsource/ibm-plex-sans"; 
export default function AboutUs(){
    document.body.style.overflow='visible';
  return(
    <div className='aboutUs'>
        <div className='logo'>
            <img src={logo} alt="Logo" />
      </div>
        <div className='members'>
        <div className='jennyDiv'>
                <p>Jenny Farag</p>
        </div>
        <div className='omarDiv'>
                <p>Omar Abdelghany</p>
        </div>
        <div className='rayaneDiv'>
                <p>Rayane El Hadri</p>
         </div>
        <div className='saadDiv'>
                <p>Saad Allah Moumine</p>
        </div>
        </div>

        <div className='title'>
            <h2 style={{
              fontFamily:'ibm-plex-sans'
            }}>Notre Equipe</h2>
        </div>
        <div className='intro'>
        <p className='aboutus_text'>
        Notre équipe se consacre à simplifier l’apprentissage du français en tant que seconde langue pour les jeunes utilisant la Langue des Signes Québécoise (LSQ). 
         Notre équipe spécialisée dans le développement de cette plateforme, conçoit une base de données innovante qui offre des traductions visuelles, 
         tout en intégrant des paramètres d’accessibilité ajustables.
        </p>
        </div>


      <div className='footer-about'>
        <Footer />
      </div>

    </div>

  )
}




