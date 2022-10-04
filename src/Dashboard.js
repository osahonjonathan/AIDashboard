

import './Dashboard.css';
import Avater from './Images/Retink-avatar (1) 1.svg'
import Logo from './Images/Logo.svg'
import Screenshot from './Images/Screenshot 2021-10-24 at 14.53 1.svg'
import Artificial from './Images/artificial-intelligence-svgrepo-com 1.svg'
import Group from './Images/Group.svg'
import Vector3 from './Images/Vector (3).svg'
import Direct from './Images/direct-customer-svgrepo-com 1.svg'
import Vector4 from './Images/Vector (4).svg'
import Logos from './Images/unsplash_niUkImZcSP8logos.svg'
import Blog from './Images/unsplash_HOrhCnQsxnQ.svg'
import Animate from './Images/unsplash_I6wCDYW6ij8.svg'
import Camera from './Images/unsplash_6TeIOdNnMaM.svg'
import Copywrite from './Images/unsplash_MrWOCGKFVDg.svg'
import Socials from './Images/unsplash_QRKJwE6yfJo (4).svg'
const Dashboard = () => {
    return ( 
        <div className='container'>

            <div className="header">
                <div className="header-content">

                    
                      <img src={Logo} alt=''></img>

                    
          
                   
                   <h4>Get Advanced AI + Expert Created <span className="Logos">Logos</span></h4>
                   <p>Boost your sales <span>10x faster</span> with content customized by our unique partnership of <span>human creativity and AI optimization</span> </p>
                   <h6>Sign Up For The Beta!</h6>
                   <div>
                     <button className="Notify">Notify me</button>
                     <button className="SignUp">Sign up as a freelance partner</button>
                    </div>

                </div>
                <img className="Avater" src={Avater} alt=''></img>

            </div>
            <section className="main-dashboard">
                <h5 className="video">EXPLAINER VIDEO</h5>
                <div className="screenshot-container">
                  <img src= {Screenshot} alt=''></img> 
                </div>
                <div className="card-container">
                    <div className="card">
                        <img className='Artificial' src={Artificial} alt=''></img>
                        <h6>MakeAI-assisted Content Choices </h6>
                        <p>Access and Order from an extensive catalogue in any language and on your budget's terms .if unsure, our AI guides you to the best.</p>
                    </div>
                    <div className="card">
                        <img className='Artificial' src={Group} alt=''></img>
                        <h6>Upload and Maintain your Brand Identity </h6>
                        <p>Add your preferences and brand assets to ensure the content is consistent with your brand identity.No brand asset?We can make for you!</p>
                    </div>
                    <div className="card">
                        <img className='Artificial' src={Vector3} alt=''></img>
                        <h6>Be Informed as we create </h6>
                        <p>Your details are translated and sent to the A!,FP, or both(per your choice) as you relax and receive continuous updates.</p>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img className='Artificial' src={Direct} alt=''></img>
                        <h6>Receive and Review</h6>
                        <p>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements</p>
                    </div>
                    <div className="card">
                        <img className='Artificial' src={Vector4} alt=''></img>
                        <h6>Publish and Monitor your contents' progress </h6>
                        <p>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements</p>
                    </div>
                   
                </div>

                <div className="transform">
                  <h5>Transform your Creation Process</h5>
                 <p>With a new approach to ordering content,you can now stop juggling mulltiple documents and meetings and start publishing content faster and on demand</p>
                

                </div>
                <div className="transform">
                  <h5>Activate your business growth </h5>
                 <p>Save time and maintain your brand identity within your budget range or sign up for affordable plans and still access multiole content services like:</p>
                

                </div>

                <div className="services">
                    <div className="Logos-Service">
                        <img className='Logos' src={Logos} alt=''></img>
                        <p>Have a unique & creative logo designed to express and represent your brand identity</p>
                    </div>
                    <div className="Logos-Service">
                        <img className='Logos'  src={Blog} alt=''></img>
                        <p>Write SEO enriched blog posts as long or short articles on any topic of your choice</p>
                    </div>
                    <div className="Logos-Service">
                        <img className='Logos'  src={Animate} alt=''></img>
                        <p>Bring animated characters to life to keep your viewers engaged and entertained</p>
                    </div>
                </div>
                <div className="services">
                    <div className="Logos-Service">
                        <img className='Logos' src={Camera} alt=''></img>
                        <p>Introduce your product to potential customers in a clear and creative video</p>
                    </div>
                    <div className="Logos-Service">
                        <img className='Logos'  src={Copywrite} alt=''></img>
                        <p>Have creative and compelling copies written to boost your product,service or company</p>
                    </div>
                    <div className="Logos-Service">
                        <img className='Logos'  src={Socials} alt=''></img>
                        <p>Boost sales and awareness with tailor made ads from experts</p>
                    </div>
                </div>
                <div className="register">
                    <h5>Sign Up For The BETA to see more</h5>
                    <button className='Business'>Business Name</button>
                    <button className='Email'>Email</button>
                    <br></br>
                    <button className='Notify'><span>N</span>otify me</button>
                    <br></br>
                    <button className='SignUp'>Sign up as a freelance partner</button>

                </div>

                
            </section>
            
            
        </div>
     
     
    );
}
 
export default Dashboard;