import '../global.css'; 

const Card = ({ title, text }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

const DonateSection = () => {
  return (
    <div className="donate-section">
      <h2>Become a Donor Today!</h2>
      <p>Donate blood and save lives. Your contribution can make a significant impact on those in need.</p>
      <a href='/donate'><button className="donate-button">Donate Now</button></a>
    </div>
  );
};

const BloodgroupSection=()=>{
  return (
    <div className='bgsection'>
       <h2>Blood Groups</h2>
            <p>
            Blood group of any human being will mainly fall in any one of the following groups:</p>
            <li>A positive or A negative</li>
            <li>B positive or B negative</li>
            <li>O positive or O negative</li>
            <li>AB positive or A negative</li>
            <p>Your blood group is determined by the genes you inherit from your parents. A healthy
               diet helps ensure a successful blood donation, and also makes you feel better!</p>   
        <br></br>
        <br></br>
        <h2>Blood Group Test</h2> 
        <p>To work out your blood group, your red blood cells are mixed with different antibody solutions.
           If, for example, the solution contains anti-B antibodies and you have B antigens on your cells 
           (you're blood group B), it will clump together. If the blood does not react to any of the anti-A 
           or anti-B antibodies, it's blood group O. A series of tests with different types of antibody can
            be used to identify your blood group. If you have a blood transfusion (where blood is taken 
            from one person and given to another) your blood will be tested against a sample of donor
             cells that contain ABO and RhD antigens. If there's no reaction, donor blood with the same
              ABO and RhD type can be used.
        </p>        
    </div>
  );
}

const UniversalSection=()=>{
  return (
    <div className='bgsection'>
       <h2>UNIVERSAL DONORS AND RECIPIENTS</h2>
            <p>The most common blood type is O, followed by type A Type O individuals are often called
               "universal donors since their blood can be transfused into persons with any blood type. 
               Those with type AB blood are called "universal recipients because they can receive blood 
               of any type.
            </p>  
            <p>For emergency transfusions, blood group type O negative blood is the variety of blood 
              that has the lowest risk of causing serious reactions for most people who receive it. 
              Because of this it's sometimes called the universal blood donar type.
            </p> 
        <br></br>  
        <br></br> 
        <h2>Giving Blood</h2>  
        <p>Most people are able to give blood, but a lot fewer people than are needed to meet demand 
          actually do. You can usually donate blood if you:</p>
          <li>are fit and healthy</li>
          <li>weigh between 50kg and 158kg</li>
          <li>are 17 to 65 years old</li>  
    </div>
  );
}

const Content = () => {
  return (
    <>
        <div className="cards-container">
      <Card
        title="Importance of Blood Donation"
        text="Blood donation is crucial for saving lives. Every donation can help multiple people in need, including accident victims, patients undergoing surgery, and those with chronic illnesses."
      />
      <Card
        title="Benefits of Blood Donation"
        text="In addition to helping others, donating blood has several health benefits for the donor, such as reducing the risk of certain diseases, stimulating the production of new blood cells, and improving cardiovascular health."
      />
      <Card
        title="Who Can Donate Blood?"
        text="Most healthy adults are eligible to donate blood. However, there are certain criteria that donors must meet, including age, weight, and overall health. It's important to consult with healthcare professionals before donating."
      />
    </div>
    <BloodgroupSection/>
    <UniversalSection/>
    <DonateSection/>   
    </>
  );
};

export default Content;
