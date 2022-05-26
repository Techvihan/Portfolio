import React from 'react'
import Box from './Box';
import Button2 from './Button2';
import H1 from './H1';

function MyProject() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <H1>Projects</H1>
      </div>
      <Box>
        <Button2 link="https://assignment-33-create-a-todo-app-abhishekvihan.codeyogiteam.repl.co/">Todo List</Button2>
        <Button2 link="https://assignment-34-create-ask-jud-clone-abhishekvihan.codeyogiteam.repl.co/">Ask Judo</Button2>
        <Button2 link="https://abhishek-arya.netlify.app/Lectures">Codeyogi Clone</Button2>
      </Box>sss
    </div>
  );
}
export default MyProject
