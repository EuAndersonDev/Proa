import styles from '../css/Header.module.css';
import Logo from '../assets/viagens.jpg'
import Lupa from '../assets/lupa.png'
 
function Header() {
    return (
        <header>

            <img src={Logo} alt="Logo da Agencia de Viagens" className={styles.logo_agencia}/>
            <nav className={styles.menu}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Aruba</a>
                    </li>
                    <li>
                        <a href="#">Escócia</a>
                    </li>
                    <li>
                        <a href="#">Muralhas da China</a>
                    </li>
                    <li>
                        <a href="#">Grand Canyon</a>
                    </li>
                </ul>
            </nav>
            <div>
                <input type="search" className={styles.busca}/>
            </div>

            <div>
                <img src={Lupa} alt="Lupa" className={styles.lupa}/>
            </div>

        </header>
    )
}

export default Header;