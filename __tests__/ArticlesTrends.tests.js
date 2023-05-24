import React from 'react';
import { render } from '@testing-library/react';
import ArticlesTrends from '../src/components/trends_sidebar/articlestrends';

describe('Tests ArticleTrends Component functionality', () => {

    test('Renders trending articles given sample articles', () => {
  
        const articlesTest = [
            { title: "Brazil's Hyperactive Population Strategies", author: "John Doe" },
            { title: "Brazil's Hyperactive Population Strategies", author: "John Doe" },
            { title: "Brazil's Hyperactive Population Strategies", author: "John Doe" },
            { title: "Brazil's Hyperactive Population Strategies", author: "John Doe" },
            { title: "Brazil's Hyperactive Population Strategies", author: "John Doe" }
          ];
  
      const { getAllByTestId } = render(<ArticlesTrends articles = {articlesTest} />);
  
      const articleComponents = getAllByTestId('trending-article-component'); //NOTE -> THIS IS IN REFERENCE TO THE COMPONENT FOR JUST ONE ARTICLE (NOT THE WHOLE CATEGORY)
      expect(articleComponents.length).toBe(articlesTest.length); //Expects 5 articleTrend divs to be rendered
    });
  
  });
  