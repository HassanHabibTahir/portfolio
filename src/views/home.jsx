import React from 'react'

export default function Home() {

  const HumbergerClick = () => {

    let a = document.getElementsByClassName("menu")[0]
    a.classList.toggle('active')
    let v = document.body.classList.toggle('active')
  }

  const HndleClose = () => {
    document.body.classList.remove('active')
  }
  //  {HndleClose}  }
  return (
    <div>
      <div class="preloader">
        <div class="sk-spinner sk-spinner-wordpress">
          <span class="sk-inner-circle"></span>
        </div>
      </div>

      {/* ///////////////// */}

      {/* /////////////////////// */}
      <div class="pie pie1"  >
        <div class="pie-color ">
          <svg class="card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
            <path
              d="M99.98 27.38c0-7.597-6.18-13.777-13.78-13.777H13.78C6.18 13.603 0 19.783 0 27.38v45.842C0 80.82 6.18 87 13.778 87H86.2c7.6 0 13.8-6.18 13.8-13.778v-45.84zm-92.678 0c0-3.555 2.9-6.433 6.455-6.433H86.18c3.555 0 6.455 2.878 6.455 6.434v4.213H7.302zM86.18 79.657H13.757c-3.556 0-6.455-2.9-6.455-6.434V44.185h85.312v29.037c.02 3.556-2.88 6.434-6.434 6.434zM23.852 60.82s-3.725-.973-4.466-1.122c-.783-.19-.867-.635-.867-1.015v-.424c0-.255.02-.51.23-.72.128-.127.32-.212.53-.212h3.47c.298 0 .51.064.827.91l.042.127c.04.17.19.445.72.445.316 0 .824-.085 1.438-.254.57-.17 1.058-.635 1.29-1.207.234-.593.17-1.228-.19-1.757-.846-1.334-2.264-2.2-3.936-2.37 0-.128-.02-.297-.02-.51 0-.845-.87-1.523-1.97-1.523s-1.968.657-1.968 1.524c0 .19 0 .36-.02.487-2.668.128-4.572 2.117-4.572 4.848v.804c0 2.137 1.333 4 3.238 4.508l5.354 1.46c.254.064.423.318.423.635v.466c0 .19 0 .7-.232.932-.127.148-.318.21-.487.21h-3.47c-.276 0-.403-.083-.488-.19-.233-.232-.317-.613-.38-.867-.064-.19-.234-.444-.763-.444-.338 0-.846.086-1.418.234-.572.148-1.038.592-1.292 1.164-.254.592-.19 1.248.127 1.8.868 1.46 2.307 2.348 3.916 2.432v.487c0 .445.233.847.636 1.143.36.254.825.38 1.333.38h.02c1.1 0 1.968-.676 1.968-1.523v-.508c2.603-.212 4.593-2.37 4.593-5.1v-.636c.022-2.2-1.48-4.085-3.618-4.614zm7.704 10.54H83.98v-4.19H31.555z"
            />
          </svg>
        </div>
      </div>
      <div class="pie pie2" onclick={HndleClose}>
        <div class="pie-color pie-color2">
          <svg class="discount" xmlns="http://www.w3.org/2000/svg" viewBox="-375 377 100 100" width="100" height="100">
            <path
              fill="#fff"
              d="M-311.266 425.624c-.106 0-.212 0-.34.022-1.057.127-1.755.783-2.115 2.01-.318 1.1-.36 2.645-.128 4.57.19 1.567.783 6.307 3.407 6.307.105 0 .21 0 .317-.02 1.947-.234 2.603-2.37 2.074-6.667-.507-4.317-1.502-6.222-3.216-6.222zm-28.166-9.967c-.106 0-.212 0-.34.02-.634.086-1.12.34-1.5.827-.784 1.016-1.038 3.005-.7 5.756.508 4.21 1.61 6.242 3.365 6.242.106 0 .19 0 .296-.02 1.12-.128 1.798-.868 2.094-2.265.297-1.397.148-3.153 0-4.36-.508-4.274-1.502-6.2-3.216-6.2zm63.654 10.306l-12.887-7.13c-1.037-.573-1.397-1.885-.783-2.9l7.597-12.613c.613-1.016.147-1.84-1.06-1.82l-14.728.275c-1.185.02-2.137-.93-2.116-2.116l.275-14.73c.022-1.206-.782-1.67-1.82-1.058l-12.61 7.576c-1.017.614-2.33.275-2.9-.783l-7.132-12.887c-.57-1.037-1.524-1.037-2.095 0l-7.13 12.887c-.573 1.037-1.885 1.397-2.9.783l-12.634-7.597c-1.017-.613-1.842-.147-1.82 1.06l.274 14.728c.02 1.185-.93 2.137-2.116 2.116l-14.73-.275c-1.184-.022-1.67.782-1.057 1.82l7.598 12.61c.614 1.017.275 2.33-.783 2.9l-12.887 7.132c-1.037.57-1.037 1.524 0 2.095l12.887 7.13c1.037.573 1.397 1.885.783 2.9l-7.597 12.634c-.613 1.017-.147 1.842 1.06 1.82l14.728-.274c1.185-.02 2.137.93 2.116 2.116l-.275 14.73c-.022 1.205.782 1.67 1.82 1.057l12.61-7.598c1.017-.614 2.33-.275 2.9.783l7.132 12.887c.57 1.037 1.524 1.037 2.095 0l7.13-12.887c.573-1.037 1.885-1.397 2.9-.783l12.613 7.597c1.016.613 1.84.147 1.82-1.06l-.275-14.728c-.02-1.185.93-2.137 2.116-2.116l14.73.275c1.185.022 1.67-.782 1.058-1.82l-7.597-12.61c-.613-1.017-.274-2.33.784-2.9l12.887-7.132c1.06-.592 1.06-1.524.022-2.095zm-62.067 8.19c-.402.042-.783.063-1.185.063-1.905 0-3.577-.592-5.08-1.82-3.11-2.54-3.935-6.2-4.337-9.46-.487-4.04.148-7.28 1.947-9.65 1.523-1.967 3.66-3.173 6.137-3.47.36-.042.72-.063 1.1-.063 2.73 0 5.185 1.27 6.9 3.555 1.395 1.82 2.22 4.17 2.623 7.407.444 3.64 0 6.772-1.29 9.078-1.398 2.476-3.747 3.98-6.815 4.36zm8.634 10.686c-.192.486-.72 1.82-2.308 2.01-.084.02-.17.02-.275.02-1.12 0-2.412-.655-2.582-2.115-.084-.72.148-1.355.36-1.82l13.184-33.817c.36-.762.803-1.777 2.263-1.947.106-.02.212-.02.318-.02 1.122 0 2.307.677 2.498 2.18.084.656-.064 1.08-.233 1.502zm26.345-5.08c-1.396 2.498-3.767 4.02-6.856 4.402-.424.043-.826.085-1.23.085-1.882 0-3.533-.593-5.056-1.82-3.11-2.518-3.936-6.222-4.338-9.502-.487-4.042.17-7.3 1.946-9.65 1.545-1.968 3.66-3.174 6.137-3.47.36-.042.74-.063 1.12-.063 1.948 0 4.74.613 6.92 3.555 1.398 1.82 2.223 4.19 2.625 7.406.444 3.598 0 6.75-1.27 9.058z"
            />
          </svg>
        </div>
      </div>
      <div onclick={(e) => alert("Hi hassan HABIB TAHIR")} style={{ backgroundColor: "red", zIndex: 13000 }}>

        <div class="pie pie3"  >
          <div class="pie-color pie-color3">
            <svg class="cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <path
                d="M98.993 14.537c-.816-.966-2.018-1.503-3.263-1.503H25.698c-.064 0-.107.022-.172.022l-9.36-9.404c-.816-.794-1.91-1.245-3.05-1.245H4.295C1.932 2.407 0 4.34 0 6.7c0 2.363 1.932 4.295 4.294 4.295h7.063l7.73 7.728 9.574 56.893c.344 2.06 2.148 3.585 4.23 3.585h50.388c2.36 0 4.293-1.93 4.293-4.293 0-2.36-1.93-4.293-4.292-4.293h-46.76l-1.588-9.447h54.423c2.104 0 3.908-1.524 4.23-3.606l6.354-39.545c.215-1.267-.128-2.533-.944-3.478zm-60.177 38.02H33.49L31.56 41.03h7.256zm0-20.115H30.1L28.273 21.6h10.542zm16.38 20.116h-7.793V41.03h7.793zm0-20.116h-7.793V21.6h7.793zm16.38 20.116h-7.792V41.03h7.793zm0-20.116h-7.792V21.6h7.793zm14.128 20.116h-5.54V41.03h7.386zm3.22-20.116h-8.78V21.6h10.52zm-47.618 50.13c-4.143 0-7.514 3.37-7.514 7.514 0 4.143 3.37 7.514 7.514 7.514s7.514-3.37 7.514-7.514-3.37-7.514-7.514-7.514zm34.758 0c-4.143 0-7.514 3.37-7.514 7.514 0 4.143 3.37 7.514 7.514 7.514 4.165 0 7.514-3.37 7.514-7.514s-3.35-7.514-7.514-7.514z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div onClick={HumbergerClick} style={{ height: "10rem" }}>
        {/* <h1> */}

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
        {/* </h1> */}
      </div>


      <header>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <img src="images/tm-easy-profile.jpg" class="img-responsive img-circle tm-border" alt="templatemo easy profile" />
              <hr />
              <h1 class="tm-title bold shadow">Hi, I am Julia</h1>
              <h1 class="white bold shadow">Creative Director</h1>
            </div>
          </div>
        </div>
      </header>
      <section class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="about">
              <h3 class="accent">Easy Profile</h3>
              <h2>Bootstrap v3.3.5</h2>
              <p>This easy HTML profile is brought to you by templatemo website. There are 4 color themes, <a href="index-green.html">Green</a>, <a href="index.html">Blue</a>, <a href="index-gray.html">Gray</a>, and <a href="index-orange.html">Orange</a>. Sed vitae dui in neque elementum tempor eu id risus. Phasellus sed facilisis lacus, et venenatis augue.</p>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="skills">
              <h2 class="white">Skills</h2>
              <strong>PHP MySQL</strong>
              <span class="pull-right">70%</span>
              <div class="progress">
                <div class="progress-bar progress-bar-primary" role="progressbar"
                  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
              </div>
              <strong>UI/UX Design</strong>
              <span class="pull-right">85%</span>
              <div class="progress">
                <div class="progress-bar progress-bar-primary" role="progressbar"
                  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}></div>
              </div>
              <strong>Bootstrap</strong>
              <span class="pull-right">95%</span>
              <div class="progress">
                <div class="progress-bar progress-bar-primary" role="progressbar"
                  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="row">
          <div class="col-md-8 col-sm-12">
            <div class="education">
              <h2 class="white">Education</h2>
              <div class="education-content">
                <h4 class="education-title accent">New Web Design</h4>
                <div class="education-school">
                  <h5>School of Media</h5><span></span>
                  <h5>2030 January - 2034 December</h5>
                </div>
                <p class="education-description">In lacinia leo sed quam feugiat, ac efficitur dui tristique. Ut venenatis, odio quis cursus egestas, nulla sem volutpat diam, ac dapibus nisl ipsum ut ipsum. Nunc tincidunt libero non magna placerat elementum.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="languages">
              <h2>Languages</h2>
              <ul>
                <li>Myanmar / Thai</li>
                <li>English / Spanish</li>
                <li>Chinese / Japanese</li>
                <li>Arabic / Hebrew</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="contact">
              <h2>Contact</h2>
              <p><i class="fa fa-map-marker"></i> 123 Rama IX Road, Bangkok</p>
              <p><i class="fa fa-phone"></i> 010-020-0890</p>
              <p><i class="fa fa-envelope"></i> easy@company.com</p>
              <p><i class="fa fa-globe"></i> www.company.com</p>
            </div>
          </div>
          <div class="col-md-8 col-sm-12">
            <div class="experience">
              <h2 class="white">Experiences</h2>
              <div class="experience-content">
                <h4 class="experience-title accent">Website Development</h4>
                <h5>New Media Company</h5><span></span>
                <h5>2035 January - 2036 April</h5>
                <p class="education-description">Cras porta tincidunt sem, in sollicitudin lorem efficitur ut. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <p>Copyright &copy; 2084 Your Easy Profile</p>
              <ul class="social-icons">
                <li><a href="#" class="fa fa-facebook"></a></li>
                <li><a href="#" class="fa fa-google-plus"></a></li>
                <li><a href="#" class="fa fa-twitter"></a></li>
                <li><a href="#" class="fa fa-dribbble"></a></li>
                <li><a href="#" class="fa fa-github"></a></li>
                <li><a href="#" class="fa fa-behance"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}