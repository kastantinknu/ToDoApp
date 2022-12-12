//const baseUrl = `${process.env.REACT_APP_API_URL}/mytodos`;
const baseUrl = `https://localhost:7051/mytodos`;

export const loadTodos = () => {
    return fetch(baseUrl).then(res => res.json());
};

export const getTodo = (id) => {
    return fetch(`${baseUrl}/${id}`).then(res => res.json());
};

export const createTodo = (todo) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: todo.title,
            completed: false        
            // completed: todo.completed
        }),
    }).then(res => res.json());
};
export const updateTodo = (todo) => {
    return fetch(`https://localhost:7051/mytodos/3`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 3,
            title: `ex111`,
            completed: true
        }),
    }).then(() => {
        console.log('updated');
     }).catch(err => {
       console.error(err)
     });
};
// export const updateTodo = (todo) => {
//     return fetch(`${baseUrl}/${todo.id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             id: todo.id,
//             title: todo.title,
//             // completed: true    
//             completed: todo.completed
//         }),
//     }).then(res => res.json());
// };

// export const deleteTodo = (id) => {
//     return fetch(`${baseUrl}/${id}`, {
//         method: "DELETE",
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
//            },     
//     }).then(res => res.json())
//     .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
//     .catch(err => console.log(err)) ;
// };

export const deleteTodo = (id) => {
    return fetch(`${baseUrl}/${id}`, {
      method: 'DELETE'
    }).then(() => {
       console.log('removed');
    }).catch(err => {
      console.error(err)
    });
};