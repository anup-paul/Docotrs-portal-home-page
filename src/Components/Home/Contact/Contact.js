import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="mt-5 contact mx-5" >
            <div className="container" >
                <div className="text-center pt-5 pb-5 text-white">
                    <h5 style={{ color: "#1CC7C1" }}><b>CONTACT US</b></h5>
                    <h1>Always Connect with us</h1>
                </div>
                <div className=" d-flex justify-content-center ">
                    <div className="w-50 mb-5">
                        <form action="">

                            <input type="text" className="form-control" placeholder="Email Address" name="" id="" />
                            <input type="text" className="form-control mt-3" placeholder="Subject" name="" id="" />
                            <textarea type="text" className="form-control mt-3" cols="30" rows="10" placeholder="Your Message" name="" id="" />
                            <div className="text-center">
                                <button className="btn btn-primary mt-3" >Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;