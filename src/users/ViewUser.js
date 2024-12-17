import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function ViewUser() {
  const [user,setUsers]=useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });
  const {id} = useParams();
  useEffect(() => {
    loadUser();
  }, [])
  const loadUser=async() => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUsers(result.data);
  }

   return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center mb-4"> User Information</h2>
          <div className="card">
            <div className="card-header">
                Details of user ID : {user.id} 
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Name: {user.name} </b>
                    </li>
                    <li className="list-group-item">
                        <b> UserName: {user.username}</b>
                    </li>
                    <li className="list-group-item">
                        <b>Email: {user.email}</b>
                    </li>
                </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>Back to Home </Link>
        </div>
      </div>
    </div>
  );
}
