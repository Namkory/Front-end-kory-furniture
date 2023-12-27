import './News.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import images from '../../../asset/image/index';
import { dataNews } from './data';
import Card from 'react-bootstrap/Card';

function News() {
    return (
        <div className="news d-block">
            <div className="container">
                <div className="news-header">
                    <h1>CATEGORY ARCHIVES: TIN TỨC</h1>
                </div>
                <div className="news-content">
                    <div className="news-content-left">
                        <div className="news-content-left-search">
                            <input type="text" placeholder="Tìm kiếm..." />
                            <div className="news-content-left-search-btn">
                                <FontAwesomeIcon icon={faSearch} className="icon" />
                            </div>
                        </div>
                        <div className="news-content-left-title">
                            <p>BÀI VIẾT MỚI</p>
                        </div>
                        <div className="news-content-left-content">
                            <div className="content-item">
                                <img src={images.news01} alt="new avatar" className="avatar-title" />
                                <p>
                                    Duis luctus elit nisi, et cursus magna pellentesque et cursus magna pellentesque
                                    non.
                                </p>
                            </div>
                            <div className="content-item">
                                <img src={images.news02} alt="new avatar" className="avatar-title" />
                                <p>Mauris tristique pretium tempus. Vestibulum et accumsan magna.</p>
                            </div>
                            <div className="content-item">
                                <img src={images.news03} alt="new avatar" className="avatar-title" />
                                <p>
                                    Aliquam placerat nisl nec imperdiet vehicula. Phasellus tempus ligula id orci
                                    finibus feugiat.
                                </p>
                            </div>
                            <div className="content-item">
                                <img src={images.news04} alt="new avatar" className="avatar-title" />
                                <p>
                                    In rutrum tempus purus, ut euismod dui facilisis ac. Fusce semper dignissim diam a
                                    egestas.
                                </p>
                            </div>
                            <div className="content-item" style={{ border: 'none' }}>
                                <img src={images.news05} alt="new avatar" className="avatar-title" />
                                <p>Donec tempus eu ligula sed blandit. Vivamus vel enim ac quam iaculis rutrum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="news-content-right">
                        <div className="row">
                            {dataNews.map((item, index) => {
                                return (
                                    <Card key={index} className="card mb-3 md-3">
                                        <Card.Img variant="top" className="card-img" src={item.linkImg} />
                                        <Card.Body>
                                            <Card.Title className="card-title">{item.title}</Card.Title>
                                            <Card.Text className="card-content">{item.content}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
