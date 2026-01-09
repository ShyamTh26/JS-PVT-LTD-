import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import "./css/Breadcrumb.css";

const Breadcrumbs = ({ items }) => {
  return (
    <div className='crumb'>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {items.map((item, index) => (
            <li key={index} className="breadcrumb-item">
                {item.link ? (
                <Link to={item.link}>{item.label}</Link>
                ) : (
                item.label
                )}
                {index < items.length - 1 && ' > '} 
            </li>
            ))}
        </ol>
        </nav>
    </div>
  );
};

export default Breadcrumbs;