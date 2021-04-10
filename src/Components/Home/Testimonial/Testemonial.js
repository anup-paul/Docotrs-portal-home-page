import React from 'react';
import quote from '../../../images/quote.png';
import './Testemonial.css';
import wilson from '../../../images/Ellipse 1.png';
import ema from '../../../images/Ellipse 2.png';
import aliza from '../../../images/Ellipse 3.png';
import TestemonialInfo from '../TestemonialInfo/TestemonialInfo';


const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]


const Testemonial = () => {
    return (
        <section>
            <div className="d-flex justify-content-center">
                <div className="mt-5 w-75 d-flex justify-content-between ">
                    <div>
                        <h4 style={{ color: "#1CC7C1" }} ><b>Testimoial</b></h4>
                        <h1 style={{ color: "#3A4256" }}>Whats our patients <br /> says</h1>
                    </div>
                    <div>
                        <img style={{ height: "150px" }} className="img-fluid" src={quote} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex justify-content-center mt-5">
                    <div className="row w-75">
                        {
                            testimonialData.map(data => <TestemonialInfo data={data} ></TestemonialInfo>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testemonial;