import React from 'react';

const BlogInfo = ({ data }) => {
    return (
        <div className="col-md-4 mt-5 mb-5">
            <div className="shadow p-4 mb-5 bg-body rounded p-3">
                <div className="d-flex align-items-center justify-content-evenly mb-3" >
                    <div>
                        <img style={{height:"70px"}} src={data.authorImg} alt=""/>
                    </div>
                    <div>
                        <h6 style={{color:"#1CC7C1"}} ><b>{data.author}</b></h6>
                        <p>{data.date}</p>
                    </div>
                </div>
                <h5>{data.title}</h5>
                <p className="text-secondary">{data.description}</p>
            </div>
        </div>
    );
};

export default BlogInfo;