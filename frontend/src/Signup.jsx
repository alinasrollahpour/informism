function Signup () {
    return <>
        <div>
            <p>Enter your email</p>
            <input type="email" name="email" id="email" placeholder="example@example.com"/>
            <p>Enter your name</p>
            <input type="text" name="name" id="name"/>
            <p>Choose a strong password</p>
            <input type="password" name="password" id="password"/>
            <p>Retype password</p>
            <input type="password" name="retype-password" id="retype-password"/>
            <br/>
            <button id="signup-btn">Signup</button>
        </div>
    </>
}

export default Signup;