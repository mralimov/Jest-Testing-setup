import React from 'react';

export const App = () => {
  return (
    <div>
      <div data-test='component-app' className='App'>
        <h1 data-test='counter-display'>
          The counter is currently&nbsp;
          <span data-test='count'>{count}</span>
        </h1>
        {error && (
          <p
            data-test='error-message'
            style={{ color: 'red', fontWeight: '600' }}
          >
            The counter cannot go below 0
          </p>
        )}
        <button data-test='increment-button' onClick={incrementHandler}>
          Increment counter
        </button>
        <button data-test='decrement-button' onClick={decrementHandler}>
          Decrement counter
        </button>
      </div>{' '}
    </div>
  );
};
