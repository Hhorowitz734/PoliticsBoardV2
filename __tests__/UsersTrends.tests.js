import React from 'react';
import { render } from '@testing-library/react';
import UsersTrends from '../src/components/trends_sidebar/userstrends';

describe('Tests UserTrends Component functionality', () => {

  test('Renders trending users given sample users', () => {

    const usersTest = [
        {name: "Benjamin Horowitz", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 32000},
        {name: "John Doe", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 30000},
        {name: "Zubayer Jones", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 27000},
        {name: "Chad Chadson", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 5000},
        {name: "Mario Jakeson", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 3000}
    ]

    const { getAllByTestId } = render(<UsersTrends trendingUsers = {usersTest} />);

    const userComponents = getAllByTestId('trending-user-component'); //NOTE -> THIS IS IN REFERENCE TO THE COMPONENT FOR JUST ONE USER (NOT THE WHOLE CATEGORY)
    expect(userComponents.length).toBe(5); //Expects 5 userTrend divs to be rendered
  });

});
