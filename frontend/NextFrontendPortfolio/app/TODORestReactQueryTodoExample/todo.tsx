import { TodoDto } from './types';

export interface TodoProps {
	handleDeleteTodo: (data: TodoDto) => void;
	handleIscompleteTodo: (data: TodoDto) => void;
	handleUpdateTodo: (data: TodoDto) => void;
	todo: TodoDto;
}

const Todo = ({ handleDeleteTodo, handleIscompleteTodo, handleUpdateTodo, todo }: TodoProps) => {
	const [visility, setVisibility] = useState<boolean>(false);
	const mouseEnter = () => {
		setVisibility(true);
	};
	const mouseLeave = () => {
		setVisibility(false);
	};
	const onDeleteTodo = () => {
		handleDeleteTodo(todo);
	};
	const onIsCompleteTodo = () => {
		handleIscompleteTodo(todo);
	};
	const onUpdateTodo = () => {
		handleUpdateTodo(todo);
	};

	return (
		<div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="relative w-full">
			<div className="flex items-center justify-start w-full px-6 py-6 rounded-full shadow-md bg-gray-50">
				<p
					onClick={onIsCompleteTodo}
					className={`text-gray-500 tracking-wide  ${+todo.isComplete ? 'line-through' : ''}`}
				>
					{todo.content}
				</p>
			</div>
			<div className={`transition-opacity ${visility ? 'opacity-100' : 'opacity-0'}`}>
				{+todo.isComplete ? null : (
					<button
						onClick={onUpdateTodo}
						className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 p-0 text-white bg-indigo-500 rounded-full hover:bg-indigo-400 focus:outline-none"
					>
						<UpdateIcon />
					</button>
				)}
				<button
					onClick={onDeleteTodo}
					className="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 p-0 text-white bg-red-500 rounded-full hover:bg-red-400 focus:outline-none"
				>
					<DeleteIcon />
				</button>
			</div>
		</div>
	);
};

export { Todo };
