import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Footer } from '../DashBoard/Footer'

export const DetailTask = () => {
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
})
  var navigate = useNavigate()

  const { id } = useParams();


  const [users, setusers] = useState()
const [module, setmodule] = useState([])


  const getApi = () => {

    axios.get("http://localhost:5000/task/task/" + id).then((res) => {

      console.log(res.data.data0)
      setusers(res.data)

      //    console.log(res.data.data[0]?.projects._id);

    }).catch((err) => {

      console.log(err)
    })


  }
  

  useEffect(() => {
    
    getApi()
    


  }, [])




  return (
    <div class="container-xxl bg-white p-0">
      <Helmet>
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        <link rel="stylesheet" href="../assets/vendor/fonts/jaymin.css" />
      </Helmet>


      <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
          <div class="row g-5 py-5">
            <div class="col-12 text-center">
              <h1 class="text-white animated zoomIn">Detail</h1>
              <hr class="bg-white mx-auto mt-0" style={style} />
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                  <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">Detail</li>
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



          <div class="data">
            <div class="content-data">
              <div class="head">
                <h3>Project List</h3>
                <form action="#">
                  <div class="form-group">
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
                  <th>createdAt</th>
                  <th>updatedAt</th>
                </tr>
                {
                  users?.map((u) => {
                    return (<tr>
                      <td>{u._id}</td>
                      <td>{u.projects.title}</td>
                      <td>{u.description}</td>
                      <td>{u.projects.technology}</td>
                      <td>{u.estimatedHours}</td>
                      <td>{u.projects.createdAt}</td>
                      <td>{u.projects.updatedAt}</td>



                    </tr>)
                  })
                }

              </table>
            </div>
          </div>




          <div class="data">
            <div class="content-data">
              <div class="head">
                <h3>Module</h3>
                <form action="#">
                  <div class="form-group">


                  </div>
                </form>
                <div class="refresh">

                </div>


              </div>

              <table class="ann" >
                <tr>

                  <th>Id</th>
                  <th>Projects</th>
                  <th>ModuleName</th>
                  <th>Description</th>
                  <th>EstimatedHours</th>
                  <th>Status</th>
                  <th>createdAt</th>
                  <th>updatedAt</th>

                </tr>
                {
                  users?.map((u) => {

                    return (<tr>

                      <td>{u._id}</td>
                      <td>{u.projects.title}</td>
                      <td>{u.moduleName}</td>
                      <td>{u.description}</td>
                      <td>{u.estimatedHours}</td>
                      <td>{u.status.statusName}</td>
                      <td>{u.createdAt}</td>
                      <td>{u.updatedAt}</td>



                    </tr>)
                  })
                }

              </table>
            </div>
          </div>




        </div>
      </div>



      <Footer/>


    </div>

  )
}
