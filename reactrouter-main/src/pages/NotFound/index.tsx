import { Header } from '../../componentes';

export function NotFound() {
    return (
        <main>
            <Header />
            <div>
                <h1>Página não existe. <a href="/">Volte</a></h1>
            </div>
        </main>
    )
}