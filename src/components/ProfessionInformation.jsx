const ProfessionInformation = ({ profession, description }) => (
  <div id="professionInformation">
    <span className="terciary-text" id="profession">{profession}</span>
    <span className="normal-text">{description}</span>
  </div>
);

export default ProfessionInformation;
