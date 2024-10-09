function Signup () {

    async function signup() {
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        const retype_password = document.getElementById('retype-password').value;

        const response = await fetch('https://localhost:3030/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                name,
                password,
                retype_password
            })
        })
    }

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
            <button onClick={signup} id="signup-btn">Signup</button>
        </div>
    </>
}

export default Signup;