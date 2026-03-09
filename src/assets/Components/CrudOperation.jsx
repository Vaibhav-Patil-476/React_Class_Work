import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CrudOperation() {

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        mobile: ""
    });
    const [newData, setNewData] = useState([]);

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    // HandleSubmit
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(data);

        axios.post("https://69aa8099e051e9456fa1945e.mockapi.io/students", data)
            .then((res) => {
                console.log(res.data)
                alert("Data Saved SuccesFully !!!") 
                loadData();
            });

        setData({
            name: "",
            surname: "",
            email: "",
            mobile: ""
        });

    };

    function loadData() {
        axios.get("https://69aa8099e051e9456fa1945e.mockapi.io/students")
            .then((res) => {
                console.log(res.data);
                setNewData(res.data);
            });
    };

    useEffect(() => {
        loadData()
    }, []);

    function handleDelete(id) {
        // alert(id)
        axios.delete("https://69aa8099e051e9456fa1945e.mockapi.io/students/" + id)
            .then((res) => {
                console.log(res.data)
                loadData();
            });
    };

    return (
        <>
            <h1>Crud Operation</h1>
            <div className="container mt-3">
                <div className="row">
                    {/* Form */}
                    <div className="col-lg-4">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input value={data.name} onChange={handleChange} type="text" class="form-control" id="name" name='name' aria-describedby="emailHelp" />
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

                    {/* Table */}
                    <div className="col-lg-8">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newData.map((eachData, i) => {
                                        return (
                                            <tr key={i}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{eachData.name}</td>
                                                <td>{eachData.surname}</td>
                                                <td>{eachData.email}</td>
                                                <td>{eachData.mobile}</td>
                                                <td>
                                                    <button className='btn btn-primary m-1'><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                    <button onClick={() => handleDelete(eachData.id)} className='btn btn-danger'><i class="fa fa-trash" aria-hidden="true"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrudOperation;
