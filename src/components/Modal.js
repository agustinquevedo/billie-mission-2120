import React, { useState, useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';

const Modal = (props) => {

    let ModalBox = useRef(null)

    const [company, setCompany] = useState(props.currentCompany)
    const [ edited, setEdited ] = useState(false)

    // Input handler
    const handleInputChange = (event) => {
        const { value } = event.target
        setCompany({ ...company, budget: value })
    }

    useEffect(() => {
        setCompany(props.currentCompany)

        TweenMax.to(
            ModalBox,
            .8,
            {
                opacity: 1,
                y: -10,
                ease: Power3.easeOut
            }
        )


    }, [props])

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div ref={el => {ModalBox = el}} className="modal-content">
                <div className="card">
                    <div className="card-content">
                        <div className="field">
                            <div className="control">
                                <label className="label">Company</label>
                                <p>{company.name}</p>
                            </div>
                        </div>
                        {/* FORM TO EDIT COMPANY */}
                        <form  onSubmit={(event) => { event.preventDefault(); props.updateCompany(company.id, company);
                            window.setTimeout(() => {setEdited(true)}, 300); 
                        }}> 
                            <div className="field">
                                <div className="control">
                                    <p className="label">Budget</p>
                                    <input className="input" value={company.budget} onChange={handleInputChange} />
                                    <p className="help">The value must not be less than the budget spent.</p>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <div id="saved-notification" className="notification is-success is-light is-hidden">
                                        Changes saved successfully.
                                    </div>
                                </div>
                            </div>
                            {   
                                // If the changes were edited and saved, 
                                // it shows the accept button.
                                edited ? (
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button className="button is-danger" disabled>Cancel</button>
                                        </div>
                                        <div className="control">
                                            <button className="button is-success" onClick={() => props.setShowModal(false)}>Accept</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button className="button is-danger" onClick={() => props.setShowModal(false)}>Cancel</button>
                                        </div>
                                        <div className="control">
                                            <button id="save-button" className="button is-success" type="submit">Save</button>
                                        </div>
                                    </div>
                                )
                            }
                        </form>      
                    </div>
                </div>
            </div>
            {/* CLOSE MODAL */}
            <button className="modal-close is-large" aria-label="close" onClick={() => props.setShowModal(false)}></button>
        </div>
    )
}
export default Modal;