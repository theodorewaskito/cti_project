import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function PostCard({ post }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // var yourString = "Vesco aliquid cavus. Suppono cariosus autem. Desino stips accusamus. Totidem tergo convoco. Vado et minus. Tenetur acidus et. Textus ascisco vociferor. Depromo caute bene. Eum abbas claro. Decipio tempus bene. Trucido aqua cumque. Capillus caries carus. Est cunctatio attero. Ambulo contabesco uberrime. Qui animadverto ut. Ultra cunae amet. Animus territo conduco. Thalassinus quaerat qui. Adflicto advoco arto. Vinum adiuvo sumo."; //replace with your string.
  var maxLength = 300 // maximum number of characters to extract

  function postDetail(id) {
    navigate(`/post/${id}`)
  }

  function trimmedString(string) {
    if (string.length < maxLength) {
      return string
    } else {
      return string.substr(0, maxLength) + '...';
    }
  }

  return (
    <div class="col-sm-12">
      <div class="card shadow-sm mb-3 bg-white rounded border-dark">
        <div class="card-body">
          <p class="card-title" style={{textAlign: "justify", textJustify: "inter-word"}}><b>{post.title}</b></p>
          <p  class="card-text" style={{textAlign: "justify", textJustify: "inter-word", color: "grey"}}>{trimmedString(post.body)}</p>
          <div className="d-flex justify-content-end">
            <button
              onClick={() => postDetail(post.id)}
              class="stretched-link btn" >
              <p style={{fontSize: "15px", color: "gray"}}>Read more...</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
