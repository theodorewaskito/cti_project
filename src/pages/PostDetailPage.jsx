import React, { useEffect, useState } from 'react'
import Comment from '../components/Comment'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getPostId, setError, setLoading } from '../store/actions/postAction';

function PostDetailPage() {
  const dispatch = useDispatch()
  const {postId} = useParams()
  console.log(postId);
  const post  = useSelector(state => state.postState.post);

  useEffect(() => {
    dispatch(getPostId(postId))
  }, [])

  return (
    <div className="m-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title" style={{textAlign: "justify", textJustify: "inter-word"}}><b>Infit decipio compello tamquam asper arx vero quis demulceo pel aperiam sto voluptas titulus aspicio.</b></h5>
          <p class="card-text" style={{textAlign: "justify", textJustify: "inter-word", color: "grey"}}>Vesco aliquid cavus. Suppono cariosus autem. Desino stips accusamus. Totidem tergo convoco. Vado et minus. Tenetur acidus et. Textus ascisco vociferor. Depromo caute bene. Eum abbas claro. Decipio tempus bene. Trucido aqua cumque. Capillus caries carus. Est cunctatio attero. Ambulo contabesco uberrime. Qui animadverto ut. Ultra cunae amet. Animus territo conduco. Thalassinus quaerat qui. Adflicto advoco arto. Vinum adiuvo sumo.</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h4>Leave a comment</h4>
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "150px"}}></textarea>
          <label for="floatingTextarea2">Comments</label>
          <button type="submit" class="btn my-3" style={{backgroundColor: "#5386FE", color: "white"}}>Submit Comment</button>
        </div>
      </div>

      <div className="mt-4">
        <h4>Comments</h4>
        <div>
          <Comment/>
        </div>
      </div>


    </div>
  )
}

export default PostDetailPage
