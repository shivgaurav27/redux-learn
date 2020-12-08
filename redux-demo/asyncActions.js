const redux = require("redux");
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const thunkMiddleware = require("redux-thunk").default;


const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Actions
const FETCHED_USERS_REQUEST = "FETCHED_USERS_REQUEST";
const FETCHED_USERS_SUCCESS = "FETCHED_USERS_SUCCESS";
const FETCHED_USERS_FAILURE = "FETCHED_USERS_FAILURE";

const fetchedUsersRequest = () => {
  return {
    type: FETCHED_USERS_REQUEST,
  };
};
const fetchedUsersSuccess = (users) => {
  return {
    type: FETCHED_USERS_SUCCESS,
    payload: users,
  };
};
const fetchedUsersFailure = (error) => {
  return {
    type: FETCHED_USERS_FAILURE,
    payload: error,
  };
};


//  reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCHED_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: "",
      };

    case FETCHED_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
    return function (dispatch) {
      dispatch(fetchedUsersRequest());
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          // response.data
          const users = response.data.map((user) => user.id);
          dispatch(fetchedUsersSuccess(users));
        })
        .catch((error) => {
        //   console.log(error);
          dispatch(fetchedUsersFailure(error.message));
          // error.message
        });
    };
  };

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
