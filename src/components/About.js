import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <h3 className="text-center mt-4 mb-5">About Author</h3>
      <div>
        <img
          src="./author.jpg"
          className="img-fluid rounded-circle"
          alt="Author"
          style={{ height: "10rem" }}
        ></img>
        <div className="mt-5 pb-4 px-3 py-2 border-top border-bottom border-warning rounded">
          <div className="text-secondary">Developed by :</div>
          <div className="mx-3 fw-bolder">Muntasir Alam</div>
          <div className="mx-3">Software Engineer</div>
          <div className="mx-3">
            E-Mail:
            <a
              className="mx-2"
              href="mailto:muntasiralam9993@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              muntasiralam9993@gmail.com
            </a>
          </div>
          <div className="mx-3">
            Web:
            <a
              className="mx-2"
              href="http://m9993.github.io/me"
              target="_blank"
              rel="noreferrer"
            >
              http://m9993.github.io/me
            </a>
          </div>
          <div className="mx-3">
            © Copyright <span>{new Date().getFullYear()}</span> by
            <a
              className="mx-2"
              href="http://m9993.github.io/me"
              target="_blank"
              rel="noreferrer"
            >
              Muntasir Alam
            </a>
          </div>
        </div>
        <div className="px-3 py-2 mt-3 border-bottom border-warning rounded">
          <span>Developed with : </span>
          <ul className="px-6 list-disc">
            <li>React JS</li>
            <li>Bootstrap v5.0</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
