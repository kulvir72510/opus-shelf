import React from 'react'

function Register() {
    return (
        <div className="register">
            <div className="register-form">
                <form>
                    <div>
                        <input type="text"
                            placeholder="Name" />
                    </div>
                    <div>
                        <input type="tel"
                            placeholder="Phone Number" />
                    </div>
                    <div>
                        <input type="date" />
                    </div>
                    <button type="submit">Register</button>
                </form>

            </div>

        </div>
    )
}

export default Register
