import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchResults from '../components/Search';

describe ("SearchResults", () => {
    it("renders correctly", () => {
      const {asFragment} = render (
        <SearchResults        
        />
      )
      expect(asFragment()).toMatchSnapshot();  
      })
})