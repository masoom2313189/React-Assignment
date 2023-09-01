import "./styles.css";

export const Card = ({ name, about }) => (
  <div className="card">
    <h3>Name: {name}</h3>
    <span>About: {about}</span>
  </div>
);

export default function App() {
  return <Card name="Masoom." about="Hii!, My name is Masoom Rizvi." />;
}
