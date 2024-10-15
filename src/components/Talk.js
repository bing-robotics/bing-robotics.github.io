import React from 'react';

function Talk({ id, time, cohost, speaker, title, abstract, abstract1, papers, bio, notes }) {
  return (
    <div className="talk-container" id={id}> {/* Adds the container for layout and separation */}
      <div className="talk-details">
        <div className="talk-time">
          <p>{time} | </p> {/* Keeps the time next to the divider as per the original */}
          {cohost && (
            <p><strong> Co-Hosted with </strong>{cohost}</p>
          )}
        </div>
        <div className="talk-abstract">
          <h3>{speaker}</h3> {/* Speaker name at the top as in the original */}
          <p><strong>Title:</strong> <span className="normal-text">{title}</span></p>
          <p><strong>Abstract:</strong> {abstract}</p>
          <p>{abstract1}</p>
          {papers && (
            <p><strong>Relevant Papers:</strong>
              <ul><li>{papers}</li></ul>
            </p>
          )}
          {bio && <p><strong>About the Speaker :</strong> {bio}</p>} {/* Conditional rendering of the bio */}
          {notes && (
            <p><em>**{notes}</em>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Talk;