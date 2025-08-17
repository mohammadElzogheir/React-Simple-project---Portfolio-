import { useState } from "react";
function Contact(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [msg,setMsg] = useState("");
  const submit=(e)=>{ e.preventDefault(); alert(`Thanks ${name}! I will reply to ${email}.`); };
  return (
    <section id="contact" className="container py-5">
      <h2 className="mb-3">Contact Us</h2>
      <form className="row g-3" onSubmit={submit}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" className="form-control" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="email" />
        </div>
        <div className="col-12">
          <label htmlFor="msg" className="form-label">Message</label>
          <textarea id="msg" className="form-control" rows="4" value={msg} onChange={e=>setMsg(e.target.value)} required></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </section>
  );
}
export default Contact;
