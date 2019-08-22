FROM continuumio/miniconda:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get install -y wget bzip2

RUN mkdir -p /app | \
    mkdir -p /scripts

COPY ./app/requirements.yml /app/requirements.yml
RUN /opt/conda/bin/conda env create -f /app/requirements.yml
ENV PATH /opt/conda/envs/app/bin:$PATH

COPY ./app /app

COPY ./scripts/* /scripts/
RUN chmod +x /scripts/*

WORKDIR /app
