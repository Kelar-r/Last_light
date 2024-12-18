import React from "react"
import "./Index.css"; // підключаємо файл з CSS

//import components
import Navbar from '../components/Navbar';
import ContactsComponents from '../components/ContactsComponents';
import Footer from '../components/Footer';


function Contacts() {
    return (
        <div className="page-container">
        
            <Navbar />
            
            <ContactsComponents />

            <Footer />
        </div>
      )
}

export default Contacts