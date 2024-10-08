function HomePage() {
    const goToLogin = () => window.location = "/login"
    const goToSignup = () => window.location = "/signup"
    return (
        <>
            <h1>Informism</h1>
            <h3>Don`t lose your information </h3>
            <button id="signup-btn" onClick={goToSignup}>Start informing your life...</button>
            <br/>
            <button id="login-btn" onClick={goToLogin}>Login</button>
        </>
    )
}

export default HomePage;