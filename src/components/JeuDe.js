import React from "react";
export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }
  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    let c = this.state.compteur + 1;
    let fin = valeur == this.props.cache ? true : false;
    this.setState({ face: valeur, compteur: c, fin: fin });
  }
  getImage() {
    let image = "images/vide.png";
    switch (this.state.face) {
      case 1:
        image = "images/face1.png";
        break;
      case 2:
        image = "images/face2.png";
        break;
      case 3:
        image = "images/face3.png";
        break;
      case 4:
        image = "images/face4.png";
        break;
      case 5:
        image = "images/face5.png";
        break;
      case 6:
        image = "images/face6.png";
        break;
    }

    return image;
  }
  initialiser(){
    this.props.initialiser()
    this.setState({ face:null, compteur: 0, fin: false });
  }
  render() {
    const styleImage = { width: "60px", height: "60px" };
    return (
      <div className="container">
        <h1 className="title"> Jeu de Dé Joueur 2</h1>
        
        <img src="images/Dé.PNG" />
        <h4>face:{this.state.face}</h4>
        <img src={this.getImage()} style={styleImage} />
        <h2>nombre d'essais:{this.state.compteur}</h2>
        { !this.state.fin && <button onClick={() => this.jouer()}>lancer...</button>}
       { this.state.fin && <p>Bravo vous avez trouvez la face cachée.....</p>}
       {this.state.fin && <button onClick={() => this.initialiser()}>Initialiser</button>}
        
      </div>
    );
  }
}
