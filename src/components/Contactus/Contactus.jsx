import React, { useState } from 'react';
import './Contactus.css';
import countries from '../../assets/Countriesdata/countries';
import { Link } from 'react-router-dom';
import mainIMage from '../../assets/Images/ContactUsImg/ContactUsImg.avif';
import worldSvg from '../../assets/svgs/World.svg';

function Contactus() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [phoneCode, setPhoneCode] = useState('');

    // Form input states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Error states
    const [errors, setErrors] = useState({});

    // Toggle dropdown visibility
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    // Handle country selection
    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setPhoneCode(country.code);
        setDropdownOpen(false);
    };

    const handleCodeInput = (e) => {
        const code = e.target.value;
        setPhoneCode(code);
        const foundCountry = countries.find(country => country.code === code);
        if (foundCountry) setSelectedCountry(foundCountry);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!email.includes('@gmail.com')) {
            newErrors.email = "Email must be in correct format like name@gmail.com";
        }


        const digitsOnly = phoneCode.replace('+', '');

        if (isNaN(digitsOnly)) {
            newErrors.phone = "Phone number must contain only numbers after '+'";
        } else if (digitsOnly.length < 10) {
        newErrors.phone = "Phone number must be at least 10 digits long";
        }



        if (!message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert('Form submitted successfully!');
            // Clear fields if needed
            setName('');
            setEmail('');
            setPhoneCode('');
            setSelectedCountry(null);
            setMessage('');
            setErrors({});

        }
    };

    return (
        <div className='ContactUs'>
            <div className='ContactLeft'>
                <img src={mainIMage} />
            </div>
            <div className='ContactRight'>
                <div className='contactRightUpper'>
                    <p className='upperHead'>Get in Touch</p>
                    <p className='upperPara'>Have a question or need assistance? Feel free to reach out to us. Our team is here to help you find the ideal pair of shoes that suit your needs.</p>
                </div>
                <div className='contactRightLower'>
                    <form className='ContactForm' onSubmit={handleSubmit}>
                        <div className='ContactName'>
                            <label className='LabelName'>Name *</label>
                            <input className='TextName' type='text' value={name} onChange={e => setName(e.target.value)} />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className='ContactName'>
                            <label className='LabelName'>Email *</label>
                            <input className='TextName' type='text' value={email} onChange={e => setEmail(e.target.value)} />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className='ContactName'>
                            <label className='LabelName'>Phone </label>
                            <div className='InputWrapper'>
                                {selectedCountry ? (
                                    <img src={selectedCountry.flag} alt={selectedCountry.name} width="20" />
                                ) : (
                                    <img className='WorldSvg' src={worldSvg} alt="World" width="20" />
                                )}
                                <button className="DropDownButton" type='button' onClick={toggleDropdown}>
                                    <img className='dropdownSvg' src={isDropdownOpen ? "src/assets/svgs/1.svg" : "src/assets/svgs/2.svg"} alt="Dropdown Toggle" width="20" />
                                </button>
                                <input className='CountryInput' type='text' value={phoneCode} onChange={handleCodeInput} />
                            </div>
                            {errors.phone && <span className="error">{errors.phone}</span>}
                            {isDropdownOpen && (
                                <ul className='Dropdown'>
                                    {countries.map(country => (
                                        <li key={country.code} onClick={() => handleSelectCountry(country)}>
                                            <img src={country.flag} alt={country.name} width="20" /> {country.name} ({country.code})
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='ContactName'>
                            <label className='LabelName'>Message </label>
                            <input className='TextName' type='text' value={message} onChange={e => setMessage(e.target.value)} />
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                       <div className='SubmitBtnDiv'><button className='SubmitBtn' type='submit'>Submit</button></div> 
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contactus;
