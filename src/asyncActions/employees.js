import { AddEmplArrayAction } from "../store/emplReducer"

export const fetchEmployeesList = () => {

    return function(dispatch){

        let url = 'https://jsonplaceholder.typicode.com/users'

        fetch(url)

            .then(res => res.json())

            .then(data => dispatch(AddEmplArrayAction(data)))

    }

}


