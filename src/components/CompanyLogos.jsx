import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <u className="flex">
        {companyLogos.map((logo, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center flex-1 h-[8.5rem] "
            >
              <img src={logo} width={134} height={28} alt="logo" />
            </li>
          );
        })}
      </u>
    </div>
  );
};

export default CompanyLogos;
