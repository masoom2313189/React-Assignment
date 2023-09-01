// Complete the Form Component and export it

const Form = () => (
  <>
    <div>
      <form>
        {/* Create a h3, 2 inputs and 1 button here */}
        <h3>Login Page</h3>
        <input type="text" placeholder="YourName" value="name" required />
        <br />
        <br />
        <input type="email" placeholder="xyz@pqr.com" value="email" required />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  </>
);

export default Form;
