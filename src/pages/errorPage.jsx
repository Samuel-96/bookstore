import { Link } from "react-router-dom";
import Meme from "../assets/meme.jpg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 m-10">
        <img className="h-96" src={Meme} alt="" />
      <h1 className="text-5xl font-robotoSlab">Esta página no existe</h1>
      <Link to="/" className="p-5 bg-lime-800">
        ¡Puedes volver a la página de inicio haciendo clic aquí!
      </Link>
    </div>
  );
};

export default ErrorPage;