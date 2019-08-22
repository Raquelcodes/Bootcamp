#!/usr/bin/env bash

python manage.py migrate
#python manage.py collectstatic --noinput
python manage.py runserver 0.0.0.0:8000

#/opt/conda/envs/app/bin/gunicorn -w 4 -b 0.0.0.0:8000 app.wsgi:application
