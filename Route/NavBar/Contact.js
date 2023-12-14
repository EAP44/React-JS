function Contact() {
  return (
    <div className="container shadow-sm mt-5 p-5 border">
      <h1 className="text-center">Contact</h1>
      <form>
        <input type="text" className="form-control mt-5" placeholder="Name" />
        <input type="text" className="form-control mt-5" placeholder="Email" />
        <textarea
          className="form-control mt-5"
          placeholder="Message"
        ></textarea>

        <button type="button" class="btn btn-outline-secondary mt-5">
            send
        </button>
      </form>
    </div>
  );
}
export default Contact;
