import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';


describe ("Search", () => {
    it("renders correctly", () => {
    
      const {asFragment} = render (
        <Search         
        />
      )
      expect(asFragment()).toMatchSnapshot();  
    });


    it('Handles button submit', () => {

      const { getByLabelText, asFragment } = render(<Search />);
      const searchQuery = screen.getByLabelText('Search:');
      userEvent.type(searchQuery, 'moon');

      const submitButton = screen.getByRole('button', { name: /Go/i });
      userEvent.click(submitButton);

    });

  
    it('calls "onClick" prop on button click', () => {

      const onSubmit = jest.fn();
      const { getByRole } = render(<button onClick={onSubmit}  />);
    
      fireEvent.click(getByRole('button'));
      expect(onSubmit).toHaveBeenCalled();
    });   
     
});
