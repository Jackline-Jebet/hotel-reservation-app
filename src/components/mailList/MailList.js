import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up now and we'll send you amazing deals of your choice</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList;