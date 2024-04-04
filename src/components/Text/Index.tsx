type Props = {
  children: string;
};

const Text = (props: Props) => {
  return <span className="text">{props.children}</span>;
};

export default Text;
