WEBPACK_BIN = ./node_modules/.bin/webpack

watch:
	mkdir -p dist
	$(WEBPACK_BIN) --progress -wdc

build:
	mkdir -p dist
	$(WEBPACK_BIN)

test:
	echo 'no tests yet'
