import React from 'react'
// import loadingImage from '../images/Ajux_loader.gif'
import ReactLoading from 'react-loading';

function Loading() {
  return (
    <div>
      <div style={{height: "200px"}}></div>     
      <div class="d-flex justify-content-center">
        <ReactLoading type={"spin"} color={"#FE5320"} height={'5%'} width={'5%'} />
      </div>
    </div>

  )
}

export default Loading
