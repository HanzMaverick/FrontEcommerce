import Link from 'next/link';
import React from 'react';

const CopyRightArea = () => {
    return (
        <div className="footer-bottom-area">
            <div className="row">
                <div className="col-xl-12">
                    <div className="copyright text-center">
                        <p>
                            Copyright <i className='fas fa-copyright'></i> 2023 <Link
                                href="#">Zomata</Link>. All
                            Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CopyRightArea;