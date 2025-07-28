interface srcInterface {
  src: string;
}

export default function Image({ src }: srcInterface) {
  return <img src={src} />;
}
