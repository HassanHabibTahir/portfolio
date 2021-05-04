import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import sanityClient from '../client/client'

export default function Blogpost() {
  const [projectdata, seteProjectData] = useState()


  useEffect(() => {
    sanityClient.fetch(`*[_type=="project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`).then((e) => {
      seteProjectData(e)
    })
      .catch(console.error())
  })

  // useEffect(() => {
  //   sanityClient.fetch(`*[_type=="project"]{
  //     title,

  //     }
  //   }`).then((data) =>
  //     console.log(data, "this is")
  //     // seteProjectData(data)
  //   )
  // })

  console.log(projectdata, "projectdataprojectdataprojectdata")

  const HumbergerClick = () => {

    let a = document.getElementsByClassName("menu")[0]
    a.classList.toggle('active')
    let v = document.body.classList.toggle('active')
  }

  const HndleClose = () => {
    let a = document.getElementsByClassName("menu")[0]
    a.classList.remove('active')
    document.body.classList.remove('active')
  }

  // console.log(posts)
  return (
    <div>
      {/* <div class="preloader">
        <div class="sk-spinner sk-spinner-wordpress">
          <span class="sk-inner-circle"></span>
        </div>
      </div> */}



      <div class="pie pie1" onclick={HndleClose} >
        <div class="pie-color ">
          <Link to="/project" onClick={HndleClose}>

            <svg class="card" style={{ fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100px" height="100px"><path d="M 50 16 C 38.745078 16 28.536804 19.528325 21.103516 25.289062 C 13.670227 31.0498 9 39.090825 9 48 C 9 56.843516 13.643104 64.803099 20.982422 70.556641 C 20.979022 77.17314 20.872179 82.713759 17.292969 86.292969 A 1.0001 1.0001 0 0 0 18 88 C 24.741238 88 33.13907 85.975155 38.578125 78.707031 C 42.210021 79.527556 46.031696 80 50 80 C 61.254922 80 71.463196 76.471675 78.896484 70.710938 C 86.329773 64.950199 91 56.909175 91 48 C 91 39.090825 86.329773 31.0498 78.896484 25.289062 C 71.463196 19.528325 61.254922 16 50 16 z M 50 18 C 60.836078 18 70.627913 21.410128 77.671875 26.869141 C 84.715837 32.328153 89 39.788175 89 48 C 89 56.211825 84.715837 63.671847 77.671875 69.130859 C 70.627913 74.589872 60.836078 78 50 78 C 45.963088 78 42.07133 77.527971 38.412109 76.652344 A 1.0001 1.0001 0 0 0 37.361328 77.048828 C 32.908474 83.389417 26.082467 85.468934 20.003906 85.837891 C 22.866127 81.619726 23 76.123 23 70.216797 L 23 70.140625 A 1.0001 1.0001 0 0 0 22.605469 69.345703 C 15.3982 63.868957 11 56.317715 11 48 C 11 39.788175 15.284163 32.328153 22.328125 26.869141 C 29.372087 21.410128 39.163922 18 50 18 z M 50 21 C 40.109772 21 31.134601 23.999444 24.609375 28.871094 C 18.084149 33.742743 14 40.513854 14 48 C 14 53.479972 16.189921 58.584917 19.921875 62.830078 A 0.50030972 0.50030972 0 1 0 20.673828 62.169922 C 17.075782 58.077083 15 53.214028 15 48 C 15 40.877146 18.876757 34.397976 25.207031 29.671875 C 31.537305 24.945774 40.312228 22 50 22 C 59.503691 22 68.127545 24.834788 74.427734 29.404297 A 0.50005 0.50005 0 1 0 75.015625 28.595703 C 68.523814 23.887212 59.702309 21 50 21 z M 49.5 28 C 46.495378 28 44 30.214474 44 33 C 44 35.785526 46.495378 38 49.5 38 C 52.504622 38 55 35.785526 55 33 C 55 30.214474 52.504622 28 49.5 28 z M 49.5 29 C 52.018226 29 54 30.814963 54 33 C 54 35.185037 52.018226 37 49.5 37 C 46.981774 37 45 35.185037 45 33 C 45 30.814963 46.981774 29 49.5 29 z M 76.5 29.880859 A 0.50005 0.50005 0 0 0 76.179688 30.767578 C 76.417254 30.9667 76.650339 31.169004 76.878906 31.373047 A 0.50005839 0.50005839 0 1 0 77.544922 30.626953 C 77.307489 30.414996 77.064746 30.206831 76.820312 30.001953 A 0.50005 0.50005 0 0 0 76.5 29.880859 z M 78.78125 31.994141 A 0.50005 0.50005 0 0 0 78.419922 32.847656 C 78.732508 33.170072 79.033765 33.497441 79.326172 33.830078 A 0.50030972 0.50030972 0 0 0 80.078125 33.169922 C 79.774531 32.824559 79.460133 32.485928 79.136719 32.152344 A 0.50005 0.50005 0 0 0 78.78125 31.994141 z M 80.890625 34.494141 A 0.50005 0.50005 0 0 0 80.529297 35.302734 C 83.383758 39.071094 85 43.397373 85 48 C 85 55.122854 81.123243 61.602024 74.792969 66.328125 C 68.462695 71.054226 59.687772 74 50 74 C 48.831137 74 47.676738 73.95713 46.537109 73.873047 A 0.50040144 0.50040144 0 0 0 46.462891 74.871094 C 47.627264 74.957007 48.806863 75 50 75 C 59.890228 75 68.865399 72.000556 75.390625 67.128906 C 81.915851 62.257257 86 55.486146 86 48 C 86 43.162627 84.29371 38.614906 81.326172 34.697266 A 0.50005 0.50005 0 0 0 80.941406 34.494141 A 0.50005 0.50005 0 0 0 80.890625 34.494141 z M 42.5 40 A 0.50005 0.50005 0 0 0 42 40.5 L 42 44.5 A 0.50005 0.50005 0 0 0 42.5 45 L 45.5 45 C 45.781469 45 46 45.218531 46 45.5 L 46 60.5 C 46 60.781469 45.781469 61 45.5 61 L 41.5 61 A 0.50005 0.50005 0 0 0 41 61.5 L 41 65.5 A 0.50005 0.50005 0 0 0 41.5 66 L 59.5 66 A 0.50005 0.50005 0 0 0 60 65.5 L 60 61.5 A 0.50005 0.50005 0 0 0 59.5 61 L 55.5 61 C 55.218531 61 55 60.781469 55 60.5 L 55 40.5 A 0.50005 0.50005 0 0 0 54.5 40 L 42.5 40 z M 43 41 L 54 41 L 54 60.5 C 54 61.322531 54.677469 62 55.5 62 L 59 62 L 59 65 L 42 65 L 42 62 L 45.5 62 C 46.322531 62 47 61.322531 47 60.5 L 47 45.5 C 47 44.677469 46.322531 44 45.5 44 L 43 44 L 43 41 z" /></svg>
          </Link>

        </div>
      </div>

      <div>

        <div class="pie pie2" >
          <Link to="/blog" onClick={HndleClose}>
            <div class="pie-color pie-color2">

              <svg version="1.1" class="discount" viewBox="-375 377 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 22.624 22.624" space="preserve">
                <g>
                  <path style={{ fill: "#ffff" }} d="M11.312,6.551c-1.646,0-3.18,0.498-4.45,1.347c0,0,0-5.685,0-5.919C6.862,0.886,6.1,0,5.008,0
		C3.915,0,3.277,0.886,3.277,1.979v12.608c0,4.438,3.597,8.037,8.035,8.037c4.435,0,8.036-3.599,8.036-8.037
		C19.347,10.15,15.747,6.551,11.312,6.551z M11.312,19.038c-2.458,0-4.45-1.993-4.45-4.451s1.992-4.45,4.45-4.45
		c2.459,0,4.451,1.992,4.451,4.45S13.771,19.038,11.312,19.038z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>


            </div>
          </Link>
        </div>

      </div>
      <div>

        <div class="pie pie3">
          <div class="pie-color pie-color3">
            <Link to="/" onClick={HndleClose}>
              <svg class="cart" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 40 50" width="100" height="100" fill="#fff"><path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z" /></svg>

            </Link>
          </div>
        </div>
      </div>
      <div onClick={HumbergerClick} style={{ height: "3rem" }}>


        <div class="menu" >
          <svg class="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <g
              fill="none"
              stroke="#000"
              stroke-width="7.999"
              stroke-linecap="round"
            >
              <path d="M 55,26.000284 L 24.056276,25.999716" />
              <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
              <path d="M 45,73.999716 L 75.943724,74.000284" />
              <path d="M 75.943724,26.000284 L 45,25.999716" />
              <path d="M 24.056276,73.999716 L 55,74.000284" />
            </g>
          </svg>
        </div>

      </div>


      <header style={{ marginTop: "5rem" }}>
        <div class="container">
          <div class="row" style={{ position: "relative", bottom: "10rem" }}>
            <div class="col-md-12 col-sm-12">
              {/* <img style={{ width: "10rem", height: "12rem" }} src="images/tm-easy-profile.jpg" class="img-responsive img-circle tm-border" alt="templatemo easy profile" /> */}
              <h1 class="tm-title bold shadow">Project Page!</h1>
              {/* <h1 class="white bold shadow">Project Page!</h1> */}
            </div>
          </div>
        </div>
      </header>
      <section class="container" style={{ position: "relative", bottom: "100px" }}>
        <div class="row">
          {

            projectdata !== undefined && projectdata !== null ? projectdata && projectdata.map((items, index) => (
              // <Link to={"/post/" + items.slug.current} key={items.slug.current}>
              <div key={index} class="col-md-4 col-sm-6" style={{ padding: "1rem", alignItems: "center", textAlign: "center", }} >
                <div class="about" style={{ backgroundColor: "#02143C" }}>
                  {/* <h3 class="accent">{index}</h3> */}
                  {/* <p>This easy HTML profile is brought to you by templatemo website. There are 4 color themes, <a href="index-green.html">Green</a>, <a href="index.html">Blue</a>, <a href="index-gray.html">Gray</a>, and <a href="index-orange.html">Orange</a>. Sed vitae dui in neque elementum tempor eu id risus. Phasellus sed facilisis lacus, et venenatis augue.</p> */}
                  <a href={items.link} target="_blank" rel="noopener noreferrer" ><h4 style={{ color: "white" }}>{items.title}</h4></a>
                  <br />
                  <span style={{ color: "white" }}>  <strong >Company</strong> :{" "} {items.place} </span>

                  <br />
                  <span style={{ color: "white" }}>  <strong >Finished on </strong> :{" "} {new Date(items.date).toLocaleDateString()} </span>
                  <br />
                  <span style={{ color: "white" }}>  <strong >Type </strong> :{" "} {items.projectType} </span>
                  <br />
                  <br />
                  <p style={{ color: "white" }}>{items.description}</p>
                  <a href={items.link} target="_blank">
                    <span>View the Project  <span style={{ color: "yellow" }}> &#x261B;</span></span>
                  </a>

                </div>
              </div>
              // </Link>
            )) : '.......loading'}



        </div>
      </section>

      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <p>Copyright &copy; {new Date().getFullYear()}</p>
              <ul class="social-icons" >
                <li style={{ margin: ".5rem" }}> <a href="https://www.facebook.com/LearnWithTeachField" target="_blank" class="fa fa-facebook"></a></li>

                <li style={{ margin: ".5rem" }}> <a href="https://twitter.com/HassanHabibTah1" target="_blank" class="fa fa-twitter"></a></li>

                <li style={{ margin: ".5rem" }}> <a href="https://github.com/HassanHabibTahir" target="_blank" class="fa fa-github"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}