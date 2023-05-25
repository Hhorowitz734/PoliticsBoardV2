import React from 'react';
import { render } from '@testing-library/react';
import FormNavigator from '../src/components/formnavigator';

describe('Tests FormNavigator Component functionality', () => {

    test('Renders form navigator for a sample form', () => {
  
        const testForm = [
            {text: "Title"},
            {text: "Article"},
            {text: "Post Settings"},
            {text: "Rules"}
        ];
  
        const { getAllByTestId } = render(<FormNavigator form = {testForm} />);
  
        const formNavigatorComponents = getAllByTestId('form-navigator-component');
        expect(formNavigatorComponents.length).toBe(testForm.length); 
    });
  
  });
  