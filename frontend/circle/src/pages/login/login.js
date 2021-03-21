import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faForward, faSpinner } from '@fortawesome/free-solid-svg-icons';
import './login.css'


function LoginPage() {
    useEffect(() => {
    })
    let [isSearchingUsername, setIsSearchingUsername] = useState(false);
    let [error, setError] = useState("")
    let [username, setUsername] = useState("");

    const handleUsernameInput = (e) => {
        const username = e.target.value.trim()
        if (username.indexOf(" ") >= 0) {
            setError("spaces in username is not allowed")
            return
        } else {
            setError("")
        }

        // TODO: check username
        setUsername(username)
    }

    return (
        <main>
            <div className="body d-flex justify-content-center align-items-center flex-column">
                <div class="title-label mb-2">circle <FontAwesomeIcon icon={faCircle} size="sm" /></div>
                <div class="form-group mb-2">
                    <div className="d-flex justify-content-space-between align-items-center mb-2">
                        <label> Username</label>
                        <input className="ml-3 form-control" type="text" placeholder="search username" onChange={handleUsernameInput} />
                        {isSearchingUsername && <FontAwesomeIcon className="ml-3" icon={faSpinner} spin />}
                    </div>
                    {error && <div>
                        <i className="error-text">{error}</i>
                    </div>}
                    <button className="btn btn-block btn-primary m">Join <FontAwesomeIcon icon={faForward} /></button>
                </div>
                <div class="sub-title">
                    <span>Have a fun!</span>
                </div>
            </div>
        </main >
    );
}

export default LoginPage;