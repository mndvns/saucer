TEST_FILES=$(shell find test -type f -name '*spec.js')

test: bin/vendor/Sauce-Connect.jar
	@NODE_ENV=test istanbul cover _mocha $(TEST_FILES)

node_modules:
	@npm install

bin/vendor/Sauce-Connect.jar: node_modules
	@saucer install

clean:
	@rm -rf bin/vendor node_modules

.PHONY: test clean watch
