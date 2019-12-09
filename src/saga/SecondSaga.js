import { all, fork } from 'redux-saga/effects';

export function* SecondSaga () {
    console.log("And This is second Saga");
};