import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function IdCard(props) {
  const { lastName, firstName, gender, birth, height, img } = props.users;
  return (
    <Card className="container">
      <div className="d-flex justify-content-around">
        <div className="col-xs-6">
          <Image roundedCircle src={img} alt="" width="100" />
        </div>
        <div className="col-xs-6">
          <p>Last name: {lastName}</p>
          <p>First name: {firstName}</p>
          <p>gender: {gender}</p>
          <p>height: {height}</p>
          <p>birth: {birth}</p>
        </div>
      </div>
    </Card>
  );
}

export default IdCard;
