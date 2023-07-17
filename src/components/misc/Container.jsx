export const Container = (props) => {
    let customStyles = ""
    if (props.styling)
        customStyles = props.styling
    return (
        <div className={`flex flex-col justify-center items-center ${customStyles}`}>
            {props.children}
        </div>
    )
}