

 function Button({children, onClick, loading,
     variant='primary', disabled = false}) {
    return(
        <button className={`btn btn-${danger}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
export default Button;