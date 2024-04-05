import PlataformButton from '../../components/PlataformButton';
import TitleSmall from '../../components/Title Small';
import { Container } from '../../styles/style';
const Show = () => {
  return (
    <section className="Show">
      <Container>
        <TitleSmall>
          Django (Jamie Foxx) é um escravo liberto cujo passado brutal com seus
          antigos proprietários leva-o ao encontro do caçador de recompensas
          alemão Dr. King Schultz (Christoph Waltz). Schultz está em busca dos
          irmãos assassinos Brittle, e somente Django pode levá-lo a eles. O
          pouco ortodoxo Schultz compra Django com a promessa de libertá-lo
          quando tiver capturado os irmãos Brittle, vivos ou mortos.
        </TitleSmall>
        <PlataformButton
          src={
            'https://raw.githubusercontent.com/JaimeJunr/imggg/main/Netflix-Icon.png'
          }
          alt="
          Netflix Icon"
        />
        <PlataformButton
          src={
            'https://raw.githubusercontent.com/JaimeJunr/imggg/main/Amazon-Prime-Video-Icon.png?token=GHSAT0AAAAAACOYW6Y3Q4M74O4JVKFAOSPCZQPISJA'
          }
          alt="
          Prime Video Icon"
        />
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/tivv135aGbc?si=oLQyV-p139-RyYdo"
          title="YouTube video player"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Container>
    </section>
  );
};

export default Show;
