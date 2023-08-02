import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { Footer } from '../DashBoard/Footer';

export const TaskPage = () => {
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
 
    var navigate = useNavigate()

    const [users, setusers] = useState();
    const { id } = useParams();

    const getApi = () => {

        axios.get("http://localhost:5000/task/task1/" + id).then((res) => {

            console.log(res.data.dara)
            setusers(res.data.dara)

        }).catch((err) => {

            console.log(err)
        })


    }
    useEffect(() => {

        getApi()
        // navigate("/admindashboard")
        // navigate(`/taskpage/${id}`)


    }, [])



    const updateProject = (id) => {
        axios.put("http://localhost:5000/task/task/" + id).then((res) => {
            console.log(res.data.project[0])
            setusers(res.data.project[0])

        }).catch((err) => {

            console.log(err)
        })


    }
    const deleteProject = (id) => {

        axios.delete("http://localhost:5000/task/task/" + id).then((res) => {


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
                            <h1 class="text-white animated zoomIn">Task page</h1>
                            <hr class="bg-white mx-auto mt-0" style={style} />
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">Task Page</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    



            




            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3>Task List</h3>
                        <form action="#">
                            <div class="form-group">
                                <input type="text" placeholder="Search..." />
                            
                            </div>
                        </form>
                        <div class="refresh">
                         
                            
                        </div>
                        <button class="view-team-btn" onClick={() => { navigate("/task")}}>Add Task</button>
                    
                    </div>

                    <table class="ann" >
                        <tr>
                            <th>Id</th>
                            <th>Module</th>
                            <th>Projects</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>totalMinutes</th>
                       
                        </tr>
                        {
                            users?.map((u) => {
                                return (<tr>
                                    <td>{u._id}</td>
                                    <td>{u.module.moduleName}</td>
                                    <td>{u.projects.title}</td>
                                    <td>{u.title}</td>
                                    <td>{u.description}</td>
                                    <td>{u.status.statusName}</td>
                                    <td>{u.totalMinutes}</td>
                                   
                                    

                                    
                                    <td>
                                        <button class="button"onClick={() => { navigate(`/updatetask/${u._id}`)}}><i class="uil uil-edit"></i></button><br />
                                        <button class="button" onClick={() => { deleteProject(u._id) }}><i class="uil uil-trash-alt"></i></button><br />
                                        {/* <button class="button" onClick={() => { navigate(`/detailtask/${u._id}`) }}><i class='uil uil-exclamation-circle'></i></button> */}
                                        



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
        


    )
}
