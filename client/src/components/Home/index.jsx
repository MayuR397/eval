import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { useState, useEffect } from "react";

import SignOutContainer from '../../containers/SignOutContainer';

const Home = ({ user }) => {
  const [teacher,setTeacher]= useState([]);

  useEffect(() => {
    axios.get(" https://teachermang.herokuapp.com/teacher").then((res) => {
      console.log("teacher",res.data);
      setTeacher([...res.data]);
    });
  }, []);

  return (
    <div>
      <div className="teacherData">
                {teacher
                  .map((el) => {
                    return (
                      <div className="teacherData-container" key={el._id}>
                        <img src={el.image} alt="teacher image" />
                        <div className="teacherData-details">
                          <h3>Teacher Name:-{el.name}</h3>
                          <p>Age:-{el.age}</p>
                          <p>Gender:-{el.gender}</p>

                        </div>
                      </div>
                    );
                  })}
                  
      </div>
      <SignOutContainer />


    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Home;
