import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ classNames, children, href, onclick, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${classNames || ""}`;

  const spanClasses = "relative z-10";
  const RenderButton = () => (
    <button className={classes}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const RenderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? RenderButton() : RenderLink();
};

export default Button;
