import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-loader-spinner';

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const CurrentUser = (props) => {
  const { first_name, last_name, email } = props?.currentUser;

  return (
    <div
      style={{
        border: '2px solid black',
        width: 'max-content',
        padding: '2rem 10rem 2rem 2rem',
      }}
    >
      {props.loading ? (
        <Grid ariaLabel="loading-indicator" color="gray" />
      ) : !isEmpty(props.currentUser) ? (
        <div>
          <h1>{`${first_name} ${last_name}`}</h1>
          <h2>{email}</h2>
        </div>
      ) : (
        <div>
          <h1>Click on a button to fetch user</h1>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.people.currentUser,
    loading: state.people.loading,
  };
};

export default connect(mapStateToProps)(CurrentUser);
