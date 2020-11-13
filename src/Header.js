function Header({children}) {
    return (
        <header>
            <h1>Virtual Reality Inc</h1>
            <h2>Making your virtual project a reality</h2>
            <hr />
            <br />
            <nav>
                {children}
            </nav>
            <br />
            <hr />
        </header>
    )
}

export default Header;