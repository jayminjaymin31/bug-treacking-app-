
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { Footer } from './Footer';

export const TeamLeaderDashBoard = () => {
    var style = {
        width: "90px"
    }
    var style1 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeInUp;"
    }
    var style2 = {
        visibility: "visible; animation-delay: 0.5s; animation-name: zoomIn;"
    }

    var style3 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeInUp;"
    }

    var style4 = {
        height: "250px"
    }

    var style5 = {
        height: "250px"
    }

    var style6 = {
        height: "48px"
    }

    var style7 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeIn"
    }
    var style8 = {
        visibility: "visible; animation-delay: 0.3s; animation-name: fadeInUp"
    }
    const { register, handleSubmit } = useForm();
    var navigate = useNavigate()

    const [users, setusers] = useState()

    const Submit = (data) => {

        console.log(data)
        axios.post("http://localhost:5000/project/project", data).then((res) => {
            console.log(res)
            toast.success('🦄 submit successfully', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            getApi()
        }).catch((err) => {
            console.log(err)
        })


    };

    const getApi = () => {

        axios.get("http://localhost:5000/project/project").then((res) => {

            console.log(res.data.project)
            setusers(res.data.project)

        }).catch((err) => {

            console.log(err)
        })


    }
    useEffect(() => {

        getApi()
        // navigate("/admindashboard")


    }, [])



    const updateProject = (id) => {
        axios.put("http://localhost:5000/project/project/" + id).then((res) => {
            console.log(res.data.project[0])
            setusers(res.data.project[0])

        }).catch((err) => {

            console.log(err)
        })


    }
    const deleteProject = (id) => {

        axios.delete("http://localhost:5000/project/project/" + id).then((res) => {


            getApi()



        }).catch((err) => {

            console.log(err)
        })
    }
    return (
        <div class="container-xxl bg-white p-0">
             <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Helmet>
                <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/jaymin.css" />
            </Helmet>

            <div class="container-xxl py-5 bg-primary hero-header mb-5">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-12 text-center">
                            <h1 class="text-white animated zoomIn">Team Leader Page</h1>
                            <hr class="bg-white mx-auto mt-0" style={style} />
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">Team Leader</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* <section class="back"> */}
            {/* <div class='background' >
                   


                       

                    {/* </form> */}
            {/* <button onClick={getApi}>Get Api</button> */}
            {/* </div> */}



            




            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3>Team List</h3>
                        <form action="#">
                            <div class="form-group">
                                <input type="text" placeholder="Search..." />
                                {/* <i class='bx bx-search icon' ></i> */}
                            </div>
                        </form>
                        <div class="refresh">
                            {/* <i class="uil uil-redo"></i> */}
                            
                        </div>
                        <button class="view-team-btn" onClick={() => { navigate("/usertaskaddpage") }}>Add Task</button>
                        {/* <button class="view-team-btn" onClick={() => { navigate("/viewteam") }}>Add project</button> */}
                        {/* <div class="menu">
                            <i class='bx bx-dots-horizontal-rounded icon'></i>
                            <ul class="menu-link">
                                <li><a href="#">Medium</a></li>
                                <li><a href="#">Subject Code</a></li>
                                <li><a href="#">Type</a></li>
                            </ul>
                        </div> */}
                    </div>

                    <table class="ann" >
                        <tr>
                            <th>ProjectId</th>
                            <th>title</th>
                            <th>description</th>
                            <th>technology</th>
                            <th>estimatedHours</th>
                            <th>Team/Task</th>
                            {/* <th>Team</th> */}
                            {/* <th>createdAt_Date</th>
                                <th>updatedAt_Date</th> */}
                        </tr>
                        {
                            users?.map((u) => {
                                return (<tr>
                                    <td>{u._id}</td>
                                    <td>{u.title}</td>
                                    <td>{u.description}</td>
                                    <td>{u.technology}</td>
                                    <td>{u.estimatedHours}</td>
                                    <td> <button class="view-team-btn" onClick={() => { navigate(`/projectteam/${u._id}`)}}>Team</button>
                                    <button class="view-team-btn" onClick={() => { navigate(`/taskpage/${u._id}`)}}>Task</button></td>
                                    {/* <button class="view-team-btn" onClick={() => { navigate("/usertaskaddpage") }}>Add Task</button> */}
                                    

                                    {/* <td>{u.createdAt_Date}</td>
                                        <td>{u.updatedAt_Date}</td> */}

                                    <td>
                                        <button class="button"onClick={() => { navigate(`/updateapi/${u._id}`)}}><i class="uil uil-edit"></i></button><br />
                                        <button class="button" onClick={() => { deleteProject(u._id) }}><i class="uil uil-trash-alt"></i></button><br />
                                        {/* <button class="button" onClick={() => { navigate(`/detailpage/${u._id}`) }}><i class='uil uil-exclamation-circle'></i></button> */}
                                        



                                    </td>
                                </tr>)
                            })
                        }

                    </table>
                </div>
            </div>
            {/* </section> */}


         
<Footer/>


        </div>
        // </div >


    )
}
