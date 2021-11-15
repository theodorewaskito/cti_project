import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom';
// import { loginHandle, setLoading, setError, setLogin} from '../store/action';
import Swal from 'sweetalert2'
import TodoCard from "../components/TodoCard";

export default () => { 

  return (
    <div className="m-5">
      <div className="mb-5">
        <h1>Todo</h1>
        <div>
          <button type="button" class="btn" style={{backgroundColor: "#5386FE", color: "white"}}>
            <i class="fas fa-plus-circle"></i>
            <span className="ms-2">Add</span>
          </button>
        </div>
      </div>
      <div class="row">
        <TodoCard/>
        {/* <div class="col-sm-6">
          <div class="card shadow-sm mb-5 bg-white rounded">
            <div class="card-body">
              <h5 class="card-title"><b> Ad talis addo placeat tricesimus corrupti solitudo.</b></h5>
              <p class="card-text">2021-12-03T00:00:00.000+05:30</p>
              <select class="form-select" aria-label="Default select example">
                <option selected className="text-center">--- Please select status ---</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
              <div className="d-flex justify-content-end mt-3">
                <a href="#" class="btn"><i class="fas fa-edit" style={{color: "orange"}}></i></a>
                <a href="#" class="btn "><i class="fas fa-trash-alt" style={{color: "red"}}></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card shadow-sm mb-5 bg-white rounded">
            <div class="card-body">
            <h5 class="card-title"><b>coding:</b></h5>
              <p class="card-text">2021-11-17T00:00:00.000+05:30</p>
              <select class="form-select" aria-label="Default select example">
                <option selected className="text-center">--- Please select status ---</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
              <div className="d-flex justify-content-end mt-3">
                <a href="#" class="btn"><i class="fas fa-edit" style={{color: "orange"}}></i></a>
                <a href="#" class="btn "><i class="fas fa-trash-alt" style={{color: "red"}}></i></a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="d-flex justify-content-center mt-5" style={{color: '#5386FE'}}>
        <nav aria-label="Page navigation example ">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}