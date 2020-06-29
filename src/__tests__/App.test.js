import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import Search from '../components/Search';

import logoImage from '../assets/Nasa-logo-3D.gif'


describe ("App", () => {
  it("renders correctly", () => {
    const {asFragment} = render (
      <App 
      />
    )
    screen.getByText("Search:");
    expect(asFragment()).toMatchSnapshot();
    })


    it("Has Search label", () => {
        render(<Search />);
        expect(screen.getByText(/Search/)).toBeInTheDocument();
    });


    it('displays the correct logo', () => {
        const { getByAltText }= render(<img src={logoImage} alt="NASAlogo"/>)
          
        expect(screen.getByAltText("NASAlogo")).toBeInTheDocument();

    });

    it ("renders the button", () => {
    const { getByRole } = render(<button />)

    expect (screen.getByRole('button')).toBeInTheDocument();

    });

    it ('renders textbox to type in', () => {
        const {getByRole} = render(<input  />)       
        //screen.debug();   
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
})
