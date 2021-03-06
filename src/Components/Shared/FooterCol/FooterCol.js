import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3"  >
            <div className="my-5"  >
                <h6 className="mb-4" style={{ color: "#1cc7c1" }} >{props.menuTitle ? props.menuTitle : " "}</h6>
                <ul className="list-unstyled" >
                    {
                        props.menuItems.map((item, index) => <li key={index.item}><Link to={item.link} className="text-secondary" style={{ textDecoration: "none" }} > {item.name}  </Link></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default FooterCol;