TEST_FILES=$(shell find test -type f -name '*spec.js')

test: bin/vendor/Sauce-Connect.jar
	@NODE_ENV=test istanbul cover _mocha $(TEST_FILES)

node_modules:
	@npm install

bin/vendor/Sauce-Connect.jar: node_modules
	@saucer install

watch:
	@NODE_ENV=test  \
		./node_modules/.bin/mocha  \
		--watch

clean:
	@rm -rf bin/vendor node_modules

.PHONY: test clean watch
