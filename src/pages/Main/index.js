import React, { Fragment } from 'react';

import UsersPanel from '../../components/UsersPanel';
import UserForm from '../../components/UserForm';
import Map from '../../components/Map';

const Main = () => (
  <Fragment>
    <Map />
    <UsersPanel />
    <UserForm />
  </Fragment>
);

export default Main;
