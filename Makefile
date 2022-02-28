install:
	npm ci
start: 
	cli/gendiff --help
test:
	cli/gendiff gen file1.json file2.json
lint: 
	npx eslint .
