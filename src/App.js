import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import AllUsers from './components/AllUsers';
import CurrentUser from './components/CurrentUser';
import { loadAllUsers, setLoaderState } from './actions/peopleActions';

const App = (props) => {
  useEffect(() => {
    const getUsers = async () => {
      props.setLoaderState(true);

      const response = await fetch('https://reqres.in/api/users');

      // Parse response as JSON
      const json = await response.json();

      // Get actual users data
      const data = await json.data;

      console.log({ data });
      props.loadAllUsers(data);

      return data;
    };

    getUsers();
  });

  return (
    <div className="main">
      <CurrentUser />
      <AllUsers totalCount={props.totalCount} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalCount: state.people.totalCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllUsers: (users) => dispatch(loadAllUsers(users)),
    setLoaderState: (state) => dispatch(setLoaderState(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
