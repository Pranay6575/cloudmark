import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum iusto laudantium esse vel debitis accusantium aut architecto sint nam quos. Obcaecati accusantium pariatur eum.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
