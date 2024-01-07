
function Popup ({content, closeAction}) {

  return (
    <div className="popup-container">
      <div className="popup">
        <p>{content}</p>
        <button 
        className='popup-confirm-button'
        onClick={closeAction}
        >Ok</button>
      </div>
    </div>
  )
}

export default Popup