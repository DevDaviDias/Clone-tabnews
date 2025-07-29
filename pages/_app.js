import  "../styles/Global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Global({Component, pagesProps}){
  return <Component{...pagesProps}/>
}