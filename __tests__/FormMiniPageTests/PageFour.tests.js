import React from 'react';
import { render } from '@testing-library/react';
import PageFour from '../../src/pages/form_minipages/page4';

describe('Tests Rules Page Functionality', () => {

    test('Renders Rules on page', () => {
  
        const rulesTest = [
            {
              name: 'Respectful Communication',
              text: 'Participants must engage in respectful and civil discussions. Personal attacks, insults, or derogatory language directed towards individuals or groups will not be tolerated.',
            },
            {
              name: 'Stay on Topic',
              text: 'Participants should strive to keep the discussions focused on political issues and topics. Avoid drifting into unrelated subjects or engaging in excessive off-topic conversations.',
            },
            {
              name: 'No Hate Speech or Discrimination',
              text: 'Hate speech, discriminatory remarks, or any form of bigotry based on race, religion, ethnicity, gender, sexual orientation, or other protected characteristics is strictly prohibited.',
            },
            {
              name: 'Fact-Based Discussions',
              text: 'Participants are encouraged to support their arguments with factual information, credible sources, or reputable references. Dissemination of misinformation or deliberate manipulation of facts is discouraged.',
            },
            {
              name: 'Constructive Criticism',
              text: 'Participants may express criticism of political ideologies, policies, or actions, but it should be done in a constructive manner. Focus on the ideas and avoid personal attacks.',
            },
            {
              name: 'No Trolling or Spam',
              text: 'Intentionally disruptive or inflammatory behavior, such as trolling or spamming, is not allowed. Stay engaged in meaningful discussions and avoid derailing conversations.',
            },
            {
              name: 'Respect Privacy',
              text: 'Participants should respect the privacy of others and avoid sharing personal information without explicit consent. This includes refraining from sharing private messages or confidential information.',
            },
            {
              name: 'Nonviolent Language',
              text: 'Advocating or inciting violence, harm, or illegal activities is strictly prohibited. Discussions should promote peaceful dialogue and adhere to legal and ethical standards.',
            },
            {
              name: 'Multiple Perspectives',
              text: 'Encourage diverse viewpoints and engage in inclusive discussions. Respect and consider different opinions, even if they differ from your own, fostering an environment of open-mindedness and intellectual growth.',
            },
            {
              name: 'Moderation and Compliance',
              text: 'Follow the instructions and decisions of forum moderators. Failure to comply with the rules may result in warnings, temporary suspension, or permanent banning from the forum.',
            },
          ];
  
      const { getAllByTestId } = render(<PageFour rulesList={rulesTest} />);
  
      const ruleComponents = getAllByTestId('rule'); //NOTE -> THIS IS IN REFERENCE TO THE COMPONENT FOR JUST ONE ARTICLE (NOT THE WHOLE CATEGORY)
      expect(ruleComponents.length).toBe(rulesTest.length); //Expects 5 articleTrend divs to be rendered
    });
  
  });
  