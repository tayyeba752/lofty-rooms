import React from "react";
import "./HomeCss/HeaderHome.css";

const HeaderHome=()=>{
    return(
        <>

         <div  id="content">
         

<div class="row height d-flex justify-content-center align-items-center">

<div class="col-md-10">
  <div class="form">
    <i class="fa fa-search"></i>
    <input type="text"  class="form-control form-input" placeholder="Search anything..."/>
    <span class="left-pan"><i class="bi bi-filter"></i></span>
  </div> 
  
</div>

</div>


</div>
     

      {/* <!-- ========== Search Bar============= --> */}
        </>
    );
}

export default HeaderHome;