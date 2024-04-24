import React from 'react'
import './about.css'
import about from '../../assets/images/about.png'
import whydonate  from '../../assets/images/whydonate.png'

const AboutUsPage = () => {
  return (   
    <div className='about-us-container'>
      <div className='about-us-section'>
        <div className='about-us-content'>
            <h1>About Us</h1>
            <br></br>
            <p>
                Welcome to our Blood Bank Management System! We are dedicated to
                providing a platform that facilitates the donation and distribution of
                blood to those in need.Our mission is to bridge the gap between blood donors 
                and recipients,
                ensuring timely access to life-saving blood transfusions. With our
                system, donors can easily register, schedule appointments, and track
                their donations. Recipients can quickly find blood donors and request
                blood according to their specific requirements.
                We strive to maintain the highest standards of confidentiality,
                efficiency, and reliability in our operations. Our team is committed to
                continuously improving our platform to better serve the needs of both
                donors and recipients.
                Thank you for being a part of our initiative to save lives through blood
                donation. Together, we can make a difference!
            </p>
        </div>
        <div className='about-us-image'>
             <img className="image" src={about} alt="About Us" />
        </div>
      </div> 
      <div className='why-donate-section'>
         <div className='why-donate-content'>
            <h1>Why should I donate blood?</h1>
            <br></br>
            <p>Blood is the most precious gift that anyone can give to another person - the gift of life.
                A decision to donate your blood can save a life, or even several if your blood is separated 
                into its components-red cells, platelets and plasma - which can be used individually for
                patients with specific conditions. Safe blood saves lives and improves health. Blood 
                transfusion is needed for:
            </p>
                <li>Women with complications of pregnancy, such as ectopic pregnancies and haemorrhage before, 
                    during or after childbirth.</li>
                <li>Children with severe anaemia often resulting from malaria or malnutrition</li>
                <li>People with severe trauma following man-made and natural disasters.</li>
                <li>Many complex medical and surgical procedures and cancer patients.</li>
            <p>It is also needed for regular transfusions for people with conditions such as thalassaemia and
                sickle cell disease and is used to make products such as clotting factors for people with 
                haemophilia. There is a constant need for regular blood supply because blood can be stored
                for only a limited time before use. Regular blood donations by a sufficient number of healthy 
                people are needed to ensure that safe blood will be available whenever and wherever it is 
                needed.
            </p> 
         </div> 
         <div className='why-donate-image'>
            <img className="image" src={whydonate} alt="Why donate blood" />
         </div>              
      </div>          
    </div>
    
  );
};

export default AboutUsPage;
