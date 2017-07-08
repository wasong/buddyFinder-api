up:
	docker build -t wasong/buddy-finder-api .
	docker run -p 3001:3000 -d wasong/buddy-finder-api
