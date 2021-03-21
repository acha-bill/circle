import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheckCircle, faCircle, faForward, faPaperPlane, faSpinner, faThumbsDown, faThumbsUp, faTicketAlt, faTimesCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import './home.css'


function HomePage() {
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
            <div className="body d-flex flex-column container justify-content-center align-items-center">
                <div className="d-flex justify-content-between top-bar p-3 mb-4">
                    <span>Armand: Names of boys starting with B</span>
                    <span>Action timer: 5s</span>
                </div>
                <div className="d-flex">
                    <div className="mt-2 col-2">
                        <h4>In channel</h4>
                        <ul className="list-group">
                            <li class="list-group-item"><div className="d-flex align-items-center">johndoe <FontAwesomeIcon className="ml-2" icon={faUser} /></div></li>
                            <li class="list-group-item"><div className="d-flex align-items-center">johndoe <FontAwesomeIcon className="ml-2" icon={faUser} /></div></li>
                            <li class="list-group-item"><div className="d-flex align-items-center">johndoe <FontAwesomeIcon className="ml-2" icon={faUser} /></div></li>
                            <li class="list-group-item"><div className="d-flex align-items-center">johndoe <FontAwesomeIcon className="ml-2" icon={faUser} /></div></li>
                            <li class="list-group-item"><div className="d-flex align-items-center">johndoe <FontAwesomeIcon className="ml-2" icon={faUser} /></div></li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column play-area col-7 mt-2">
                        <div className="d-flex justify-content-between align-items-center play-area-head">
                            <span>Thomas</span> <FontAwesomeIcon icon={faArrowLeft} /> <span>Richard</span> <FontAwesomeIcon icon={faArrowRight} /> <span>Ivan</span>
                        </div>
                        <div className="play-area-view d-flex justify-content-center flex-column mb-3">
                            <span className="answer mb-2 mt-4">Bobdinga</span>
                            <span className="approval mb-2">30% approved</span>
                        </div>
                        <div> <hr className="mt-2 mb-3" /></div>
                        <div className="play-area-vote d-flex justify-content-center flex-column">
                            <div>Votes</div>
                            <div className="d-flex flex-wrap mb-3">
                                <div className="d-flex align-items-center m-2">Johnson <FontAwesomeIcon className="ml-2" icon={faCheckCircle} /></div>
                                <div className="d-flex align-items-center m-2">Johnson <FontAwesomeIcon className="ml-2" icon={faCheckCircle} /></div>
                                <div className="d-flex align-items-center m-2">Johnson <FontAwesomeIcon className="ml-2" icon={faTimesCircle} /></div>
                                <div className="d-flex align-items-center m-2">Johnson <FontAwesomeIcon className="ml-2" icon={faCheckCircle} /></div>
                                <div className="d-flex align-items-center m-2">Johnson <FontAwesomeIcon className="ml-2" icon={faCheckCircle} /></div>
                                <div className="d-flex align-items-center m-2">Johnson <FontAwesomeIcon className="ml-2" icon={faTimesCircle} /></div>
                                <div className="d-flex align-items-center m-2">Johnson <FontAwesomeIcon className="ml-2" icon={faCheckCircle} /></div>
                                <div className="d-flex align-items-center m-2">Johnson <FontAwesomeIcon className="ml-2" icon={faCheckCircle} /></div>
                            </div>
                            <div className="d-flex justify-content-center flex-column mb-3">
                                <span className="mb-2"> Vote now: 5s left!</span>
                                <div>
                                    <button className="btn btn-sm btn-success">Correct <FontAwesomeIcon className="ml-2" icon={faThumbsUp} /></button>
                                    <button className="btn btn-sm btn-danger ml-2">Wrong<FontAwesomeIcon className="ml-2" icon={faThumbsDown} /></button>
                                </div>
                            </div>
                        </div>
                        <div className="play-area-input input-group">
                            <input className="form-control" /> <button className="ml-3 btn btn-info">Send <FontAwesomeIcon className="ml-2" icon={faPaperPlane} /></button>
                        </div>
                    </div>
                    <div className="d-flex flex-column col-3 mt-2">
                        <h4>Chat</h4>
                        <div className="chat-area">
                            <span>chat here</span>
                        </div>
                        <div className="chat-input input-group input-group=lg">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="waiting-list"></div>
            </div>
        </main >
    );
}

export default HomePage;