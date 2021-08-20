import React, { useState } from 'react';
import './RegisterAccount.scss';

const RegisterAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  const [fullNameOfCard, setFullNameOfCard] = useState('');

  const onSubmit = (e) => {
  }

  return (
    <div className="form-container">
      <form className="form-wrapper">
        <div className="address-container">
          <h3 className="register-address-title">
            Account Information
          </h3>
          <div className="address-fillout-wrap">
            <div className="input-wrap">
              <label htmlFor="first-name">First Name: </label>
              <input
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="input"
                type="text"
                id="first-name"
                maxLength={20}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="last-name">Last Name: </label>
              <input
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className="input"
                type="text"
                id="last-name"
                maxLength={20}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="street-address">Street Address: </label>
              <input
                value={streetAddress}
                onChange={e => setStreetAddress(e.target.value)}
                className="input"
                type="text"
                id="street-address"
                maxLength={40}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="address-details">Address Details: </label>
              <input
                value={addressDetail}
                onChange={e => setAddressDetail(e.target.value)}
                className="input"
                type="text"
                id="address-details"
                maxLength={60}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="city">City: </label>
              <input
                value={city}
                onChange={e => setCity(e.target.value)}
                className="input"
                type="text"
                id="city"
                maxLength={20}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="province-territory">
                Province / Territory:
              </label>
              <input
                value={province}
                onChange={e => setProvince(e.target.value)}
                className="input"
                type="text"
                address="province-territory"
                id="province-territory"
                maxLength={20}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="postal-code">Postal Code: </label>
              <input
                value={postalCode}
                onChange={e => setPostalCode(e.target.value)}
                className="input"
                type="text"
                id="postal-code"
                maxLength={16}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="phone">Phone: </label>
              <input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="input"
                type="text"
                id="phone"
                maxLength={20}
              />
            </div>
          </div>
        </div>
        <div className="payment-container">
          <h3 className="payment-option-title">Payment Option</h3>
          <div className="payment-option-wrap">
            <div className="payment-option">
              <input
                type="radio"
                id="credit-card"
                value="credit-card"
                checked={paymentOption === "credit-card"}
                onChange={e => setPaymentOption(e.target.value)}
              />
              <label htmlFor="credit-card"> Credit Card</label>
            </div>
            <div className="payment-option">
              <input
                type="radio"
                id="paypal"
                value="paypal"
                checked={paymentOption === "paypal"}
                onChange={e => setPaymentOption(e.target.value)}
              />
              <label htmlFor="paypal"> PayPal</label>
            </div>
          </div>
          {paymentOption === "credit-card" && (
            <div className="credit-fillout-wrap">
              <h3>Credit card information</h3>
              <div className="input-wrap">
                <label htmlFor="card-number">Credit Card Number: </label>
                <input
                  value={creditCardNumber}
                  onChange={e => setCreditCardNumber(e.target.value)}
                  className="input"
                  type="text"
                  id="card-number"
                />
              </div>
              <div className="input-wrap">
                <label htmlFor="expiration-date">Expiration Date: </label>
                <input
                  value={expirationDate}
                  onChange={e => setExpirationDate(e.target.value)}
                  className="input"
                  type="text"
                  id="expiration-date"
                  maxLength={16}
                />
              </div>
              <div className="input-wrap">
                <label htmlFor="cvv-number">CVV Number: </label>
                <input
                  value={cvvNumber}
                  onChange={e => setCvvNumber(e.target.value)}
                  className="input"
                  type="text"
                  id="cvv-number"
                  maxLength={5}
                />
              </div>
              <div className="input-wrap">
                <label htmlFor="full-name">Full Name: </label>
                <input
                  value={fullNameOfCard}
                  onChange={e => setFullNameOfCard(e.target.value)}
                  className="input"
                  type="text"
                  id="full-name"
                  maxLength={40}
                />
              </div>
            </div>
          )}
        </div>
        <input type="button" onClick={onSubmit} value="Save" />
      </form>
    </div>
  )
}

export default RegisterAccount
