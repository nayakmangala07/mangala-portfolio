import { TypeAnimation } from 'react-type-animation';

const AutoType = () => {
  return (
    <TypeAnimation
      sequence={[
        'Web Developer',
        1000, // wait 1s
        'Freelance Artist',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2rem', display: 'inline-block', color: '#40679E' }}
      repeat={Infinity}
    />
  );
};

export default AutoType;