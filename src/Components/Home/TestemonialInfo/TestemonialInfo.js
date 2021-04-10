import React from 'react';
import './TestemonialInfo.css';

const TestemonialInfo = ({ data }) => {
    return (
        <div className="col-md-4 ">
            <div className=" card border border-4 shadow p-3 mb-5 bg-body rounded p-3">
                <div>
                    <p className="text-center text-secondary">{data.quote}</p>
                </div>
                <div style={{ height: "100px" }} className="d-flex align-items-center  justify-content-evenly">
                    <div>
                        <img style={{ height: "70px" }} src={data.img} alt="" />
                    </div>
                    <div>
                        <h6 style={{ color: "#1CC7C1" }} ><b>{data.name}</b></h6>
                        <h6>{data.from}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestemonialInfo;