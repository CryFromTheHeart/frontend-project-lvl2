install:
	npm ci
test-coverage: 
	NODE_OPTIONS=--experimental-vm-modules npm run test -- --coverage
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
lint: 
	npx eslint .
