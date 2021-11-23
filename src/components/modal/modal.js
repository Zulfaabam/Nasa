import React from "react"; 
import "./modal.css"; 
export default function index({ isShow, data, onCancel }) { 
    return ( 
        <div className={!isShow ? "hidden" : ""} data-cy="modal-delete"> 
            <div className="modal-bg" onClick={onCancel}>
            </div> 
            <div className="modal"> {data && <img src={data.i.imageUrl} alt="sesuatu" />}
            </div> 
        </div>
    ); 
}