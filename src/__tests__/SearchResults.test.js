import React from 'react';
import axios from 'axios';

import { render, fireEvent, screen } from '@testing-library/react';

import SearchResults from '../components/SearchResults';
import { image, getImages } from '../requests/getImages';

jest.mock('axios');

describe ("SearchResults", () => {

    it("renders correctly", () => {
      const {asFragment} = render (
        <SearchResults        
        />
      )
        expect(asFragment()).toMatchSnapshot();  
      });
      
      /*it("displays all results", async() => {
        const mockResponse = [
          {
            href : "link1",            
          },
          {
            href: "link2",
          },
          {
            href: "link3"
          }
        ]
        const response = await getImages('moon');
        expect(response).toHaveLength(3);
        
      });*/

  
    it("returns thumbnail images of search query", async() => {

      axios.get.mockResolvedValue({
        data: [
          {href: "https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg", rel: "preview", render: "image"},

          {href: "https://images-assets.nasa.gov/image/PIA13517/PIA13517~thumb.jpg", rel: "preview", render: "image"}

        ]
      })

      const results = await SearchResults({image});
      expect(results).toMatchSnapshot();
    });
    


})