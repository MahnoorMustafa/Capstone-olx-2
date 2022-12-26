

function LoginForm() {


  return (
    <div>
    <div class="container-fluid ">
      <div class="LoginForm">
        <form className="forms" > 
          <div className="title pt-5 pb-5">
            <h5>WELCOME TO OLX</h5>
            <h6>The trusted community of buyers and sellers.</h6>
          </div>
          <div>
        
            <div>
            
              <input
                className="Emailinput "
                placeholder="Email"
                type="email"/>
             
         
            </div>
            <div>
              <input
                className="Passwordinput"
                type="password"
                placeholder="Password"
               
              />
           
            </div>

          </div>

          <div class="text-section text-center fs-6 fw-bold">
            <span className="forgotbtn"> Forgot </span>
            <a class="linksection " href="$">
              Username/Password
            </a>
          </div>

          <div class="loginformbtn">
            <button class="buttonclass btn btn-lg btn-dark text-white w-75 mt-4 ">Sign In</button>
          </div>

          <div className="text pt-3 fs-6 text-center">
            <span>Don't have an account? </span>
            <br />
            <a className="linksection fs-6 fw-bold text-decoration-none  text-black">SIGN UP NOW!</a>
          </div>
          
        </form>
      </div>
    </div>
  </div>
  );
}

export default LoginForm;