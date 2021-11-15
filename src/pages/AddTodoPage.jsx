import React from 'react'

function AddTodoPage() {
  return (
    <div class="d-flex justify-content-center m-4">
      <div class="col-7">
        <div class="my-4">
          <h3>Add Todo</h3>
        </div>
        <form class="my-4" 
          // onSubmit={submitLogin}
        >
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="email" class="form-control" id="title" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <label for="due_on" class="form-label">Due On</label>
            <input type="date" class="form-control" id="due_on"/>
          </div>
          <div class="mb-3">
              <label class="form-label">Status</label>
              <select class="form-select" aria-label="Default select example">
                <option selected className="text-center">--- Please select status ---</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          <button type="submit" class="btn my-3" style={{backgroundColor: "#5386FE", color: "white", width: "100%"}}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddTodoPage
