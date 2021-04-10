import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn }) => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (


        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 style={{ color: "#1cc7c1", textAlign:"center" }} >{appointmentOn}</h2>

                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-group" >
                        <input {...register("exampleRequired", { required: true })} name="name" placeholder="Enter your name" className="form-control" />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group" >
                        <input {...register("exampleRequired", { required: true })} name="phone" placeholder="Enter your phone number" className="form-control" />
                        {errors.phone && <span>This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group" >
                        <input {...register("exampleRequired", { required: true })} name="email" placeholder="Enter your email" className="form-control" />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group row" >
                        <div className="col-md-4">

                            <select className="form-select" aria-label="Default select example" name="gender" {...register("exampleRequired", { required: true })} >

                                <option selected disabled={true} >Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>

                            </select>
                            {errors.gender && <span>This field is required</span>}
                        </div>
                        <div className="col-md-4" >
                            <input {...register("exampleRequired", { required: true })} name="age" placeholder="Enter your age" className="form-control" />
                            {errors.age && <span>This field is required</span>}
                        </div>
                        <div className="col-md-4" >
                            <input {...register("exampleRequired", { required: true })} name="weight" placeholder="Enter your weight" className="form-control" />
                            {errors.weight && <span>This field is required</span>}
                        </div>
                    </div>
                    <br />
                    <div className="form-group text-end" >
                        <input className="btn" style={{backgroundColor: "#1cc7c1"}} type="submit" />
                    </div>
                </form>
                <button  className="btn btn-danger" onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
};

export default AppointmentForm;