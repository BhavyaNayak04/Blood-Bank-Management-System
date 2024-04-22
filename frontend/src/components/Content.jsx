import '../global.css'; // Import CSS for styling

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
      <button className="donate-button">Donate Now</button>
    </div>
  );
};

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
    <DonateSection/>
    </>
  );
};

export default Content;
