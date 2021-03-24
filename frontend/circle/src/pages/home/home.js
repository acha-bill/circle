import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowLeft,
	faArrowRight,
	faCheckCircle,
	faCircle,
	faForward,
	faPaperPlane,
	faSpinner,
	faThumbsDown,
	faThumbsUp,
	faTicketAlt,
	faTimesCircle,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import './home.css';

// importing bootstrap itmes
import { Container, Row, Col, Card, Image, Table, Badge } from 'react-bootstrap';

function HomePage() {
	useEffect(() => {});
	let [isSearchingUsername, setIsSearchingUsername] = useState(false);
	let [error, setError] = useState('');
	let [username, setUsername] = useState('');

	const handleUsernameInput = (e) => {
		const username = e.target.value.trim();
		if (username.indexOf(' ') >= 0) {
			setError('spaces in username is not allowed');
			return;
		} else {
			setError('');
		}

		// TODO: check username
		setUsername(username);
	};

	return (
		<Container>
			<Row className="nameBar">
				<Col>
					<Card className="text-center">
						<Card.Body>
							<Row>
								<Col md={2}>Armand: </Col>
								<Col className="text-left" md={8}>
									{' '}
									Names of boys starting with B
								</Col>
								<Col md={2}>Action timer: 5s</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col md={2}>
					<Card className="text-center fullHeight cardT">
						<Card.Header className="card-headerT">In Channel</Card.Header>
						<Card.Body>
							<Row className="usersProfile">
								<Image
									className="profileImge"
									src={process.env.PUBLIC_URL + '/profile.png'}
									width="50"
									height="50"
									roundedCircle
								/>
								<p className="userName">
									Mark <br />
									<sub>This is mark</sub>
								</p>
							</Row>
							<Row className="usersProfile">
								<Image
									className="profileImge"
									src={process.env.PUBLIC_URL + '/profile.png'}
									width="50"
									height="50"
									roundedCircle
								/>
								<p className="userName">
									Otto <br />
									<sub>This is mark</sub>
								</p>
							</Row>
							<Row className="usersProfile">
								<Image
									className="profileImge"
									src={process.env.PUBLIC_URL + '/profile.png'}
									width="50"
									height="50"
									roundedCircle
								/>
								<p className="userName">
									Jacob <br />
									<sub>This is mark</sub>
								</p>
							</Row>
							<Row className="usersProfile">
								<Image
									className="profileImge"
									src={process.env.PUBLIC_URL + '/profile.png'}
									width="50"
									height="50"
									roundedCircle
								/>
								<p className="userName">
									Thornton <Badge variant="secondary">New</Badge> <br />
									<sub>This is mark</sub>
								</p>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				<Col md={8}>
					<Card className="text-center cardT">
						<Card.Header className="card-headerT">
							<div className="d-flex justify-content-between align-items-center play-area-head">
								<span>Thomas</span> <FontAwesomeIcon icon={faArrowLeft} /> <span>Richard</span>{' '}
								<FontAwesomeIcon icon={faArrowRight} /> <span>Ivan</span>
							</div>{' '}
						</Card.Header>
						<Card.Body>
							<div className="play-area-view d-flex justify-content-center flex-column mb-3">
								<span className="answer mb-2 mt-4">Bobdinga</span>
								<span className="approval mb-2">30% approved</span>
							</div>
							<div>
								{' '}
								<hr className="mt-2 mb-3" />
							</div>
							<div className="play-area-vote d-flex justify-content-center flex-column">
								<div>Votes</div>
								<Table striped bordered hover size="sm">
									<thead>
										<tr>
											<th>
												Correct <FontAwesomeIcon className="ml-2" icon={faThumbsUp} />{' '}
											</th>
											<th>
												Wrong <FontAwesomeIcon className="ml-2" icon={faThumbsDown} />{' '}
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Mark</td>
											<td>Otto</td>
										</tr>
										<tr>
											<td>Jacob</td>
											<td>Thornton</td>
										</tr>
									</tbody>
								</Table>
								<div className="d-flex justify-content-center flex-column mb-3">
									<span className="mb-2"> Vote now: 5s left!</span>
									<div>
										<button className="btn btn-sm btn-success">
											Correct <FontAwesomeIcon className="ml-2" icon={faThumbsUp} />
										</button>
										<button className="btn btn-sm btn-danger ml-2">
											Wrong
											<FontAwesomeIcon className="ml-2" icon={faThumbsDown} />
										</button>
									</div>
								</div>
							</div>
							<div className="play-area-input input-group">
								<input className="form-control" />{' '}
								<button className="ml-3 btn btn-info">
									Send <FontAwesomeIcon className="ml-2" icon={faPaperPlane} />
								</button>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={2}>
					<Card className="text-center fullHeight cardT">
						<Card.Header className="card-headerT">Chat</Card.Header>
						<Card.Body className="chatBody">
							<Row>
								<Col md={3} style={{ padding: '0px' }}>
									<Image
										className="profileImge"
										src={process.env.PUBLIC_URL + '/profile.png'}
										width="25"
										height="25"
										roundedCircle
									/>
								</Col>
								<Col md={9} style={{ padding: '0px' }}>
									<p className="chatTextMe text-left">Mark was the one writing this</p>
								</Col>
							</Row>
							<Row style={{ paddingTop: '10px' }}>
								<Col md={9} style={{ padding: '0px' }}>
									<p className="chatTextMe text-left">Mark was the one writing this</p>
								</Col>
								<Col md={2} style={{ padding: '0px' }}>
									<Image
										className="profileImage"
										src={process.env.PUBLIC_URL + '/profile.png'}
										width="25"
										height="25"
										roundedCircle
									/>
								</Col>
							</Row>
						</Card.Body>
						<Card.Footer className="text-muted">
							<div className="play-area-input input-group">
								<input className="form-control" />{' '}
								<button className="ml-1 btn btn-info">
									<FontAwesomeIcon className="ml-1" icon={faPaperPlane} />
								</button>
							</div>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default HomePage;
