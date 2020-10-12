import { render, screen } from "@testing-library/react";
import Adventures from '../pages/adventures.js';

describe("Adventures",()=>{
  it("Successfully Renders", ()=>{
    render(<Adventures noTest={false}/>)
  })
})