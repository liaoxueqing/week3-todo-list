#!/bin/bash

docker build --rm . --tag xueqingliao/todo-list:${VER:?invalid version}

docker push xueqingliao/todo-list:${VER:?invalid version}

