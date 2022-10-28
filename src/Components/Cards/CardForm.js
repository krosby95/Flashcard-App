import React from "react";

function CardForm({ handleSubmit, deck, card, handleChange, handleDone }) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{deck.name}</h2>
      <div className="form-group">
        <label>Front</label>
        <textarea
          id="front"
          name="front"
          className="form-control"
          onChange={handleChange}
          type="text"
          value={card.front}
        />
      </div>
      <div className="form-group">
        <label>Back</label>
        <textarea
          id="back"
          name="back"
          className="form-control"
          onChange={handleChange}
          type="text"
          value={card.back}
        />
      </div>
      <button className="btn btn-secondary mx-1" onClick={() => handleDone()}>
        Done
      </button>
      <button className="btn btn-primary mx-1" type="submit">
        Save
      </button>
    </form>
  );
}

export default CardForm;
