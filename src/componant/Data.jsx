import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER_PENDING, POST_USER_PENDING, UPDATE_USER_PENDING } from "../redux-saga/user/action/action";

const Data = () => {

    let email = useRef()
    let password = useRef()

    let [view, setview] = useState()


    // selector
    let user = useSelector((state) => state.userReducer);

    let dispatch = useDispatch()


    //add user
    let addUser = () => {

        let data = {
            email: email.current.value,
            password: password.current.value
        }

        console.log(data);

        dispatch({ type: POST_USER_PENDING, payload: data })

    }


    // delete user

    let handleDelete = (id) => {

        console.log(id);

        dispatch({ type: DELETE_USER_PENDING, payload: id })
    }

    // update user

    let handleview = (id, index) => {
        //console.log(id);
        let data = user.user[index]

        setview(data)

    }

    let handle = (e) => {
        setview({ ...view, [e.target.name]: e.target.value });
    }

    let handleupdate = () => {
        // console.log(view);

        dispatch({ type: UPDATE_USER_PENDING, payload: view })

    }





    return (
        <div>
            <>
                {/* <input type="text" ref={email} />
                <input type="text" ref={password} />
                <button onClick={addUser}>Save</button> */}
                <form onsubmit="return false">
                    <div class="box">
                        <input type="name" placeholder="" required ref={email} id="name" />
                        <label for="name">E-mail</label>
                    </div>

                    <div class="box">
                        <input type="surname" placeholder="" required id="surname" ref={password} />
                        <label for="surname">Password</label>
                    </div>



                    <button onClick={addUser}>Save</button>
                </form>

                <div>

                    <>

                        <table class="table table-bordered table-dark mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">E-MAIL</th>
                                    <th scope="col">PASSWORD</th>
                                    <th scope="col">REMOVE</th>
                                    <th scope="col">UPDATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.user?.map((val, index) => (<tr style={{ height: "10px" }}>
                                    <th scope="row">{val.id}</th>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td onClick={() => handleDelete(val.id)} >delete</td>
                                    <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleview(val.id, index)}>view</td>
                                </tr>))}



                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog p-0" style={{width:"400px"}}>
                                        <div class="modal-content">
                                           
                                            <div class="modal-body">
                                                <div class="card" style={{ width: "23rem" }}>
                                                    <div class="card-body">
                                                        <form className="">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label" >Email address</label>
                                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={view?.email} onChange={handle} />

                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                                                <input type="text" name="password" value={view?.password} onChange={handle} class="form-control" id="exampleInputPassword1" />
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" data-bs-dismiss="modal" class="btn btn-primary" onClick={handleupdate}>UPDATE</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </tbody>
                        </table>









                    </>

                </div>
            </>
        </div>
    )
}

export default Data
