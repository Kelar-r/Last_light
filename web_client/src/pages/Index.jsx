import React from "react"
import "./Index.css"; // підключаємо файл з CSS

//import components
import Navbar from '../components/Navbar';
import Header from "../components/index/Header";
import SchoolAdvantages from "../components/index/SchoolAdvantages";
import Footer from '../components/Footer';


function Index() {
    return (
        <div className="page-container">
        
            <Navbar />
            
            <Header />
            <SchoolAdvantages />

            <Footer />
        </div>
      )
}

export default Index