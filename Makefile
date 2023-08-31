init:
	git config core.hooksPath .githooks
	chmod +x .githooks/commit-msg
	git add --chmod=+x .githooks/commit-msg