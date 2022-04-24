const FETCH_MESSAGE_REQUEST = 'FETCH_MESSAGE_REQUEST';
const FETCH_MESSAGE_SUCCESS = 'FETCH_MESSAGE_SUCCESS';
const FETCH_MESSAGE_FAILURE = 'FETCH_MESSAGE_FAILURE';

const apiURL = 'http://localhost:3000';

const initialState = '';

const fetchMessageRequest = () => ({
  type: FETCH_MESSAGE_REQUEST,
});

const fetchMessageSuccess = (payload) => ({
  type: FETCH_MESSAGE_SUCCESS,
  payload,
});

const fetchMessageFailure = () => ({
  type: FETCH_MESSAGE_FAILURE,
});

export const fetchMessage = () => async (dispatch) => {
  dispatch(fetchMessageRequest());
  try {
    const response = await fetch(`${apiURL}/api/greetings.json`);
    const json = await response.json();
    dispatch(fetchMessageSuccess(json.message));
  } catch (error) {
    dispatch(fetchMessageFailure());
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MESSAGE_REQUEST:
      return 'Fetching a message...';
    case FETCH_MESSAGE_SUCCESS:
      return payload;
    case FETCH_MESSAGE_FAILURE:
      return 'Fetch failed';
    default:
      return state;
  }
};

export default reducer;
