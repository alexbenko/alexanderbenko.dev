import { render, screen } from "@testing-library/react";
import Index from '../pages/index.js';

describe("Adventures",()=>{
  it("Successfully Renders", ()=>{
    render(<Index noTest={false}/>)
  })

})