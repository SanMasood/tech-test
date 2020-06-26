import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchResults from '../components/Search';

describe ("SearchResults", () => {

  const mockImages = {
    
  }
    it("renders correctly", () => {
      const {asFragment} = render (
        <SearchResults        
        />
      )
      expect(asFragment()).toMatchSnapshot();  
      })
})