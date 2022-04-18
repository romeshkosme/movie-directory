import "../Assests/Styles/Footer.css";

function Footer() {
  const date = new Date();
  return (
    <div className="Footer">
      <p>&copy; {date.getFullYear()} MovLib</p>
    </div>
  )
}

export default Footer