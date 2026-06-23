const Alert=(props)=>{

const capitalizeFirstLetter = (text) => {
return text.charAt(0).toUpperCase() + text.slice(1); }

return (
props.alert &&  <div className="container" style={{width: "25rem"}}>
 <div className={`alert alert-${props.alert.type} 
alert-dismissible fade show text-center my-3`} role="alert">
<strong>{capitalizeFirstLetter(props.alert.type)} </strong> {props.alert.msg} </div>   
</div>

) }

export default Alert;