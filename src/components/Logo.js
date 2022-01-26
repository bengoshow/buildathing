import {FunctionComponent} from 'react';

const Logo: FunctionComponent = () => {
  return (
    <div className="text-center">
      <img src="/logo.png" alt="Sneaky Sasquatch" className="max-h-40 mx-auto my-2 rounded-full" />
    </div>
  );
};

export default Logo;
