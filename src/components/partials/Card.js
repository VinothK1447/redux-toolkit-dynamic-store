import React from 'react'

const Card = (props) => {
	const { type, data } = props
	let cardTitle
	let cardSubTitle
	let cardText
	switch (type) {
		case 'user':
			cardTitle = data.name
			cardSubTitle = data.company.name
			cardText = data.company.catchPhrase
			break
		case 'post':
			cardTitle = data.title
			cardSubTitle = ''
			cardText = data.body
			break
		case 'comment':
			cardTitle = data.name
			cardSubTitle = data.email
			cardText = data.body
			break
		default:
			break
	}
	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>{cardTitle}</h5>
				<h6 className='card-subtitle mb-2 text-muted'>{cardSubTitle}</h6>
				<p className='card-text'>{cardText}</p>
			</div>
		</div>
	)
}

export default Card
