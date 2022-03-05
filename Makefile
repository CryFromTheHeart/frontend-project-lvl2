install:
	npm ci
start: 
	node cli/gendiff.js --help
test:
	node cli/gendiff.js gen __fixtures__/file1.json __fixtures__/file2.json
lint: 
	npx eslint .
