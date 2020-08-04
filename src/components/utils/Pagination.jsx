import React from "react";
import s from './pagination.module.scss'

export default function Pagination({ array, handler, current }) {
  return (
    <nav aria-label="Page navigation example" className={`d-flex`}>
      <span className="page-item" onClick={() => handler("prev")}>
        <a className="page-link" href="#">
          Previous
        </a>
      </span>
        <ul className={`pagination ${s.pagination}`}>
        {array.map((page, i) => (
          <li
            key={i}
            className={`${current === i + 1 && "active"} page-item`}
            onClick={() => handler(i + 1)}
          >
            <a className="page-link" href="#">
              {i + 1}
            </a>
          </li>
        ))}
      </ul>
      <span className="page-item" onClick={() => handler("next")}>
        <a className="page-link" href="#">
          Next
        </a>
      </span>
    </nav>
  );
}
