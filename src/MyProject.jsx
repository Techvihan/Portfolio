import React from 'react'
import Box from './Box';
import Button from './Button';
import H1 from './H1';

function MyProject() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <H1>Projects</H1>
      </div>
      <Box>
        <Button link="https://assignment-33-create-a-todo-app-abhishekvihan.codeyogiteam.repl.co/">Todo List</Button>
        <Button link="https://assignment-34-create-ask-jud-clone-abhishekvihan.codeyogiteam.repl.co/">Ask Judo</Button>
        <Button link="https://abhishek-arya.netlify.app/Lectures">Codeyogi Clone</Button>
      </Box>
    </div>
  );
}
export default MyProject
