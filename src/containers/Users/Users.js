import React from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/UserAction';


function Users(props) {

  const { getFavoriteCompanies } = props;

  return <>
    <button onClick={getFavoriteCompanies}>aaaa</button>
    <h2>Users</h2>
  </>;
}

const mapStateToProps = (state) => {
  console.log('state',state)
  return ({
    // companyIDs: state.favoriteCompanies.get.data,
  });
};

const mapDispatchToProps = (dispatch) => ({
  getFavoriteCompanies: () => {
    console.log('aaaa')
    dispatch(Actions.GetListOptionsRequested());
  },

});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Users);
