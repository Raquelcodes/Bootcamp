# Flask TODO App in Docker with Gunicorn and Nginx

Goals
-----

- Create a new empty repository on our Gitlab
    - https://gitlab.propulsion-home.ch/
    - Clone it to your local machine
- Create a folder ``./app``
    - Copy your flask todo app into this folder
- Install gunicorn
    - http://gunicorn.org/
- Try to run the flask app with gunicorn first local on your system and then in the container.
    - http://flask.pocoo.org/docs/0.12/deploying/wsgi-standalone/#gunicorn

Your nginx config needs to be a bit special when you want to serve your flask app:

```
    # standard directive that allows for service discovery
    location /endpoint/ {
        resolver 127.0.0.11;  # docker embedded DNS server
        set $target http://app:9000;  # resolve during runtime rather than during startup
        proxy_pass $target;
    }
```

**Note**

- Change the ``set $target http://app:9000;`` section to whatever name your service is and on which port it runs inside the docker container.
- In this example it's ``app`` and port ``9000``

- Create a *Dockerfile* file to run your Docker image with ``docker-compose up`` in development mode
    - Use Python as a base image: https://hub.docker.com/r/library/python/
    - Copy your local directory ``./app`` into the container
    - Install ``flask`` and ``gunicorn`` with pip
- Create a *docker-compose.yml* file to run your docker image with ``docker-compose up`` in development mode
    - Start the gunicorn server inside the container
    - Make sure you provide the ``--reload`` flag to let the server reload whe the code changes
    - Make sure you define the inside IP address the server needs to run on like this: ``-b 0.0.0.0:8000``
    - Map the local directory ``./app`` into the container so that every change on your local system is visible right away in the browser
    - Map the port ``8000`` on the host to the container port ``8000``
- Create a *docker-compose.prod.yml* file to run in production mode with ``docker-compose -f 'docker-compose.prod.yml' up -d``
    - Don`t map any files into the container
    - Make sure you don't have any reload flag specified
- Upload your Docker image to Gitlab with ``docker-compose push``
    - Check your Gitlab project docker registry if your push was successful

Testing
-------

- Your todo app is visible on http://localhost:8000
- Every change to the ``app.py`` file is visible right away in the browser in development mode
- The website can be executed in production mode with ``docker-compose -f 'docker-compose.prod.yml' up -d``
- Your production website is visible on http://localhost:9000