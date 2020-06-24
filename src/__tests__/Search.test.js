import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../components/Search';
import logoImage from '../assets/Nasa-logo-3D.gif'


describe ("Search", () => {
    it("renders correctly", () => {
      const {asFragment} = render (
        <Search 
        img src={logoImage} 
        
        />
      )
      expect(asFragment()).toMatchSnapshot();  
    })

    it('calls "onClick" prop on button click', () => {
        // Render new instance in every test to prevent leaking state
        const onChange = jest.fn();
        const { getByLabelText } = render(<input onClick={onChange} />);
      
        fireEvent.click(getByLabelText(/Go/i));
        expect(onChange).toHaveBeenCalled();
      });

      /*it('displays the correct logo', () => {
        const { getByAltText } = render(<img src={logoImage}/>);
        expect(getByAltText('logo-id')).toHaveAttribute('source', '../assets/Nasa-logo-3D.gif')


      })*/

    });
