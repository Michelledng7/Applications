import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
	people: Props['people'];
	setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

// interface IPeople {
//   people: {
//   name: string;
//   url: string;
//   age: number;
//   notes?: string;
//   } []
// }

const AddList: React.FC<IProps> = ({ people, setPeople }) => {
	const [input, setInput] = useState({
		name: '',
		url: '',
		age: '',
		notes: '',
	});

	const handleChanges = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		if (!input.name || !input.url) {
			return;
		}

		setPeople([
			...people,
			{
				name: input.name,
				url: input.url,
				age: parseInt(input.age),
				notes: input.notes,
			},
		]);

		setInput({
			name: '',
			url: '',
			age: '',
			notes: '',
		});
	};

	return (
		<div className='AddToList'>
			<input
				className='AddToList-input'
				type='text'
				placeholder='Name'
				value={input.name}
				onChange={handleChanges}
				name='name'
			/>
			<input
				className='AddToList-input'
				type='text'
				placeholder='Image URL'
				value={input.url}
				onChange={handleChanges}
				name='url'
			/>
			<input
				className='AddToList-input'
				type='text'
				placeholder='Age'
				value={input.age}
				onChange={handleChanges}
				name='age'
			/>
			<textarea
				className='AddToList-input'
				placeholder='Notes'
				value={input.notes}
				onChange={handleChanges}
				name='notes'
			/>
			<button className='AddToList-btn' onClick={handleSubmit}>
				Add to list
			</button>
		</div>
	);
};

export default AddList;
