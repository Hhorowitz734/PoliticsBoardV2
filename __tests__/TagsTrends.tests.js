import React from 'react';
import { render } from '@testing-library/react';
import TagsTrends from '../src/components/trends_sidebar/tagstrends';

describe('Tests TagsTrends Component functionality', () => {

    test('Renders trending tags given sample tags', () => {
  
        const tagsTest = [{ tag: 'Transgender', url: 'John Doe', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: 'Politics', url: 'Jane Smith', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: 'Dogknob', url: 'Alex Johnson', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: 'Technology', url: 'Sarah Lee', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Elections", url: "https://example.com/elections", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Campaign Finance", url: "https://example.com/campaign-finance", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Voting Rights", url: "https://example.com/voting-rights", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Gerrymandering", url: "https://example.com/gerrymandering", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Supreme Court", url: "https://example.com/supreme-court", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Foreign Policy", url: "https://example.com/foreign-policy", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Impeachment", url: "https://example.com/impeachment", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Executive Power", url: "https://example.com/executive-power", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "National Security", url: "https://example.com/national-security", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Economic Policy", url: "https://example.com/economic-policy", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Healthcare Policy", url: "https://example.com/healthcare-policy", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Immigration", url: "https://example.com/immigration", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Climate Change", url: "https://example.com/climate-change", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Gun Control", url: "https://example.com/gun-control", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Taxes", url: "https://example.com/taxes", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Social Security", url: "https://example.com/social-security", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Labor", url: "https://example.com/labor", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Civil Rights", url: "https://example.com/civil-rights", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Privacy", url: "https://example.com/privacy", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Criminal Justice", url: "https://example.com/criminal-justice", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Education", url: "https://example.com/education", color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` }
        ]
  
      const { getAllByTestId } = render(<TagsTrends trendingTags = {tagsTest} />);
  
      const tagsComponents = getAllByTestId('trending-tag-component'); //NOTE -> THIS IS IN REFERENCE TO THE COMPONENT FOR JUST ONE TAG (NOT THE WHOLE CATEGORY)
      expect(tagsComponents.length).toBe(tagsTest.length); 
    });
  
  });