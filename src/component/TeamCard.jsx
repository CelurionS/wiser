import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const TeamCard = ({ name, role, image, instagram, linkedin }) => {
  return (
    <div className="bg-customBlue p-6 rounded-lg shadow-md text-center xl:w-80 lg:w-72 w-60 ">
      <img
        src={image}
        alt={name}
        className="w-full mx-auto mb-9 object-cover rounded-lg"
      />
      <h3 className="text-[16px] font-bold text-fontblue">{name}</h3>
      <p className="text-sm text-fontblue mb-4">{role}</p>
      <div className="flex justify-center space-x-4">
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-iconig hover:text-click" />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-iconig hover:text-click" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
