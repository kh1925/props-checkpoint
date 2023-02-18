import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div onClick={() => props.handleName(props.fullName)}>
      <h1 style={{ color: "blue" }}>{props.fullName}</h1>
      <h2>{props.bio}</h2>
      <h3 style={{ color: "white" }}>{props.profession}</h3>
      {props.children}
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Mr Unknown Stranger",
  profession: "سارح بالغنم",
};

Profile.propTypes = {
  fullName: PropTypes.string,
};

export default Profile;

/*

Objective
Use props to create a personalized profile page.

Instructions
The profile component gets data (fullName, bio, profession) as props,
and gets image as children props,
and the function handleName functions as a prop that sends an alert message with the name of the profile user.
Define the default props for Profile component. 
Use PropsType to check props.  
Use inline style.

*/
