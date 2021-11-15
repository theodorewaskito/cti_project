import React from 'react'

function PostCard() {

  var yourString = "Vesco aliquid cavus. Suppono cariosus autem. Desino stips accusamus. Totidem tergo convoco. Vado et minus. Tenetur acidus et. Textus ascisco vociferor. Depromo caute bene. Eum abbas claro. Decipio tempus bene. Trucido aqua cumque. Capillus caries carus. Est cunctatio attero. Ambulo contabesco uberrime. Qui animadverto ut. Ultra cunae amet. Animus territo conduco. Thalassinus quaerat qui. Adflicto advoco arto. Vinum adiuvo sumo."; //replace with your string.
  var maxLength = 300 // maximum number of characters to extract

  function trimmedString(string) {
    let word = ''
    if (string.length < maxLength) {
      return string
    } else {
      return string.substr(0, maxLength) + '...';
    }
  }

  return (
    <div class="col-sm-12">
      <div class="card shadow-sm mb-2 bg-white rounded">
        <div class="card-body">
          <p class="card-title"  style={{textAlign: "justify", textJustify: "inter-word"}}><b>Infit decipio compello tamquam asper arx vero quis demulceo pel aperiam sto voluptas titulus aspicio.</b></p>
          <p  class="card-text" style={{textAlign: "justify", textJustify: "inter-word", color: "grey"}}>{trimmedString(yourString)}</p>
          <div className="d-flex justify-content-end">
            <a href="#" class="stretched-link"><i class="fas fa-info-circle" style={{color: "#5386FE"}}></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
