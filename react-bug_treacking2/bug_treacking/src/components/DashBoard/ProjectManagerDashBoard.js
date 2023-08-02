import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { Footer } from './Footer';

export const ProjectManagerDashBoard = () => {
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
        // navigate("/projectmanagerdashboard")


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
                            <h1 class="text-white animated zoomIn">ProjectManager</h1>
                            <hr class="bg-white mx-auto mt-0" style={style} />
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">ProjectManager</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            

            <div class="container-xxl py-5">
                <div class="container px-lg-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s" style={style1}>
                                <h6 class="position-relative d-inline text-primary ps-4">Welcome to ProjectManager  Page</h6>
                                <h2 class="mt-2"> Add Project Here</h2>
                            </div>
                            <div class="wow fadeInUp" data-wow-delay="0.3s" style={style8}>
                                <form onSubmit={handleSubmit(Submit)}>
                                    <div class="row g-3">

                                        <div class="col-md-12">
                                            <div class="form-floating">
                                                <input type="title" class="form-control" id="title" placeholder="Your title"  {...register("title")} />
                                                <label for="tital">Your title</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="description" class="form-control" id="description" placeholder="Your description" {...register("description")} />
                                                <label for="description"> Your description</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="technology" class="form-control" id="technology" placeholder="Your technology" {...register("technology")} />
                                                <label for="technology">Your technology</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="estimatedHours" class="form-control" id="estimatedHours" placeholder="Your estimatedHours" {...register("estimatedHours")} />
                                                <label for="estimatedHours"> Your estimatedHours</label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3>Project List</h3>
                        <form action="#">
                            <div class="form-group">
                                <input type="text" placeholder="Search..." />
           
                            </div>
                        </form>
                        <div class="refresh">
                            
                            
                        </div>
                        
                    </div>

                    <table class="ann" >
                        <tr>
                            <th>Id</th>
                            <th>title</th>
                            <th>description</th>
                            <th>technology</th>
                            <th>estimatedHours</th>
                        
                        </tr>
                        {
                            users?.map((u) => {
                                return (<tr>
                                    <td>{u._id}<button class="view-team-btn" onClick={() => { navigate(`/detail/${u._id}`) }}>view Module</button></td>
                                    <td>{u.title}</td>
                                    <td>{u.description}</td>
                                    <td>{u.technology}</td>
                                    <td>{u.estimatedHours}</td>
                                    
                                    

                                  

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
 

       
        <Footer/>



        </div>
        // </div >


    )
}
