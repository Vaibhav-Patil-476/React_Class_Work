import React, { useState } from 'react'

function AdvanceValidation() {

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        mobile: ""
    });

    const [error, setError] = useState({});

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
    };

    function handleSubmit(e) {
        e.preventDefault();

        // ------------------------------------------------------------------------------------
        // Advance - Vaildation
        // ------------------------------------------------------------------------------------


        const obj = {
            nameError: "",
            surnameError: "",
            emailError: "",
            mobileError: ""
        };


        if (data.name.trim() === "") {
            obj.nameError = "Name is Required!!!"
        } else if (data.name.trim().length < 2) {
            obj.nameError = "Invalid Name !!!"
        } else {
            obj.nameError = ""
        }

        if (data.surname.trim() === "") {
            obj.surnameError = "Surname is Required !!!"
        } else if (data.surname.trim().length < 3) {
            obj.surnameError = "Invalid Surname !!!"
        } else {
            obj.surnameError = ""
        }

        if (data.email.trim() === "") {
            obj.emailError = "Email is Required !!!"
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email.trim())) {
            obj.emailError = "Invalid Email !!!"
        } else {
            obj.emailError = ""
        }

        if (data.mobile.trim() === "") {
            obj.mobileError = "Mobile is Required !!!"
        } else if (!/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(data.mobile.trim())) {
            obj.mobileError = "Invalid Indain Mobile No. !!!"
        } else {
            obj.mobileError = ""
        }

        setError(obj)

    };


    return (
        <>
            <h1>Advance-Validation</h1>

            <div className="container">
                <div className="row">

                    <div className="col-lg-3"></div>
                    {/* Registration Form */}
                    <div className="col-lg-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name <span className='text-danger'>*</span></label>
                                {error.nameError ? <span className='text-danger'>{error.nameError}</span> : ""}
                                <input onChange={handleChange} type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Surname  <span className='text-danger'>*</span></label>
                                {error.surnameError ? <span className='text-danger'>{error.surnameError}</span> : ""}
                                <input onChange={handleChange} type="text" class="form-control" id="surname" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Email  <span className='text-danger'>*</span></label>
                                {error.emailError ? <span className='text-danger'>{error.emailError}</span> : ""}
                                <input onChange={handleChange} type="text" class="form-control" id="email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Mobile  <span className='text-danger'>*</span></label>
                                {error.mobileError ? <span className='text-danger'>{error.mobileError}</span> : ""}
                                <input onChange={handleChange} type="number" class="form-control" id="mobile" />
                            </div>
                            <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    <div className="col-lg-3"></div>
                </div>
            </div>
        </>
    )
}

export default AdvanceValidation;
