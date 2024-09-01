import Link from "next/link";
import React from "react";

const PaginationData = () => {
  return (
    <div className="col-12">
      <div className="basic-pagination basic-pagination-2 text-center mt-20">
        <ul>
          <li><Link href="#"><i className="fas fa-chevron-left"></i></Link></li>
          <li><Link href="#">01</Link></li>
          <li><Link href="#">02</Link></li>
          <li><Link href="#">03</Link></li>
          <li><Link href="#"><i className="fas fa-ellipsis-h"></i></Link></li>
          <li><Link href="#"><i className="fas fa-chevron-right"></i></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default PaginationData;
