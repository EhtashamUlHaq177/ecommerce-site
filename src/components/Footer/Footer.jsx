import React from 'react'
import './Footer.css'

function Footer  ()  {
  return (
    <div className='Footer'>
       <div className='FooterTop'>

            <div className='Name'>
                <div className='NameText'>We Server</div>
                <div className='NameLogo'>
                    <img className='LogoInsta' src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_35,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"/>

                    <img className='LogoFb' src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_35,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0fdef751204647a3bbd7eaa2827ed4f9.png"/>

                    <img className='LogoTikTok' src='https://static.wixstatic.com/media/11062b_6e7994bdd94b41178720ff1641a0f323~mv2.png/v1/fill/w_35,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6e7994bdd94b41178720ff1641a0f323~mv2.png'/>

                </div>
            </div>
            <div className='About'>
                <div className='AboutPhone'>+92-300-0000000</div>
                <div className='AboutEmail'>info@WeServe.com</div>
                <div className='AboutAddress'><p>Islamabad, Pakistan</p></div>
            </div>  
    
            <div className='Documentation'>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Accessbility Statement</li>
                    <li>Shipping Statement</li>
                    <li>Terms & Conditions</li>
                    <li>Refund Policy</li>
                </ul>
            </div>           
            <div className='Connect'>
                <p className='ConnectHead'>Stay Connected</p>
                <p className='ConnectSubscribe'>Subscribe</p>
                <input className='ConnectInput' type='text'/>
                <div className='ConnectApprove'>
                    <input type='checkbox' className='ConnectApproveChechBox'/>
                    <p className='ConnectApprovePara'>I agree to the terms & conditions *</p>
                    <button className='ConnectBtn'>Join</button>
                </div>
                
            </div>

       </div>
       <div className='FooterBottom'>
          <p>© 2035 by WeServe. Powered and secured by WeServe</p>
       </div>
    </div>
  )
}

export default Footer;
