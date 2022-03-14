install:
	npm ci
start: 
	node cli/gendiff.js --help
jest:
	NODE_OPTIONS=--experimental-vm-modules npx jest
lint: 
	npx eslint .
test: jest lint
