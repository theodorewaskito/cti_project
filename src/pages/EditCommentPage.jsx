import React from 'react'

function EditCommentPage() {
  return (
    <div class="d-flex justify-content-center m-4">
      <div class="col-7">
        <div class="my-4">
          <h3>Edit Comment</h3>
        </div>
        <form class="my-4" 
          // onSubmit={submitLogin}
        >
          <div class="mb-3">
            <label for="title" class="form-label">Comment</label>
            <input type="email" class="form-control" id="title" aria-describedby="emailHelp"/>
          </div>
          <button type="submit" class="btn my-3" style={{backgroundColor: "#5386FE", color: "white", width: "100%"}}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditCommentPage
