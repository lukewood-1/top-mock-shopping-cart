#!/bin/bash

mkComponents() {
	for arg in "$@"; do
		echo "Creating folder $arg"
		mkdir "$arg";
		echo "Creating file $arg.jsx"
		touch "$arg/$arg.jsx"
		echo "Creating file $arg.module.css"
		touch "$arg/$arg.module.css"
	done
}

mkComponents $@
