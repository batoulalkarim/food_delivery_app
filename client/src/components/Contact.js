import React from 'react';

function Contact() {
    return(
        <div className='contactwrap'>
            <h1 className='animate-charcter'>Contact Us</h1>
            <div className="dropdown">
                <label htmlFor="pickone" className="pickone">Please choose an option:</label>
                <br />
                <div className="dropdown-content">
                    <ul className='centerul'>
                    <li><a href='/recommend'>Recommend an Organization</a></li><br />
                    </ul>
                    <ul className='centerul'>
                   <li> <a href="/review">Review your experience </a> </li>
                    </ul>
                </div>
            </div>
            <h2>Have a comment or complain? Contact us directly:</h2>
            <div className='contactInfo'>
            <p>Batoul Alkarim: <br />
            LinkedIn: <a href="https://www.linkedin.com/in/batoul-alkarim-421172108/" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/linkedin-shiny-icon-logo-5.png" width="30" alt="linkedin shiny icon logo" /></a>
            <br />Email: <a href="mailto:batoulalkarim1@gmail.com"><img src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-file-gmail-icon-svg-wikimedia-commons-0.png" width="35" alt="logo gmail png file gmail icon svg wikimedia commons" /></a>
            <br />
            <br />
            Phone: (720)-862-8063
            </p>
            </div>
            <h3>Are you a fan of our work? Follow us on social media!</h3>
            <div className="socialMedia">
              <a href="http://www.instagram.com/batoulalkarim"><img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" width="40" alt="logo ig" /></a>
              <a href="http://www.twitter.com/batoulalkarim"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-icon-png-logo-2.png" width="40" alt="twitter bird icon png logo" /></a>
              <a href="https://www.github.com/batoulalkarim" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" width="40" alt="512x512 logo github icon" /></a>
            </div>
            <h2>Have a comment or complain? Contact us directly:</h2>
            <p>Rodney Payamps: <br />
            LinkedIn: <a href="https://www.linkedin.com/in/rodney-payamps-83a018188/" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/linkedin-shiny-icon-logo-5.png" width="30" alt="linkedin shiny icon logo" /></a>
            <br />Email: <a href="mailto:hyperdracula@blondehousegroup.com"><img src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-file-gmail-icon-svg-wikimedia-commons-0.png" width="35" alt="logo gmail png file gmail icon svg wikimedia commons" /></a>
            <br />
            <br />
            Phone: (206)-636-7828
            </p>
            <h3>Are you a fan of our work? Follow us on social media!</h3>
            <div className="socialMedia">
              <a href="http://www.instagram.com/_hyperdracula_"><img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" width="40" alt="logo ig" /></a>
              <a href="https://www.github.com/RIP247" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" width="40" alt="512x512 logo github icon" /></a>
            </div>
        </div>
    )
}

export default Contact;