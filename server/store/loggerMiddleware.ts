import { Middleware } from '@reduxjs/toolkit';

const loggerMiddleware: Middleware = store => next => action => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('Next state:', JSON.stringify(store.getState(), null, 2)); // הצגת המידע בצורה קריאה וברורה
  return result;
};

export default loggerMiddleware;
