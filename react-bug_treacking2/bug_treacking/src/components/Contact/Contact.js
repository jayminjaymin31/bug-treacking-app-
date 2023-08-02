import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { Footer } from '../DashBoard/Footer'
import axios from 'axios'

export const Contact = () => {
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
    
    var style7= {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeIn"
    }
     var style8={
        visibility: "visible; animation-delay: 0.3s; animation-name: fadeInUp"
     }
     var style9={
        height: "150px"
     }
     const { register, handleSubmit } = useForm();
     const Submit = (data) => {

        console.log(data)
        axios.post("http://localhost:5000/contact/contact/", data).then((res) => {
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
            
        }).catch((err) => {
            console.log(err)
        })


    };
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
    <div class="container-xxl position-relative p-0">
        

         <div class="container-xxl py-5 bg-primary hero-header mb-5">
             <div class="container my-5 py-5 px-lg-5">
                 <div class="row g-5 py-5">
                     <div class="col-12 text-center">
                         <h1 class="text-white animated zoomIn">Contact</h1>
                         <hr class="bg-white mx-auto mt-0" style={style} />
                         <nav aria-label="breadcrumb">
                             <ol class="breadcrumb justify-content-center">
                                 <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                 <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                 <li class="breadcrumb-item text-white active" aria-current="page">Contact</li>
                             </ol>
                         </nav>
                     </div>
                 </div>
             </div>
         </div>
     </div>


     <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s" style={style1}>
                            <h6 class="position-relative d-inline text-primary ps-4">Contact Us</h6>
                            <h2 class="mt-2">Contact For Any Query</h2>
                        </div>
                        <div class="wow fadeInUp" data-wow-delay="0.3s" style={style8}>
                            <form onSubmit={handleSubmit(Submit)}>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name" {...register("name")}/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email" {...register("email")}/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject" {...register("subject")}/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" id="message" style={style9} {...register("message")}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
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
  )
}
