const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <input className="border m-4 p-2" type="text" placeholder="name" />
        <input
          className="border m-4 p-2"
          type="text"
          placeholder="email address"
        />
        <button className="border m-4 p-2 bg-gray-300 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
