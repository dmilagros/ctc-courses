import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

import './card.scss';

/*
'name': 'Mini Creador',
'age_range': '5_to_7',
'amount_usd': '129.00',
'amount_pen': '450.00',
'slug': 'curso-de-videojuegos-basico',

'has_discount': false,
'discount_percentage': '15.00',
'amount_after_discount_usd': '109.00',
'amount_after_discount_pen': '382.00',
'thumbnail': 'https://ctc-web-statics.s3.amazonaws.com/multimedia/images/courses/d03ca7d900fc431fa57998fecd6ce7f5.webp',
'next_start_date': '2021-09-17',
'duration': '2.00'
*/

function renderSwitch(param) {
  switch (param) {
    case '8_plus':
      return '8+ años';
    case '9_plus':
      return '9+ años';
    case '5_to_7':
      return '5 a 7 años';
    case '12_plus':
      return '12+ años';
    default:
      return 'cualquier edad';
  }
}

const Card = ({ data, currency }) => (
  <div className="card-container">
    <div className="card-box">
      <div className="card-image">
        <img
          src="https://www.art-madrid.com/image/cPsf44XRNuGPskHnm/0/luz-imagen-sonido-festival-mira-son.jpg"
          alt=""
        />
        {parseInt(data?.discount_percentage, 10) !== 0 && (
        <div className="discount">
          {parseInt(data?.discount_percentage, 10)}
          % OFF
        </div>
        )}
      </div>
      <div className="card-content">
        <h3>{data.name}</h3>
        {currency === 'USD' && (
        <div className="discount-content">
          {parseInt(data?.amount_after_discount_usd, 10) !== 0 && (
          <h5 className="discount-price">
            {`Antes: $ ${data.amount_usd}`}
          </h5>
          )}
          <h4 className="price">
            {`Ahora: $ ${parseInt(data.amount_after_discount_usd, 10) !== 0 ? data.amount_after_discount_usd : data.amount_usd}`}
          </h4>
        </div>
        )}
        {currency === 'PEN' && (
        <div className="discount-content">
          {parseInt(data?.amount_after_discount_pen, 10) !== 0 && (
          <h5 className="discount-price">
            {`Antes: s/ ${data.amount_pen}`}
          </h5>
          )}
          <h4 className="price">
            {`Ahora: s/ ${parseInt(data.amount_after_discount_pen, 10) !== 0 ? data.amount_after_discount_pen : data.amount_pen}`}
          </h4>
        </div>
        )}
        <p className="price">{`Edad: ${renderSwitch(data.age_range)}`}</p>
        {data.next_start_date && (
        <>
          <p>

            {`Inicio: ${moment(data.next_start_date).format('D [de] MMMM')}`}
          </p>
        </>
        )}
      </div>
    </div>
  </div>
);

export default Card;
