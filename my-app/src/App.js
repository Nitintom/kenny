import "./App.css";
import AboutUs from "./components/AboutUs";
import ClientelsPage from "./components/ClientelsPage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Frontpage from "./components/Frontpage";
import Header from "./components/Header";
import ServicePage from "./components/ServicePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resources from "./components/Resources";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import AluminiumPage from "./components/AluminiumPage";
import UPVCBenefitsPage from "./components/UPVCBenefitsPage";
import ProductPage from "./components/ProductPage";
import AluminiumProductDetails from "./components/AluminiumProductDetails";
import UpvcProductDetails from "./components/UpvcProductDetails";
import ContactForm from "./components/ContactForm";
import WhatsAppChat from "./components/WhatsAppChat";


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
              
          <Routes>

            <Route path="/" element={<Frontpage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/ClientelsPage" element={<ClientelsPage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/UPVCBenefitsPage" element={<UPVCBenefitsPage/>} />
            <Route path="/Resources" element={<Resources/>} />
            <Route path="/AluminiumPage" element={<AluminiumPage/>} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
            <Route path="/TermsOfUse" element={<TermsOfUse/>} />
            <Route path="/ProductPage" element={<ProductPage/>} />
            <Route path="/AluminiumProductDetails" element={<AluminiumProductDetails/>} />
            <Route path="/UpvcProductDetails" element={<UpvcProductDetails/>} />
            <Route path="/ContactForm" element={<ContactForm />} />
            {/* <Route path="/Product/Aluminium" element={<ContactUs />} /> */}

          </Routes>
<WhatsAppChat/>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
