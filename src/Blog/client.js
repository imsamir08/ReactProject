import React from 'react'
import { FaHome, FaSearch } from 'react-icons/fa';
const client = () => {
  return (

    <>
      <div className='header'>
        <h1 className='header-logo'>CodeWithSamir</h1>
        <div className='header-link'>
          <a href="#" className='link'>Home</a>
          <a href="#" className='link'>Courses</a>
          <a href="#" className='link'>Tutorial</a>
          <a href="#" className='link'>Contact</a>
          <a href="#" className='link'>Blog</a>
          <a href="#" className='link'>Notes</a>
        </div>

        <div className="button">
          <button className='btn'>Login</button>
          <button className='btn'>Sign Up</button>
        </div>
      </div>

      <div className='subject'>

        <div className='home-icon'>
          <FaHome size={25} color="blue" />
        </div>
        <div className='subject-container'>
        <div className='subject-list'>
          <a href="#" className='course'>HTML</a>
          <a href="#" className='course'>CSS</a>
          <a href="#" className='course'>JS</a>
          <a href="#" className='course'>PYTHON</a>
          <a href="#" className='course'>JAVA</a>
          <a href="#" className='course'>REACT</a>
          <a href="#" className='course'>CPP</a>
        </div>

        <div className='search'>
          <input type="text" className="search-input" placeholder='Search Here...' />

          <FaSearch size={25} color="blue" className='search-btn' />
        </div>
        </div>
      </div>

      <div className='text'>
        <div className='text-content'>
        <h1>Welcome to <span>CodeWithSamir</span></h1>

        <p>
          Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.
        </p>

        <p>Learn <span>DSA JAVA ML CPP</span></p>

        <div className="texting-button">
          <button className='texting-btn'>Free Courses</button>
          <button className='texting-btn'>Explore Blog</button>
        </div>
        </div>
        <div className="text-img" >
          <img src="back1.jpg" width="700px" height="400px"/>
        </div>

      </div>

    </>
  )
}

export default client
