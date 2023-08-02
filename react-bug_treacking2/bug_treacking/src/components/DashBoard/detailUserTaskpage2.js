import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'

export const DetailUserTaskPage2 = () => {
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
  const [values, setValues] = useState({
    // title: "",
    // description: "",
    // technology: "",
    // estimatedHours: ""
  })
  const { id } = useParams();
  useEffect(() => {
    axios.get("http://localhost:5000/usertask/usertask/" + id).then((res) => {
      console.log(res.data.data)
      setValues(res.data.data)

    }).catch((err) => {

      console.log(err)
    })
  }, [])


  return (
    <div class="container-xxl bg-white p-0">


      <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
          <div class="row g-5 py-5">
            <div class="col-12 text-center">
              <h1 class="text-white animated zoomIn">ViewTeam</h1>
              <hr class="bg-white mx-auto mt-0" style={style} />
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                  <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">ViewTeam</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>






      <div class="container-xxl py-5">
        <div class="container px-lg-5">
          <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s" style={style1}>
            <h6 class="position-relative d-inline text-primary ps-4">Details</h6>
            <h2 class="mt-2">What are details given below</h2>
          </div>
        
        
        {/* <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s" style={style2A}>
              <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                <div class="service-icon flex-shrink-0">
                  <i class="fa fa-home fa-2x"></i>
                </div>
           
                <h5 class="mb-3">Project Detail</h5>


                <div class="col-md-12">
                  <div class="form-floating">
                    <strong>Title: {values.title}</strong>

                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <strong>Description: {values.description}</strong>

                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <strong>Technology: {values.technology}</strong>

                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <strong>EstimatedHours: {values.estimatedHours}</strong>

                  </div>
                </div>



              </div>
            </div>
          </div> */}

          


          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s" style={style2A}>
              <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                <div class="service-icon flex-shrink-0">
                  <i class="fa fa-home fa-2x"></i>
                </div>
                <h5 class="mb-3">Task Detail</h5>

             <div class="col-md-12">
                  <div class="form-floating">
                    <strong>module: {values.module}</strong>

                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <strong>projects: {values.projects}</strong>

                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <strong>title: {values.title}</strong>

                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <strong>description: {values.description}</strong>

                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <strong>status: {values.status}</strong>

                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <strong>totalMinutes: {values.totalMinutes}</strong>

                  </div>
                </div>


              </div>
            </div>
          </div>




          {/* <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s" style={style2A}>
              <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                <div class="service-icon flex-shrink-0">
                  <i class="fa fa-home fa-2x"></i>
                </div>
                <h5 class="mb-3">Project Detail</h5>


                <div class="col-md-12">
                  <div class="form-floating">
                    <strong>Title: {values.title}</strong>

                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <strong>Description: {values.description}</strong>

                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <strong>Technology: {values.technology}</strong>

                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <strong>EstimatedHours: {values.estimatedHours}</strong>

                  </div>
                </div>


              </div>
            </div>
          </div> */}
        </div>
      </div>



      
<Footer/>

    </div>

  )
}
