
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { Footer } from '../DashBoard/Footer';

export const UpdateTask = () => {
    var style = {
        width: "90px"
    }
    var style1 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeInUp;"
    }
    var style2 = {
        visibility: "visible; animation-delay: 0.5s; animation-name: zoomIn;"
    }
    var style2A = {
        visibility: "visible; animation-delay: 0.1s; animation-name: zoomIn;"
    }
    var style2B = {
        visibility: "visible; animation-delay: 0.3s; animation-name: zoomIn;"
    }
    var style2c = {
        visibility: "visible; animation-delay: 0.6s; animation-name: zoomIn;"
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
    
    const [pros, setpros] = useState()
    const [users, setusers] = useState()
    const [status, setstatus] = useState()
    // const [users, setusers] = useState()
    const [values, setValues] = useState({
        module: "",
        projects: "",
        title: "",
        description: "",
        status: "",
        totalMinutes: ""

    })
    const navigate = useNavigate();




    const getProjects = () => {

        axios.get("http://localhost:5000/project/project").then((res) => {
            //console.log(res.data.data)
            setpros(res.data.project)
        }).catch((err) => {

        })

    }
    const getModule = () => {

        axios.get("http://localhost:5000/module/module").then((res) => {

            console.log(res.data.data)
            setusers(res.data.data)
            

        }).catch((err) => {

            console.log(err)
        })


    }



    const getStatus = () => {
        axios.get("http://localhost:5000/status/status").then((res) => {
            //console.log(res.data.data)
            setstatus(res.data.data)
        }).catch((err) => {

        })

    }

    useEffect(() => {
        getProjects();
        getModule();
        getStatus();

    }, [])





    const { id } = useParams();
    useEffect(() => {
        axios.get("http://localhost:5000/task/task/" + id).then((res) => {
            console.log(res.data.data)
            setValues(res.data.data)

        }).catch((err) => {

            console.log(err)
        })
    }, [])
    const handleupdate = (event) => {
        event.preventDefault();
        axios.put("http://localhost:5000/task/task/" + id, values).then((res) => {
            console.log(res.data.dara)
            // setValues(res.data.project)
            navigate('/admindashboard')
            toast.success('🦄 update successfully', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

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
            <div>

                <div class="container-xxl py-5 bg-primary hero-header mb-5">
                    <div class="container my-5 py-5 px-lg-5">
                        <div class="row g-5 py-5">
                            <div class="col-12 text-center">
                                <h1 class="text-white animated zoomIn">updateProject</h1>
                                <hr class="bg-white mx-auto mt-0" style={style} />
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">UpdateProject</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div class="container-xxl py-5">
                    <div class="container px-lg-5">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s" style={style1}>
                                    <h6 class="position-relative d-inline text-primary ps-4">Adventure starts here 🚀</h6>
                                    <h2 class="mt-2">Make your app management easy and fun!</h2>
                                </div>
                                <div class="wow fadeInUp" data-wow-delay="0.3s" style={style8}>
                                    <form onSubmit={handleupdate}>
                                        <div class="row g-3">
                                            <div class="col-md-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="title" placeholder="Your title" value={values.title} onChange={e => setValues({ ...values, title: e.target.value })} />
                                                    <label for="title">title</label>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="email" placeholder="Your Email" value={values.description} onChange={e => setValues({ ...values, description: e.target.value })} />
                                                    <label for="description">Your description</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="technology" placeholder="Your technology" value={values.technology} onChange={e => setValues({ ...values, technology: e.target.value })} />
                                                    <label for="password">technology</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="number" class="form-control" id="estimatedHours" placeholder="Your estimatedHours" value={values.estimatedHours} onChange={e => setValues({ ...values, estimatedHours: e.target.value })} />
                                                    <label for="password">estimatedHours</label>
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
                </div> */}
                  <div class="container-xxl py-5">
                <div class="container px-lg-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s" style={style1}>
                                <h6 class="position-relative d-inline text-primary ps-4">Adventure starts here 🚀</h6>
                                <h2 class="mt-2">Make your app management easy and fun! </h2>
                                <h6 class="mt-2">Add Project Team</h6>
                            </div>
                            <div class="wow fadeInUp" data-wow-delay="0.3s" style={style8}>
                                <form onSubmit={handleupdate}>
                                    <div class="row g-3">

                                        <div class="col-md-12">
                                            <div class="form-floating">

                                                <select name="role"  className="form-control"  onChange={e => setValues({ ...values, projects: e.target.value })}>
                                                    {pros?.map((projects) => (
                                                        <option key={projects._id} value={projects._id}>
                                                            {projects.title}
                                                        </option>
                                                    ))}

                                                </select>
                                                <label for="projects">Your project title</label>
                                            </div>
                                        </div>

                                         

                                        <div class="col-md-12">
                                            <div class="form-floating">

                                                <select name="module" className="form-control"  onChange={e => setValues({ ...values, module: e.target.value })}>
                                                    {users?.map((module) => (
                                                        <option key={module._id} value={module._id}>
                                                            {module.moduleName}
                                                        </option>
                                                    ))}

                                                </select>



                                                <label for="module">Your Module Name </label>
                                            </div>
                                        </div>


                                        <div class="col-md-12">
                                            <div class="form-floating">
                                                <input type="title" class="form-control" id="title" placeholder="Your title" value={values.title} onChange={e => setValues({ ...values, title: e.target.value })}  />
                                                <label for="tital">Your title</label>
                                            </div>
                                        </div>  
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="description" class="form-control" id="description" placeholder="Your description" value={values.description} onChange={e => setValues({ ...values, description: e.target.value })} />
                                                <label for="description"> Your description</label>
                                            </div>
                                        </div>  
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="totalMinutes" class="form-control" id="totalMinutes" placeholder="Your totalMinutes" value={values.totalMinutes} onChange={e => setValues({ ...values, totalMinutes: e.target.value })} />
                                                <label for="totalMinutes"> Your totalMinutes</label>
                                            </div>
                                        </div>       



                                        <div class="col-12">
                                            <div class="form-floating">
                                            <select name="status"  className="form-control"  onChange={e => setValues({ ...values, users: e.target.value })}>
                                                    {status?.map((status) => (
                                                        <option key={status._id} value={status._id}>
                                                            {status.statusName}
                                                        </option>
                                                    ))}
                                                   
                                                </select>
                                                <label for="status">status</label>
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





              
                <Footer/>
            </div>

        </div>
    )
}
