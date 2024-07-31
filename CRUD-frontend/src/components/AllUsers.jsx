import { useEffect, useState } from "react";

import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";

import { getUsers, deleteUser } from "../service/api";

import { Link } from "react-router-dom";

const StyledTable = styled(Table)
`
width: 90%;
margin: 50px auto 0 auto;
`

const AllUsers = () => {

    const [users, setUsers] = useState([]); //array of objects

    useEffect(() => {
        getUserDetails();
    }, [])  //2 params one is function other is dependencies.

    const getUserDetails = async () => {
        let response = await getUsers();
        console.log(response); 
        setUsers(response?.data);  //u can see in console that inside the response object, there is fiels called data where the array of objects are stored.

    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getUserDetails(); //if we donot write this, then the deleted user will be deleted from the database but it will still be present in the AllUsers page.
    }

    const Thead = styled(TableRow)
    `
    background: #000;
    & > th{
    color: #fff;
    font-size: 20px
    }
    `

    const Tbody = styled(TableRow)
    `
    & > td{
    font-size: 20px
    }
    `

    return (  
        <StyledTable>
            <TableHead>
            <Thead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </Thead>
            </TableHead>
            <TableBody>
                {
                    users?.map((user) => (
                        <Tbody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </Tbody>
                    ))
                }
            </TableBody>
        </StyledTable>
    );
}
 
export default AllUsers;