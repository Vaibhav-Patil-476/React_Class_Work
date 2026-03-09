import React, { useState } from 'react'

function GetInputValue() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        console.log("name : " + name)
        console.log("surname : " + surname)
    };
7
    return (
        <>
            <h1>Get Input Value</h1>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Surname</label>
                                <input onChange={(e) => setSurname(e.target.value)} type="text" class="form-control" id="surname" />
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

export default GetInputValue;
