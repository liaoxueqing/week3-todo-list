#!/bin/bash
npm run build

docker build --rm . --tag xueqingliao/todo-list:${VER:?invalid version} --no-cache

docker push xueqingliao/todo-list:${VER:?invalid version}
