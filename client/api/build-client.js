import axios from 'axios';

export default ({ req }) => {
	if (typeof window === 'undefined') {
		// We are on the server

		return axios.create({
			baseURL:
				'https://ingress-nginx-controller-admission.kube-system.svc.cluster.local',
			headers: req.headers,
			timeout: 1000,
		});
	} else {
		// We must be on the browser
		return axios.create({
			baseUrl: '/',
		});
	}
};
