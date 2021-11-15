import React from 'react'

function Comment() {
  return (
    <div>
        <div class="card mb-1">
          <div class="card-body">
            
            <h5 class="card-title" style={{color: 'grey'}}>
              <i class="fas fa-user-circle me-2"></i>
              <b>John Cena</b>
            </h5>
            <p>Reiciendis et nesciunt. In facere ut. Aut veniam qui. Eos sit minima.</p>
            <div className="d-flex justify-content-end mt-3">
              <a href="#" class="" style={{padding: "5px 15px"}}><i class="fas fa-edit" style={{color: "orange"}}></i></a>
              <a href="#" class="" style={{padding: "5px 15px"}}><i class="fas fa-trash-alt" style={{color: "red"}}></i></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Comment
