import { HANDLE_SIGNATURE, HANDLE_MODAL } from './action-types';

export const handleSignature = (value: boolean) => ({
  type: HANDLE_SIGNATURE,
  payload: value
});

export const toogleModal = () => ({
    type: HANDLE_MODAL,
})