import React from 'react';
import { connect } from 'react-redux';

// Add prop types
import { loadSingleUser } from '../actions/peopleActions';

const AllUsers = (props) => {
  const buttonPressHandler = async (index) => {
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
        <button onClick={() => buttonPressHandler(i + 1)}>{i + 1}</button>
      ))}
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
    loadSingleUser: (user) => dispatch(loadSingleUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
