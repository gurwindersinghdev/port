"use client";
import Image from "next/image";

const Header = () => {
  return (
    <section className="header">
      <Image src="/pf.png" alt="Gurwinder Singh" width={270} height={270} />

      <div className="header__content">
        <h1>Hi, I'm Gurwinder Singh</h1>
        <p>Blockchain Developer</p>
        <button
          className="button"
          onClick={() =>
            (window.location.href =
              "https://mail.google.com/mail/?view=cm&fs=1&to=gurwindersingh00064@gmail.com")
          }
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Header;
