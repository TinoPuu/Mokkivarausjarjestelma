import React from 'react';

const Login = (props) => {
    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        emailError,
        passwordError,
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label> käyttäjänimi</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg"> {emailError}</p>

                <label>Salasana</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">

                    <button onClick={handleLogin}>Kirjaudu sisään</button>

                </div>
            </div>
        </section>
    )
}

export default Login;



