import React from 'react'
import {

  Link
} from "react-router-dom";
export default function Home() {

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

  return (
    <div>
      {/* <div class="preloader">
        <div class="sk-spinner sk-spinner-wordpress">
          <span class="sk-inner-circle"></span>
        </div>
      </div> */}


      <a href="#">
        <div class="pie pie1" onclick={HndleClose} >
          <div class="pie-color ">
            <Link to="/projects" onClick={HndleClose}>
              {/* <img src="code.svg" style={{ fill: "white", height: "100%" }} /> */}
              <svg class="card" style={{ fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 -300 702 1000"><path class="cls-1" d="M78.83,41.38c.42-.57.83-1.15,1.28-1.71C79.66,40.23,79.26,40.8,78.83,41.38Zm-4.6,7.28c.22-.41.42-.82.65-1.22C74.66,47.84,74.45,48.25,74.24,48.66Zm2.46-4.2c.68-1,1.39-2.08,2.14-3.08C78.09,42.38,77.37,43.4,76.69,44.46Zm3.42-4.79a58.05,58.05,0,0,1,4.24-4.78A54.85,54.85,0,0,0,80.11,39.67Zm-3.42,4.79c-.63,1-1.24,2-1.81,3Q75.75,45.92,76.69,44.46ZM85,502.08a73.9,73.9,0,0,1-24.86-27.95,70.7,70.7,0,0,1-7-21.54,81.49,81.49,0,0,1-1-11.77c0-3.38,0-6.78,0-10.19.06-60.16.13-120.78.19-180.48,0-25,0-38.51-.34-44-.72-12.65-1.44-24.34-2.17-33.84-.12-1.58-.31,7.64-.41,15.61-.49,39.79-.17,86-.16,129.3,0,33.32.2,37.66.6,21.69.12-4.78.31-.87.46-.92,0,11.47,0,27,0,33.56l-.61,32.63L50,429.56q.07,6.38.14,12.71a77.77,77.77,0,0,0,1.84,14.94A74.22,74.22,0,0,0,85.76,504a66,66,0,0,0,14.15,6.56c6.18,1.94,7.18,1.63,4,.73A80,80,0,0,1,85,502.08Zm376.39-91.95-1,22.13c-.2,3.53-.3,6.59-.6,10a65.77,65.77,0,0,1-1.56,10.37,67,67,0,0,1-18.82,36C429.12,498.72,415.25,505.4,402,507c-10,1.16-17.67.49-25.42.68l-21.8.06-41.46.23-136.74.51-16.53.63c-2.12.12.36.28,4.91.39,14.08.33,40.13.63,43.38,1,6.71.7,44.86.49,70.86.61,22.09.1,34.71-.05,43.41-.37,9.09-.34,23.26-.66,39.66-.93l18.72-.12h10.92c3.47-.1,6.65-.24,8.39-.41,24-2.23,45.82-18.51,55-39.63a80.8,80.8,0,0,0,3.1-8c.68-2.75,1.54-5.44,2-8.2a61,61,0,0,0,.94-8.23l.19-4.08v-3.6C461.45,427.95,461.43,418.79,461.42,410.14ZM49.78,83.52l.15-9.12A75.75,75.75,0,0,1,51,63.51a70,70,0,0,1,6.77-20.73A73.57,73.57,0,0,1,87.24,11.63,71.14,71.14,0,0,1,107.37,3.8,72.89,72.89,0,0,1,118,2.17L123.43,2c1.82-.06,3.08,0,4.65,0l8.82-.1-8.81.45,78.47.23L234,2.39c41.24-.6,23-1.62-28.54-2.07L163.68.07,142.43,0H131.74C128,0,125-.11,120.25.19A74.47,74.47,0,0,0,72.57,20.78a75.8,75.8,0,0,0-23,46.34c-.21,2.29-.29,4.61-.41,6.93s0,3.9-.05,5.9V91.38c0,7.65,0,15.34,0,23l.18,5.08ZM329,181.72A60.85,60.85,0,0,0,340.38,185c1.29.22.18-.2-2.88-1.18-1.83-.59-.26-.38-.24-.54a77.12,77.12,0,0,0,13.14,2.25c5.9.55,8.71.69,11.68.88l32.47-.66c1.67,0,3.54-.1,4.23-.17,7-.72-10.13-1.64-28-1.63l-14.84,0a74.29,74.29,0,0,1-17.34-2.26,70.35,70.35,0,0,1-30.44-16.32c-7.17-6.54-10-11-11.52-12.5a100.67,100.67,0,0,1-8.42-10.57c-.36-.54,1,2.93,2.42,5.8C297.83,162.49,312.59,175.59,329,181.72Zm133.83-3.39c.11.49-.56.28-.8.45l-4.22,1-2.26.53v2.12l-.05-2.11h-.05c-.06,8.14-.11,16.21-.17,24.44q0,88.74,0,177.56c0,7.82,0,16,0,23.43-.06,30.49-.12,39.21.23,35.84.22-1.59.32-.63.27,2.17a53.56,53.56,0,0,1-1.63,12.8C451.89,467.51,444,481,434.49,489a63.53,63.53,0,0,1-21.23,12.41c-7.79,2.83-16.56,3.68-24.62,3.59l-49,.22-100.14.37-81.68.2-20.42,0c-6.79,0-13.38.28-20.65-.43a64.68,64.68,0,0,1-55.48-48.74,69.06,69.06,0,0,1-1.65-9.28c-.14-3.1-.39-6.35-.31-9.19q0-8.77,0-17.48c0-11.63.07-23.21.1-34.85,0-23.28,0-46.76,0-71.22,0-6.32.13-21.56.25-25.16.23-6.88.49-8.35.76-12.57,0-9.32.07-20.39.12-33.54l.24,10.66c-.06-27.31-.11-50.54-.16-73.33s.16-44.9.26-69.84l-.37-4.25c0-7.76,0-15.57,0-24.4,0-2.21,0-4.47,0-6.82s.16-5,.47-7.6a65.88,65.88,0,0,1,4.24-16.54c-3.89,10.53-3.73,15.37-3.44,12.22.34-.73,2.19-6.76.81.07-1.53,5.62-.68,26.37-.82,41.07,0,15.84,0,22.6.29,27.17.2,3.34.35,24.23.52,37.4.41,32.33,1,21.7,1.48,23.73.18.71.37-1,.62-1.91,0-2,.1-10.89.24-26.87.13,17.33.22,29.34.34,44.47L65,206c0,6.84,0,17.18,0,19.94l1.14,61c.55,21.54,1.24-25.38,1.3-61.76,0-46,0-93,.05-139.52C67.4,75.88,67.21,67,70,58.29a58.39,58.39,0,0,1,4.21-9.63,56,56,0,0,0-6.5,25.26l0,46.6.15-.06c0-10.35,0-20.72.07-31,0-5.09,0-9.85,0-14.33l.36-6c.32-1.92.56-3.79.92-5.58a51.72,51.72,0,0,1,7.56-17.91A59,59,0,0,1,91.31,30.33,55.67,55.67,0,0,1,120,19.61c3.48-.26,7.68-.26,12-.25l13.1,0,26.84,0c17.67,0,34.2.08,45.47.37,8.47.22,1.37.56,1.37.84h82.57V15.77h-.53c-1.75,0-3.09-.09-4-.16-1.89-.14-2.17-.35-.89-.64,2.31-.51,3.55-1,5.51-1.62l6.31-.09c3.39,3.22,5.36,4.86,4.48,3.45L353,57.34l-.55-.48L413,117.34c.35-.35,7.37,6.59,12.52,11.53l23.88,23.23c2.51,2.35,3.94,4.67,6,7,.52.61.81,1.12,1.22,1.68.12.73.09,1.56.14,2.34l.19,4.75.19,4.78c0,.78.11,1.64,0,2.35l-1.62.18v2.29l1.73-.32,1.53-.28c.39-.2,1.33.11,1.06-.71l-.14-3.49q-.14-3.47-.27-6.9c-.21-2.16.19-4.9-.93-6.14l-4.65-6.74-6.77-6.65-5.65-5.58L435.79,135,418,117.21l-3.72-5.28-4.4-5.86c8,8,18.18,17.69,27.66,27.91,1.43,1.54,7.06,7.09,8.69,8.56l8.35,7.74,1.91,1.75c.47.56.76,1.08,1.13,1.59l1.9,2.77,1.76,2.69a4.58,4.58,0,0,1,.74,1.5,4.43,4.43,0,0,1,.34,1.91c.16,3.24.3,7.27.4,12.34,0,.75,0,1.51,0,2.3Zm-73.48-6.49-9.73.15,12.57.14,15.53-.42c-6-.32-18.95-.28-31.71.11l13,0Zm30.46-13,10-.07c1.5,0,1.15-.05,1.19-.07l0-.06,0-.08s0,0,.07,0,.31-.09.3-.49c0,0,0,0,0-.1l-.83-.88-1.85-1.94-4.27-4.41-9.14-9.36.45.71a84.85,84.85,0,0,1-6.53-5.57c-6.2-6-12.66-12.49-18.74-19.05-4.32-4.66-11.61-12-18.39-19l2.45,1.32c-19.35-19.59-10.88-12.32-9.58-12l-21-20.8C333.56,56.49,322.45,45.48,313.74,36L303.74,26l-.09-.11c.28,12.69,1.07,6.35,1.37,19.46.13-5.52.22-9.22.32-13.75.28,4.52.49,9.87.95,7.25.36-2,.82,6.51,1.25,9.34.17,1.14.38-1.18.57-.55a15.06,15.06,0,0,1,.63,4.8c.1,7.33.81,10.77.3,22.32,0,1,0,3.8,0,5.44,0,9.44.1,18.64.14,27.83v3.45l.12,2.74a31.29,31.29,0,0,0,.51,5.3,49.45,49.45,0,0,0,2.73,10.36,46.45,46.45,0,0,0,35,28.32,58.42,58.42,0,0,0,8.69.74l11.27,0ZM305.49,83.67c0-2.43.06-4.9.1-7.35l-.2-.94-.15,22.46-.08,11.23,0,2.79.11,2.35a29.41,29.41,0,0,0,.39,4.68l.44,1.82c0-1.68-.26-3.09-.26-5l-.19-4.28v-5.15c0-3.45,0-6.91,0-10.34C305.55,91.81,305.52,87.76,305.49,83.67ZM302.86,24.3l.3-.06h0l-.32,0ZM303,25l.48,3.19c0-.08,0-1.14.06-2.54Zm147.76,146.5H449.6c0,.1,0,.19,0,.29A5.24,5.24,0,0,0,450.73,171.54Zm-24.76.13c.13,0,.19.11.33.11l15.65,0,.41,0c0-.08,0-.16,0-.24l-13,0Zm23.63,6.92a14.6,14.6,0,0,0,1.52-.27l1.3-.24c0-.83,0-1.67,0-2.5l-2.8.32C449.6,176.8,449.6,177.7,449.6,178.6ZM302.29,20.48h5.16l-5.12.25.2,1.31a10.07,10.07,0,0,1,1.68-.32,31.64,31.64,0,0,1,2.59,2.22l7.59,7.39c6.4,6.33,14.6,13,12.72,10.44-2.72-3.78,7.15,5.14,19.54,17.62l20.71,20.74c1.5,1.49,3.21,3,4.24,3.82,3.75,3.17,17.27,16.11,24.65,23.65,1.44,1.47,3.27,3.37,3.94,4.14,4.63,5.31,4.54,5.23,12.08,12.2l-10-11.92c-1.11-1.35-.68-1.22-1-1.77l14.05,14.09,4.56,4.79,28.36,28.26c1,1.17,2.53,2.08,3,3.45l.16,4.7.17,4.71,0,.72a2.26,2.26,0,0,0,.7-1.35c0-.46,0-.86,0-1.33a7.62,7.62,0,0,0-.32-1.58l-.1-3.84a8,8,0,0,0-.23-2.36L419.18,128,350.81,59.83q-16.43-16.35-26.66-26.66l-12-11.87-5.52-5.48-5.07-.05ZM73.39,119.86c.05,2.26.11,4.55.16,6.83.13-6.09.36-11.34.37-18.44,0-10.26,0-20.72,0-31.23a51.93,51.93,0,0,1,5.86-25.46,50.86,50.86,0,0,1,21.71-21.4A49.89,49.89,0,0,1,119.21,25l2.36-.31c-19,.74-37,13.42-44.17,31.15a55.3,55.3,0,0,0-3.56,13.77c-.15,2.51-.36,4.47-.35,7.45l0,8.56ZM64.65,446.63c.24,2.14.59,4.2,1,6.22A55.29,55.29,0,0,1,64.65,446.63ZM131.07,501c-4.57-.17-10.43.16-17-1.13a60.81,60.81,0,0,1-21.12-8.13c-12.32-7.26-22.87-21-26.81-37a58.43,58.43,0,0,0,14.3,27l.57.7a63.21,63.21,0,0,1-6.54-8,62.39,62.39,0,0,1-7.93-17.07,57.85,57.85,0,0,0,10.62,21.07,58.57,58.57,0,0,0,10,10,59.75,59.75,0,0,0,21.21,10.55C115.73,501,123.2,501.17,131.07,501Zm36.87-12.85,30.49-.07c51.53-.43,118.14-.26,159.15.29l34,.22a52.94,52.94,0,0,0,15.77-2.26,47,47,0,0,0,13.61-7l-1.66,1,3.47-2.84,3-3a55.33,55.33,0,0,0,6.82-9.15,45.16,45.16,0,0,0,5.65-14.13c1.09-5.18,1.19-9.66,1.15-17.18.09-13.68.19-27.47.28-41.12.1-19.37.26-51,.41-80.68l.81,8.12c.14-84,1-50,1.71-46.58-.07-32.15-.14-61.48-.2-90.22,0-.62,0-1.26,0-1.88a67.51,67.51,0,0,1-8-.44c-.44-.09-1.61-.17-3.22-.25l-3.79-.24-8.44-.48c-1.49-.11-2.31-.27-1.61-.39,1.49-.25,4.17-.49,5.42-.63l13.27-.13c2.08-.07,4.29,0,6.44,0v-2.74l-52.08.56-11.25,0-22.94-.15a69.41,69.41,0,0,1-24.29-4.74A46.23,46.23,0,0,1,324,168a28.41,28.41,0,0,1-3.32-2.91,71.5,71.5,0,0,1-8.89-7.32l2.87,2.28a62.91,62.91,0,0,1-15.5-19.55,61.53,61.53,0,0,1-6.33-22.91l-.44-1.43c-.38-5.45-.11-10.37-.16-18.18.11,3.51.15,5,.12,4,.32-.24.61-2.24.81,0,.24,1.79.1,8.45.48,13.46a35.51,35.51,0,0,0,1.39,9c.24.52.83,2.47,1.51,4.8s1.88,4.93,2.72,6.94c2.44,4.8,3.59,6.19,4.13,6.5s.36-.41.75-.25.14-.48.21-.84a54.15,54.15,0,0,1-3.54-7.84A57.37,57.37,0,0,0,307.91,146l-.76-.47a55,55,0,0,0,3.91,5A53.11,53.11,0,0,0,326.53,162c6.15,2.85-6.84-4.33-13.78-13.22a58.35,58.35,0,0,1-13.61-39.66c0-6.27.07-12.55.11-19.2l.11,15.31c0,5.23,0,10,.76,14.66l.14,0a68.18,68.18,0,0,1-.57-9.5c0-6.68,0-11.64.33-15.8.26-3.82.3-10.11.25-18.7-.06-10.38-.33-24.67.25-32.06.22-2.78.56-.45.84-.45V24.74l-1.4-.05c.39,0,1.12-.06,1.4-.09V24c-1.11-.09-2.45-.19-2.94-.29s-.67-.22-.07-.34c.3-.06.76-.12,1.4-.19.37,0,1.15-.1,1.61-.14V20.78L264.8,22.57l17.73.14c-52.82.2-26.61,1.11-69.83,1.43l41.94.32c-13.79.28-30.1.49-22.11.95,6.25.36-19.85.82-28.47,1.25-3.48.17,3.59.38,1.68.57a135,135,0,0,1-14.64.63c-22.21.13-33.14.75-67.75.37a49.31,49.31,0,0,0-12.62,1.95A48,48,0,0,0,85,49.69a44.51,44.51,0,0,0-6.29,14.86c-1.23,5.42-1.33,10-1.28,17.73-.08,28-.16,56-.24,84.58,0,36.25-.09,77.77-.13,116.58.08,45.94.17,91.35.25,137.29v19.9a51.52,51.52,0,0,0,2.42,15.2A47.86,47.86,0,0,0,98,480a48.77,48.77,0,0,0,13.92,6.37,53.94,53.94,0,0,0,7.54,1.48c2.6.11,4.89.33,8.54.27ZM452.43,181l-2.83.67c0,26.93,0,54,0,80.79,0,6.44.18,13.28.3,17.39.42,14.92.85,72,.75,104.16,0,6.28-.11,14.32-.13,17.43-.24,10.71-.36,16-.37,22.48,0,3.25,0,6.8.07,11.51s.32,10.3-1,17.61c.43-1.92.72-3.87,1.1-5.81l.5-5.89c.12-4.11.24-8.19.35-12.19.23-8,.46-15.66.66-22.63a25.58,25.58,0,0,1,.57-5.87v30.38c0,5.05.1,10.17-.26,15.06a58.36,58.36,0,0,1-3.1,14.45,57.09,57.09,0,0,1-9.53,17.15,58.85,58.85,0,0,1-38.91,22.31,111.52,111.52,0,0,1-15.48.61l-62.76.06-125.5.13-10.19.06a7,7,0,0,0,1,.11l200.34.15c10.17.19,20.42-1,29.6-5.5a59.64,59.64,0,0,0,23.32-19,58.77,58.77,0,0,0,10.32-22.43A75.08,75.08,0,0,0,452.9,439c.14-7.34.37-8.94.75-6.31-.14-22.62-.24-40.11-.35-58.13,0-12.1-.1-24.76-.15-37.46C452.89,280.87,452.66,230.54,452.43,181ZM281.77,122a54.78,54.78,0,0,1-.4-7.22c-.08-2.58,0-4.53.09-6.44l.46-11.78.92-23.55-.1-2.89.44,2.89c.08-9.13.16-17.35.23-25.73,0-2.83-.08-6.82-.17-9-.6-13.52-1.62-7.54-2.07,9.36-.48,18-.25,37.23-.36,55.81,0,2.46,0,5,0,7.46.06,2.7.21,6.09.48,9.07ZM191,349.72l.32.05c-.68-.32-1.33-.68-2-1l-14.16-5.67-1.87-.75c-2.41-1-3.11-1.3-2.93-1,.29.62-2.26-.34-4.76-1.22-6.15-2.12-13-4.7-20.08-7.32l-2.94-1.11c4-2.5,8.26-5.08,12-7.57l3.23-2,6.73-3.91c2.3-1.32,3.64-2.09,5.53-3.32a12,12,0,0,1,2-1,3.5,3.5,0,0,1,1.22-.06l2.52-1.41-.69.63,5.34-3.35L185.6,307l.17-.43,4.07-2.39-.85.62c.18.17.74.09.32.52a25.75,25.75,0,0,1-2.89,2c-1.16.72-1.66,1-1.89,1.39a26.89,26.89,0,0,1-2.56,2c-2.22,1.7-1.23,1.58-1.18,2,0,.15.22.19.38.31l2.07-1-3.15,2.18.07-.32c-.5.3-1.28.73-1.47.88-1.44,1.18-3,2.45-4.05,3.43-1.37,1.31,2.35-.33,5.05-1.9l10.3-6.13c1.41-.84,2.82-1.69,4.36-2.52l-6.79,4.27.06.09,2.31-1.33a21.91,21.91,0,0,1,3.68-1.92,27.63,27.63,0,0,0,4.3-2.36c2.31-1.44,5.41-3.54,7.3-4.16.71-.23.32.3.43.48l6.53-3.92-2.34,3.23,1.36-.69c-3.82,2.46-1.53,1.89-4.6,4l3.21-1.65c-.91.79-2,1.65-1.26,1.59.6,0-1.15,1.4-1.62,2.06-.19.26.41.09.34.29a1.77,1.77,0,0,1-.83,1.06c-1.61,1.05-2.11,2-4.9,3.2a12.86,12.86,0,0,0-1.23.72c-4.14,2.71-8.21,5.06-12.52,7.42-2.73,1.5-5.79,3.34-8.64,5.07l-5,3.11-1.25.78c-.45.28-.14.11-.25.18l0,.07a1.68,1.68,0,0,1-.34.19s0,0,.05,0h.13c.57,0,.14,0-.14.25-.14.13,0,.2.09.32l.07-.12a2.15,2.15,0,0,0,.34-.42c-.19-.11.4.1,1,.33l1.63.65c1.08.45,2.16,1,3.2,1.51,1.48.78,4,1.81,6.32,2.86l-.87.3c6.66,2.77,3.72,2.29,3.24,2.68l7.25,2.74c3.57,1.45,7.4,2.91,10.39,4.51.67.36,2.46,1,3.56,1.46s2,1,3,1.48l-1.93-.41c2,1.08,3,1.81.88,1.4-.49-.09,0,.27-.19.36-.39.23-1.43.22-5.66-1.38-2.21-.83-5.07-1.12-4.44-.45.91,1-2.51.15-6.78-1.59L186.24,343a6.89,6.89,0,0,0-1.47-.35,55,55,0,0,1-8.52-2.8,13.47,13.47,0,0,1-1.35-.65c-1.58-1-1.55-1-4.16-1.71l3.4,2.44c.38.29.22.4.31.58l-4.84-1.94-1.45-.7-17.4-6.78,1-.59.59-.41a1.31,1.31,0,0,0-.24,0l-1.67,1,13,5.32,4.65,1.81c3.12,1.23,4.09,1.77,3.43,2.11l4.74,1.61,3,1.09c4.7,1.83,9,3.28,13.17,4.66,1.42.47,3.28,1.24,4.94,1.87l7.75,3c4.07,1.51,5.57,2.32,4.6,2.5a11.64,11.64,0,0,0-1.79.59c-2-.75-3.3-1.06-2.95-.51Zm-1.64-33.91a8.42,8.42,0,0,0,1.5-.57l4.61-2.8,2.72-1.7,1.69-.93.13-.26-10.21,5.86Zm-33.29,12a37.42,37.42,0,0,0,6.52-4l-2.7,1.66-.11,0,1.92-1.29c-1.46.8-2.38,1.26-2.82,1.57Zm16-20.15a11.26,11.26,0,0,0,3.11-2.16,26.94,26.94,0,0,0,1.66-2.89c.07-.15-.68.14-1.31.43a109.58,109.58,0,0,0-9.59,5.61c-2.45,1.48-2.7,1.79-1.37,1.34.4-.14.18.16.25.26-.85.5-2,1.23-2.48,1.47l-4.88,2.4-13.56,8.71c-.68.44-1.41.93-1.62,1.12-2.06,1.86,6-2.19,13.06-6.41Zm-3.64,36-3.77-1.45-4.33-1.75c-3.85-1.66-6.67-2.57-10.1-3.83l-12.15-4.55,3.53-2.23a7.88,7.88,0,0,0,.88-1.08c.07-.14-.44,0-1.1.32-2,.94-5.52,2.77-6.49,3a5.83,5.83,0,0,0-.69.25c.64.64,5.24,2.35,8.12,3.59a34.77,34.77,0,0,0,6.06,2.12c1.53.34,3.63.92,5.88,1.6.92.28,3.92,1.42,4.65,1.77,2.45,1.18,5.11,2.27,7.64,3.25l4.61,1.75-1.48-1.42Zm24-49.44-.48.68,5.87-3.32a20.09,20.09,0,0,0,2-1.32c2.81-2.21,1.07-2.06-2.9-.07-4.22,2.12-8.46,4.86-12.68,7.3l-3.37,2-.31.34,11.3-5.17ZM389.87,332l2.06,1.16c-7.25,3.15-17.14,7-23.44,9.07-2.88,1-7.77,2.91-11.69,4.39l.47,0a27.37,27.37,0,0,1-3.82,2.09l-3.83,1.61c-1.1.42-2.22.8-3.36,1.12-1.61.45-4.14,1.44-6.55,2.29l.42-.82c-6.74,2.59-4.27.91-4.19.29l-7.14,3c-3.59,1.41-7.37,3-10.63,3.9-.73.2-2.45,1-3.59,1.4s-2.12.66-3.17,1l1.68-1c-2.23.63-3.45.78-1.61-.41.42-.27-.16-.22-.11-.39.13-.43.88-1.15,5.05-2.91,2.17-.92,4.44-2.69,3.53-2.73-1.33-.07,1.71-1.84,6-3.53l7.13-2.87a6.78,6.78,0,0,0,1.3-.77,55.11,55.11,0,0,1,8.1-3.85,13.77,13.77,0,0,1,1.43-.47c1.84-.35,1.82-.34,4.19-1.63l-4.14.57c-.47.05-.43-.13-.63-.21l4.84-1.94,1.77-.58,20.31-8.31-1.19-.7-.91-.49s-.12,0-.09,0l1.84,1.12-15.12,5.95-5.18,2.13c-3.37,1.37-4.26,1.57-4.08.89l-4.54,2.1-2.95,1.3c-4.66,1.91-8.75,3.79-12.75,5.7-1.35.64-3.23,1.37-4.87,2.05l-7.65,3.21c-4,1.71-5.63,2.16-5.06,1.36a11.58,11.58,0,0,0,.89-1.67c1.93-.81,3.12-1.5,2.49-1.66L325,347l-.27.18c.71-.23,1.43-.43,2.13-.7L341,340.85l1.87-.75c2.46-.91,3.15-1.2,2.78-1.33-.7-.22,2.18-1.43,3.46-2.07,3.82-1.87,7.7-3.59,11.33-5.24l1.52-.68c-2.62-1.47-5.19-3-7.69-4.26-.58-.29-1.22-.7-1.83-1.06l-3.58-2.28c-1.13-.73-3.25-2-5-3a12.07,12.07,0,0,1-1.76-1.27,3.49,3.49,0,0,1-.63-1l-2.43-1.56.88.32-5.47-3.14-5-3.25-.46.05-4-2.46.94.46c.07-.24-.27-.7.31-.53a25.88,25.88,0,0,1,3.12,1.61,6,6,0,0,0,2.12,1,26.87,26.87,0,0,1,3,1.32c2.54,1.16,2,.34,2.32.1.12-.08.06-.28.1-.48L335,310l3.41,1.75-.32.1c.5.3,1.25.79,1.47.88,1.72.71,3.59,1.52,4.93,2,1.8.6-1.39-1.92-4-3.56l-10.26-6.2c-1.41-.85-2.82-1.69-4.27-2.66l7,4,.05-.1-2.26-1.42a21.91,21.91,0,0,1-3.42-2.34,27.51,27.51,0,0,0-4.11-2.68c-2.35-1.36-5.67-3.11-7.11-4.49-.54-.52.12-.42.22-.6l-6.53-3.92,3.95.54-1.25-.87c4,2.21,2.39.46,5.7,2.17l-3-2.06c1.12.43,2.41,1,2,.37s1.78.35,2.58.46c.32,0-.12-.41.1-.44a1.77,1.77,0,0,1,1.32.24c1.68.92,2.73.93,5.13,2.81a13,13,0,0,0,1.21.75c4.34,2.38,8.34,4.86,12.45,7.56,2.61,1.71,5.67,3.54,8.54,5.24l13.68,8,23.17,13.92Zm-54.32-29.23a8.51,8.51,0,0,0-1.22-1.06L329.69,299l-2.78-1.6-1.62-1.05H325l10,6.26Zm28.13,24.82a50.93,50.93,0,0,0-7.74-4.54l3.16,1.86,0,.06-2.46-1.34c1.48,1,2.25,1.52,2.83,1.82Zm-17.31.31-9.86-6.09a11.27,11.27,0,0,0-3.37-1.73,26.88,26.88,0,0,0-3.33-.1c-.16,0,.44.54,1,1a109.16,109.16,0,0,0,9.47,5.82c2.46,1.47,2.85,1.54,1.83.58-.31-.29.05-.24.11-.34.84.51,2,1.16,2.46,1.5.13.23,0,.36-.07.49a2.91,2.91,0,0,1,1,0,1.43,1.43,0,0,0,.28,0C347,329.09,347.38,328.52,346.37,327.91Zm7.35,2.2a10.26,10.26,0,0,0-2.67.73c-.77.23-.93.42-.87.65s-.08.57-.45.94a4.61,4.61,0,0,1-1.29.6,10.42,10.42,0,0,0-2.4.76l-4.48,1.89h2.05l1.85.14,2.26-1c.62-.27,1.25-.52,1.87-.73a25.67,25.67,0,0,0,3.92-1.78l4.09-1.94-1.62-.86c-.36-.1-1-.29-1.56-.38-.25,0-.38,0-.38.11,0,.31.39.78-.09.79A.74.74,0,0,0,353.72,330.12Zm-31.86-14.2,3.37,2,.44.11-9.87-7.53-.69-.33.82.1-5.69-3.62a19.8,19.8,0,0,0-2.09-1.1c-3.27-1.44-2.32,0,1.3,2.59C313.31,310.9,317.72,313.35,321.86,315.92Zm-87.74,74.61c.71-1.88,1-3.17.47-2.84l5.23-13.5,0,.31c.31-.65.66-1.27.93-1.95q2.74-6.79,5.45-13.6c.24-.6.47-1.23.72-1.8,1-2.31,1.25-3,.92-2.82-.63.3.37-2.32,1-4.18,1.62-4.91,3.54-10.12,5.42-15.33,1.5-4.15,3.27-8.51,4.61-12.52.26-.77.67-1.75,1-2.64,1.43-3.62,3.08-7,4.43-10.77a11.24,11.24,0,0,1,.95-1.86,3.32,3.32,0,0,1,.92-.75l1.11-2.54-.16.88c.79-2.11,1.43-3.92,2.14-5.66s1.49-3.4,2.32-5.28l-.13-.43,1.72-4.19-.29,1c.25,0,.64-.35.57.22a23.82,23.82,0,0,1-1,3.21,5.56,5.56,0,0,0-.63,2.16,24.72,24.72,0,0,1-.79,3c-.7,2.59,0,1.93.3,2.23.1.11.29,0,.49,0l1-2-1.13,3.5-.15-.29c-.21.52-.56,1.31-.61,1.53-.4,1.74-.87,3.64-1.08,5-.28,1.8,1.64-1.6,2.8-4.37,1.46-3.5,2.88-7.11,4.31-10.67.59-1.46,1.17-2.93,1.87-4.46l-2.7,7.22.1,0c.33-.79.68-1.57,1-2.36a20.3,20.3,0,0,1,1.7-3.6,25.3,25.3,0,0,0,1.92-4.3c.93-2.44,2.07-5.86,3.17-7.42.41-.59.43.05.63.13l2.72-6.79c.05,1.36.1,2.55.15,3.85l.64-1.32c-1.48,4.1,0,2.35-1.15,5.75l1.51-3.12c-.23,1.13-.58,2.44,0,2s0,1.75,0,2.53c0,.31.38-.17.45,0a1.67,1.67,0,0,1,0,1.3c-.62,1.74-.44,2.74-1.87,5.3a12.22,12.22,0,0,0-.52,1.27c-1.58,4.48-3.33,8.65-5.26,13-1.22,2.73-2.49,5.91-3.66,8.89-1.39,3.53-2.65,7.06-4,10.59-1.6,4.07-3.27,8.14-4.91,12.22-.31.78-.68,1.7-.89,2.36a76.84,76.84,0,0,1-5.08,12.11c-.69,1.25-1.67,3.67-2.51,5.56l.21-.14a7.82,7.82,0,0,1-.32,2.19,41.1,41.1,0,0,1-2.63,6.19c-.76,1.42-1.75,3.83-2.76,6.07l-.31-.85c-2.67,6.39-2.22,3.56-2.62,3.09-.93,2.48-1.73,4.77-2.63,7-1.4,3.43-2.8,7.11-4.34,10-.34.64-.93,2.37-1.4,3.42s-1,1.91-1.43,2.85l.38-1.86c-1,2-1.76,2.91-1.38.84.09-.47-.27,0-.36-.19-.23-.38-.24-1.38,1.29-5.45.8-2.12,1-4.88.39-4.28-.95.87-.19-2.43,1.48-6.53.93-2.27,1.84-4.57,2.73-6.85a6.32,6.32,0,0,0,.32-1.42,50.71,50.71,0,0,1,2.67-8.19,12.41,12.41,0,0,1,.62-1.3c1-1.51,1-1.48,1.65-4-.83,1.14-1.64,2.3-2.38,3.25-.28.36-.39.21-.58.29.62-1.55,1.23-3.11,1.86-4.65.22-.53.53-1,.72-1.5q3.77-9.65,7.52-19.3c.11-.27.18-.54.27-.8,0,0-.09,0-.11,0q-3.12,7.65-6.24,15.31c-.63,1.56-1.22,3.16-1.84,4.74-1.23,3.12-1.72,4-2.08,3.35-.6,1.77-1.05,3.14-1.54,4.55-.32.95-.66,1.94-1,2.91-1.76,4.51-3.14,8.6-4.46,12.65-.44,1.36-1.19,3.15-1.8,4.75-.95,2.48-1.92,5-2.83,7.45-1.45,3.91-2.23,5.34-2.42,4.41A11.2,11.2,0,0,0,234.11,390.53Zm45.74-92.1a7.7,7.7,0,0,0,.82-1.31c.65-1.56,1.27-3.21,1.9-4.82.37-1,.71-1.92,1.09-2.88.23-.57.5-1.13.76-1.69l-.05-.28-4.41,10.41Zm-19.09,29.4a40.55,40.55,0,0,0,2.88-7.44l-1.19,3.06-.06.06.8-2.32c-.67,1.5-1.09,2.35-1.28,2.9C261.47,325.41,261.14,326.6,260.76,327.83Zm-5.06-12c1.84-4.61,3.76-9.23,5.67-13.77a10.39,10.39,0,0,0,1.11-3.46,25.44,25.44,0,0,0-.47-3.2c0-.15-.45.5-.76,1.08a100.87,100.87,0,0,0-4.07,9.86c-1,2.56-1,2.94-.25,1.83.23-.33.24,0,.35.06-.35.88-.79,2.09-1,2.56-.56,1-1,1.69-1.42,2.33-.89,2.68-1.74,5.24-2.58,7.77a6.58,6.58,0,0,0-.28,1C251.79,323.72,254,320,255.7,315.79Zm-10.24,36.74c.69-1.77,1.5-4,2.32-5.88,1.19-2.68,1.73-4.56,2.52-6.81,1.18-3.36,2.47-6.84,3.84-10.62a11.51,11.51,0,0,0,.07-1.44c0-.2-.21-.05-.42.27a23,23,0,0,1-2,3.05c-.7.32-1.71,3.3-2.59,5.26a10.21,10.21,0,0,0-1.07,3.43,21.4,21.4,0,0,1-.56,3.3,22.39,22.39,0,0,1-1.07,2.88,91.62,91.62,0,0,0-3.76,9.15c.5-.51,1-1,1.39-1.41S245,352.92,245.46,352.53Zm23.63-72.59,0,.8c.91-2.11,1.75-4,2.57-5.95a18.34,18.34,0,0,0,.72-2.15c.85-3.33-.42-2.21-2.32,1.61-2,4.07-3.65,8.63-5.46,12.94-.48,1.14-.94,2.33-1.4,3.5l0,.44,5.68-10.49Z" /></svg>
              {/* <svg class="card" style={{ fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100px" height="100px"><path d="M 50 16 C 38.745078 16 28.536804 19.528325 21.103516 25.289062 C 13.670227 31.0498 9 39.090825 9 48 C 9 56.843516 13.643104 64.803099 20.982422 70.556641 C 20.979022 77.17314 20.872179 82.713759 17.292969 86.292969 A 1.0001 1.0001 0 0 0 18 88 C 24.741238 88 33.13907 85.975155 38.578125 78.707031 C 42.210021 79.527556 46.031696 80 50 80 C 61.254922 80 71.463196 76.471675 78.896484 70.710938 C 86.329773 64.950199 91 56.909175 91 48 C 91 39.090825 86.329773 31.0498 78.896484 25.289062 C 71.463196 19.528325 61.254922 16 50 16 z M 50 18 C 60.836078 18 70.627913 21.410128 77.671875 26.869141 C 84.715837 32.328153 89 39.788175 89 48 C 89 56.211825 84.715837 63.671847 77.671875 69.130859 C 70.627913 74.589872 60.836078 78 50 78 C 45.963088 78 42.07133 77.527971 38.412109 76.652344 A 1.0001 1.0001 0 0 0 37.361328 77.048828 C 32.908474 83.389417 26.082467 85.468934 20.003906 85.837891 C 22.866127 81.619726 23 76.123 23 70.216797 L 23 70.140625 A 1.0001 1.0001 0 0 0 22.605469 69.345703 C 15.3982 63.868957 11 56.317715 11 48 C 11 39.788175 15.284163 32.328153 22.328125 26.869141 C 29.372087 21.410128 39.163922 18 50 18 z M 50 21 C 40.109772 21 31.134601 23.999444 24.609375 28.871094 C 18.084149 33.742743 14 40.513854 14 48 C 14 53.479972 16.189921 58.584917 19.921875 62.830078 A 0.50030972 0.50030972 0 1 0 20.673828 62.169922 C 17.075782 58.077083 15 53.214028 15 48 C 15 40.877146 18.876757 34.397976 25.207031 29.671875 C 31.537305 24.945774 40.312228 22 50 22 C 59.503691 22 68.127545 24.834788 74.427734 29.404297 A 0.50005 0.50005 0 1 0 75.015625 28.595703 C 68.523814 23.887212 59.702309 21 50 21 z M 49.5 28 C 46.495378 28 44 30.214474 44 33 C 44 35.785526 46.495378 38 49.5 38 C 52.504622 38 55 35.785526 55 33 C 55 30.214474 52.504622 28 49.5 28 z M 49.5 29 C 52.018226 29 54 30.814963 54 33 C 54 35.185037 52.018226 37 49.5 37 C 46.981774 37 45 35.185037 45 33 C 45 30.814963 46.981774 29 49.5 29 z M 76.5 29.880859 A 0.50005 0.50005 0 0 0 76.179688 30.767578 C 76.417254 30.9667 76.650339 31.169004 76.878906 31.373047 A 0.50005839 0.50005839 0 1 0 77.544922 30.626953 C 77.307489 30.414996 77.064746 30.206831 76.820312 30.001953 A 0.50005 0.50005 0 0 0 76.5 29.880859 z M 78.78125 31.994141 A 0.50005 0.50005 0 0 0 78.419922 32.847656 C 78.732508 33.170072 79.033765 33.497441 79.326172 33.830078 A 0.50030972 0.50030972 0 0 0 80.078125 33.169922 C 79.774531 32.824559 79.460133 32.485928 79.136719 32.152344 A 0.50005 0.50005 0 0 0 78.78125 31.994141 z M 80.890625 34.494141 A 0.50005 0.50005 0 0 0 80.529297 35.302734 C 83.383758 39.071094 85 43.397373 85 48 C 85 55.122854 81.123243 61.602024 74.792969 66.328125 C 68.462695 71.054226 59.687772 74 50 74 C 48.831137 74 47.676738 73.95713 46.537109 73.873047 A 0.50040144 0.50040144 0 0 0 46.462891 74.871094 C 47.627264 74.957007 48.806863 75 50 75 C 59.890228 75 68.865399 72.000556 75.390625 67.128906 C 81.915851 62.257257 86 55.486146 86 48 C 86 43.162627 84.29371 38.614906 81.326172 34.697266 A 0.50005 0.50005 0 0 0 80.941406 34.494141 A 0.50005 0.50005 0 0 0 80.890625 34.494141 z M 42.5 40 A 0.50005 0.50005 0 0 0 42 40.5 L 42 44.5 A 0.50005 0.50005 0 0 0 42.5 45 L 45.5 45 C 45.781469 45 46 45.218531 46 45.5 L 46 60.5 C 46 60.781469 45.781469 61 45.5 61 L 41.5 61 A 0.50005 0.50005 0 0 0 41 61.5 L 41 65.5 A 0.50005 0.50005 0 0 0 41.5 66 L 59.5 66 A 0.50005 0.50005 0 0 0 60 65.5 L 60 61.5 A 0.50005 0.50005 0 0 0 59.5 61 L 55.5 61 C 55.218531 61 55 60.781469 55 60.5 L 55 40.5 A 0.50005 0.50005 0 0 0 54.5 40 L 42.5 40 z M 43 41 L 54 41 L 54 60.5 C 54 61.322531 54.677469 62 55.5 62 L 59 62 L 59 65 L 42 65 L 42 62 L 45.5 62 C 46.322531 62 47 61.322531 47 60.5 L 47 45.5 C 47 44.677469 46.322531 44 45.5 44 L 43 44 L 43 41 z" /></svg> */}
            </Link>

          </div>
        </div>
      </a>
      <div>
        <a href="www.gooogle.com">
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
        </a>
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


      <header style={{ marginTop: "7rem" }}>
        <div class="container">
          <div class="row" style={{ position: "relative", bottom: "10rem" }}>
            <div class="col-md-12 col-sm-12">
              <img style={{ width: "10rem", height: "12rem" }} src="images/tm-easy-profile.jpg" class="img-responsive img-circle tm-border" alt="templatemo easy profile" />
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
              <span class="pull-right">90%</span>
              <div class="progress">
                <div class="progress-bar progress-bar-primary" role="progressbar"
                  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "10%" }}></div>
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