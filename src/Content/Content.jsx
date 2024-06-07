// import "../Styles/main.css"
import '../Content/Content.css';
import home from "../Images/home.png"




const Content = () => {

  return (
 
    //   <div className="background-video-container">
    //     <video
    //       src="https://simplio.io/images/home/simplio-intro-vid.mp4"
    //       loop
    //       autoPlay
    //       muted
    //       playsInline
    //       className="background-video"></video>
     <div className="two-column-section">
 
      <div className="text-column">
      <h1 className="title">Hapesira me e dashur e</h1>
        <span className="second-line">4-putrosheve tuaj</span>
        <p className="description"> 
        Argetohu dhe informohu me ne! </p>
      </div>
      <div className="image-column">
        <img src={home} alt="Dog" className="image" />
      </div>
    </div>
  );
}

export default Content;