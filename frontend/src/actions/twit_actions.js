import { getTwit } from '../util/api_util';

export const RECEIVE_TWIT = "RECEIVE_TWIT";

const receiveTwit = twit => ({
  type: RECEIVE_TWIT,
  twit
});

export const fetchTwit = async symbol => dispatch => (
  getTwit(symbol)
    .then(twit => dispatch(receiveTwit(twit)))
);