import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
      <AllUsers />
    </div>
  );
};

App.propTypes = {
  totalCount: PropTypes.number.isRequired,
  loadAllUsers: PropTypes.func.isRequired,
  setLoaderState: PropTypes.func.isRequired,
};

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllUsers: (users) => dispatch(loadAllUsers(users)),
    setLoaderState: (state) => dispatch(setLoaderState(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
