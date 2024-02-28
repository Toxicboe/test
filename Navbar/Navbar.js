import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent text-dark">
        <div class="container-fluid text-danger">
          <a class="navbar-brand text-danger" href="https://www.facebook.com" style={{fontSize:"40px"}}>
            Explore Nepal
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto  ">
              {" "}
              {/* Centered navigation links */}
              <li class="nav-item ">
                <a class="nav-link active text-dark " href="https://www.facebook.com ">
                  Home
                </a>
              </li>
              <li class="nav-item  ">
                <a class="nav-link text-dark " href="https://www.facebook.com" >
                  Our services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark " href="https://www.facebook.com">
                  Destination
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark " href="https://www.facebook.com">
                  Review
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark " href="https://www.facebook.com">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul class="navbar-nav gap-4">
              <li class="nav-item">
                <button class="btn btn-outline-dark  rounded-pill">Sign-In</button>
              </li>
              <li class="nav-item">
                <button class="btn btn-outline-dark  rounded-pill">Sign-In</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      </div>
  
  );
};

 export default Navbar;

// import React from "react";

// const Navbar = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-transparent bg-transparent">
//         <div class="container-fluid ">
//           <a class="navbar-brand" href="www.facebook.com">
//             Navbar
//           </a>
//           {/* <button
//             class="btn btn-primary"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasExample"
//             aria-controls="offcanvasExample"
//           /> */}
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasExample"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div
//             class="collapse navbar-collapse "
//             id="navbarSupportedContent"
//           >
           
//               <ul class="navbar-nav mx-auto mb-2 mb-lg-0  ">
//                 <li class="nav-item">
//                   <a
//                     class="nav-link active"
//                     aria-current="page"
//                     href="www.facebook.com"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="www.facebook.com">
//                     Services
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="www.facebook.com">
//                     Destination
//                   </a>
//                 </li> <li class="nav-item">
//                   <a class="nav-link" href="www.facebook.com">
//                     Services
//                   </a>
//                 </li> <li class="nav-item">
//                   <a class="nav-link" href="www.facebook.com">
//                     Services
//                   </a>
//                 </li>
//               </ul>
//               <ul class="navbar-nav gap-4">
//               <li class="nav-item">
//                 <button class="btn btn-primary  rounded-pill">Sign-In</button>
//               </li>
//               <li class="nav-item">
//                 <button class="btn btn-primary  rounded-pill">Sign-In</button>
//               </li>
//             </ul>
//             </div>
//           </div>
      
//       </nav>

//   <div
//     class="offcanvas offcanvas-start"
//     tabindex="-1"
//     id="offcanvasExample"
//     aria-labelledby="offcanvasExampleLabel"
//   >
//     <div class="offcanvas-header">
//       <h5 class="offcanvas-title" id="offcanvasExampleLabel">
//         Respnsive Navbar
//       </h5>
//       <button
//         type="button"
//         class="btn-close text-reset"
//         data-bs-dismiss="offcanvas"
//         aria-label="Close"
//       ></button>
//     </div>
//     <div class="offcanvas-body">
//       <div class="dropdown mt-3">
//         <a class="dropdown-item" href="www.facebook">
//           Another action
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export default Navbar;
