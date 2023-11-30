import '../styles/ressources.css'
import logo from '../styles/signecreatif.jpeg'
import searchbar from '../styles/searchbar.jpeg'
import apprendre from '../styles/apprendre.jpeg'
import dico from '../styles/dico.jpeg'
import intiation from '../styles/intiation.jpeg';
import lexiquelsq from '../styles/lexique-lsq.jpeg'
import lsqmath from '../styles/lsq-math.jpeg'
import lsqscience from '../styles/lsq-science.jpeg'
import Footer from '../Footer.js'

export default function Ressources(){
    document.body.style.overflow='visible'
   return( 
   <div className='ressources'>
    <div className='logo'>
            <img src={logo} alt="Logo" />
      </div>
  
    <div className='ressources-title'>
        <h1>Ressources</h1>
    </div>
    <div className='ressources-paragraph'>
        <p>
            Ici vous auriez acces a plusieurs liens vous donnant acces a un certain nombre de ressources pedagogique tel que 
            plusieurs lexiques LSQ dont le lexique classique, lexique scientifique ainsi qu'un lexique mathematiques, mais aussi
            le DICO LSQ de RESO et pour finir une petite video d'intiation a la LSQ pour vous permettre d'en apprendre plus sur la 
            langue des signes et tout ce qu'elle a vous offrir
        </p>
    </div>
    <div className='searchbar'>
        <img src={searchbar} alt='searchbar'/>
    </div>
    <div className='box-group'>
        <div className='dico'>
            <img src={dico} alt='dico'/>
            <div className='link-container'>
            <a href='https://www.resosurdite.com/dico-lsq---application-mobile.html' className='lien-site' target='_blank'>Lien du site</a>
            </div>
           
        </div>
        <div className='lexique'>
            <img src={lexiquelsq} alt='lexique'/>
        <div className='link-container-lex'>
            <a href='https://lexiquelsq.ca/lexique-lsq/' className='lien-site' target='_blank'>Lien du site</a>
            </div>
        </div>
        <div className='lsq-science'>
            <img src={lsqscience} alt='lsq-science'/>
        <div className='link-container-science'>
            <a href='https://ccjl.ca/lexique-lsq-sciences/' className='lien-site' target='_blank'>Lien du site</a>
            </div>
        </div>
        <div className='lsq-math'>
            <img src={lsqmath} alt='lsq-math'/>
        <div className='link-container-math'>
            <a href='https://lexiquelsq.ca/theme/mathematique/' className='lien-site' target='_blank'>Lien du site</a>
            </div>
        </div>
        <div className='apprendre'>
             <img src={apprendre} alt='apprendre'/>
        <div className='link-container-apprendre'>
            <a href='https://courslsq.ca/' className='lien-site' target='_blank'>Lien du site</a>
            </div>
        </div>
        <div className='intiation'>
            <img src={intiation} alt='intiation'/>
        <div className='link-container-intiation'>
            <a href='https://www.youtube.com/watch?v=VGgZg3yiUn8' className='lien-site' target='_blank'>Lien du site</a>
            </div>
        </div>
        

    </div>
    <div className='ressources-footer-footer'>
        <Footer/>
    </div>


</div>
   )
}