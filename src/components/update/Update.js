import './Update.scss';
import { UpdatesData } from './UpdatesData';

function Update() {
    return (
        <div className="updates">
            {UpdatesData.map((update, index) => {
                return (
                    <div className="update">
                        <img src={update.img} alt="Update Image" />
                        <div className="noti">
                            <div style={{ marginBottom: '0.5rem' }}>
                                <span>{update.name}</span>
                                <span>{update.noti}</span>
                            </div>
                            <span>
                                <b>{update.time}</b>
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Update;
