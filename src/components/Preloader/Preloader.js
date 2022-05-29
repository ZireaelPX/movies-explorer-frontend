import './Preloader.css';

const Preloader = ({ preloaderVisible }) => {
    return (
        <div className={`preloader ${!preloaderVisible && 'preloader_hidden'}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    );
};

export default Preloader;
