import NextLink from 'next/link';
import { CSSProperties } from 'styled-components';

interface Props {
  href: string;
  style?: CSSProperties;
}

const Link: React.FC<Props> = ({ children, href, style, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <a style={style} {...props}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
