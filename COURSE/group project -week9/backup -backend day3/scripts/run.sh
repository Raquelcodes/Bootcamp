#!/bin/bash
rm -rf /frontend-build/*
cp -r /frontend/build/* /frontend-build


python manage.py migrate
python manage.py collectstatic --no-input

python manage.py runserver 0.0.0.0:8000
#exec /opt/conda/envs/backend/bin/gunicorn -w 4 -b 0.0.0.0:8000 app.wsgi:application