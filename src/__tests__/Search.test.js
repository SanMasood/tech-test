import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';
import logoImage from '../assets/Nasa-logo-3D.gif'


describe ("Search", () => {
    it("renders correctly", () => {
    
      const {asFragment} = render (
        <Search         
        />
      )
      expect(asFragment()).toMatchSnapshot();  
    });

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
        screen.debug();   
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })

    it('Handles button submit', () => {
      const { getByLabelText, asFragment } = render(<Search />);
      const searchQuery = screen.getByLabelText('Search:');
      userEvent.type(searchQuery, 'moon');

      const submitButton = screen.getByRole('button', { name: /Go/i });
      userEvent.click(submitButton);

      screen.debug();
    });


});
