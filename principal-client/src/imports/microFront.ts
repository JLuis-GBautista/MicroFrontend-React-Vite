import { lazy } from 'react';
import { CustomErrorMicroClient1, CustomErrorMicroClient2 } from '../components/CustomErrorMicroClient';

export const Client1 = lazy(async () => {
  try {
    const module = await import('client1/Client1');
    return { default: module.default };
  } catch (error) {
    console.error('Error al cargar Client1:', error);
    return { default: CustomErrorMicroClient1};
  }
});

export const Client2 = lazy(async () => {
  try {
    const module = await import('client2/Client2');
    return { default: module.default };
  } catch (error) {
    console.error('Error al cargar Client2:', error);
    return { default: CustomErrorMicroClient2};
  }
});