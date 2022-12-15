###############################################################################
###                           Documentation                                 ###
###############################################################################

DOCS_OUTPUT?=/tmp/nibiru-docs
DOCS_DOMAIN=docs.nibiru.fi

# This builds a docs site for each branch/tag in `./docs/versions` and copies
# each site to a version prefixed path. The last entry inside the `versions`
# file will be the default root index.html. Only redirects that are built into
# the "redirects" folder of each of the branches will be copied out to the root
# of the build at the end.
build-docs:
	@cd docs && \
	yarn install --frozen-lockfile && \
	yarn build && \
	mkdir -p $(DOCS_OUTPUT) && \
	cp -r .vuepress/dist/* $(DOCS_OUTPUT)
	@echo $(DOCS_DOMAIN) > $(DOCS_OUTPUT)/CNAME
.PHONY: build-docs