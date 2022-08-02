import { gql } from "@apollo/client";
import DeleteProjectButton from "../components/DeleteProjectButton";


const ADD_PROJECT = gql`
mutation AddProject($name: String!, $description: String!, $status: ProjectStatus!, $clientId: ID!)
{
    addProject(name: $name, description: $description, status: $status, clientId: $clientId)
    {
        id
        name
        description
        status
        client {
            id
            name
            email
            phone
        }
    }
}
`
const DELETE_PROJECT = gql`
mutation DeleteProjectButton($id: ID!){
    deleteProject(id: $id)
    {
        id
        name
        description
        status
    }
}
`

const UPDATE_PROJECT = gql`
mutation UpdateProject($id: ID!,$name: String!, $description: String!, $status: ProjectStatusUpdate!)
{
    updateProject(id: $id,name: $name, description: $description, status: $status)
    {
        id
        name
        description
        status
        client {
            id
            name
            email
            phone
        }
    }
}
`


export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT }