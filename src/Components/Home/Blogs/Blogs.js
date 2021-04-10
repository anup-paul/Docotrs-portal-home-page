import React from 'react';
import wilson from '../../../images/Ellipse 1.png'
import BlogInfo from '../BlogInfo/BlogInfo';


const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="mt-5 pt-5">
            <div className="text-center">
                <h6><b style={{ color: "#1CC7C1" }} >OUR BLOG</b></h6>
                <h1 style={{ color: "#41495C" }} >From Our Blog News</h1>
            </div>
            <div className="d-flex justify-content-center mt-5" >
                <div className="row w-75">
                    {
                        blogData.map(data => <BlogInfo data = {data} ></BlogInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;