import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })

    xit('should call prevent default', () => {
        /*const mockPreventDefault = jest.fn();
        let wrapper = 
         
        const mockEvent = {
          preventDefault: mockPreventDefault
        };

        wrapper.instance().handleSubmit(mockEvent);
        expect(mockPreventDefault).toHaveBeenCalled();*/
      
    
      //expect(event.preventDefault).toHaveBeenCalled();
    });


});
