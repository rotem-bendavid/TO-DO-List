export default class ItemClient {
    static async getTodos(){
        const response = await fetch('/get');
        let result = await response.json();
        return result;
    }

    static async addTodo(newTodoValue) {
        if (newTodoValue === '') {
            alert("You can't add an empty task");
        }
        else {
            const response = await fetch(`/`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({todoValue : newTodoValue})
            })
            let result = await response.json();
            return result;
        }
    }

    static async deleteTodo(todoIdToDelete) {
        const response = await fetch(`/`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({todoValue : todoIdToDelete})
        })
        return response.ok;
    }

    static async changeStatus(todoIdToChangeStatus) {
        const response = await fetch(`/`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({todoValue : todoIdToChangeStatus})
        })
        return response.ok;
    }

}
