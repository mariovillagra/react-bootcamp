import PropTypes from "prop-types";
import Link from "next/link";
const GoToPage = props => (
  <div>
    <Link href={props.toPage}>
      <button>{`Go to ${props.name}`}</button>
    </Link>
  </div>
);

GoToPage.prototype = {
  toPage: PropTypes.string,
  name: PropTypes.string
};

export default GoToPage;
