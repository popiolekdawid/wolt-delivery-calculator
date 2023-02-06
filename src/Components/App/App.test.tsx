import React from 'react';
import { render, fireEvent  } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders the form and output box', () => {
    const { getByTestId } = render(<App />);
    const form = getByTestId('delivery-form');
    const outputBox = getByTestId('output-box');

    expect(form).toBeInTheDocument();
    expect(outputBox).toBeInTheDocument();
  });

  it('updates form data on submit', async () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const form = getByTestId('delivery-form');
    const cartValueInput = getByLabelText('Cart Value:');
    const deliveryDistanceInput = getByLabelText('Delivery Distance:');
    const amountOfItemsInput = getByLabelText('Amount of Items:');
    const submitButton = getByTestId('submit-button');

    fireEvent.change(cartValueInput, { target: { value: '100' } });
    fireEvent.change(deliveryDistanceInput, { target: { value: '10' } });
    fireEvent.change(amountOfItemsInput, { target: { value: '5' } });
    fireEvent.click(submitButton);
  });
});

