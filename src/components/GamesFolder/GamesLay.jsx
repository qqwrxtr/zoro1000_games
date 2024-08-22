import GamesBlock from "../GamesBlock/GamesBlock";
import "./GamesLay.css"

const Games = () => {
    return ( 
        <div className="container py-5 bg_games">
            <div className="row d-flex mx-5 justify-content-center" style={{rowGap:"65px",columnGap:"5px"}}>
                <GamesBlock/>
            </div>
        </div>
     );
}
 
export default Games;