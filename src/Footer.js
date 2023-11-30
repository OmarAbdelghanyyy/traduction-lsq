import './Footer.css'
export default function Footer(){
    return(
        <div className="footer">
           <div className="ressources-footer">
                <h3>Ressources</h3>
                <a className='footer-links'>Apprendre le signe</a>
                <a className='footer-links'>Zone de pratique</a>
                <a className='footer-links'>Dictionnaire</a>
           </div>
           <div className="companie-footer">
                <h3>Companie</h3>
                <a className='footer-links'>A propos de nous</a>
                <a className='footer-links'>Notre equipe</a>
           </div>
           <div className="support-footer">
                <h3>Support</h3>
                <a className='footer-links'>Contactez-nous</a>
                <a className='footer-links'>FAQ</a>
                <a className='footer-links'>Communaute</a>
           </div>
           <p className='copyright'>Copyright @ 2023 SIGNECREATIF. All rights reserved</p>
        </div>
    )
}