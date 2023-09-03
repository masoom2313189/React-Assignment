import "./styles.css";

const styles = {
  heading: {
    fontSize: "2rem",
    letterSpacing: 2
  },
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  buttons: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  },
  inputs: {
    padding: 10
  }
};

export default function App() {
  return (
    <div className="App">
      <form style={styles.form}>
        <h3 style={styles.heading}>Sign Up</h3>
        <input style={styles.inputs} placeholder="Username" />
        <input style={styles.inputs} placeholder="Email" />
        <input style={styles.inputs} placeholder="Password" />
        <div style={styles.actions}>
          <button style={styles.buttons}>Cancel</button>
          <button style={styles.buttons}>Login</button>
        </div>
      </form>
    </div>
  );
}
