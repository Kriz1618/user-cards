import Link from "next/link";

const Error = () => {
  return (
    <div className="container">
      <div>
        <h1>Oops...</h1>
        <p>404 page not found</p>
        <Link href="/">
          <a className="button">Back to home</a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
