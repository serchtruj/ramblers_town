import './Footer.css'
import { SocialMedia } from '../index'

const phoneNumber = '3323388205';
const message = 'Hola, me gustaria tener información acerca de su banda';
const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-info-container">
                <ul className='footer-info'>
                    <li>
                        <h4>Banda</h4>
                    </li>
                    <li>
                        <p>
                            <a href="#" target="_top">Home</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href={url} target='_blank'>Contactanos</a>
                        </p>
                    </li>
                </ul>
                <ul className='footer-info'>
                    <li>
                        <h4>Generos</h4>
                    </li>
                    <li>
                        <p>Rock</p>
                    </li>
                    <li><p>Blues</p></li>
                    <li>
                        <p>Psicodelico</p>
                    </li>

                </ul>
                <ul className='footer-info'>
                    <li>
                        <h4>Siguenos</h4>
                    </li>
                    <li className='footer-info-social'>
                        <SocialMedia color="white" />
                    </li>
                </ul>
            </div>
            <div className="footer-info-rights">
                <p>©2023 Ramblers Town | Todos los derechos Reservados | Creado por: </p>
                <a href='https://github.com/serchtruj' target="_blank">Sergio Trujillo</a>
            </div>
        </div>
    )
}
