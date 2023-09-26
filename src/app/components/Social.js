import Link from "next/link";

const Social = () => {
  return (
    <div className="social">
      <h2>Socials</h2>

      <button
        className="button"
        onClick={() =>
          (window.location.href =
            "https://mail.google.com/mail/?view=cm&fs=1&to=gurwindersinghdev8@gmail.com")
        }
      >
        gurwindersingh00064@gmail.com
      </button>
      <Link
        href="https://twitter.com/guri_developer"
        target="_blank"
        className="button"
      >
        Twitter
      </Link>
      <Link
        href="https://www.linkedin.com/in/gurwinder-singh-12677a203/"
        target="_blank"
        className="button"
      >
        LinkedIn
      </Link>

      <Link
        href="https://www.youtube.com/@Gsdeveloper33/featured"
        target="_blank"
        className="button"
      >
        Youtube
      </Link>
    </div>
  );
};

export default Social;
