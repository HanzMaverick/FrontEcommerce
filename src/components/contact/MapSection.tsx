import React from 'react';

const MapSection = () => {
    return (
        <section className="map-area">
            <div className="map2-wrapper">
                <div id="contact-map" className="map">
                    <div className="contact-map">
                        <div className="gm-style">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14562.957063456197!2d90.69413688654156!3d24.145793130695765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375682765bb23567%3A0x7f5b0d890f8dffbd!2sMonohardi!5e0!3m2!1sen!2sbd!4v1629787582901!5m2!1sen!2sbd"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;