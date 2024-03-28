import json
from fastapi import APIRouter, Response, status
from ..models.todos import ToDo
from ..config.database import todo_collection
from ..schema.schemas import list_serial
from ..utils.utils import validate_model, InvalidPriorityException, InvalidToDoNameException
from bson import ObjectId

router = APIRouter()

#GET ALL ToDoS

@router.get("/")
async def get_todos(response: Response):

    try:
        todos = list_serial(todo_collection.find())
        response.status_code = status.HTTP_200_OK
        return todos
    except Exception:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return "Couldn't get the todos list"



#GET ALL ToDoS SORTED BY PRIORITY

@router.get("/sort/{order}")
async def get_sorted_todos(order: bool, response: Response):
    try:
        todos = list_serial(todo_collection.find().sort("priority", 1 if order else -1))
        response.status_code = status.HTTP_200_OK
        return todos
    except Exception:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return "Couldn't sort the todos list"

#GET ALL ToDoS FILTERED BY COMPLETENESS

@router.get("/filter/{completeness}")
async def get_filtered_todos(completeness: bool, response: Response):
    try:
        todos = list(filter(lambda x: x["isDone"] == completeness, list_serial(todo_collection.find())))
        response.status_code = status.HTTP_200_OK
        return todos
    except Exception:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return "Couldn't filter the todos list"

#GET ALL ToDoS WHICH CORRESPOND TO THE SEARCH QUERY

@router.get("/search/{search_query}")
async def get_searched_todos(search_query: str, response: Response):
    try:
        todos = list(filter(lambda x: search_query.lower().replace(" ", "") in x["name"].lower().replace(" ", ""), list_serial(todo_collection.find())))
        response.status_code = status.HTTP_200_OK
        return todos
    except Exception:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return "Couldn't find the searched todos"

#POST A NEW ToDo

@router.post("/")
async def post_todo(todo: ToDo, response: Response) :
    try:
        await validate_model(todo)
        todo_collection.insert_one(dict(todo))
        response.status_code = status.HTTP_201_CREATED
        return "Successfully created new todo item!"
    except InvalidPriorityException as e:
        response.status_code = status.HTTP_403_FORBIDDEN
        return f"Couldn't create new todo item: {str(e)}"
    except InvalidToDoNameException as e:
        response.status_code = status.HTTP_403_FORBIDDEN
        return f"Couldn't create new todo item: {str(e)}"
    except Exception as e:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return "Couldn't create new todo item, try again later."


#PUT NEW INFO INTO AN EXISTING ToDo
    
@router.put("/{id}")
async def edit_todo(id: str, todo: ToDo, response: Response):
    try:
        await validate_model(todo)
        todo_collection.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(todo)})
        response.status_code = status.HTTP_200_OK
        return "Successfully updated the todo item!"
    except InvalidPriorityException as e:
        response.status_code = status.HTTP_403_FORBIDDEN
        return f"Couldn't update the todo item: {str(e)}"
    except InvalidToDoNameException as e:
        response.status_code = status.HTTP_403_FORBIDDEN
        return f"Couldn't update the todo item: {str(e)}"
    except Exception as e:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return "Couldn't update the todo item, try again later."

#PUT NEW COMPLETENESS INTO THE ToDo
    
@router.put("/switch-completeness/{id}")
async def switch_completeness(id: str, response: Response):
    try: 
        todo_collection.find_one_and_update({"_id": ObjectId(id)}, [{"$set": {"isDone": {"$not": "$isDone"}}}])
        response.status_code = status.HTTP_200_OK
        return "Successfully updated completeness status for the todo item!"
    except Exception as e:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return "Couldn't update the todo item, try again later."

#DELETE AN EXISTING ToDo
    
@router.delete("/{id}")
async def delete_todo(id: str, response: Response):
    try:
        todo_collection.find_one_and_delete({"_id": ObjectId(id)})
        response.status_code = status.HTTP_200_OK
        return "Successfully deleted the todo item!"
    except Exception as e:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return "Couldn't delete the todo item, try again later."
