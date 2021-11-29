import { signatureReducer } from './signature.reducer';
import { combineReducers } from 'redux';

export interface IStoreState{
    signatureReducer: {
        signature: boolean
        isVisible: boolean
    }
}

export const Reducers = combineReducers({
 signatureReducer
});