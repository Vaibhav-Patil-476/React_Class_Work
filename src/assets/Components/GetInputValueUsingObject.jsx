import React, { useState } from 'react'

function GetInputValue2() {

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        mobile: ""
    });

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);

        setData({
            name: "",
            surname: "",
            email: "",
            mobile: ""
        });
    };


    return (
        <>

            <h1>Get Input Value - Advance</h1>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input value={data.name} onChange={handleChange} type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Surname</label>
                                <input value={data.surname} onChange={handleChange} type="text" class="form-control" id="surname" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Email</label>
                                <input value={data.email} onChange={handleChange} type="text" class="form-control" id="email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Mobile</label>
                                <input value={data.mobile} onChange={handleChange} type="text" class="form-control" id="mobile" />
                            </div>
                            <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    )
}

export default GetInputValue2;
