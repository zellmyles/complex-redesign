import React from 'react';
import '../css/footer.css'
import { SocialIcon } from 'react-social-icons';
class Footer extends React.Component {
    render() {
        return (
            <div>
            <footer className="mainFooter">
                <img className="footerLogo" src="./imgs/complex_nbiphu.jpg" alt="COMPLEX"></img>
                <p className="copyRight">©COMPLEX</p>
                    <SocialIcon url="https://www.facebook.com/" className="facebook" />
                    <SocialIcon url="http://twitter.com/" className="twitter" />
                    <SocialIcon url="https://www.instagram.com/" className="instagram" />
                    <SocialIcon url="https://www.youtube.com/" className="youtube" />
                <div className="footerForm">
                        <form>
                            <h3>Contact Us</h3>
                            <label className="nameArea">Name:</label><input></input>
                            <label className="emailArea">Email:</label><input></input>
                            <label className="textArea">Message:</label><textarea></textarea>
                            <button type="submit" className="formBtn">Submit</button>
                        
                    </form>
                </div>
            </footer>
            </div>
        );
    }
}
export default Footer;