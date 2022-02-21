install:
	npm ci
start: 
	node cli/gendiff.js --help
test:
	node cli/gendiff.js gen file1.json file2.json

