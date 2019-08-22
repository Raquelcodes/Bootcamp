FROM continuumio/miniconda3:latest

COPY ./app/requirements.yml /app/requirements.yml

RUN conda env create -f /app/requirements.yml

ENV PATH /opt/conda/envs/app/bin:$PATH

RUN echo "source activate app" >~/.bashrc

COPY ./app /app

WORKDIR /app