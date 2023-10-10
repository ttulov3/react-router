import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <h1>Empresa</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/sobre">sobre</Link>
            </div>
        </header>
    );
}