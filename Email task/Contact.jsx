import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Contact() {

   const formRef = useRef()


   function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm
   ('service_o6yqe6e','template_hosi08q',formRef.current,{publicKey:'Bf3j8CvIdzmJeXXqa'}).then(

    () => {
        withReactContent(Swal).fire({
            title: "Email sent!",
            icon: "success",
          });
    },
    (error) => {
        withReactContent(Swal).fire({
            icon: "error",
            title: "Oops... somthing went wrong",
            text:  `error message: ${error.text}`,
            footer: 'please try again'
        })
    },
  );

 
  formRef.current.reset()
  
   }


    return (<>
     <header className="my-3 mx-auto container w-30 text-center bg-dark text-light rounded-2 p-1">
    <h1 className="text-center ">Contact us!</h1>
    </header>

 <section className="container my-3 mx-auto w-50">

        <form action="" onSubmit={sendEmail} ref={formRef} >

        <div className="form-group">
        <label htmlFor="email" className="fw-bold">
           Email</label><input type="email" placeholder="Enter your email" className="form-control" name="email"  id="email" />
        </div>

        <div className="form-group">
        <label htmlFor="message" className="fw-bold">
          Message</label><input type="text" placeholder="Enter the message" name="message"  className="form-control"  id="message" />
        </div>

       
        <div className="d-flex justify-content-center mt-3">
    <button type="submit" className="btn btn-success"  >Send!</button>
    </div>
        </form>
 </section>
    </> );
}

export default Contact;