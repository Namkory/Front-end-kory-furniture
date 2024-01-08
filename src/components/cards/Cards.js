import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Cards.scss';
import { CardsData } from './CardsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cards() {
    return (
        <div className="cards">
            {CardsData.map((card, index) => {
                return (
                    <div
                        key={index}
                        className="parentContainer"
                        style={{ background: card.color.backGround, boxShadow: card.color.boxShadow }}
                    >
                        <div className="cards-left">
                            <CircularProgressbar value={card.barValue} text={`${card.barValue}%`} strokeWidth={5} />
                            <h5>{card.title}</h5>
                        </div>
                        <div className="cards-right">
                            <FontAwesomeIcon icon={card.png} className="cards-right-icon" />
                            <h3>{`$${card.value}`}</h3>
                            <p>Last 24 hours</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;
