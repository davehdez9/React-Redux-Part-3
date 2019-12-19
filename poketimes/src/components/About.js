import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo omnis
        aperiam earum culpa, animi, nulla rem eligendi reiciendis illo inventore
        aspernatur esse veritatis, quos quam aliquam nisi dolores natus ullam?
      </p>
    </div>
  );
};

export default Rainbow(About);
