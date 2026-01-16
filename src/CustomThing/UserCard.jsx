import { Link } from "react-router";

const UserCard = ({ title, description, icon, link }) => {
  return (
    <Link to={link}>
      <div className="card bg-base-200 hover:bg-base-300 transition shadow-lg">
        <div className="card-body">
          <div className="text-3xl text-primary mb-3">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-base-content/70">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard