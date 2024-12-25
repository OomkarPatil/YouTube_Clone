import propTypes from "prop-types";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";


const BackButton = ({label, href}) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link to={href}>
         {label}
      </Link>
    </Button>
  )
};

BackButton.propTypes = {
  label: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
};

export default BackButton;