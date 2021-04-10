import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section>
            <div className="container">
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <div className="row w-75 mt-5 mb-5" >
                        <div className="col-md-5" >
                            <img className="img-fluid" src={featured} alt="" />
                        </div>
                        <div className="col-md-7 align-self-center " >
                            <h1>Exceptional Dental <br /> Care, on your Term</h1>
                            <p className=" text-secondary mt-5 mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore dolorum quae, dignissimos aperiam dolor sunt dolore molestias vel incidunt quis. Quia sapiente, odio, veniam repellendus magnam asperiores excepturi modi natus pariatur rerum aperiam, quibusdam vitae quas laborum est officia?
                            </p>
                            <button className="btn btn-primary" >Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;