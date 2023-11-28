import Test1 from "./test"
import "./index.css"
import artifact1Image from './assets/images/artifact1.png';
import artifact2Image from './assets/images/artifact2.png';
import artifact3Image from './assets/images/artifact3.png';
export default function Onclick(props){
    const hundler=()=>{
      const image=document.getElementById("headerImage");
      if(image){
        image.src=props.image;
        image.classList.add("animate-header");
        setTimeout(()=>{
          image.classList.remove("animate-header")
        },2000);
    
      }
      }
     
    return(
        <div className="artifact-card"  onClick={hundler}>
          <img src={props.image} alt="Artifact" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
       
    );
}