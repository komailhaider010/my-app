import React from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const some = {
  firstName: 'Harper',
  lastName: 'model'
};

function GetGreeting({ user }) {
  if (user) {
    console.log(user);
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Nigga.</h1>;
}

export default function App() {
  return (
    <>
      <GetGreeting user={some}/>
    </>
  );
}
