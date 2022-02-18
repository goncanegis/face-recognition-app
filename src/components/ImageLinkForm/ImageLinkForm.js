import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="flex flex-column items-center" id="formContainer">
      <p className="f3">
        {'This Magic Brain will detect faces in your pictures. Give it a try!'}
      </p>
      <form
        onSubmit={onButtonSubmit}
        className=" form flex justify-center items-center w-80 pa4 br2 shadow-4"
      >
        <input
          className="f4 pa2 w-70 center bn br2"
          type="text"
          onChange={onInputChange}
        />
        <button
          onClick={onButtonSubmit}
          className="w-30 pointer grow f4 link ph3 pv2 dib white bg-light-purple bn hover-bg-purple br2"
        >
          Detect
        </button>
      </form>
    </div>
  );
};

export default ImageLinkForm;
