import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:"500px"}} className="row d-flex align-items-center " >
            <div className = "col-md-5 offset-md-1" >
                <h1 style={{color:"#3A4256"}} >Your new smile <br/> starts here</h1>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque id nulla at. Temporibus cumque itaque est sapiente praesentium, iste inventore?</p>
                <button className="btn" style={{background:"linear-gradient(#14D1D0, #E2FAFA)"}} >GET APPOINTMENT</button>
            </div>
            <div className = "col-md-5" >
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;