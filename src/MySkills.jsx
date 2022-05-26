import React from 'react'
import Box from './Box';
import H1 from './H1';
import Image from './Image';

function MySkills() {
  return (
    <div>
      <div className="flex justify-center mt-10 mx-4">
        <H1>Skills</H1>
      </div>
      <Box>
        <Image icon="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png" link="https://en.wikipedia.org/wiki/HTML"> HTML </Image>
        <Image icon="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" link="https://en.wikipedia.org/wiki/Headwind_and_tailwind"> TAILWIND </Image>
        <Image icon="https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png" link="https://en.wikipedia.org/wiki/JavaScript"> JAVASCRIPT </Image>
        <Image icon="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" link="https://en.wikipedia.org/wiki/React_(JavaScript_library)"> REACT </Image>
        <Image icon="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" link="https://en.wikipedia.org/wiki/CSS"> CSS </Image>
      </Box>
    </div>
  );
}
export default MySkills
