import React, { useState } from 'react'

function Contact() {

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        mobile: ""
    });

    const [nameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [mobileError, setMobileError] = useState("");

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
    };

    function handleSubmit(e) {
        e.preventDefault();

        // Vaildation - 1
        // if (data.name.trim() === "" || data.surname.trim() === "" || data.email.trim() === "" || data.mobile.trim() === "") {
        //     alert("All fields are mandatory !!!")
        // } else {
        //     console.log(data);
        // }

        // ------------------------------------------------------------------------------------
        // Vaildation - 2
        // ------------------------------------------------------------------------------------

        if (data.name.trim() === "") {
            setNameError("Name is Required !!!")
        } else if (data.name.trim().length < 2) {
            setNameError("Invalid Name !!!")
        } else {
            setNameError("")
        }

        if (data.surname.trim() === "") {
            setSurnameError("Surname is Required !!!")
        } else if (data.surname.trim().length < 3) {
            setSurnameError("Invalid Surname !!!")
        } else {
            setSurnameError("")
        }

        if (data.email.trim() === "") {
            setEmailError("Email is Required !!!")
        } else if (data.email.trim().match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/")) {
            setEmailError("Invalid Email !!!")
        } else {
            setEmailError("")
        }

        if (data.mobile.trim() === "") {
            setMobileError("Mobile is Required !!!")
        } else if (!/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(data.mobile.trim())) {
            setMobileError("Invalid Indain Mobile No. !!!")
        } else {
            setMobileError("")
        }





    };


    return (
        <>
            <h1>Contact Us</h1>

            <div className="container">
                <div className="row">
                    {/* Registration Form */}
                    <div className="col-lg-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name <span className='text-danger'>*</span></label>
                                {nameError ? <span className='text-danger'>{nameError}</span> : ""}
                                <input onChange={handleChange} type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Surname  <span className='text-danger'>*</span></label>
                                {surnameError ? <span className='text-danger'>{surnameError}</span> : ""}
                                <input onChange={handleChange} type="text" class="form-control" id="surname" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Email  <span className='text-danger'>*</span></label>
                                {emailError ? <span className='text-danger'>{emailError}</span> : ""}
                                <input onChange={handleChange} type="text" class="form-control" id="email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Mobile  <span className='text-danger'>*</span></label>
                                {mobileError ? <span className='text-danger'>{mobileError}</span> : ""}
                                <input onChange={handleChange} type="number" class="form-control" id="mobile" />
                            </div>
                            <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    {/* Google Map */}
                    <div className="col-lg-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.617416089495!2d74.2424236!3d16.6960177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100f2e8275621%3A0x7d49dbfd7bd3f53c!2siGAP%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1771832587546!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
