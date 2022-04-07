import React from 'react'
import Box from './Box';
import DetailBox from './DetailBox';
import H1 from './H1';


function MyDetails (){
  return(
    <div>
    <div className="flex justify-center mt-10">
    <H1>Projects</H1>
    </div>
    <Box>
      <DetailBox icon="https://www.nicepng.com/png/full/177-1779357_got-a-question-call-1-877-858-white.png">Contact Phone <span className="flex">Number</span></DetailBox>
      <DetailBox icon="https://www.pngkit.com/png/full/222-2226274_white-email-icon-png-download-mail-symbol-png.png">Our Email <span className="flex">Address</span></DetailBox>
      <DetailBox icon="https://openday.runshaw.ac.uk/wp-content/uploads/2020/10/Destination-Pin.png">Our Location <span className="flex">Address</span></DetailBox>
    </Box>
    </div>
  );
}
export default MyDetails


  