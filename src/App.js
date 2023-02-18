import Profile from "./profile/profile";
import img from "./sheep.jpg";

const handleName = (name) => alert(name);
function App() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        backgroundColor: "lightseagreen",
        padding: 20,
      }}
    >
      <Profile
        fullName={undefined}
        bio="Simply the best web developer in Tunisia"
        profession="Web developer"
        handleName={handleName}
      >
        <img src={img} alt="a shepard with his sheeps" style={{ width: 300 }} />
      </Profile>
    </div>
  );
}

export default App;
