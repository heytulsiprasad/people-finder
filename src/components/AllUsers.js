import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Add prop types
import { loadSingleUser, setLoaderState } from '../actions/peopleActions';

const AllUsers = (props) => {
  const buttonPressHandler = async (index) => {
    props.setLoaderState(true);

    const response = await (
      await fetch(`https://reqres.in/api/users/${index}`)
    ).json();

    const data = await response.data;

    console.log(data);

    props.loadSingleUser(data);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      {Array.from({ length: props.totalCount }, (_, i) => (
        <button
          style={{
            padding: '1rem',
            background: 'none',
            marginRight: '1rem',
            cursor: 'pointer',
          }}
          onClick={() => buttonPressHandler(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

AllUsers.propTypes = {
  totalCount: PropTypes.number.isRequired,
  setLoaderState: PropTypes.func.isRequired,
  loadSingleUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    totalCount: state.people.totalCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoaderState: (state) => dispatch(setLoaderState(state)),
    loadSingleUser: (user) => dispatch(loadSingleUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
