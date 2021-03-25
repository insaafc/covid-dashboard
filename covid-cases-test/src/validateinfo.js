export default function validateInfo(values){

    let errors= {}

    if(!values.name.trim()){
        errors.name ="Name required";
    } else if (values.name.length < 2){
        errors.name= "Name should not be less than 2 characters"
    }

    //Email validation
    if(!values.email){
        errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email address is invalid"
    }

    if(!values.message){
        errors.message = "Message is reuqired";
    } else if (values.message.length < 25) {
        errors.message = "Message needs to be atleast 25 characters";
    }
    return errors;
}

