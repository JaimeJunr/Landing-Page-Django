type Props = {
  children: string;
};

const TitleSmall = (props: Props) => {
  return <h3 className="title--small roboto-bold">{props.children}</h3>;
};

export default TitleSmall;
