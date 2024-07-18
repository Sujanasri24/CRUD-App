import { useState } from "react";  //react hook

import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";

const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;     //top, right, bottom, and left margins.When both the left and right margins are set to auto, the browser will distribute the available horizontal space equally to the left and right of the element, effectively centering it within its containing block.
& > div {                  //For the div elements below the Container tag, it takes this style. everything like the formcontrol, button etc is div element only. we can see this in inspect too.
    margin-top: 20px;
}
`
const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''

}

const AddUser = () => {

        const [user, setUser] = useState(initialValues);  //"user" stores initialValues object ( user is state variable). "setUser" is used to set the values in "user" object. (set user is state function)
        const onValueChange = (e) => {
            // console.log(e.target.name , e.target.value); 
            setUser({...user, [e.target.name]: e.target.value})  //here e.target.name is a key but it is a variable coz it can be name,email etc. Hence we keep it in square brackets.
                                                                //let user = { name: 'Alice', age: 25 };

                                                                    // Creating a new object instead of mutating the original
                                                                    // let updatedUser = { ...user, age: 26 };

                                                                    // console.log(user); // { name: 'Alice', age: 25 }
                                                                    // console.log(updatedUser); // { name: 'Alice', age: 26 }

        
        }

    return ( 
       
        <Container>
            <Typography variant='h4'> Add Users</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button variant='contained'>Add User</Button>
            </FormControl>
        </Container>
    );
}
 
export default AddUser;