import artifact1Image from './assets/images/artifact1.png';
import artifact2Image from './assets/images/artifact2.png';
import artifact3Image from './assets/images/artifact3.png';
import "./index.css"
export default function Test1(props){
    return(
        
        <header >
        <img id="headerImage" src={artifact1Image} alt="Ancient Pottery"/>
        <h1>Historical Artifacts Museum</h1>
        <p>Embark on a virtual journey to explore the world's most intriguing historical artifacts</p>
      </header>
    );
}