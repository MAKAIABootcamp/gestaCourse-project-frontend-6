import "../Page404/Page404.css";

const Page404 = () => {
  return (
    <main className="page404">
      <img
        className="page404__dog-image"
        src="https://res.cloudinary.com/dbktnqag9/image/upload/v1695872733/doguito404_g0t5qb.svg"
        alt="Doguito"
      />
      <p className="page404__notfound-text">Esta página no existe</p>
    </main>
  );
};

export default Page404;