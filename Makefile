install:
	npm ci
start: 
	node cli/gendiff.js --help
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
lint: 
	npx eslint .
testCoverage:
  NODE_OPTIONS=--experimental-vm-modules npm test --coverage
