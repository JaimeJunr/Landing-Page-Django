import TitleSmall from '../Title Small';

type Props = {
  src: string;
  alt: string;
};

const PlataformButton = (props: Props) => {
  return (
    <div className="plataform">
      <div className="plataform__div">
        <img className="plataform__icon" src={props.src} alt={props.alt} />
        <TitleSmall>Assista o quanto quiser.</TitleSmall>
      </div>
      <button className="plataform__btn roboto-black">ASSISTIR</button>
    </div>
  );
};

export default PlataformButton;
