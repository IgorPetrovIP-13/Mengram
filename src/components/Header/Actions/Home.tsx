import { ReactElement, CSSProperties } from 'react';

interface HomeProps {
  fill?: string;
  style?: CSSProperties;
}

function Home({ fill = 'black', style = {} }: HomeProps): ReactElement {
  return (
    <svg
      style={style}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.1875L21.4501 10.275L21.0001 11.625H20.25V20.25H3.75005V11.625H3.00005L2.55005 10.275L12 3.1875ZM5.25005 10.125V18.75H18.75V10.125L12 5.0625L5.25005 10.125Z"
        fill={fill}
      />
    </svg>
  );
}

export default Home;