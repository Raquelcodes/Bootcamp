FROM continuumio/miniconda3:latest

# Copy the folder from host to container
COPY ./app/requirements.yml /app/requirements.yml

# create the environment inside the docker container
RUN conda env create -f /app/requirements.yml

# we set the path were all the python pacakages are
ENV PATH /opt/conda/envs/app/bin:$PATH

# activate app
RUN echo "source activate app" >~/.bashrc

# pass all the stuff
COPY ./app /app

COPY ./scripts/* /scripts/
RUN chmod +x /scripts/*

# the directory where you log in
WORKDIR /app