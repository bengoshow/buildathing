import {FunctionComponent} from 'react';

// https://www.telerik.com/blogs/react-class-component-vs-functional-component-how-choose-whats-difference
const Logo: FunctionComponent = () => {
  return (
    <div className="text-center">
      <img src="/logo.png" alt="Sneaky Sasquatch" className="max-h-40 mx-auto my-2 rounded-full" />
    </div>
  );
};

export default Logo;
