import './Logo.css'

function Logo() {
    return (
    <body>
        <header>
            <nav>
                <a className='logo' href="/"> Richard Burguer</a>
                <div className='mobile-menu'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line-3'></div>
                </div>

                <ul className="nav-list">
                <li> <a href="/">Início</a></li>
                <li> <a href="/">Sobre</a></li>
                <li> <a href="/">Projetos</a></li>
                <li> <a href="/">Contatos</a></li>
                </ul>
            </nav>
            <main></main>
        </header>
    </body>



    )
}
export default Logo;