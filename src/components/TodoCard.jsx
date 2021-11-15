import React from 'react'

function TodoCard() {
  function convDate(date) {
    return new Date(date)
  }

  return (
    <div class="col-sm-6">
      <div class="card shadow-sm mb-5 bg-white rounded">
        <div class="card-body">
          <h5 class="card-title"><b> Ad talis addo placeat tricesimus corrupti solitudo.</b></h5>
          <p class="card-text">{convDate("2021-12-03T00:00:00.000+05:30").toDateString()}</p>
          <select class="form-select" aria-label="Default select example">
            <option selected className="text-center">--- Please select status ---</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <div className="d-flex justify-content-end mt-3">
            <a href="#" class="mt-3" style={{backgroundColor: "red", padding: "5px 12px", borderRadius: "5px"}}><i class="fas fa-trash-alt" style={{color: "white"}}></i></a>
          </div>
        </div>
      </div>
    </div>
  // <div class="col-sm-6">
  //   <div class="card shadow-sm mb-5 bg-white rounded">
  //     <div class="card-body">
  //     <h5 class="card-title"><b>coding:</b></h5>
  //       <p class="card-text">2021-11-17T00:00:00.000+05:30</p>
  //       <select class="form-select" aria-label="Default select example">
  //         <option selected className="text-center">--- Please select status ---</option>
  //         <option value="pending">Pending</option>
  //         <option value="completed">Completed</option>
  //       </select>
  //       <div className="d-flex justify-content-end mt-3">
  //         <a href="#" class="btn"><i class="fas fa-edit" style={{color: "orange"}}></i></a>
  //         <a href="#" class="btn "><i class="fas fa-trash-alt" style={{color: "red"}}></i></a>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  
  )
}

export default TodoCard
