import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import { Header } from '../../componentes';

export function Home() {
    return (
        <main>
            <Header/>
            <div className="perfil">
                <img src="./src/img/user.png" alt="Imagem do usuário" />
                <h1 id="user-name">Usuário</h1>
                <Link to="/sobre" id="rota_sm">
                    Saiba mais
                </Link>
            </div>
        </main>
    );
}
