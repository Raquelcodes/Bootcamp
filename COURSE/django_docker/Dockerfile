FROM continuumio/miniconda3:latest

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
    wget \
    bzip2 \
    graphviz \
    libssl-dev \
    openssh-server

RUN mkdir /var/run/sshd
RUN echo 'root:screencast' | chpasswd
RUN sed -i '/PermitRootLogin/c\PermitRootLogin yes' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile


# Copy the folder from host to container
COPY ./app/requirements.yml /app/requirements.yml

# create the environment inside the docker container
RUN /opt/conda/bin/conda env create -f /app/requirements.yml

# we set the path were all the python pacakages are
ENV PATH /opt/conda/envs/app/bin:$PATH

# activate app
RUN echo "source activate app" >~/.bashrc

# pass all the stuff
COPY ./app /app

COPY /app/scripts/* /scripts/
RUN chmod +x /app/scripts/*



# the directory where you log in
WORKDIR /app
