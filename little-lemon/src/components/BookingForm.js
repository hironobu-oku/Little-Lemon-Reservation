import React, { useState } from 'react'

const BookingForm = (props) => {
  
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [number, setNumber] = useState("");

  function nameCheckHandler() {
    var result = (name.length === 0);
    if (result) {
      window.alert('You name should input.');
    }
    return result;
  }

  function guestsCheckHandler() {
    var result = (guests === 0);
    if (result){
      window.alert('Guests number should input.');
    }
    return result;
  }

  function dateCheckHandler() {
    var result = (date === "");
    if (result) {
      window.alert('Booking date should input.');
    }
    return result;
  }

  function timesCheckHandler() {
    var result = (times === "");
    if (result) {
      window.alert('Booking times should input.');
    }
    return result;
  }

  function numberCheckHandler() {
    const regexp = /^\d{9,10}$/;
    var result = (number === "" || regexp.test(number) === false);
    if (result) {
      window.alert("Phone number should input. Validate a phone number of 9-10 digits only.");
    }
    return result;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(nameCheckHandler()){return;}
    if(guestsCheckHandler()) {return;}
    if(dateCheckHandler()) {return;}
    if(timesCheckHandler()) {return;}
    if(numberCheckHandler()) {return;}

    if(window.confirm("Would you like to reserve a table?")){
      window.alert('Your reservation has been done.');

      setName("");
      setGuests("");
      setDate("");
      setTimes("");
      setNumber("");

      setTimeout(() => {
        window.location.href = "/";
      }, 500);

    }else{
      window.alert('Canceled.');
    }
  }

  const availableTimes = ["17:00" 
                         ,"17:30" 
                         ,"18:00"
                         ,"18:30"
                         ,"19:00"
                         ,"19:30"
                         ,"20:00"
                         ,"20:30"
                         ,"21:00"
                         ,"21:30"
                         ,"22:00"]

  const availableGuests = [1,2,3,4,5,6,7,8,9]

  return (
    <section className='booking-form'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="your-name">Your Name</label>
            <input 
              name="your-name"
              id="your-name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required>
            </input>
          </div>

          <div>
            <label htmlFor="guests">How many people?</label>
            <select 
              name="guests"
              id="guests"
              value={guests}
              min={1}
              placeholder="1"
              onChange={e => setGuests(e.target.value)}
              required>
              <option></option>
              {
                availableGuests.map(
                  availableGuests => {return <option key={availableGuests}>{availableGuests}</option>})
              }
            </select>
          </div>

          <div>
            <label htmlFor="book-date">Book Date</label>
            <input 
              name="book-date"
              id="book-date"
              type="date" 
              value={date} 
              onChange={e => setDate(e.target.value)}
              required/>
          </div>

          <div>
            <label htmlFor="book-times">Book Time</label>
            <select 
              name="book-times" 
              id="book-times" 
              value={times} 
              onChange={e => setTimes(e.target.value)} 
              required>
              <option></option>
              {
                availableTimes.map(
                  availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
              }
            </select>
          </div>

          <div>
            <label htmlFor="number">Phone Number</label>
            <input 
              name="number"
              id="number"
              type="text"
              value={number}
              onChange={e => setNumber(e.target.value)}
              required>
            </input>
          </div>

          <div className='reservation-button'>
            <button>Make Your Reservation</button>
          </div>

        </fieldset>
      </form>
    </section>
  )
}

export default BookingForm
